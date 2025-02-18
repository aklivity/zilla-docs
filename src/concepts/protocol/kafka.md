---
shortTitle: Kafka
description: Kafka Protocol in Zilla.
---

# Kafka Protocol

## Introduction

Kafka is a distributed event streaming platform widely used for building real-time data pipelines and streaming applications. However, building such a system can be complicated, especially when there are multiple consumers each with different protocols. Zilla implements the **Kafka Protocol** binding as one of its highlighted features. With Kafka binding, it is possible to bridge Kafka with other protocols, such as HTTP, SSE, WebSocket, MQTT, and gRPC, streamlining the communication process between each component. Zilla enhances Kafka capabilities by integrating schema registry and validation and adding a cache layer that supports headers, validation, conversions, and fan-in.

## Kafka Protocol Overview

The Kafka Protocol is a binary protocol over TCP designed for high-throughput, low-latency communication between Kafka clients and brokers. It supports various operations such as producing messages, consuming messages, and managing topics and partitions.

### Key Concepts

- **Broker**: A Kafka server that stores data and serves clients.
- **Topic**: A category or feed name to which messages are published.
- **Partition**: A division of a topic, allowing for parallel processing and scalability.
- **Producer**: A client that publishes messages on a topic.
- **Consumer**: A client that subscribes to topics and processes the published messages.
- **Consumer Group**: A group of consumers that work together to consume messages from a topic, ensuring each message is processed by only one consumer in the group.

## Kafka Protocol Flow

![Kafka Protocol Flow](/kafka/kafka_flow.png)

1. **Producer Sends Message** - A producer sends a message to a Kafka topic.
2. **Broker Stores Message** – The Kafka broker stores the message in the appropriate topic partition.
3. **Consumer Fetches Message** – A consumer (or consumer group) fetches the message from the topic partition.
4. **Consumer Processes Message** – The consumer (or consumer group) processes the message and commits the offset.

### Kafka Message Structure

![Kafka Message Structure](/kafka/kafka_message.png)

```plaintext
Message:
 Key: "user-123"
 Value: "{\"event\": \"login\", \"timestamp\": 1633024800}"
 Compression Type: "snappy"
 Headers:
 - "content-type: application/json"
 - "correlation-id: abcdef"
 Partition: 0
 Offset: 12345
 Timestamp: 1633024800000
```

## Supported Kafka Versions

- Apache Kafka
- Aiven Kafka
- Amazon MSK
- Confluent Cloud
- Redpanda

## Security

### Securing Kafka

Kafka provides robust security features to protect data in transit and authenticate clients. Zilla supports encryption and authentication mechanisms, ensuring secure communication with Kafka clusters.

#### Encryption with SSL/TLS

Kafka uses SSL/TLS to encrypt data between clients and brokers, preventing eavesdropping, tampering, and man-in-the-middle (MITM) attacks. Zilla supports:

- Kafka over SSL/TLS.
- Kafka over SSL/TLS with client certificates.
- Kafka with mutual TLS (mTLS), commonly used in Amazon MSK.

#### Authentication

Kafka supports multiple authentication methods to verify client identities, including:

- **SSL/TLS Client Authentication**: Clients authenticate using SSL/TLS certificates.
- **SASL (Simple Authentication and Security Layer)**: Supports mechanisms like PLAIN, SCRAM, LDAP, and GSSAPI (Kerberos).

Zilla’s native support for Kafka security ensures secure and efficient communication with Kafka clusters.

## Zilla: Beyond Standard Kafka

Zilla introduces cache layers that honor the Kafka caching configuration. It proactively fetch messages to keep the data fresh in preparation for new consumers. Zilla enhances traditional Kafka workflows supported by the following features:

- **Advanced Filter**: Filter messages by message key, headers, or a combination of key and headers.
- **Data Governance**: Validate message schemas with [Schema Registry](../../reference/config/catalogs/apicurio-registry.md) support.
- **Data Conversion**: Support data format conversion from one format to another.
- **Protocol Mapping**: Enable effortless communication with HTTP, WebSocket, and MQTT through native protocol integration.
- **Continuous Authorization**: Enforce continuous authorization with real-time Challenge events.

## Zilla: Kafka Use Cases

Zilla leverages Kafka Protocol to provide powerful event streaming, data integration, and secure communication.

- **Kafka HTTP Proxy**
  - [http.kafka.crud](https://github.com/aklivity/zilla-examples/tree/main/http.kafka.crud)
  - [http.kafka.async](https://github.com/aklivity/zilla-examples/tree/main/http.kafka.async)
  - [http.kafka.sync](https://github.com/aklivity/zilla-examples/tree/main/http.kafka.sync)
- **Kafka MQTT Proxy**
  - [mqtt.kafka.broker](https://github.com/aklivity/zilla-examples/tree/main/mqtt.kafka.broker)
- **Kafka gRPC Proxy**
  - [grpc.kafka.echo](https://github.com/aklivity/zilla-examples/tree/main/grpc.kafka.echo)
  - [grpc.kafka.fanout](https://github.com/aklivity/zilla-examples/tree/main/grpc.kafka.fanout)
  - [grpc.kafka.proxy](https://github.com/aklivity/zilla-examples/tree/main/grpc.kafka.proxy)
- **AsyncAPI**
  - [asyncapi.kafka.proxy](https://github.com/aklivity/zilla-examples/tree/main/asyncapi.http.kafka.proxy)
- **SSE**
  - [sse.kafka.fanout](https://github.com/aklivity/zilla-examples/tree/main/sse.kafka.fanout)

## Reference

[kafka Binding](../../reference/config/bindings/kafka/README.md) The `kafka` support, `client`, `cache_server`, and `cache_client` behavior.

[kafka-grpc Binding](../../reference/config/bindings/kafka-grpc/README.md) The `remote_server` kind `grpc-kafka` binding adapts kafka topic streams to grpc request-response streams.

[kafka-proxy Binding](../../reference/config/bindings/kafka-proxy/README.md) The `proxy` kind adapts kafka topic streams to kafka topic stream.
