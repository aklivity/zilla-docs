# gRPC

Zilla offers support for the following gRPC bindings:

- [gRPC Proxy](#grpc-proxy)
- [gRPC Kafka Proxy](#grpc-kafka-proxy)

Each binding serves a distinct purpose, enabling seamless integration, routing, and management of gRPC-based interactions.

## [gRPC Proxy](./grpc.md)

Zilla's gRPC Proxy acts as an intermediary by managing, routing, and validating traffic between clients and backend services.

### Key Capabilities:

- Authentication.
- Advanced Request Routing.
- Schema Validation.

### Use Cases:

- API Gateway: Acts as a centralized entry point for managing and routing gRPC requests to other services.

## [gRPC Kafka Proxy](./kafka.md)

The gRPC Kafka Proxy enables gRPC APIs to interact with Kafka's event-driven architecture, simplifying the integration between gRPC clients and Kafka systems.

Zilla supports a migration path from `gRPC` to Kafka-native microservices without requiring changes to gRPC clients.

### Key Capabilities:

- gRPC-to-Kafka Mapping: Translates gRPC API calls into Kafka messages.
- Correlated Request-Response: Ensures message consistency and traceability.
- Message Filtering: Filters Kafka messages for targeted delivery.
- Idempotency: Guarantees no duplicate processing of messages.
- Caching: Improves performance by caching frequently accessed data.
- AsyncAPI Specification Support.

### Use Cases:

- Building event-driven gRPC APIs.
- Simplifying integration between gRPC and Kafka services.

::: note

Also, checkout [Kafka-gRPC Proxy](/concepts/proxy/kafka/grpc.md).

:::
