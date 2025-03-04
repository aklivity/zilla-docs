---
shortTitle: Kafka
---

# SSE Kafka Proxy

## Overview

Zilla's [SSE-Kafka Proxy](../../../reference/config/bindings/sse-kafka/README.md) provides a seamless binding between Server-Sent Events (SSE) and Kafka, enabling SSE APIs to interact with Kafka’s event-driven architecture. It simplifies integration by allowing SSE clients to consume Kafka messages over HTTP, ensuring efficient real-time streaming with reliability, scalability, and flexible message filtering.

## Key Capabilities

### Protocol Adaptation

The [SSE-Kafka Proxy](../../../reference/config/bindings/sse-kafka/README.md) facilitates seamless integration between **Server-Sent Events (SSE)** and **Kafka**. It enables the adaptation of SSE data streams into Kafka data streams, allowing Kafka `messages` to be delivered to SSE clients over standard HTTP connections.

### Message Filtering

The proxy supports filtering Kafka messages based on **message keys**, **headers**, or a **combination of both**. This feature ensures that clients receive only relevant data, optimizing network usage and enhancing performance by reducing unnecessary data transmission.

### Reliable Delivery

Progress across Kafka topic partitions is conveyed to the SSE client via event `id`. When the stream is interrupted due to an SSE client reconnect, the `last-event-id` header in the reconnect request contains the last received event ID. This enables the SSE stream to resume seamlessly, ensuring no messages are lost and maintaining continuous data delivery.

### Caching

The proxy can be configured to cache recent Kafka messages, enhancing efficiency and reducing the load on Kafka brokers. This allows clients that reconnect or subscribe late to access historical data without repeatedly querying Kafka.

### Tombstone Message Handling

When the SSE-Kafka binding receives a Kafka tombstone (`null` value) message, it sends a `delete` event to the SSE client. The client can identify which message was deleted by referencing the message key from the SSE `delete` event `id`, ensuring accurate data synchronization.

### AsyncAPI Integration

The SSE-Kafka Proxy supports integration with the [AsyncAPI specification](../../../reference/config/bindings/asyncapi/README.md), an open-source initiative for defining asynchronous APIs. This integration enables standardized documentation and management of event-driven architectures, facilitating seamless communication and easier adoption across different services.

## Use Cases

### Enabling Real-Time Data Streaming Over HTTP

By adapting Kafka topics to SSE, applications can push live updates to browsers, mobile devices, and external systems using a simple HTTP connection.

### Simplifying Integration Between SSE and Kafka Services

SSE-Kafka provides a seamless bridge between event-driven Kafka systems and HTTP-based SSE clients, eliminating the need for complex polling mechanisms.

### Delivering Kafka Messages to Large-Scale Consumer Groups

It enables efficient, scalable message delivery to multiple SSE clients, ensuring real-time updates without overwhelming Kafka brokers.

## Examples

Try out SSE-Kafka examples:

- [asyncapi.sse.kafka.proxy](https://github.com/aklivity/zilla-examples/tree/main/asyncapi.sse.kafka.proxy)
- [sse.kafka.fanout](https://github.com/aklivity/zilla-examples/tree/main/sse.kafka.fanout)
