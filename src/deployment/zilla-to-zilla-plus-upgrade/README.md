---
shortTitle: "Zilla to Zilla-Plus Upgrade"
---

# Zilla to Zilla-Plus Upgrade

Upgrading from Zilla to Zilla-Plus is a seamless process, thanks to its self-contained and stateless architecture. This ensures minimal disruption while transitioning to the enhanced capabilities of Zilla-Plus.

## Prerequisites

Before proceeding with the upgrade, ensure you have:

- A Subscription to the [Zilla Plus product on Amazon Marketplace](https://aws.amazon.com/marketplace/pp/prodview-lqfqftufwpttm)

## Supported Deployment Options

Zilla-Plus supports multiple deployment methods:

- **EC2** (AMI)

    - CDK
    - CDKTF

- **ECS Fargate** (Docker Image)

To simplify deployment, we have curated templates for the following use cases:

- [Web Streaming](/deployment/zilla-plus-in-production/web-streaming/README.md)
- [IoT Ingest and Control](/deployment/zilla-plus-in-production/iot-ingest-and-control/README.md)
- [Secure Private Access](/deployment/zilla-plus-in-production/secure-private-access/README.md)
- [Secure Public Access](/deployment/zilla-plus-in-production/secure-public-access/README.md)

However, if you have a specific use-case implemented on Zilla using custom `zilla.yaml` or want to use your existing `zilla` setup, you can upgrade Zilla service to Zilla-plus using these options:

- [**AWS AMI**](#aws-ami)
- [**AWS ECS Fargate**](#aws-ecs-fargate)

## Upgrade Process

### AWS AMI

[Zilla Plus](https://aws.amazon.com/marketplace/seller-profile?id=b9df13e8-d3bc-41d1-bf8a-4a07aaa96e62) is available as an **Amazon Machine Image** (AMI) through the AWS Marketplace.

To use your custom` zilla.yaml`, you can pass the configuration as `user data` during instance launch:

- Go to the `Launch Instance` wizard.
- Expand `Advanced details`.
- Add your `zilla.yaml` under the `User data` section using cloud-config.

Refer to the full guide: [Deploying Zilla Plus via AWS AMI](/deployment/zilla-plus-in-production/zilla-plus-via-aws-ami/README.md)

### AWS ECS Fargate

To migrate from Zilla to Zilla-Plus, transfer your existing zilla.yaml configuration and related files to the **Zilla Plus** container using the COPY instruction.

Example:

Copying a single configuration file:

```sh
COPY ./zilla.yaml /etc/zilla/zilla.yaml
```

Copying an entire configuration directory:

```sh
COPY ./etc /etc/zilla
```

#### Deployment on AWS ECS Fargate

For detailed deployment steps, refer to: [Deploy Zilla-Plus on AWS ECS Fargate](../../deployment/zilla-plus-in-production/zilla-plus-on-aws-ecs-fargate.md)

#### Verify Your Service is Running

Once the service has started successfully, you should see the 'started' log message in the Zilla container logs.

Steps to Verify:

1. Retrieve the Public IP of the running Task in your service.
2. Send an HTTP request to the Echo service using the following command:

    ```sh
    curl -d "Hello, world" -H "Content-Type: text/plain" -X "POST" http://[Task Public IP]:7114
    ```

    Expected Output:

    ```text
    Hello, world
    ```

    In your Task logs, you should see a `BINDING_HTTP_REQUEST_ACCEPTED` log entry for the above request.
