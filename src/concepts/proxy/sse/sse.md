---
shortTitle: Proxy
---

# SSE Proxy

## Overview

Zilla's SSE Proxy serves as a bridge between clients and backend services by managing, routing, and validating SSE traffic. It leverages an SSE Server binding to handle incoming client connections and an SSE Client binding to forward events to backend services, effectively functioning as a proxy for real-time event streaming.

## Key Capabilities

### Inbound and Outbound HTTP Streams

Zilla's SSE Proxy facilitates real-time communication by managing both inbound and outbound HTTP streams. It uses [SSE Server binding](../../../reference/config/bindings/sse/server.md) to accept client connections and [SSE Client binding](../../../reference/config/bindings/sse/client.md) to forward events to backend services. These bindings ensure efficient event-driven communication while abstracting complex connection handling.

### Advanced Request Routing

Zilla enables flexible request routing, allowing SSE messages to be directed dynamically based on custom rules. This ensures that events are efficiently routed to the appropriate backend services, optimizing performance and scalability.

### Authentication Validation

To enhance security, Zilla’s SSE Proxy supports JWT-based authentication through its [JWT guard](../../../reference/config/guards/jwt.md) mechanism. This validates tokens included in client requests, ensuring that only authorized users can access event streams. JWT guards provide fine-grained control over access policies and enhance data security.

### Schema Validation

Zilla ensures data integrity through [catalog-based schema validation](../../../reference/config/catalogs/), which enforces structured event formats before they reach backend services. By validating incoming and outgoing SSE messages against predefined schemas, Zilla prevents malformed data from being processed, improving reliability and maintaining consistency across event-driven architectures.

### Seamless AsyncAPI Integration

Zilla natively integrates with AsyncAPI to provide a standardized way of defining and documenting event-driven APIs. By leveraging [AsyncAPI bindings](../../../reference/config/bindings/asyncapi/README.md), Zilla ensures compatibility with modern microservices architectures and simplifies interoperability with other event-driven systems.

## Use Cases

### API Gateway

Zilla’s SSE Proxy can act as an API Gateway for event-driven applications, managing real-time event streams while enforcing authentication, schema validation, and routing policies. It ensures secure and efficient communication between clients and backend services, reducing backend load by handling persistent SSE connections.

### Multi-Tenant Systems

In multi-tenant architectures, Zilla enables event isolation and access control for different tenants. By leveraging JWT authentication and request routing, it ensures that each tenant only receives relevant event streams, enhancing security and scalability.

## Examples

Try out SSE proxy examples:

- [sse.proxy.jwt](https://github.com/aklivity/zilla-examples/tree/main/sse.proxy.jwt)
