---
title: Zilla Documentation
---

Zilla is a multi-protocol, edge and service proxy. It abstracts Apache Kafka® for non-native clients, such as browsers and IoT devices, by exposing Kafka topics via user-defined REST, Server-Sent Events (SSE), MQTT, or gRPC API entry points.

![](/zilla-rings.webp)

## Getting Started

Zilla can validate API requests and message streams using your OpenAPI and AsyncAPI schemas. Zilla implements the OpenAPI and AsyncAPI schemas directly meaning there are little or no changes necessary to start serving you existing operations through Zilla. You can just drop in an existing OpenAPI/AsyncAPI specification and Zilla can seamlessly integrate with your current API management workflows and tooling.

You can see a working [Petstore Demo](https://github.com/aklivity/zilla-demos/tree/main/petstore) using OpenAPI/AsyncAPI schemas. Zilla can also define and proxy MQTT endpoints using a pair of AsyncAPI schemas. Check out the [Taxi Demo](https://github.com/aklivity/zilla-demos/tree/main/taxi) to see a Zilla MQTT proxy defined using AsyncAPI, which is deployed [Live](https://taxi.aklivity.io/) using Kubernetes.

You can explicitly define your APIs in a Zilla configuration by carefully orchestrating all of the different [Bindings](./concepts/config-intro.md#Bindings) Zilla has to offer. You can see many of them on display by using the [Kafka Proxy Quickstart](./tutorials/quickstart/kafka-proxies.md) or checking out the [Zilla Examples](https://github.com/aklivity/zilla-examples) repo.

## Running Zilla

Run the latest Zilla release with Homebrew and Docker. You can find help with more deployment options your Zilla anywhere with in the [Deploy and Operate](./how-tos/deploy-operate.md) section.

::: tabs

@tab Mac Homebrew

Install:

```bash:no-line-numbers
brew tap aklivity/tap
brew install zilla
```

Run:

```bash:no-line-numbers
zilla start -v -c file://path/to/zilla.yaml
```

@tab Docker Run

Run in a container:

```bash:no-line-numbers
docker run -v /path/to/zilla.yaml:/etc/zilla/zilla.yaml ghcr.io/aklivity/zilla:latest start -v
```

:::

The output should display the Zilla config and `started` to know Zilla is ready for traffic.

```output:no-line-numbers
// Printed config Zilla config
name: config_name
...

// Zilla status
started
```

## The zilla.yaml Config

The `zilla.yaml` config is declaratively configured to clearly define API mappings and endpoints that Zilla implements. This makes creating and managing different Zilla services easy.

[Find out more](./concepts/config-intro.md)

## Zilla HTTP Proxy

The Zilla HTTP Kafka Proxy lets you configure application-centric REST APIs and SSE streams that unlock Kafka event-driven architectures.

[Find out more](./concepts/kafka-proxies/http-proxy.md)

## Zilla gRPC Proxy

The Zilla gRPC Kafka Proxy lets you implement gRPC service definitions from protobuf files to produce and consume messages via Kafka topics.

[Find out more](./concepts/kafka-proxies/http-proxy.md)

## Zilla MQTT Proxy

The Zilla MQTT Kafka Proxy manages MQTT Pub/Sub connections and messages on and off of Kafka.

[Find out more](./concepts/kafka-proxies/http-proxy.md)

## Zilla Plus <FontIcon icon="aky-zilla-plus"/>

Everything in OSS plus commercial integrations and enterprise support. Partner-certified solutions for Confluent Cloud, Redpanda, and AWS MSK. Check out the [Product Website](https://www.aklivity.io/products/zilla-plus) and find detailed instructions for each of our markeplace offerings below.

- [Amazon MSK Secure Public Access](./solutions/how-tos/amazon-msk/secure-public-access/overview.md)

  This allows Kafka clients from outside the private network access to the full functionality of your Amazon MSK cluster.

- [Confluent Cloud Secure Public Access](./solutions/how-tos/confluent-cloud/secure-public-access.md)

  This allows Confluent and Kafka clients from outside the private network access to the full functionality of your Confluent Cloud cluster.

- [Amazon MSK  IoT Access and Control](./solutions/how-tos/confluent-cloud/iot-ingest-control.md)

  Your Amazon cluster is turned into a fully-fledged MQTT broker.

- [Confluent Cloud IoT Access and Control](./solutions/how-tos/confluent-cloud/iot-ingest-control.md)

  Your Confluent Cloud cluster is turned into a fully-fledged MQTT broker.

- [Redpanda IoT Access and Control](./solutions/how-tos/confluent-cloud/iot-ingest-control.md)

  Your Redpanda cluster is turned into a fully-fledged MQTT broker.
