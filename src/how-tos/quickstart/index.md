---
description: Get started with Zilla by trying out some of the key features for yourself.
category:
 - Kafka Proxies
tag:
 - HTTP
 - REST
 - SSE
 - gRPC
 - MQTT
---

# Quickstart

Get started with Zilla by trying out some of the key features for yourself. You can see how Zilla can operate as an [HTTP Kafka Proxy](#http-kafka-proxy) to expose Kafka topics via REST and SSE endpoints. You can interact with Zilla as an [MQTT Kafka Proxy](#mqtt-kafka-proxy) to turn Kafka into an MQTT broker. You can leverage the Zilla [gRPC Kafka Proxy](#grpc-kafka-proxy) to deliver protobuf messages from gRPC clients to gRPC servers through Kafka.

## HTTP Kafka Proxy

The Zilla HTTP Kafka Proxy lets you configure application-centric REST APIs and SSE streams that unlock Kafka event-driven architectures.

1. Open the [Zilla - HTTP Kafka proxy](https://aklivity-zilla.postman.co/workspace/2597b841-0ff7-4abe-878c-8a43b99e49af) Postman collection.
1. Open the [http-messages](http://34.48.98.66/kafka/ui/clusters/zilla-quickstart-cc-kafka/all-topics/items-crud/messages) Kafka topic, which will have all the objects you posted, updated, and deleted.
1. Use the `Stream all messages` request to view messages produced to the Kafka topic as a Server-sent Events (SSE) stream.
1. Use the `Create a new message` to POST a JSON object. The new object will appear in the SSE stream and the Kafka topic.
1. Get your Kafka message key from the [http-messages](http://34.48.98.66/kafka/ui/clusters/zilla-quickstart-cc-kafka/all-topics/items-crud/messages) topic and use the `Get message by key` request to fetch only your message using your key in the `<key-from-kafka-topic>` path variable.
1. To interact more with Zilla, use the `Additional features` in the Postman collection or copy the code samples.

Leveraging Kafka's `cleanup.policy=compact` feature, Zilla enables a standard REST backend architecture with Kafka as the storage layer. You can easily configure many common Restful actions with the added benefit of built-in streaming with an SSE endpoint. The `zilla.yaml` config has simple and clear syntax for defining each HTTP endpoint.

::: tabs#yaml

@tab Create

Create a new message.

```yaml{6,7,10,11}
  north_rest_api_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: ./http-zilla.yaml#rest_create -->
```

@tab Read:all

Fetch all messages on the topic.

```yaml{6,7,10,11}
  north_rest_api_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: ./http-zilla.yaml#rest_retrieve_all -->
```

@tab Read:key

Fetch one message by its key.

```yaml{6,7,10,11,13}
  north_rest_api_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: ./http-zilla.yaml#rest_retrieve_id -->
```

@tab Update

Update a message based on its key.

```yaml{6,7,10-12}
  north_rest_api_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: ./http-zilla.yaml#rest_update -->
```

@tab Delete

Produce a blank message for a key.

```yaml{6,7,10-12}
  north_rest_api_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: ./http-zilla.yaml#rest_delete -->
```

@tab Stream:all

Stream all of the messages published on a Kafka topic.

```yaml{6,7,10,11}
  north_sse_api_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: ./http-zilla.yaml#sse_retrieve_all -->
```

@tab Stream:key

Stream messages for a specific key published on a Kafka.

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
[HTTP Kafka proxy Overview and Features](../../concepts/kafka-proxies/http-proxy.md) | [Simple CRUD API Example](../../tutorials/rest/rest-intro.md) | [Simple SSE Stream Example](../../tutorials/sse/sse-intro.md) | [Petstore Demo](https://github.com/aklivity/zilla-demos/tree/main/petstore)
:::

## MQTT Kafka proxy

The Zilla MQTT Kafka Proxy manages MQTT client connections and messages through Kafka topics.

1. Open the [Zilla - MQTT Kafka proxy](https://aklivity-zilla.postman.co/workspace/2597b841-0ff7-4abe-878c-8a43b99e49af) Postman collection in the Postman Desktop client.
1. Open the [mqtt-messages](http://34.48.98.66/kafka/ui/clusters/zilla-quickstart-cc-kafka/all-topics/iot-messages) Kafka topic, which will have all of the MQTT messages sent to the broker.
1. Connect to the broker with the `Pub/Sub` request. Send one of the saved messages, or you can send any message on any MQTT topic. Subscribe to topics in the **Topics** tab.
1. Observe the MQTT Broker messages on the Kafka topics with your message in the `body` and the MQTT topic as the `key`.
1. Connect to the broker with the `Simulator Topics` request to subscribe to the simulated messages being published to the broker.

A Zilla MQTT broker is defined using three specific Kafka topics. The [messages](http://34.48.98.66/kafka/ui/clusters/zilla-quickstart-cc-kafka/all-topics/iot-messages) Kafka topic will have all of the MQTT messages sent to the broker, where the MQTT topic is the Kafka message `key` and the MQTT payload is the Kafka message value. Marking messages with the `retain` flag set to true will produce a message on the [retained](http://34.48.98.66/kafka/ui/clusters/zilla-quickstart-cc-kafka/all-topics/iot-retained/messages) Kafka topic. The [sessions](http://34.48.98.66/kafka/ui/clusters/zilla-quickstart-cc-kafka/all-topics/iot-sessions/messages) Kafka topic is used to manage MQTT client connections.

::: code-tabs#yaml

@tab MQTT broker

```yaml{10-12}
<!-- @include: ./mqtt-zilla.yaml#mqtt_broker_mapping -->
```

:::

::: details Full zilla.yaml Config

```yaml
<!-- @include: ./mqtt-zilla.yaml -->
```

:::

::: note Where to learn more
[Overview and Features](../../concepts/kafka-proxies/http-proxy.md) | [Simple MQTT Broker](../../tutorials/mqtt/mqtt-intro.md) | [MQTT Kafka broker](../../how-tos/mqtt/mqtt.kafka.broker.md) | [Taxi Demo](https://github.com/aklivity/zilla-demos/tree/main/taxi)
:::

## gRPC Kafka proxy

The Zilla gRPC Kafka Proxy lets you implement gRPC service definitions from protobuf files to produce and consume messages via Kafka topics.

1. Open the [Zilla - gRPC Kafka proxy](https://aklivity-zilla.postman.co/workspace/2597b841-0ff7-4abe-878c-8a43b99e49af) Postman collection in the Postman Desktop client.
1. Open the [grpc-request-response](http://34.48.98.66/kafka/ui/clusters/zilla-quickstart-cc-kafka/all-topics/route-guide-requests/messages?mode=LATEST&valueSerde=ProtobufDecodeRaw&r=r) Kafka topic, which will have all of the service methods request and response messages.
1. Invoke the `GetFeature` service method with the default message.
1. Observe the requested message payload on the Kafka topic followed by the returned message with the same UUID. The gRPC method routing information is captured in the Kafka messages `header` values.
1. Try out the additional RPC method types in the Postman collection.

Zilla is routing all RouteGuide protobuf messages from any gRPC client to a gRPC server through Kafka. The `zilla.yaml` config implements all of the RPC methods from the RouteGuide service protobuf definition.

- **GetFeature** - Uses `Server-side` streaming to produce the client request message and the server's return message.
- **ListFeature** - Uses `Server-side` streaming to produce the client request message and stream the list of server return messages.
- **RecordRoute** - Uses `Client-side` streaming to produce a stream of client request messages and the server's return message.
- **RouteChat** - Uses `Bidirectional` streaming to stream both the client request messages and server's return messages.


::: code-tabs#yaml

@tab RouteGuide Server

```yaml{6,14,17-18}
<!-- @include: ./grpc-zilla.yaml#route_guide_service_definition -->
...
<!-- @include: ./grpc-zilla.yaml#route_guide_service_mapping -->
```

@tab RouteGuide Remote Server

```yaml{9,11,14,21-22}
<!-- @include: ./grpc-zilla.yaml#route_guide_interface -->
...
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

::: note Where to learn more
[gRPC Kafka proxy Overview and Features](../../concepts/kafka-proxies/http-proxy.md) | [Simple gRPC Server](../../tutorials/grpc/grpc-intro.md) | [Full Route Guide example](../../how-tos/grpc/grpc.route-guide.service.md)
:::
