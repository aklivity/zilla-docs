---
shortTitle: AWS ECS Fargate
---

# Deploying Zilla Plus on AWS ECS Fargate

[Available in Zilla Plus](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

## Overview

The [Zilla Plus](https://aws.amazon.com/marketplace/pp/prodview-lqfqftufwpttm) is an enterprise-ready, Kafka-native edge, and service proxy. It is a flexible, secure, and reliable way of creating stateless, multi-protocol API entry points into your Kafka cluster for both native and non-native Kafka clients.

With Zilla Plus, you can create publicly reachable Kafka endpoints into a Kafka cluster. You can also expose topics inside your Kafka cluster via declaratively defined REST, SSE, gRPC, and MQTT APIs.

This Guide will walk you through deploying your first Zilla Plus service on AWS ECS Fargate.

## Prerequisites

- An Amazon ECS cluster
- An Amazon ECR repository or another container repository
- A Subscription to the Zilla Plus [product on Amazon Marketplace](https://aws.amazon.com/marketplace/pp/prodview-lqfqftufwpttm)

## Subscribe via AWS Marketplace

- From the active Zilla Plus [subscription page](https://aws.amazon.com/marketplace/server/procurement?productId=prod-amntslj4ggryw)

  - Click `Continue to Configuration`
    - Fulfillment option: `Zilla Plus`
    - Software version: `Select the most recently released version`
  - Click `Continue to Launch`
    - Copy and run the `aws` login command from the Container images section to confirm you can pull the Zilla Plus container image.
    - Note the image name `709825985650.dkr.ecr.us-east-1.amazonaws.com/aklivity/zilla-plus-ecr:<version>` and one of the version tags stored in the `CONTAINER_IMAGES` variable, which will be used later.

## Create SSM Parameter for Zilla Config

- [Parameter Store console](https://console.aws.amazon.com/systems-manager/parameters)
- `Create parameter`
- Fill out the parameter details.
- Paste the `zilla.yaml` configuration to initialize the Zilla Plus service.

**Reference:**

::: tabs

@tab Name

  ```text:no-line-numbers
  /zilla/http-echo/zilla.yaml
  ```

@tab Type

  ```text:no-line-numbers
  String
  ```

@tab Data type

  ```text:no-line-numbers
  text
  ```

@tab Value

  ```yaml:no-line-numbers
  ---
  name: http-echo
  bindings:
    north_tcp_server:
      type: tcp
      kind: server
      options:
        host: 0.0.0.0
        port:
          - 7114
      routes:
        - when:
            - port: 7114
          exit: north_http_server
    north_http_server:
      type: http
      kind: server
      routes:
        - when:
            - headers:
                :scheme: http
          exit: north_echo_server
    north_echo_server:
      type: echo
      kind: server
  telemetry:
    exporters:
      stdout_logs_exporter:
        type: stdout
  ```

:::

## Create Required IAM Roles

These IAM roles allow ECS tasks to run Zilla Plus and access required AWS resources.

### Inline Policy for SSM Parameters

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
          "arn:aws:ssm:<region>:<aws_account_id>:parameter/<parameter_name>"
        ]
      }
    ]
  }
  ```

:::

### ECS Task Role

Create an IAM role for the Task. This role will be used by the running Zilla Plus container.

::: tabs

@tab Task role

Name:

```text
ecsTaskRole
```

Policies:

```text
AWSMarketplaceMeteringFullAccess
AWSMarketplaceMeteringRegisterUsage
```

:::

### ECS Task Execution Role

If you used the Amazon ECR as your image repository, create a role with the `AmazonECSTaskExecutionRolePolicy` permission and use it as the `Task execution role` when creating the Task.

::: tabs

@tab Task execution role

Name:

```text
ecsTaskExecutionRole
```

Policies:

```text
AmazonECSTaskExecutionRolePolicy
SSMGetParameters
```

:::

## AWS ECS Fargate Task for Zilla Plus

Create the AWS ECS Fargate Task that will be used to deploy Zilla Plus service.

### Create Task Definition

- Go to [Amazon Elastic Container Service > Task definitions](https://console.aws.amazon.com/ecs/v2/task-definitions)
- [Create a new Task Definition with JSON](https://us-east-1.console.aws.amazon.com/ecs/v2/create-task-definition-with-json) from JSON
- Refer `Task Definition JSON` tab for reference.

  ::: code-tabs

  @tab Task Definition JSON

  ```json
  {
    "family": "zilla-plus-fargate",
    "networkMode": "awsvpc",
    "containerDefinitions": [
      {
        "name": "zp-service",
        "image": "709825985650.dkr.ecr.us-east-1.amazonaws.com/aklivity/zilla-plus-ecr:<version>",
        "portMappings": [
          {
            "name": "http",
            "containerPort": 7114,
            "hostPort": 7114,
            "protocol": "tcp",
            "appProtocol": "http"
          }
        ],
        "essential": true,
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

  :::

- Replace the following placeholders with your actual values:
  | Placeholder                   | Description                                                                                             |
  | ----------------------------- | ------------------------------------------------------------------------------------------------------- |
  | `<version>`                   | The version tag of the Zilla Plus image                                                                 |
  | `<ecsTaskRole ARN>`           | ARN of the IAM role assigned as the **Task Role**                                                       |
  | `<ecsTaskExecutionRole ARN>`  | ARN of the IAM role assigned as the **Execution Role** for ECS tasks                                    |
  | `<region>`                    | AWS region for SSM Parameters, e.g. `us-east-1`                                                         |
  | `<aws_account_id>`            | AWS account ID for SSM Parameters                                                                       |
  | `<parameter_name>`            | The name of the Systems Manager Parameter that stores Zilla config.                                     |


## Create a Service from your AWS ECS Fargate Task

This will create a service based on the configuration in the Task.

- [Create a Service](https://us-east-1.console.aws.amazon.com/ecs/v2/clusters/my-ecs-cluster/create-service) from your new task.
- Deployment configuration:
  - Family: `zilla-plus-fargate`
  - Service name: `my_zilla_plus_service`
- Network configuration:
  - Set the VPC to be the Same as your ECS Cluster.
  - Select the Public subnets.
  - Ensure the `Public IP` is enabled in network configuration.
  ::: important Open Service Ports
  Make sure the security group allows traffic over the ports defined in the `portMappings` of the service.
  :::
- `Create` the Service.

## Verify your service is running

Once the service has started with all tasks succeeding, you will see the Zilla Plus container log `"started"`.

### Validate the Zilla Plus HTTP Echo Example

This will call the service and get an echoed response.

- Get the Public IP of the running Task in your service.
- Call the HTTP Echo service.

  ```bash
  curl -d "Hello, world" -H "Content-Type: text/plain" -X "POST" http://[Task Public IP]:7114
  ```

  Expected output:

  ```output
  Hello, world
  ```

- In your Task logs, you will see a `BINDING_HTTP_REQUEST_ACCEPTED` log from the above request

Congratulations! You have successfully deployed your first Zilla Plus service using AWS ECS Fargate.
