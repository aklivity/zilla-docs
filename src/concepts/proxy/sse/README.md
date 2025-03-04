# SSE

Zilla offers support for the following SSE capabilities: SSE Proxy and SSE Kafka Proxy. Each bindings serve distinct purposes, enabling seamless integration, routing, and management of SSE-based interactions. Here's an overview of each binding, its key capabilities, and use cases.

## SSE Proxy

Zilla's SSE Proxy acts as an intermediary by managing, routing, and validating traffic between clients and backend services. This utilizes SSE Server binding to receive incoming SSE connections and SSE Client binding to forward events to backend services, making it act as a proxy.

Key Capabilities:

- Continuous authentication validation.
- Advanced Request Routing.
- Schema validation for requests and responses.
- Support loading specification from AsyncAPI configuration.

Use Cases:

- API Gateway: Acts as a centralized entry point for managing and routing API requests to other services.
- Multi-Tenant Systems: Route SSE connections for different tenants to dedicated backend services.

## SSE Kafka Proxy

The SSE Kafka Proxy enables SSE APIs to interact with Kafka's event-driven architecture, simplifying the integration between SSE clients and Kafka systems.

Key Capabilities:

- Routes SSE requests into appropriate Kafka topic messages.
- Message Filtering: Filters Kafka messages for targeted delivery.
- Caching: Improves performance by caching frequently accessed data.
- Support loading specification from AsyncAPI configuration.

Use Cases:

- Simplifying integration between SSE and Kafka services.
- Delivering Kafka messages to large-scale consumer groups.
