---
description: Zilla Plus Web Streaming lets Web clients publish, update, and stream messages to a Kafka topic in your Amazon MSK cluster.
---

# Amazon MSK Web Streaming

[Available in Zilla Plus](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

The [Zilla Plus for Amazon MSK](https://aws.amazon.com/marketplace/pp/prodview-jshnzslazfm44) Web Streaming proxy lets Web clients publish, update, and stream messages to a Kafka topic in your Amazon MSK cluster.

By automating the configuration of a network load balancer and auto-scaling group of stateless Web Streaming proxies to expose a topic in your MSK cluster, Web clients can natively interact with messages on the topic. Event streaming backend systems can quickly integrate user-facing web clients using customizable REST and SSE APIs.

You will need to choose a wildcard DNS pattern to use for public internet access to the Web Streaming proxies. These wildcard DNS names must resolve to the public IP address(es) where the Zilla Plus proxy is deployed. The Zilla Plus proxy must also be configured with a TLS server certificate representing the same wildcard DNS pattern.

![MSK Web Streaming Overview](/web_streaming.png)

## Key Features

- Enable web clients to publish, update, and stream Kafka messages via **customizable REST and SSE APIs**.
- **No configuration** changes required to your MSK cluster to enable seamless web access.
- <ZillaPlus/> supports **Auto-Scaling** and are deployed behind a **Network Load Balancer** for optimal performance.

## Deploy with CDK

Follow the [Web Streaming with CDK](https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdk/README.WebStreaming.md) guide to generate or deploy a custom AWS CDK stack. This stack exposes a custom `REST` path and uses `SASL/SCRAM` authentication.

## Deployment with Terraform

Follow the [Web Streaming with Terraform](https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdktf/web-streaming) guide to generated or deploy a custom Terraform template using [CDKTF](https://developer.hashicorp.com/terraform/cdktf). This Terraform script can be configured to expose a custom REST path and uses `SASL/SCRAM` authentication.

## Confluent Cloud

The [Zilla Plus for Confluent Cloud](https://aws.amazon.com/marketplace/pp/prodview-eblxkinsqbaks) Web Streaming proxy enables authorized Kafka clients to publish, update, and stream messages to a Kafka topic in your Confluent Cloud cluster.

### Deploy with CDK

Follow the [Web Streaming with CDK](https://github.com/aklivity/zilla-plus-aws-templates/blob/main/confluent-cloud/cdk/README.WebStreaming.md) guide to generate or deploy a custom CDK stack.
