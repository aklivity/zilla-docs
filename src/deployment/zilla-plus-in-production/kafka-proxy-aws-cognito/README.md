---
shortTitle: Dynamic Topic Aliases
description: Deploy per-client Kafka topic routing with AWS Cognito on AWS ECS Fargate.
---

# Dynamic Topic Aliases with AWS Cognito on AWS ECS Fargate

[Available in Zilla Plus](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

## Overview

Platforms with many different external Kafka clients, whether internal teams, partners, or end customers, often need each to address the same external topic name, while keeping each client's data in its own dedicated internal topic. The [`kafka-proxy`](/reference/config/bindings/kafka-proxy/README.md) binding does this with no per-client configuration in `zilla.yaml`: external clients authenticate over `SASL_SSL`/`OAUTHBEARER` with a JWT from an [`aws-cognito`](/reference/config/guards/aws-cognito.md) guard, and a `topics[].alias` template rewrites the internal topic name using the identity established during that handshake.

This guide deploys that pattern as a Zilla Plus service on AWS ECS Fargate.

## Prerequisites

- An Amazon ECS cluster
- An Amazon ECR repository or another container repository
- A subscription to the Zilla Plus [product on Amazon Marketplace](https://aws.amazon.com/marketplace/pp/prodview-lqfqftufwpttm)
- An AWS Cognito user pool with a resource server (defining a custom scope) and one `client_credentials` app client per external client. See [Provision an AWS Cognito User Pool](/resources/aws/provision-aws-cognito-user-pool.md)
- A OAuthBearer enabled Kafka cluster reachable from the ECS task, with `auto.create.topics.enable` disabled in production so each client's dedicated topic is provisioned deliberately, the same way each client's Cognito app client is
- A TLS certificate for the external listener, stored in [AWS Secrets Manager](/reference/config/vaults/aws-secrets.md), read via the `aws-secrets` vault

## Subscribe via AWS Marketplace

- From the active Zilla Plus [subscription page](https://aws.amazon.com/marketplace/server/procurement?productId=prod-amntslj4ggryw)
  - Click `Continue to Configuration`
    - Fulfillment option: `Zilla Plus`
    - Software version: `Select the most recently released version`
  - Click `Continue to Launch`
  - Copy and run the `aws` login command from the Container images section to confirm access to the Zilla Plus image.

    :::: note
    Note the image name `709825985650.dkr.ecr.us-east-1.amazonaws.com/aklivity/zilla-plus-ecr:<version>` and one of the version tags stored in the `CONTAINER_IMAGES` variable, which will be used later.
    ::::

## Zilla Configuration

Point `internal` at your Kafka cluster's per-broker hostname pattern, not a single bootstrap connection string (`#` stands in for the broker number, matching the per-broker names returned in Metadata responses), and configure an [`aws-secrets`](/reference/config/vaults/aws-secrets.md) vault referencing your real certificate's secret ARN.

```yaml {3-9,25-38}
---
name: kafka-proxy-aws-cognito
guards:
  cognito0:
    type: aws-cognito
    options:
      pool: ${{env.COGNITO_USER_POOL_ARN}}
      # "*" accepts any client's app client, since every client is provisioned
      # dynamically in Cognito and isn't known ahead of time.
      client-id: "*"
vaults:
  external:
    type: aws-secrets
    options:
      aliases:
        external.net: <your-certificate-secret-arn>
bindings:
  tcp_server:
    type: tcp
    kind: server
    options:
      host: 0.0.0.0
      port:
        - 9094
    routes:
      - when:
          - port: 9094
        exit: tls_server
  tls_server:
    type: tls
    kind: server
    vault: external
    options:
      keys:
        - external.net
    exit: kafka_cluster
  kafka_cluster:
    type: kafka-proxy
    kind: proxy
    options:
      topics:
        - name: messages
          alias: "messages-${guarded['cognito0'].identity}"
      external:
        authorization:
          cognito0:
            mechanism: oauthbearer
        host: kafka-#.external.net
        default: kafka.external.net
        port: 9094
      internal:
        host: b-#.<your-kafka-cluster-endpoint>
        default: <your-kafka-cluster-default-endpoint>
        port: <your-kafka-cluster-port>
        authorization:
          credentials:
            mechanism: oauthbearer
            credentials: "Bearer ${guarded['cognito0'].credentials}"
    routes:
      - when:
          - topic: messages
            api:
              - produce
              - fetch
              - metadata
              - find_coordinator
              - list_offsets
              - offset_commit
              - offset_fetch
              - join_group
              - heartbeat
              - leave_group
              - sync_group
              - init_producer_id
              - add_partitions_to_transaction
              - add_offsets_to_transaction
              - end_transaction
              - write_transaction_markers
              - transaction_offset_commit
              - sasl_handshake
              - sasl_authenticate
              - api_versions
        exit: tls_client
    exit: tls_client
  tls_client:
    type: tls
    kind: client
    vault: internal
    options:
      trustcacerts: true
    exit: tcp_client
  tcp_client:
    type: tcp
    kind: client
```

## Create SSM Parameter for Zilla Config

- [Parameter Store console](https://console.aws.amazon.com/systems-manager/parameters)
- `Create parameter`
- Name: `/zilla/kafka-proxy-aws-cognito/zilla.yaml`, Type: `String`, Data type: `text`
- Value: the `zilla.yaml` from the previous section, with your real values filled in

## Create Required IAM Roles

These IAM roles allow the ECS task to run Zilla Plus and access required AWS resources.

### Inline Policy for SSM Parameters and Secrets

::: tabs

@tab Name

```text:no-line-numbers
SSMGetParameters
```

@tab JSON Summary

```json:no-line-numbers
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ssm:GetParameters"
      ],
      "Resource": [
        "arn:aws:ssm:<region>:<aws_account_id>:parameter/zilla/kafka-proxy-aws-cognito/zilla.yaml"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "secretsmanager:GetSecretValue",
        "secretsmanager:DescribeSecret"
      ],
      "Resource": [
        "<your-certificate-secret-arn>",
        "<your-kafka-cluster-credentials-secret-arn>"
      ]
    }
  ]
}
```

:::

### ECS Task Role

Create an IAM role for the Task. This role is used by the running Zilla Plus container.

::: tabs

@tab Name

```text
ecsTaskRole
```

@tab Policies

```text
AWSMarketplaceMeteringFullAccess
AWSMarketplaceMeteringRegisterUsage
```

:::

### ECS Task Execution Role

If you used Amazon ECR as your image repository, create a role with the `AmazonECSTaskExecutionRolePolicy` permission and use it as the `Task execution role` when creating the Task.

::: tabs

@tab Name

```text
ecsTaskExecutionRole
```

@tab Policies

```text
AmazonECSTaskExecutionRolePolicy
SSMGetParameters
```

:::

## Task Definition

Set `COGNITO_USER_POOL_ARN` (read by the `${{env.COGNITO_USER_POOL_ARN}}` resolver in `zilla.yaml`), and expose port `9094` for the external SASL/OAUTHBEARER listener:

```json {8-15,17-26}
{
  "family": "zilla-plus-kafka-proxy-aws-cognito",
  "networkMode": "awsvpc",
  "containerDefinitions": [
    {
      "name": "zp-service",
      "image": "709825985650.dkr.ecr.us-east-1.amazonaws.com/aklivity/zilla-plus-ecr:<version>",
      "portMappings": [
        {
          "name": "kafka",
          "containerPort": 9094,
          "hostPort": 9094,
          "protocol": "tcp"
        }
      ],
      "essential": true,
      "environment": [
        {
          "name": "COGNITO_USER_POOL_ARN",
          "value": "<your-cognito-user-pool-arn>"
        }
      ],
      "secrets": [
        {
          "name": "ZILLA_YAML",
          "valueFrom": "arn:aws:ssm:<region>:<aws_account_id>:parameter/zilla/kafka-proxy-aws-cognito/zilla.yaml"
        }
      ],
      "entryPoint": [
        "/bin/bash",
        "-c",
        "echo \"$ZILLA_YAML\" > /tmp/zilla.yaml && /opt/zilla/zilla start -v -e -c /tmp/zilla.yaml"
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/kafka-proxy-aws-cognito",
          "mode": "non-blocking",
          "awslogs-create-group": "true",
          "max-buffer-size": "25m",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ],
  "requiresCompatibilities": ["FARGATE"],
  "taskRoleArn": "<ecsTaskRole ARN>",
  "executionRoleArn": "<ecsTaskExecutionRole ARN>",
  "cpu": "1 vCPU",
  "memory": "3 GB"
}
```

Replace the following placeholders with your actual values:

| Placeholder                  | Description                                                          |
|------------------------------|----------------------------------------------------------------------|
| `<version>`                  | The version tag of the Zilla Plus image                              |
| `<ecsTaskRole ARN>`          | ARN of the IAM role assigned as the **Task Role**                    |
| `<ecsTaskExecutionRole ARN>` | ARN of the IAM role assigned as the **Execution Role** for ECS tasks |
| `<region>`                   | AWS region for SSM Parameters, e.g. `us-east-1`                      |
| `<aws_account_id>`           | AWS account ID for SSM Parameters                                    |

Create the task definition from this JSON in [Amazon ECS > Task definitions](https://console.aws.amazon.com/ecs/v2/task-definitions).

## Create the ECS Service

- [Create a Service](https://console.aws.amazon.com/ecs/v2/clusters) from the task definition above.
- Deployment configuration:
  - Family: `zilla-plus-kafka-proxy-aws-cognito`
  - Service name: `kafka-proxy-aws-cognito`
- Network configuration: see [Networking](#networking) below for the specific subnet and security group requirements this service needs.
- `Create` the Service.

Once the service has started with all tasks succeeding, you'll see the Zilla Plus container log `"started"`.

## Networking

- Open port `9094` on the task's security group.
- The task needs outbound internet access (a public IP or a NAT gateway) to reach Cognito's public discovery and JWKS endpoints. `guard-aws-cognito` validates tokens against Cognito's public keys and doesn't need AWS credentials or IAM permissions to do so.
- The task's security group needs to reach your Kafka cluster's broker ports.

## Provision Each Client's Kafka Topic

Using the `client_id` noted when you created their Cognito app client, create each client's dedicated topic (`messages-<client_id>`) when onboarding the client.

## Verify

Once the service is running, fetch an access token for one of your app clients from the user pool's Hosted UI domain token endpoint:

```bash
curl -s -X POST "https://<your-domain>.auth.<region>.amazoncognito.com/oauth2/token" \
  -u "<client-id>:<client-secret>" \
  -d "grant_type=client_credentials&scope=<resource-server>/<scope>" \
  | jq -r .access_token
```

Kafka's built-in `OAuthBearerLoginCallbackHandler` performs this same `client_credentials` grant on the client's behalf, given `sasl.jaas.config` options, so no custom callback handler is needed. Configure a client properties file:

```properties
security.protocol=SASL_SSL
sasl.mechanism=OAUTHBEARER
sasl.login.callback.handler.class=org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginCallbackHandler
```

::: tip
As the TLS certificate is signed by a globally trusted certificate authority, there's no need to configure `ssl.truststore.location` to override the trusted certificate authorities.
:::

Then produce through the task's public IP or NLB DNS name on port `9094`, once per client:

```bash
echo "hello from client A" | kafka-console-producer.sh \
  --bootstrap-server <your-deployed-endpoint>:9094 \
  --topic messages \
  --producer.config client.properties \
  --producer-property sasl.oauthbearer.token.endpoint.url="https://<your-domain>.auth.<region>.amazoncognito.com/oauth2/token" \
  --producer-property sasl.jaas.config="org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required clientId=\"<client-a-id>\" clientSecret=\"<client-a-secret>\" scope=\"<resource-server>/<scope>\";"

echo "hello from client B" | kafka-console-producer.sh \
  --bootstrap-server <your-deployed-endpoint>:9094 \
  --topic messages \
  --producer.config client.properties \
  --producer-property sasl.oauthbearer.token.endpoint.url="https://<your-domain>.auth.<region>.amazoncognito.com/oauth2/token" \
  --producer-property sasl.jaas.config="org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required clientId=\"<client-b-id>\" clientSecret=\"<client-b-secret>\" scope=\"<resource-server>/<scope>\";"
```

Fetch the same external `messages` topic back through Zilla's external listener, once per client, using each client's own credentials:

```bash
kafka-console-consumer.sh \
  --bootstrap-server <your-deployed-endpoint>:9094 \
  --topic messages \
  --partition 0 --from-beginning --timeout-ms 15000 \
  --consumer.config client.properties \
  --consumer-property sasl.oauthbearer.token.endpoint.url="https://<your-domain>.auth.<region>.amazoncognito.com/oauth2/token" \
  --consumer-property sasl.jaas.config="org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required clientId=\"<client-a-id>\" clientSecret=\"<client-a-secret>\" scope=\"<resource-server>/<scope>\";"
```

Confirm client A's fetch returns only `hello from client A`, and repeating with client B's credentials returns only `hello from client B`. Both clients address the same external `messages` topic name; Zilla rewrites each to its own dedicated internal topic based on the identity established during the SASL/OAUTHBEARER handshake, so neither client ever sees the other's message.
