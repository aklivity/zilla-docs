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

Get started with Zilla by trying out some of the key features for yourself.
<!-- You can explicitly define your APIs in a Zilla configuration by carefully orchestrating all of the different [Bindings](../../tutorials/concepts/bindings.md#Bindings) Zilla has to offer. You can see many of them on display by using the [Kafka Proxy Quickstart](../../tutorials/how-tos/quickstart/index.md) or checking out the [Zilla Examples](https://github.com/aklivity/zilla-examples) repo. We added an event-driven backend to the popular TodoMVC UI frontend in the [TodoMVC CQRS Demo](https://github.com/aklivity/zilla-demos/tree/main/todo-mvc-cqrs) where all of the new tasks will sync live to any open browsers. -->

## Zilla HTTP Proxy

The Zilla HTTP Kafka Proxy lets you configure application-centric REST APIs and SSE streams that unlock Kafka event-driven architectures.

1. Open the [Zilla - HTTP Kafka proxy](https://www.postman.com/aklivity-zilla/workspace/aklivity-zilla-quickstart/overview) Postman collection.
1. Open the [items-crud](http://34.48.98.66/kafka/ui/clusters/zilla-quickstart-cc-kafka/all-topics/items-crud/messages) Kafka topic, which will have all the objects you posted, updated, and deleted.
1. Start the SSE stream to view the Kafka topic as a Server-sent Events (SSE) stream.
1. POST a JSON object. The new object will show up in the SSE stream and in the Kafka topic.
1. Use the additional CRUD features from the Postman client or copy the code samples to interact with Zilla.

Leveraging Kafka's `cleanup.policy=compact` feature, Zilla enables a standard REST backend architecture with Kafka as the storage layer. Adding an `Idempotency-Key` header during creation will set the message `key` and act as the `ID` for the record. A UUID is generated if no key is sent.

- **Create** - Create a new item with the `Idempotency-Key` header setting the key.
- **Read:all** - Fetches all items on the topic.
- **Read:key** - Fetch one item by its key using `/:key`.
- **Update** - Update an item based on its key using `/:key`.
- **Delete** - Delete an item based on its key using `/:key`.
- **Stream:all** - Stream all of the messages published on the `items-crud` Kafka topic.
- **Stream:key** - Stream items by its key using `/:key` published on the `items-crud` Kafka topic.

The `zilla.yaml` config has simple and clear syntax for defining each of the HTTP endpoints.

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

::: note Where to learn more
[HTTP Kafka proxy Overview and Features](../../tutorials/concepts/kafka-proxies/http-proxy.md) | [Simple CRUD API Example](../../tutorials/tutorials/rest/rest-intro.md) | [Simple SSE Stream Example](../../tutorials/tutorials/sse/sse-intro.md) | [Petstore Demo](https://github.com/aklivity/zilla-demos/tree/main/petstore)
:::

## gRPC Kafka proxy

The Zilla gRPC Kafka Proxy lets you implement gRPC service definitions from protobuf files to produce and consume messages via Kafka topics.

1. Open the [Zilla - gRPC Kafka proxy](https://www.postman.com/aklivity-zilla/workspace/aklivity-zilla-quickstart/overview) Postman collection in the Postman Desktop client.
1. Open the [grpc-request-response](http://34.48.98.66/kafka/ui/clusters/zilla-quickstart-cc-kafka/all-topics/route-guide-requests) Kafka topic, which will have all of the service methods request and response messages.
1. Invoke the `GetFeature` service method with the default message.
1. Observe the requested message payload on the Kafka topic followed by the returned message both with the same UUID. The grpc metadata is captured in the Kafka messages `header` values.
1. Try out the additional RPC method types from the Postman client.

Zilla is routing all of the messages from the client to the server through Kafka.

- **GetFeature** - Uses `Server-side` streaming to produce the client request message and the server's return message.
- **ListFeature** - Uses `Server-side` streaming to produce the client request message and stream the list of server return messages.
- **RecordRoute** - Uses `Client-side` streaming to produce a stream of client request messages and the server's return message.
- **RouteChat** - Uses `Bidirectional` streaming to stream both the client request messages and server's return messages.

The `zilla.yaml` can map all of the methods from the RouteGuide service.

::: code-tabs#yaml

@tab RouteGuide interface

```yaml{6,13,17,19}
  north_grpc_server:
    type: grpc
    kind: server
    options:
      services:
        - /proto/route_guide.proto
...
  north_grpc_kafka_mapping:
    type: grpc-kafka
    kind: proxy
    routes:
      <!-- @include: ./grpc-zilla.yaml#route_guide_service_mapping -->
```

@tab RouteGuide server

```yaml{7-9,12}
west_kafka_grpc_remote_server:
  type: kafka-grpc
  kind: remote_server
  entry: north_kafka_cache_client
  routes:
    <!-- @include: ./grpc-zilla.yaml#route_guide_server -->
```

@tab route_guide.proto

```protobuf{18,26,32,38}
<!-- @include: ./route_guide.proto -->
```

:::

::: details Full zilla.yaml Config

```yaml
<!-- @include: ./grpc-zilla.yaml -->
```

:::

::: note Try it yourself
[gRPC Kafka proxy Overview and Features](../../tutorials/concepts/kafka-proxies/http-proxy.md) | [Simple gRPC Server](../../tutorials/tutorials/grpc/grpc-intro.md) | [Full Route Guide example](../../tutorials/how-tos/grpc/grpc.route-guide.service.md)
:::

## MQTT Kafka proxy

The Zilla MQTT Kafka Proxy manages MQTT Pub/Sub connections and messages on and off of Kafka.

1. Open the [Zilla - MQTT Kafka proxy](https://www.postman.com/aklivity-zilla/workspace/aklivity-zilla-quickstart/overview) Postman collection in the Postman Desktop client.
1. Open the [iot-messages](http://34.48.98.66/kafka/ui/clusters/zilla-quickstart-cc-kafka/all-topics/iot-messages) Kafka topic, which will have all of the MQTT messages sent to the broker, where the MQTT topic is the Kafka message `key`. Marking messages with the `retain` flag set to true will produce a message on the [iot-retained](http://34.48.98.66/kafka/ui/clusters/zilla-quickstart-cc-kafka/all-topics/iot-retained/messages) Kafka topic. The [iot-sessions](http://34.48.98.66/kafka/ui/clusters/zilla-quickstart-cc-kafka/all-topics/iot-sessions/messages) Kafka topic is used to mange MQTT client connections.
1. Connect to the Broker to `Pub/Sub` messages. Send one of the saved messages or you can send any message on any MQTT topic. Subscribe to topics in the **Topics** tab.
1. Observe the MQTT Broker messages on the Kafka topics with your message in the `body` and the MQTT topic as the `key`.
1. Connect with the `Simulator Topics` endpoint to subscribe to the simulated messages being published to the Broker.

- **Pub/Sub** - Publish your own messages to the MQTT broker.
- **Simulated Topics** - Subscribe to simulated traffic being published to the MQTT broker.

::: code-tabs#yaml

@tab MQTT Broker

```yaml{6-8}
north_mqtt_kafka_mapping:
  type: mqtt-kafka
  kind: proxy
  <!-- @include: ./mqtt-zilla.yaml#mqtt_broker_mapping -->
```

:::

::: details Full zilla.yaml Config

```yaml
<!-- @include: ./mqtt-zilla.yaml -->
```

:::

::: note Try it yourself
[Overview and Features](../../tutorials/concepts/kafka-proxies/http-proxy.md) | [Simple MQTT Broker](../../tutorials/tutorials/mqtt/mqtt-intro.md) | [MQTT Kafka broker](../../tutorials/how-tos/mqtt/mqtt.kafka.broker.md) | [Taxi Demo](https://github.com/aklivity/zilla-demos/tree/main/taxi)
:::
