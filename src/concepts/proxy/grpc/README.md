# gRPC

Zilla offers support for the following gRPC Bindings: gRPC Proxy and gRPC Kafka Proxy. Each bindings serve distinct purposes, enabling seamless integration, routing, and management of gRPC-based interactions.

## gRPC Proxy

Zilla's gRPC Proxy acts as an intermediary by managing, routing, and validating traffic between clients and backend services.

Key Capabilities:

- Authentication.
- Advanced Request Routing.
- Validates request and response schemas.

Use Cases:

- API Gateway: Acts as a centralized entry point for managing and routing gRPC requests to other services.

## gRPC Kafka Proxy

The gRPC Kafka Proxy enables gRPC APIs to interact with Kafka's event-driven architecture, simplifying the integration between gRPC clients and Kafka systems.

Key Capabilities:

- gRPC-to-Kafka Mapping: Translates gRPC API calls into Kafka messages.
- Correlated Request-Response: Ensures message consistency and traceability.
- Message Filtering: Filters Kafka messages for targeted delivery.
- Idempotency: Guarantees no duplicate processing of messages.
- Caching: Improves performance by caching frequently accessed data.
- Support loading specification from AsyncAPI configuration.

Use Cases:

- Building event-driven gRPC APIs.
- Simplifying integration between gRPC and Kafka services.
