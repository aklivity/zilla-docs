---
icon: aky-zilla-plus
description: Set up an IoT Ingest and Control MQTT Broker that lets clients publish messages and subscribe to topics proxied to Kafka topics in your Amazon MSK cluster.
---

# Amazon MSK IoT Ingest and Control

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

::: info Estimated time to complete 10-15 minutes.
:::

## Overview

The [Zilla Plus for Amazon MSK](https://aws.amazon.com/marketplace/pp/prodview-jshnzslazfm44) IoT Ingest and Control MQTT Broker lets clients publish messages and subscribe to topics that are proxied to Kafka topics in your Amazon MSK cluster.

## Prerequisites

<!-- @include: ../../_partials/iot-ingest-control/prerequisites.md  -->

## Create the Amazon MSK cluster

> This creates your MSK cluster in preparation for secure access via the internet.

An MSK cluster is needed for secure remote access via the internet. You can skip this step if you have already created an MSK cluster with equivalent configuration.

Follow the [Create MSK Cluster](./../aws-services/create-msk-cluster.md) guide to setup the a new MSK cluster. We will use the below resource names to reference the AWS resources needed in this guide.

- Cluster Name: `my-msk-cluster`
- Access control methods: `SASL/SCRAM authentication`
- VPC: `my-msk-cluster-vpc`
- Subnet: `my-msk-cluster-subnet-*`
- Route tables: `my-msk-cluster-rtb-*`
- Internet gateway: `my-msk-cluster-igw`

When the MSK cluster is created you will need to follow the [Sign-in credentials authentication with AWS Secrets Manager](https://docs.aws.amazon.com/msk/latest/developerguide/msk-password.html) to associate your `AmazonMSK_*` secret to your cluster. There will be a prompt on the cluster summary page to create a new secret or associate an existing one. For the remainder of this doc we will assume the following values for this secret:

- Use `Plaintext` value:

  ```json:no-line-numbers
  {"username":"alice","password":"alice-secret"}
  ```

- Encryption key: `<Customer managed key>`
- Secret Name: `my-zilla-iot-access-secret`
- Review and store the secret

## Zilla proxy AWS resources

<!-- @include: ../../_partials/iot-ingest-control/aws-resources.md  -->

## Subscribe via AWS Marketplace

The [Zilla Plus for Amazon MSK](https://aws.amazon.com/marketplace/pp/prodview-sj4kquyndubiu) is available through the AWS Marketplace. You can skip this step if you have already subscribed to Zilla Plus for Amazon MSK via the AWS Marketplace.

To get started, visit the Proxy's Marketplace [Product Page](https://aws.amazon.com/marketplace/pp/prodview-sj4kquyndubiu) and `Subscribe` to the offering. You should now see `Zilla Plus for Amazon MSK` listed in your [AWS Marketplace](https://console.aws.amazon.com/marketplace) subscriptions.

## Deploy the IoT Ingest and Control MQTT Broker

> This initiates deployment of the Zilla Plus for Amazon MSK stack via CloudFormation.

Navigate to your [AWS Marketplace](https://console.aws.amazon.com/marketplace) subscriptions and select `Zilla Plus for Amazon MSK` to show the manage subscription page.

<!-- @include: ../../_partials/iot-ingest-control/cf-stack/s1-launch.md  -->

### Step 2. Specify stack details

::: code-tabs

@tab Stack name

```text:no-line-numbers
my-zilla-iot-proxy
```

:::

Parameters:

- Network Configuration
  - VPC: `my-zilla-iot-proxy-vpc`
  - Subnets: `my-zilla-iot-proxy-subnet-public-1a` `my-zilla-iot-proxy-subnet-public-1b`
- Amazon MSK Configuration
  - Access Credentials and Bootstrap Server Secret ARN: `<my-zilla-iot-access-secret secret ARN>` \*1
  - Kafka Topics:
    - messages: `mqtt-messages`
    - retained: `mqtt-retained`
    - sessions: `mqtt-sessions`
- Zilla Plus Configuration
  - Instance count: `2`
  - Instance type: `t3.small` \*2
  - Role: `my-zilla-iot-role`
  - Security Groups: `my-zilla-iot-proxy-sg`
  - Public Port: `8883`
  - Public Wildcard DNS: `*.example.aklivity.io` \*3
  - Public TLS Certificate Key: `<TLS certificate private key secret ARN>` \*4
  - Key pair for SSH access: `my-key-pair` \*5
- \*Configuration Reference
  1. This is the ARN for the secret created in the the [Create a Secret with SASL/SCRAM authentication params](#create-a-secret-with-sasl-scram-authentication-params) step of this guide.
  2. Consider the network throughput characteristics of the AWS instance type as that will impact the upper bound on network performance.
  3. Replace with your own custom wildcard DNS pattern mentioned in the [Prerequisites](#prerequisites) of this guide.
  4. This is the ARN of the created secret for the signed certificate's private key mentioned in the [Prerequisites](#prerequisites) of this guide.
  5. Follow the [Create Key Pair](../../how-tos/aws-services/create-key-pair.md) guide to create a new key pair to access EC2 instances via SSH.

<!-- @include: ../../_partials/iot-ingest-control/cf-stack/s3-create.md  -->

### Configure Global DNS

<!-- @include: ../../_partials/zilla-plus-proxy/configure-global-dns.md  -->

## Verify MQTT Client Connectivity

<!-- @include: ../../_partials/iot-ingest-control/verify-mqtt-client-connectivity.md  -->

## Verify the Zilla proxy Service

<!-- @include: ../../_partials/zilla-plus-proxy/verify-zilla-plus-proxy-service.md  -->

## Conclusion

You have successfully deployed the [Zilla Plus for Amazon MSK](https://aws.amazon.com/marketplace/pp/prodview-sj4kquyndubiu) IoT Ingest and Control MQTT Broker. Instructions on how to Monitor and Upgrade your <ZillaPlus/> proxy can be found in the [managing a cloudformation stack](./aws-services/manage-cloudformation-stack.md) section.
