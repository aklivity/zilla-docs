---
shortTitle: Kafka
description: Kafka Protocol in Zilla.
---

# Kafka Protocol

## Introduction

Kafka is a distributed event streaming platform widely used for building real-time data pipelines and streaming applications. However, building such a system can be complicated, especially when there are multiple consumers each with different protocols. Zilla implements the **Kafka Protocol** binding as one of its highlighted features. With Kafka binding, it is possible to bridge Kafka with other protocols, such as HTTP, SSE, WebSocket, MQTT, and gRPC, streamlining the communication process between each component. Zilla enhances Kafka capabilities by integrating schema registry and validation and adding a cache layer that supports headers, validation, conversions, and fan-in.

## Kafka Protocol Overview

The Kafka Protocol is a binary protocol over TCP designed for high-throughput, low-latency communication between Kafka clients and brokers and between Kafka brokers. Each message follows a structured format comprising headers and payload.

### Kafka Wire Protocol Message Structure

Kafka Wire Protocol headers include the following information:

- **API Key**: To identify the request type (Produce, Fetch, etc).
- **Version**: To ensure compatibility.
- **Correlation ID** : To track requests.
- **Client ID**: To identify the client.

The payload contains the actual message data or metadata relevant to the request.

#### Produce API Message Structure

Request structure

```plaintext
Produce Request (Version: 11) => transactional_id acks timeout_ms [topic_data] TAG_BUFFER
 transactional_id => COMPACT_NULLABLE_STRING
 acks => INT16
 timeout_ms => INT32
 topic_data => name [partition_data] TAG_BUFFER
 name => COMPACT_STRING
 partition_data => index records TAG_BUFFER
 index => INT32
 records => COMPACT_RECORDS
```

Response structure

```plaintext
Produce Response (Version: 11) => [responses] throttle_time_ms TAG_BUFFER
 responses => name [partition_responses] TAG_BUFFER
 name => COMPACT_STRING
 partition_responses => index error_code base_offset log_append_time_ms log_start_offset [record_errors] error_message TAG_BUFFER
 index => INT32
 error_code => INT16
 base_offset => INT64
 log_append_time_ms => INT64
 log_start_offset => INT64
 record_errors => batch_index batch_index_error_message TAG_BUFFER
 batch_index => INT32
 batch_index_error_message => COMPACT_NULLABLE_STRING
 error_message => COMPACT_NULLABLE_STRING
 throttle_time_ms => INT32
```

### Supported Kafka APIs

Zilla supports the following Kafka API:

- `Produce` (Key `0`)
- `Fetch` (Key `1`)
- `ListOffsets` (Key `2`)
- `Metadata` (Key `3`)
- `LeaderAndIsr` (Key `4`)
- `OffsetCommit` (Key `8`)
- `OffsetFetch` (Key `9`)
- `FindCoordinator` (Key `10`)
- `JoinGroup` (Key `11`)
- `Heartbeat` (Key `12`)
- `LeaveGroup` (Key `13`)
- `SyncGroup` (Key `14`)
- `InitProducerId` (Key `22`)
- `DescribeConfigs` (Key `32`)

## Supported Kafka Distributions

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
- **SASL (Simple Authentication and Security Layer)**: Supports only PLAIN and SCRAM mechanisms.

Zilla’s native support for Kafka security ensures secure and efficient communication with Kafka clusters.

## Zilla: Beyond Standard Kafka

Zilla introduces cache layers that honor the Kafka caching configuration. It proactively fetches messages to keep the data fresh in preparation for new consumers. Zilla enhances traditional Kafka workflows supported by the following features:

- **Advanced Filter**: Filter messages by message key, headers, or a combination of key and headers.
- **Data Governance**: Validate message schemas with [Schema Registry](../../reference/config/catalogs/apicurio-registry.md) support.
- **Data Conversion**: Support data format conversion from one format to another.
- **Protocol Mapping**: Enable effortless communication with HTTP, WebSocket, and MQTT through native protocol integration.

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
