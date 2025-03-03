---
shortTitle: gRPC
---

# Kafka gRPC

## Overview

Zilla's [Kafka gRPC binding](../../../reference/config/bindings/kafka-grpc/README.md) acts as a bridge between Kafka streams and gRPC-based services, enabling seamless integration between event-driven messaging and request-response interactions. This binding is ideal for scenarios where Kafka topics need to communicate with remote gRPC services, such as microservices or external APIs, ensuring reliable message delivery, request correlation, and idempotent processing.

## Key Capabilities

### Receiving and Processing
In the `kafka-grpc` binding, gRPC requests are received as **messages** from a designated Kafka `topic` (e.g., `requests`). These messages are then processed and forwarded to the appropriate gRPC service. Once the gRPC service generates a **response**, the result is published back to a response Kafka topic (e.g., `responses`), ensuring a complete request-response cycle.

### Correlation IDs
To maintain the connection between a request and its corresponding response, `kafka-grpc` uses **correlation IDs**. A unique identifier, typically stored in the `zilla:correlation-id` header, is attached to each incoming request. When the response is generated, it retains the same correlation ID, allowing consumers to match responses to their original requests accurately.

### Idempotency Key
To ensure reliability in message processing, `kafka-grpc` supports an **idempotency key**, which prevents duplicate request execution. The key, often stored in a metadata field like `idempotency-key`, helps track whether a request has already been processed, reducing the risk of unintended duplicate actions in distributed systems.

## Use Cases

### Proxy Kafka Stream to External APIs
Zilla’s Kafka gRPC binding enables Kafka topics to act as a proxy for external gRPC APIs. This is useful when integrating event-driven applications with third-party services that rely on gRPC for communication. Instead of directly invoking APIs, messages published to a Kafka topic can be automatically forwarded to remote gRPC endpoints, ensuring decoupled and scalable interactions.

### Event-Driven Workflows
By bridging Kafka with gRPC services, this binding allows event-driven architectures to interact with gRPC-based microservices seamlessly. For example, business events such as user sign-ups, order placements, or status updates can be processed in Kafka and then dispatched to gRPC services for further processing. This ensures asynchronous, scalable, and resilient workflows in distributed systems.