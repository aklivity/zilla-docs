---
shortTitle: Proxy
---

# gRPC Proxy 

## Overview

Zilla's gRPC Proxy acts as an intermediary for managing, routing, and validating gRPC traffic between clients and backend services. It utilizes the [proxy binding](../../../reference/config/bindings/grpc/README.md) with server behavior to decode incoming Proxy v2 protocol streams, transforming them into higher-level application streams for efficient request handling. This enables seamless communication in microservices architectures by ensuring secure, scalable, and well-structured gRPC interactions. With built-in support for authentication, schema validation, and advanced request routing, Zilla simplifies the deployment of gRPC-based systems while enhancing performance and security.

## Key Capabilities

### Proxy v2 Encoding and Decoding
Zilla’s gRPC Proxy leverages Proxy v2 encoding and decoding to efficiently handle gRPC traffic. It transforms incoming Proxy v2 protocol streams into higher-level application streams, enabling seamless communication between clients and backend services. This ensures optimized request processing and protocol abstraction for simplified integration.

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