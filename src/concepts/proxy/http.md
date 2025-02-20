# HTTP

Zilla offers support for the following HTTP Bindings: HTTP Proxy, HTTP Kafka Proxy, and HTTP Filesystem. Each bindings serve distinct purposes, enabling seamless integration, routing, and management of HTTP-based interactions.

## HTTP Proxy

Zilla's HTTP Proxy acts as an intermediary by managing, routing, and validating traffic between clients and backend services.

Key Capabilities:

- Authentication.
- Advanced Request Routing.
- Validates request and response schemas.

Use Cases:

- API Gateway: Acts as a centralized entry point for managing and routing API requests to other services.

## HTTP Kafka Proxy

The HTTP Kafka Proxy enables REST APIs to interact with Kafka's event-driven architecture, simplifying the integration between HTTP clients and Kafka systems.

Key Capabilities:

- REST-to-Kafka Mapping: Translates REST API calls into Kafka messages.
- Correlated Request-Response: Ensures message consistency and traceability.
- Message Filtering: Filters Kafka messages for targeted delivery.
- Idempotency: Guarantees no duplicate processing of messages.
- Caching: Improves performance by caching frequently accessed data.

Use Cases:

- Building event-driven REST APIs.
- Simplifying integration between HTTP and Kafka services.
- Delivering Kafka messages to large-scale consumer groups.

## HTTP Filesystem

The HTTP Filesystem binding transforms Zilla into a versatile web server, enabling file serving and management directly from the filesystem. It’s ideal for scenarios requiring lightweight, configurable file hosting.

Key Capabilities:

- Configurable File Routing: Customizable paths for serving files.
- Static File Serving: Efficiently delivers static content.
- File Operations: Supports CREATE, UPDATE, and DELETE operations.
