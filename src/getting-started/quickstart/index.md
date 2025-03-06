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

Get started with Zilla by trying some of its Kafka proxying and API gateway features. In this guide, you will see how Zilla operates as:

- [HTTP Kafka Proxy](#http-kafka-proxy) that exposes Kafka topics via REST and SSE endpoints.
- [MQTT Kafka Proxy](#mqtt-kafka-proxy) that turn Kafka into an MQTT broker.
- [gRPC Kafka Proxy](#grpc-kafka-proxy) that delivers protobuf messages from gRPC clients to gRPC servers through Kafka.

## Prerequisites

- The Postman [desktop client](https://www.postman.com/downloads/) to make MQTT and gRPC requests
- A Postman [account](https://www.postman.com/postman-account/)
- Fork the Postman collections from the [Zilla Quickstart Workspace](https://www.postman.com/aklivity-zilla/workspace/aklivity-zilla-quickstart/overview)
- A running Zilla Quickstart instance.

There are two options to try Zilla: through hosted Zilla Quickstart or running on your own.

### Running Zilla Quickstart Locally

Download and run the Zilla `quickstart` cookbook using this install script. It will start with Zilla and everything you need for this guide.

```bash
wget -qO- https://raw.githubusercontent.com/aklivity/zilla-examples/main/startup.sh | sh -
```

::: note
Alternatively, download [quickstart](https://github.com/aklivity/zilla-docs/releases/latest/download/quickstart.tar.gz) and follow the `README` yourself.
:::

The key components this script will set:

- Configured Zilla instance
- Kafka instance and topics
- Kafka UI at `http://localhost:8080/ui/clusters/local/all-topics` for browsing topics & messages
- gRPC Route Guide server
- MQTT message simulator

Now you can select the `Local Zilla Quickstart` environment from the Postman environments dropdown for the collections to work with the Zilla instance running on `localhost`.

### Running through Hosted Zilla Quickstart

You can run hosted Zilla Quickstart at `quickstart.aklivity.io` and interact with it through the Postman Collection.

::: warning
The live version of the Quickstart is currently down for maintenance, so any requests to `quickstart.aklivity.io` will not work.
:::

## HTTP Kafka Proxy

The Zilla HTTP Kafka Proxy lets you configure application-centric REST APIs and SSE streams that unlock Kafka event-driven architectures.

1. Open the live `http-messages` ([local](http://localhost:8080/ui/clusters/zilla-quickstart-kafka/all-topics/http-messages/messages?limit=100&mode=TAILING) or [remote](https://quickstart.aklivity.io/kafka/ui/clusters/zilla-quickstart-kafka/all-topics/http-messages/messages?limit=100&mode=TAILING)) Kafka topic, which will have all the JSON messages you create. You can switch the filter from `live` to `newest` to see all of the latest messages on the topic.
2. Open the `HTTP Kafka proxy` folder on the Postman collection.
3. Open the live `API Stream` ([local](http://localhost:7114/api/stream) or [remote](https://quickstart.aklivity.io/api/stream)) and scroll to the bottom to view messages fetched from a Kafka topic as a Server-sent Events (SSE) stream. SSE is a text stream over HTTP that directly shows the raw output in a browser tab.
4. Use the `Create a new message` request to update and submit the JSON in the `Body` tab. The new object will appear in the SSE stream and the Kafka topic.
5. Get your Kafka message key from the `http-messages` ([local](http://localhost:8080/ui/clusters/zilla-quickstart-kafka/all-topics/http-messages/messages) or [remote](https://quickstart.aklivity.io/kafka/ui/clusters/zilla-quickstart-kafka/all-topics/http-messages/messages)) topic and use the `Get message by key` request to fetch only your message using your key in the `<key-from-kafka-topic>` path variable.
6. To interact more with Zilla, use the `Additional features` in the Postman collection or copy the code samples.

You can easily configure many common Restful actions with the added benefit of built-in streaming with an SSE endpoint. The `zilla.yaml` config has simple and clear syntax for defining each HTTP endpoint.

::: tabs#yaml

@tab Create

Create a new message.

```yaml{6,7,10,11}
  north_rest_api_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: ../../cookbooks/quickstart/http-zilla.yaml#rest_create -->
```

@tab Read:all

Fetch all messages on the topic.

```yaml{6,7,10,11}
  north_rest_api_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: ../../cookbooks/quickstart/http-zilla.yaml#rest_retrieve_all -->
```

@tab Read:key

Fetch one message by its key.

```yaml{6,7,10,11,13}
  north_rest_api_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: ../../cookbooks/quickstart/http-zilla.yaml#rest_retrieve_id -->
```

@tab Update

Update a message based on its key.

```yaml{6,7,10-12}
  north_rest_api_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: ../../cookbooks/quickstart/http-zilla.yaml#rest_update -->
```

@tab Delete

Produce a blank message for a key.

```yaml{6,7,10-12}
  north_rest_api_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: ../../cookbooks/quickstart/http-zilla.yaml#rest_delete -->
```

@tab Stream:all

Stream all of the messages published on a Kafka topic.

```yaml{6,9}
  north_sse_kafka_mapping:
    type: sse-kafka
    kind: proxy
    routes:
      <!-- @include: ../../cookbooks/quickstart/http-zilla.yaml#sse_stream_all -->
```

@tab Stream:key

Stream messages for a specific key published on a Kafka.

```yaml{6,9,11}
  north_sse_kafka_mapping:
    type: sse-kafka
    kind: proxy
    routes:
      <!-- @include: ../../cookbooks/quickstart/http-zilla.yaml#sse_stream_id -->
```

:::

::: details Full HTTP Proxy zilla.yaml Config

```yaml
<!-- @include: ../../cookbooks/quickstart/http-zilla.yaml -->
```

:::

::: note Where to learn more
[HTTP Kafka proxy Overview and Features](../concepts/kafka-proxies/http-proxy.md) | [Simple CRUD API Example](../tutorials/rest/rest-intro.md) | [Simple SSE Stream Example](../tutorials/sse/sse-intro.md) | [Petstore Demo](https://github.com/aklivity/zilla-demos/tree/main/petstore)
:::

## MQTT Kafka proxy

The Zilla MQTT Kafka Proxy manages MQTT client connections and messages through Kafka topics.

1. Open the live `mqtt-messages` ([local](http://localhost:8080/ui/clusters/zilla-quickstart-kafka/all-topics/mqtt-messages/messages?limit=100&mode=TAILING) or [remote](https://quickstart.aklivity.io/kafka/ui/clusters/zilla-quickstart-kafka/all-topics/mqtt-messages/messages?limit=100&mode=TAILING)) Kafka topic, which will have all of the MQTT messages sent to the broker. You can switch the filter from `live` to `newest` to see all of the latest messages on the topic.
2. Open the `MQTT Kafka proxy` folder on the Postman collection.
3. Connect to the broker with the `Pub/Sub` request. Send one of the saved messages, or you can send any message on any MQTT topic. Subscribe to topics in the **Topics** tab.
4. Observe the MQTT Broker messages on the Kafka topics with your message in the `body` and the MQTT topic as the `key`.
5. Connect to the broker with the `Simulator Topics` request to subscribe to the simulated messages being published to the broker.

A Zilla MQTT broker is defined using three specific Kafka topics. The `messages` ([local](http://localhost:8080/ui/clusters/zilla-quickstart-kafka/all-topics/mqtt-messages/messages) or [remote](https://quickstart.aklivity.io/kafka/ui/clusters/zilla-quickstart-kafka/all-topics/mqtt-messages/messages)) Kafka topic will have all of the MQTT messages sent to the broker, where the MQTT topic is the Kafka message `key` and the MQTT payload is the Kafka message value. Marking messages with the `retain` flag set to true will produce a message on the `retained` ([local](http://localhost:8080/ui/clusters/zilla-quickstart-kafka/all-topics/mqtt-retained/messages) or [remote](https://quickstart.aklivity.io/kafka/ui/clusters/zilla-quickstart-kafka/all-topics/mqtt-retained/messages)) Kafka topic. The `sessions` ([local](http://localhost:8080/ui/clusters/zilla-quickstart-kafka/all-topics/mqtt-sessions/messages) or [remote](https://quickstart.aklivity.io/kafka/ui/clusters/zilla-quickstart-kafka/all-topics/mqtt-sessions/messages)) Kafka topic is used to manage MQTT client connections.

::: code-tabs#yaml

@tab MQTT broker

```yaml{10-12}
<!-- @include: ../../cookbooks/quickstart/mqtt-zilla.yaml#mqtt_broker_mapping -->
```

:::

::: details Full MQTT proxy zilla.yaml Config

```yaml
<!-- @include: ../../cookbooks/quickstart/mqtt-zilla.yaml -->
```

:::

::: note Where to learn more
[Overview and Features](../concepts/kafka-proxies/http-proxy.md) | [Setup an MQTT Kafka broker](../how-tos/mqtt/mqtt.kafka.broker.md) | [Taxi Demo](https://github.com/aklivity/zilla-demos/tree/main/taxi)
:::

## gRPC Kafka proxy

The Zilla gRPC Kafka Proxy lets you implement gRPC service definitions from protobuf files to produce and consume messages via Kafka topics.

1. Open the live `grpc-request` ([local](http://localhost:8080/ui/clusters/zilla-quickstart-kafka/all-topics/grpc-request/messages?limit=100&mode=TAILING&valueSerde=ProtobufDecodeRaw) or [remote](https://quickstart.aklivity.io/kafka/ui/clusters/zilla-quickstart-kafka/all-topics/grpc-request/messages?limit=100&mode=TAILING&valueSerde=ProtobufDecodeRaw)) and `grpc-response`([local](http://localhost:8080/ui/clusters/zilla-quickstart-kafka/all-topics/grpc-response/messages?limit=100&mode=TAILING&valueSerde=ProtobufDecodeRaw) or [remote](https://quickstart.aklivity.io/kafka/ui/clusters/zilla-quickstart-kafka/all-topics/grpc-response/messages?limit=100&mode=TAILING&valueSerde=ProtobufDecodeRaw)) Kafka topics, which will have all of the service methods request and response messages respectively. You can switch the filter from `live` to `newest` to see all of the latest messages on the topic.
2. Open the `gRPC Kafka proxy` folder on the Postman collection.
3. Invoke the `GetFeature` service method with the default message.
4. Observe the requested message payload on the Kafka topic followed by the response message with the `keys` having the same UUID. The gRPC method routing information is captured in the Kafka messages `header` values.
5. Try out the additional RPC method types in the Postman collection.

Zilla is routing all RouteGuide protobuf messages from any gRPC client to a gRPC server through Kafka. The `zilla.yaml` config implements all of the RPC methods from the RouteGuide service protobuf definition.

- **GetFeature** - Uses `Server-side` streaming to produce the client request message and the server's response message.
- **ListFeature** - Uses `Server-side` streaming to produce the client request message and stream the list of server response messages.
- **RecordRoute** - Uses `Client-side` streaming to produce a stream of client request messages and the server's response message.
- **RouteChat** - Uses `Bidirectional` streaming to stream both the client request messages and server's response messages.

::: code-tabs#yaml

@tab RouteGuide Server

```yaml{7,15,24,27-30}
<!-- @include: ../../cookbooks/quickstart/grpc-zilla.yaml#route_guide_proto -->
...
<!-- @include: ../../cookbooks/quickstart/grpc-zilla.yaml#route_guide_service_definition -->
...
<!-- @include: ../../cookbooks/quickstart/grpc-zilla.yaml#route_guide_service_mapping -->
```

@tab RouteGuide Remote Server

```yaml{9-11,14,21-22}
<!-- @include: ../../cookbooks/quickstart/grpc-zilla.yaml#route_guide_interface -->
...
<!-- @include: ../../cookbooks/quickstart/grpc-zilla.yaml#route_guide_server -->
```

@tab route_guide.proto

```protobuf{18,26,32,38}
<!-- @include: ../../cookbooks/quickstart/protos/route_guide.proto -->
```

:::

::: details Full gRPC proxy zilla.yaml Config

```yaml
<!-- @include: ../../cookbooks/quickstart/grpc-zilla.yaml -->
```

:::

::: note Where to learn more
[gRPC Kafka proxy Overview and Features](../concepts/kafka-proxies/http-proxy.md) | [Simple gRPC Server](../tutorials/grpc/grpc-intro.md) | [Full Route Guide example](../how-tos/grpc/grpc.route-guide.service.md)
:::
