---
description: This guide will walk through each unique way Zilla manages MQTT Pub/Sub connections and messages.
---

# MQTT Proxy

This guide will walk through each unique way Zilla manages MQTT Pub/Sub connections and messages.

An MQTT server typically acts as a broker between publishers and subscribers. This requires a complex protocol to manage the wide range of small IoT device use cases. By proxying these messages on and off of Kafka with the [mqtt-kafka](../../reference/config/bindings/binding-mqtt-kakfa.md) binding, IoT devices can transmit data to a wider range of tech stacks and adapting to business needs.

Unlike other proxies, Zilla manages the different MQTT topics instead of passing them down to kafka. This allows more control over the Kafka architecture. Subscribers and publishers won't need to do any extra work since Zilla supports the native MQTT protocol.


> MQTT reflect kinda like echo but the relay is from all clients and not a 1:1. Pub/Sub implies 1-many pub and 1-many sub.

## Step 1: Declaring the broker

A Zilla MQTT server can manage client sessions and broker all of the messages sent.

```yaml
mqtt_server:
  type: mqtt
  kind: server
  exit: mqtt_kafka_proxy

mqtt_kafka_proxy:
  type: mqtt-kafka
  kind: proxy
```

### Protocol version

MQTT v5, no clean_session.

::: info Feature Coming Soon <HopeIcon icon="circle-right"/>
MQTT v3.1 and v3.1.1 support is currently on the [Zilla roadmap](https://github.com/orgs/aklivity/projects/4). Star and watch the [Zilla repo](https://github.com/aklivity/zilla/releases) for new releases!
:::

### QOS

At most once (QoS 0)
At least once (QoS 1)
Exactly once (QoS 2)

::: info Feature Coming Soon <HopeIcon icon="circle-right"/>
At least once (QoS 1) and Exactly once (QoS 2) delivery will be support is currently on the [Zilla roadmap](https://github.com/orgs/aklivity/projects/4). Star and watch the [Zilla repo](https://github.com/aklivity/zilla/releases) for new releases!
:::

## Step 2: Pub/Sub message reflect with Kafka

Zilla manages MQTT pub/sub using three kafka topics. The specific topic names can be configured using the [options.topics](../../reference/config/bindings/binding-mqtt-kafka.md#options-topics) property

```yaml{7-8}
mqtt_kafka_proxy:
  type: mqtt-kafka
  kind: proxy
  options:
    topics:
      sessions: mqtt-sessions
      messages: mqtt-messages
      retained: mqtt-retained
```

The message topic becomes the kafka key

all messages on the messages topic

When the `retain` flag is set, a copy of the message is stored on the `retained` topic


## Step 3: Client Session Management

Now that messages are in Kafka we need to send them to the gRPC services responsible for processing them. For this, we will be using the [mqtt-kafka](../../reference/config/bindings/binding-mqtt-kakfa.md) binding.

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


## Step 3: Authorizing clients

A client connection to the MQTT server can be guarded by the [jwt](../../reference/config/guards/guard-jwt.md) guard.

```yaml{2,19,25}
guards:
  jwt_mqtt_auth:
    type: jwt
    options:
      issuer: https://auth.example.com
      audience: https://api.example.com
      keys:
        - kty: RSA
          n: qq...aDQ==
          e: AQAB
          alg: RS256
          kid: example
bindings:
  mqtt_server:
    type: mqtt
    kind: server
    options:
      authorization:
        jwt_mqtt_auth:
          credentials:
            connect:
              username: Bearer {credentials}
    routes:
      - guarded:
          jwt_mqtt_auth:
            - mqtt:stream
        exit: mqtt_kafka_proxy

```

## Try it out

Go check out the [mqtt.kafka.proxy](https://github.com/aklivity/zilla-examples/tree/main/mqtt.kafka.proxy) example for a full implementation of an EchoService.
