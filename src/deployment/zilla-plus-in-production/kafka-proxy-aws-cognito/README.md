---
shortTitle: Per-Client Kafka Topic Routing
description: Deploy per-client Kafka topic routing with AWS Cognito on AWS ECS Fargate.
---

# Per-Client Kafka Topic Routing with AWS Cognito on AWS ECS Fargate

[Available in Zilla Plus](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

## Overview

Multi-tenant SaaS platforms often need many external Kafka clients to address the same external topic name, while keeping each client's data in its own dedicated internal topic. The [`kafka-proxy`](/reference/config/bindings/kafka-proxy/README.md) binding does this with no per-client configuration in `zilla.yaml`: external clients authenticate over `SASL_SSL`/`OAUTHBEARER` with a JWT from an [`aws-cognito`](/reference/config/guards/aws-cognito.md) guard, and a `topics[].alias` template rewrites the internal topic name using the identity established during that handshake.

This guide walks through deploying that pattern on AWS ECS Fargate. It builds on the [Deploying Zilla Plus on AWS ECS Fargate](../zilla-plus-on-aws-ecs-fargate.md) guide for the base ECS setup (Marketplace subscription, IAM roles, task definition basics); read that first if you haven't deployed Zilla Plus on ECS before.

## Prerequisites

In addition to the [prerequisites](../zilla-plus-on-aws-ecs-fargate.md#prerequisites) for deploying Zilla Plus on ECS Fargate:

- An AWS Cognito user pool with a resource server (defining a custom scope) and one `client_credentials` app client per external client, provisioned through the [Cognito console](https://console.aws.amazon.com/cognito/) or the AWS CLI
- A Kafka cluster (e.g. Amazon MSK) reachable from the ECS task, with `auto.create.topics.enable` disabled in production so each client's dedicated topic is provisioned deliberately, the same way each client's Cognito app client is
- A TLS certificate for the external listener, stored in [AWS Secrets Manager](/reference/config/vaults/aws-secrets.md), read via the `aws-secrets` vault

## Zilla Configuration

Point `internal` at your real Kafka cluster's bootstrap brokers, and configure an [`aws-secrets`](/reference/config/vaults/aws-secrets.md) vault referencing your real certificate's secret ARN:

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
      external:
        authorization:
          cognito0:
            mechanism: oauthbearer
        host: kafka-#.external.net
        default: kafka.external.net
        port: 9094
      internal:
        host: <your-msk-bootstrap-broker-pattern>
        port: 9094
      topics:
        - name: messages
          alias: "${topic}-${guarded['cognito0'].identity}"
    routes:
      - when:
          - topic: messages
            api: [fetch, produce, metadata, list_offsets]
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

See [Create SSM Parameter for Zilla Config](../zilla-plus-on-aws-ecs-fargate.md#create-ssm-parameter-for-zilla-config) for storing this as the `ZILLA_YAML` parameter your task definition reads.

## Task Definition

Adapt the [task definition JSON](../zilla-plus-on-aws-ecs-fargate.md#create-task-definition) from the base ECS Fargate guide: expose port `9094` instead of `7114`, and set `ZILLA_INCUBATOR_ENABLED=true`, since `guard-aws-cognito` is an [incubator feature](/deployment/configure-zilla/incubator-features/README.md).

```json {8-14,19-24}
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
          "name": "ZILLA_INCUBATOR_ENABLED",
          "value": "true"
        }
      ],
      "secrets": [
        {
          "name": "ZILLA_YAML",
          "valueFrom": "arn:aws:ssm:<region>:<aws_account_id>:parameter/<parameter_name>"
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
          "awslogs-group": "/ecs/",
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

Use the same [`ecsTaskRole`/`ecsTaskExecutionRole`](../zilla-plus-on-aws-ecs-fargate.md#create-required-iam-roles) as the base guide, adding permission to read your certificate secret if the execution role doesn't already have it.

## Networking

- Open port `9094` on the task's security group, not `7114`.
- The task needs outbound internet access (a public IP or a NAT gateway) to reach Cognito's public discovery and JWKS endpoints. `guard-aws-cognito` validates tokens against Cognito's public keys and doesn't need AWS credentials or IAM permissions to do so.
- The task's security group needs to reach your Kafka cluster's broker ports. For Amazon MSK, this means allowing the task's security group in the MSK cluster's security group.

## Provision Each Client's Kafka Topic

With `auto.create.topics.enable` disabled, each client's dedicated internal topic (`messages-<client_id>`) must exist before that client can produce or fetch. Provision it as part of onboarding the client, the same time you create their Cognito app client:

```bash
kafka-topics.sh --bootstrap-server <your-msk-bootstrap-broker> \
  --create --if-not-exists --topic "messages-<client_id>" \
  --partitions 1 --replication-factor 3
```

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
ssl.truststore.location=<path-to-a-truststore-trusting-your-tls-certificate>
```

Then produce through the task's public IP or NLB DNS name on port `9094`, once per client:

```bash
echo "hello from client A" | kafka-console-producer.sh \
  --bootstrap-server <your-deployed-endpoint>:9094 \
  --topic messages \
  --producer.config client.properties \
  --producer-property sasl.oauthbearer.token.endpoint.url="https://<your-domain>.auth.<region>.amazoncognito.com/oauth2/token" \
  --producer-property sasl.jaas.config="org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required clientId=\"<client-a-id>\" clientSecret=\"<client-a-secret>\" scope=\"<resource-server>/<scope>\";"
```

Connecting directly to the internal broker (bypassing Zilla) confirms each client's message landed in its own dedicated topic, suffixed with that client's Cognito `client_id`:

```bash
kafka-console-consumer.sh \
  --bootstrap-server <your-msk-bootstrap-broker> \
  --topic "messages-<client-a-id>" \
  --from-beginning --timeout-ms 15000
```

Confirm two different clients' messages land in two different internal topics, and that neither client can address the other's internal topic externally. Both only ever address the same external `messages` topic name, with the rewrite happening entirely inside Zilla, keyed off the identity established during the SASL/OAUTHBEARER handshake.
