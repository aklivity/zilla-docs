---
description: MQTT clients can directly publish and subscribe to topics through MQTT entry points into your Kafka cluster.
---

# IoT Ingest and Control

<!-- markdownlint-disable MD024 -->

[Available in Zilla Plus](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

By automating the configuration of an internet-facing network load balancer and auto-scaling group of stateless Zilla Plus IoT Ingest and Control proxies to expose your Kafka cluster via the public internet, Kafka clients can connect, publish messages and subscribe to topics in your Kafka cluster from outside the host network.

You will need to choose a wildcard DNS pattern to use for public internet access to the brokers in your Kafka cluster. These wildcard DNS names must resolve to the public IP address(es) where the Zilla Plus proxy is deployed. The Zilla Plus proxy must also be configured with a TLS server certificate representing the same wildcard DNS pattern.

## Amazon MSK

The [Zilla Plus for Amazon MSK](https://aws.amazon.com/marketplace/pp/prodview-jshnzslazfm44) IoT Ingest and Control Broker lets authorized Kafka clients connect, publish messages and subscribe to topics in your Confluent Cloud cluster via the internet.

![MSK IoT Ingest and Control Overview](/iot_ingestion_control.png)

## Key Features

- Enable **IoT clients** to securely connect, publish messages, and subscribe to Kafka topics using **MQTT protocol**.
- **No configuration** changes required to your MSK cluster to function as MQTT broker.
- Zilla Plus supports **Auto-Scaling** and are deployed behind a **Network Load Balancer** for optimal performance.

### Deploy with CDK

Follow the [IOT Ingest and Control deploy with CDK](https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdk/iot-ingest-and-control) guide to generate or deploy a custom AWS CDK stack. This stack sets up an MQTT broker using a globally trusted TLS server certificate with a wildcard DNS pattern `*.example.aklivity.io`.

### Deploy with CloudFormation

Follow the [Amazon MSK IoT Ingest and Control](/deployment/zilla-plus-in-production/iot-ingest-and-control/amazon-msk.md) guide to setup an MQTT broker using a globally trusted TLS server certificate with a wildcard DNS pattern `*.example.aklivity.io` to illustrate the steps.

## Confluent Cloud

The [Zilla Plus for Confluent Cloud](https://aws.amazon.com/marketplace/pp/prodview-eblxkinsqbaks) IoT Ingest and Control Broker lets authorized Kafka clients connect, publish messages and subscribe to topics in your Confluent Cloud cluster via the internet.

### Deploy with CloudFormation

Follow the [Confluent Cloud IoT Ingest and Control](/deployment/zilla-plus-in-production/iot-ingest-and-control/confluent-cloud.md) guide to setup an MQTT broker using a globally trusted TLS server certificate with a wildcard DNS pattern `*.example.aklivity.io` to illustrate the steps.

## Redpanda

The [Zilla Plus for Redpanda](https://aws.amazon.com/marketplace/pp/prodview-sj4kquyndubiu) IoT Ingest and Control Broker lets authorized Kafka clients connect, publish messages and subscribe to topics in your Redpanda cluster via the internet.

### Deploy with CloudFormation

Follow the [Redpanda IoT Ingest and Control](/deployment/zilla-plus-in-production/iot-ingest-and-control/redpanda.md) guide to setup an MQTT broker using a globally trusted TLS server certificate with a wildcard DNS pattern `*.example.aklivity.io` to illustrate the steps.
