---
description: Running this Zilla quickstart will introduce some of Zilla's main features.
category:
  - Kafka Proxies
tag:
  - REST
  - SSE
  - gRPC
  - MQTT
---

# Quickstart

Get started with Zilla by trying out some of the key features for yourself. You can explicitly define your APIs in a Zilla configuration by carefully orchestrating all of the different [Bindings](../concepts/bindings.md#Bindings) Zilla has to offer. You can see many of them on display by using the [Kafka Proxy Quickstart](../tutorials/quickstart/index.md) or checking out the [Zilla Examples](https://github.com/aklivity/zilla-examples) repo. We added an event-driven backend to the popular TodoMVC UI frontend in the [TodoMVC CQRS Demo](https://github.com/aklivity/zilla-demos/tree/main/todo-mvc-cqrs) where all of the new tasks will sync live to any open browsers.

## Zilla HTTP Proxy

The Zilla HTTP Kafka Proxy lets you configure application-centric REST APIs and SSE streams that unlock Kafka event-driven architectures.

> [Overview and Features](../concepts/kafka-proxies/http-proxy.md) | [Simple CRUD API](../tutorials/rest/rest-intro.md) | [Simple SSE Stream](../tutorials/sse/sse-intro.md) | [Petstore Demo](https://github.com/aklivity/zilla-demos/tree/main/petstore)


Open the [Zilla - HTTP Kafka proxy](https://www.postman.com/aklivity-zilla/workspace/aklivity-zilla-quickstart/overview) Postman collection to see the [REST Kafka proxy](../../concepts/kafka-proxies/http-proxy.md) expose common entity CRUD endpoints with the entity data being stored on a Kafka topic and the [SSE Kafka proxy](../../concepts/kafka-proxies/http-proxy.md#sse-streaming) expose th Kafka topic as a Server-sent Events (SSE) stream, enabling a resilient event-driven architecture to be exposed over HTTP.

The [items-crud](https://quickstart.aklivity.io/kafka/ui/clusters/local/all-topics/items-crud/messages) Kafka topic will have all the objects you posted, updated, and deleted.

Leveraging Kafka's `cleanup.policy=compact` feature, Zilla enables a standard REST backend architecture with Kafka as the storage layer. Adding an `Idempotency-Key` header during creation will set the message `key` and act as the `ID` for the record. A UUID is generated if no key is sent.

- **Create** - Create a new item with the `Idempotency-Key` header setting the key
- **Read:all** - Fetches all items on the topic
- **Read:key** - Fetch one item by its key using `/:key`
- **Update** - Update an item based on its key using `/:key
- **Delete** - Delete an item based on its key using `/:key`
- **Stream:all** - Stream all of the messages published on the `items-crud` Kafka topic
- **Stream:key** - Stream items by its key using `/:key` published on the `items-crud` Kafka topic

The declarative config has simple and clear syntax for defining each of the endpoints.

::: code-tabs#yaml

@tab Create

```yaml{6,7,10,11}
  north_rest_api_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: ./http-zilla.yaml#rest_create -->
```

@tab Read:all

```yaml{6,7,10,11}
  north_rest_api_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: ./http-zilla.yaml#rest_retrieve_all -->
```

@tab Read:key

```yaml{6,7,10,11,13}
  north_rest_api_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: ./http-zilla.yaml#rest_retrieve_id -->
```

@tab Update

```yaml{6,7,10,11}
  north_rest_api_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: ./http-zilla.yaml#rest_update -->
```

@tab Delete

```yaml{6,7,10,11}
  north_rest_api_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: ./http-zilla.yaml#rest_delete -->
```

@tab Stream:all

```yaml{6,7,10,11}
  north_sse_api_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: ./http-zilla.yaml#sse_retrieve_all -->
```

@tab Stream:key

```yaml{6,7,10,11,13}
  north_sse_api_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: ./http-zilla.yaml#sse_retrieve_id -->
```

:::

::: details Full HTTP Proxy zilla.yaml Config

```yaml
<!-- @include: ./http-zilla.yaml -->
```

:::

::: note Try it yourself
[Create a Simple CRUD API](../rest/rest-intro.md) | [Simple SSE Stream](../sse/sse-intro.md)
:::

## gRPC Kafka proxy

## Zilla gRPC Proxy

The Zilla gRPC Kafka Proxy lets you implement gRPC service definitions from protobuf files to produce and consume messages via Kafka topics.

> [Overview and Features](../concepts/kafka-proxies/http-proxy.md) | [Simple gRPC Server](../tutorials/grpc/grpc-intro.md) | [Route Guide example](../how-tos/grpc/grpc.route-guide.service.md)

Open the [Zilla - gRPC Kafka proxy](https://www.postman.com/aklivity-zilla/workspace/aklivity-zilla-quickstart/overview) Postman collection to see the [Zilla gRPC Kafka proxy](../../concepts/kafka-proxies/grpc-proxy.md) map the service method's request and response messages directly to Kafka topics. This can include simple RPC request-response messages, but this quickstart demonstrates `Simple-RPC`, `Server-side`, `Client-side`, and `Bidirectional` streaming RPC to a running gRPC server through the `GetFeature`, `ListFeature`, `RecordRoute`, and `RouteChat`, respectively. Zilla is routing all of the messages from the client to the server through Kafka. You can match the individual service calls on the [topics](#kafka-topics) by the matching `key` UUIDs which come from the `zilla:correlation-id` header.

- **RouteGuide** - Proxy messages through Kafka to a running gRPC server.
- **EchoService** - Zilla implements a simple message echo service.

Check out the Kafka topics:

The [echo-service-messages](https://quickstart.aklivity.io/kafka/ui/clusters/local/all-topics/echo-service-messages/messages) Kafka topic will have both the request and response record for each of the echo messages sent. You can see the records with the same generated UUIDs and `header` values.

The [route-guide-requests](https://quickstart.aklivity.io/kafka/ui/clusters/local/all-topics/route-guide-requests/messages) Kafka topic will have every proto request object, meaning every message that is sent to the `server`. The [route-guide-responses](https://quickstart.aklivity.io/kafka/ui/clusters/local/all-topics/route-guide-responses/messages) Kafka topic will have every proto response object, meaning every message returned from the `server`.

::: details Full zilla.yaml Config

```yaml
<!-- @include: ./grpc-zilla.yaml -->
```

:::

::: note Try it yourself
[Expose a Simple gRPC Server](../grpc/grpc-intro.md)
:::

## MQTT Kafka proxy

## Zilla MQTT Proxy

The Zilla MQTT Kafka Proxy manages MQTT Pub/Sub connections and messages on and off of Kafka.

> [Overview and Features](../concepts/kafka-proxies/http-proxy.md) | [Simple MQTT Broker](../tutorials/mqtt/mqtt-intro.md) | [MQTT Kafka broker](../how-tos/mqtt/mqtt.kafka.broker.md) | [Taxi Demo](https://github.com/aklivity/zilla-demos/tree/main/taxi)



Open the [Zilla - MQTT Kafka proxy](https://www.postman.com/aklivity-zilla/workspace/aklivity-zilla-quickstart/overview) Postman collection to see the [Zilla MQTT Kafka proxy](../../concepts/kafka-proxies/mqtt-proxy.md) provide an MQTT broker for devices and client libraries to natively interact with Kafka. Clients can connect and send MQTT messages where Zilla will store them in one of three defined Kafka topics. This quickstart manages all messages, messages marked with the `retained` flag, and sessions on any topic.

::: info Postman MQTT in BETA
Postman recently released MQTT support into [public BETA](https://blog.postman.com/postman-supports-mqtt-apis/), and we are using it for this quickstart. Be mindful that there may be minor issues encountered using it.
:::

- **Pub/Sub** - Publish your own messages
- **Simulated Topics** - Subscribe to simulated traffic

Setting the `retain` flag to true on your topic will send that message to the `retained` Kafka topic. After those messages are published, a new subscription will get the last message sent for that topic.

The [iot-messages](https://quickstart.aklivity.io/kafka/ui/clusters/local/all-topics/iot-messages/messages) Kafka topic will store every message sent to the broker. The [iot-retained](https://quickstart.aklivity.io/kafka/ui/clusters/local/all-topics/iot-retained/messages) Kafka topic will store only messages sent with the `retain` flag set to true. By log compacting this topic, it will only return the most recent copy of the message to a newly subscribed client. The [iot-sessions](https://quickstart.aklivity.io/kafka/ui/clusters/local/all-topics/iot-sessions/messages) Kafka topic will have a record for each connection that Zilla has managed between it and the clients. You can see the `client-id` in the key and the `topic` in the value when necessary.

An [mqtt-simulator](https://github.com/DamascenoRafael/mqtt-simulator) is included in the quickstart that will produce mock messages and send them to Zilla. The simulator uses the Python `paho-mqtt` library and the MQTT v5 specification.

::: details Full zilla.yaml Config

```yaml
<!-- @include: ./mqtt-zilla.yaml -->
```

:::

::: note Try it yourself
[Create a Simple MQTT Broker](../mqtt/mqtt-intro.md)
:::

## Metrics

This Zilla quickstart collects Logs and Metrics and exports them to a public [Grafana Dashboard](https://aklivity.grafana.net/d/sadlil-loki-apps-dashboard/logs-app?orgId=1&var-app=taxi-demo%2Fzilla&var-search=).

Zilla is configured to export metrics via [Prometheus](../../reference/config/telemetry/exporters/exporter-prometheus.md) and logs via [Standard Out](../../reference/config/telemetry/exporters/exporter-stdout.md).

::: details Full zilla.yaml Config

```yaml
<!-- @include: ./telem-export-zilla.yaml -->
```

:::



