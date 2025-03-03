---
shortTitle: Proxy
---

# gRPC Proxy

## Overview

Zilla's gRPC Proxy serves as an intermediary, managing, routing, and validating gRPC traffic between clients and backend services. It utilizes the [grpc](../../../reference/config/bindings/grpc/README.md) binding to handle both server and client behaviors, effectively facilitating seamless communication in distributed systems.

## Key Capabilities

### Inbound and Outbound gRPC Streams

Zilla's gRPC Proxy manages both inbound and outbound gRPC streams, adapting HTTP request-response streams to gRPC request-response streams. The [server](../../../reference/config/bindings/grpc/server.md) kind grpc binding handles incoming client connections, supporting content types like `application/grpc+proto` and `application/grpc-web+proto`. Conversely, the [client](../../../reference/config/bindings/grpc/client.md) kind grpc binding manages outbound connections, adapting gRPC streams to HTTP request-response streams.

### Authentication with TLS

Zilla supports TLS authentication to secure gRPC communications. By encrypting data in transit and verifying client-server identities, it prevents unauthorized access and ensures data integrity. This enhances security in distributed systems where sensitive information is exchanged over gRPC connections.

### Advanced Request Routing

With flexible request routing, Zilla enables dynamic traffic management for gRPC services. It allows routing decisions based on metadata, request content, or authentication credentials, ensuring efficient load balancing and optimized service discovery within microservices architectures.

### Schema Validation

Zilla enforces [schema validation](../../../reference/config/catalogs/) to maintain data consistency and reliability in gRPC communications. By validating request and response messages against predefined schemas, it prevents malformed data from propagating through the system, improving robustness and interoperability between services.

## Use Cases

### API Gateway

Zilla’s gRPC Proxy can function as an API Gateway for gRPC-based microservices, handling authentication, request validation, and advanced routing. It streamlines communication between clients and backend services while enforcing security policies like TLS authentication and schema validation.

### Microservices Communication

Zilla simplifies service-to-service communication in distributed architectures by acting as an intermediary between gRPC-based microservices. It ensures secure, efficient, and scalable request handling, enabling seamless integration across different services.

## Examples

Try out gRPC proxy examples:

- [grpc.proxy](https://github.com/aklivity/zilla-examples/tree/main/grpc.proxy)
