---
shortTitle: Kafka
---

# MQTT Kafka Proxy

## Overview

The Zilla MQTT Kafka Proxy manages MQTT Pub/Sub connections and messages on and off of Kafka.

An MQTT server acts as a broker between publishers and subscribers. This requires a complex protocol to manage the wide range of IoT devices and use cases. By proxying these messages on and off of Kafka with the [mqtt-kafka](../../../reference/config/bindings/mqtt-kafka/README.md) binding in a [zilla.yaml](../../../reference/config/zilla-cli.md) config, IoT devices can transmit data to a wider range of tech stacks, adapting to more business needs.

Zilla uses specific Kafka topics to store and route MQTT messages, meaning the Kafka architecture can be optimized for MQTT Pub/Sub. MQTT client subscribers and publishers will communicate with Zilla the same as any broker.

## Key Capabilities

### Pub/Sub with Kafka

Zilla manages MQTT publish-subscribe (pub/sub) operations using Kafka, ensuring seamless message flow between MQTT clients and Kafka topics. It utilizes three Kafka topics to handle different aspects of MQTT communication, allowing for efficient data streaming and event-driven processing. The specific topic names can be configured using the [options.topics](../../../reference/config/bindings/mqtt-kafka/proxy.md) property.

### Messages on Kafka

All MQTT [messages](../../../reference/config/bindings/mqtt-kafka/proxy.md) brokered by Zilla are published to a designated Kafka topic. The MQTT message topic is mapped as the Kafka key, enabling efficient lookup, partitioning, and message distribution. This structure ensures that messages are stored reliably and can be consumed by Kafka clients in real time.

### Topic Routing

Zilla provides configurable [routes](../../../reference/config/bindings/mqtt-kafka/proxy.md) to direct MQTT publish and subscribe operations to specific Kafka topics beyond the default `message` topic. This flexibility allows for efficient message organization while ensuring that `session` and `retained` topics remain unaffected by routing changes.

### Retaining Messages

MQTT clients can publish messages with a retain flag, which ensures that a copy is stored in a dedicated `retained` Kafka topic. When a new subscriber joins and requests a replay-on-subscribe, Zilla delivers the retained messages from Kafka, providing a consistent experience for late-joining clients.

### Session Management

Client connection states, including MQTT connect, disconnect, and subscription details, are tracked in a log-compacted Kafka topic dedicated to `sessions`. Each MQTT client ID is used as a key, ensuring that session information is preserved across reconnects and enabling stateful interactions.

### Kafka Consumer Groups for MQTT Sessions

Zilla assigns a dedicated Kafka consumer group to each MQTT client session, following a structured naming format: `zilla:<zilla namespace>-<binding name>-<MQTT client ID>`. This approach optimizes session tracking while minimizing heartbeat traffic. If a client disconnects and does not reconnect within the session expiry interval, Zilla automatically cleans up the corresponding consumer group and session state in Kafka.

## Use Cases

### Bridging MQTT and Modern Applications

Many IoT and messaging-based systems use MQTT for lightweight, efficient communication. However, integrating MQTT with modern applications that rely on different protocols can be complex. An MQTT broker or gateway helps bridge this gap, enabling seamless communication between MQTT devices and other services.

### Real-Time Data Streaming for IoT

IoT devices frequently generate real-time data that needs to be processed and distributed efficiently. By leveraging MQTT, applications can subscribe to device events, process them, and trigger actions with minimal latency. The [Taxi demo](https://github.com/aklivity/zilla-demos/tree/main/taxi) illustrates this by using MQTT to stream live location updates from vehicles, enabling real-time tracking and event handling.

## Examples

Try out MQTT Kafka examples:

- [mqtt.kafka.broker](https://github.com/aklivity/zilla-examples/tree/main/mqtt.kafka.broker)
- [mqtt.kafka.broker.jwt](https://github.com/aklivity/zilla-examples/tree/main/mqtt.kafka.broker.jwt)
