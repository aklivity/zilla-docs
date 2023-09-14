---
description: This guide will walk through each unique gRPC message request and response design and how Zilla is configured to manage the connection for each.
---

# MQTT Proxy

This guide will walk through each unique gRPC message request and response design and how Zilla is configured to manage the connection for each.

Let's take a look at how Zilla would be configured with a full featured gRPC service. For this, we will use the [route_guide.proto](https://github.com/grpc/grpc-java/blob/master/examples/src/main/proto/route_guide.proto) to define the gRPC service and the method request-response types. You can find examples of running this service in any language on the [gRPC docs](https://grpc.io/docs/languages/) as well as example clients like this one implemented in [java](https://grpc.io/docs/languages/java/basics/#client).

## Step 1: Declaring the broker

A Zilla MQTT server can broker client sessions and all of the messages sent. Additionally, if a client specifies the `retained` flag the message will be copied to a separate topic.

```yaml
mqtt_server:
  type: mqtt
  kind: server
  exit: mqtt_kafka_proxy

mqtt_kafka_proxy:
  type: mqtt-kafka
  kind: proxy
  options:
    topics:
      sessions: mqtt-sessions
      messages: mqtt-messages
      retained: mqtt-retained
```

### Protocol version

v5, no clean_session.

### QOS

At most once (QoS 0)
At least once (QoS 1)
Exactly once (QoS 2)

## Step 2: Routing messages onto Kafka

```yaml{7}
mqtt_kafka_proxy:
  type: mqtt-kafka
  kind: proxy
  options:
    topics:
      sessions: mqtt-sessions
      messages: mqtt-messages
      retained: mqtt-retained
```

there is no routing

topic becomes the key

all messages on the messages topic


## Step 3: Client Session Management

Now that messages are in Kafka we need to send them to the gRPC services responsible for processing them. For this, we will be using the [kafka-grpc](../../reference/config/bindings/binding-kafka-grpc.md) binding.

```yaml{6}
mqtt_kafka_proxy:
  type: mqtt-kafka
  kind: proxy
  options:
    topics:
      sessions: mqtt-sessions
      messages: mqtt-messages
      retained: mqtt-retained
```

### Sessions

### Auth

```yaml
remote_server:
  type: kafka-grpc
  kind: remote_server
  entry: <kafka_cache_client_name>
  options:
    acks: leader_only
  routes:
    - when:
        - topic: request-topic
          reply-to: response-topic
      exit: grpc_client
      with:
        scheme: http
        authority: localhost:9090
grpc_client:
  type: grpc
  kind: client
  options:
    services:
      - route_guide.proto
  routes:
    - when:
        - method: routeguide.RouteGuide/GetFeature
      exit: <http_client_name_for_grpc_host>
```


## Step 3: Retain Flag

```yaml{8}
mqtt_kafka_proxy:
  type: mqtt-kafka
  kind: proxy
  options:
    topics:
      sessions: mqtt-sessions
      messages: mqtt-messages
      retained: mqtt-retained
```

## Try it out

Go check out the [mqtt.kafka.proxy](https://github.com/aklivity/zilla-examples/tree/main/mqtt.kafka.proxy) example for a full implementation of an EchoService.
