# Kafka

Zilla offers support for the following Kafka bindings:

- [Kafka Proxy (<ZillaPlus/>)](#kafka-proxy)
- [Kafka gRPC](#kafka-grpc)

These bindings serve seamless integration, routing, and streamlined Kafka-based interactions. Here's an overview of each binding, its key capabilities, and use cases.

## [Kafka Proxy](./kafka.md)

Zilla's Kafka Proxy binding acts as an intermediary between external and internal Kafka streams. This binding is particularly useful for organizations that need to integrate external Kafka streams into their internal Kafka ecosystem without disrupting existing workflows.

### Key Capabilities:

- Adapt external Kafka topic streams into internal Kafka topic streams.
- Routes topic messages based on predefined rules.
- Security integrations.

### Use Cases:

- Proxy Kafka stream from on-premise Kafka clusters to cloud-based Kafka services (e.g., Confluent Cloud, AWS MSK) or vice versa.
- Isolate sensitive data streams by proxying them through another intermediary.

## [Kafka gRPC](./grpc.md)

Zilla's Kafka gRPC binding bridges the gap between Kafka stream and gRPC-based services. This binding is ideal for scenarios where Kafka topics need to interact with remote gRPC services, such as microservices or external APIs.

### Key Capabilities:

- The binding listens for incoming messages from the predefined request topic, sending gRPC requests based on predefined configuration, then stores the response data into the predefined response topic.
- Support for correlation IDs to match requests and responses.
- Support for idempotency key to prevent multiple requests.

### Use Cases:

- Proxy Kafka stream to external APIs via gRPC for seamless integration with external/ third-party services.
- Event-Driven Workflows: Trigger gRPC-based workflows (e.g., data transformation, validation) in response to Kafka events for end-to-end automation.
