---
shortTitle: HTTP
description: HTTP Protocol in Zilla.
---

# HTTP Protocol

## Introduction

Zilla implements HyperText Transfer Protocol (HTTP) as a **first-class protocol binding**, designed to seamlessly allow high-performance communication between clients and services in modern distributed systems. This enables Zilla to efficiently handle requests, real-time streaming, and secure data exchange, making it well-suited for APIs, event-driven architectures, and microservices. HTTP is a protocol widely used for the web. With Zilla's HTTP support, it is possible for browsers, mobile applications, etc. to interact with Kafka through Zilla.

## HTTP Request-Response Flow

![HTTP Request-Response Flow](/http/aklivity_HTTP_request_response.png)

1. **Request Initiation** – Client sends an HTTP request with method, path, headers, and optional body.
2. **Processing** – Server handles the request, retrieves data, and prepares a response.
3. **Response** – Server returns status, headers, and optional body.
4. **Client Handling** – Client renders or processes the response.

### HTTP Request Structure

![HTTP Request Structure](/http/aklivity_HTTP_request.png)

```http
POST /pets HTTP/1.1
Host: app.domain.com
User-Agent: Mozilla/5.0
Content-Type: application/json
Authorization: Bearer <token>

{
  "type": "cat",
  "name": "Leo"
}
```

### HTTP Response Structure

![HTTP Response Structure](/http/aklivity_HTTP_response.png)

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 234
Cache-Control: no-cache

{
  "message": "Success",
  "pet": {
    "id": 101,
    "type": "cat",
    "name": "Leo"
  }
}
```

## Supported Versions

- **HTTP/1.1** – Widely used, persistent connections, chunked transfers.
- **HTTP/2** – Faster, multiplexed streams, header compression.
- **HTTP/3** (On the Roadmap)

### Differences Between HTTP/1.1 and HTTP/2

| Feature        | HTTP/1.1  | HTTP/2 |
|---------------|----------|--------|
| **Multiplexing** | Requests are handled sequentially (one at a time per connection). | Multiple requests are handled concurrently over a single connection. |
| **Header Compression** | Headers are sent as plain text, making requests larger. | Uses **HPACK compression** to reduce header size. |
| **Connection Reuse** | Persistent connections reduce latency but still handle one request per connection. | A single connection handles multiple streams efficiently. |
| **Performance** | Slower due to request blocking. | Faster due to multiplexing and better resource prioritization. |

## Security

### Securing HTTP with HTTPS

HTTPS (HTTP Secure) is an extension of HTTP that encrypts data using TLS. This prevents eavesdropping, tampering, and man-in-the-middle (MITM) attacks.

Zilla provides support for HTTPS bindings to enforce TLS encryption and protect API communication by leveraging [**`TLS` binding**](../../reference/config/bindings/tls/README.md).

#### TLS Handshake Process

- Client sends a connection request (**ClientHello**).
- Server responds with a TLS certificate (**ServerHello**).
- Client verifies the certificate via a trusted **Certificate Authority** (CA).
- Session key is exchanged securely using asymmetric cryptography.
- Encrypted communication begins over HTTPS.

### Authentication

HTTP is inherently **stateless**, meaning it does not store session information between requests. To manage authentication securely, **JSON Web Tokens (JWT)** are commonly used.

**Zilla natively supports [JWT-based authentication](../../reference/config/guards/jwt.md)**, using `guard` implementation allowing seamless validation and access control for protected resources.

**JWT** is a compact, URL-safe token used for authentication and authorization. It consists of three parts:

- **Header**: Contains the type of token (`JWT`) and the signing algorithm (`HS256` or `RS256`).
- **Payload**: Contains claims (user data, expiration, roles, etc.).
- **Signature**: Ensures the token has not been tampered with.

During authentication, the client sends the token in the Authorization header with each request:

   ```http
   Authorization: Bearer <JWT-TOKEN>
   ```

The server validates the token’s integrity and claims before granting access.

## Zilla: Beyond Standard HTTP

Zilla enhances traditional HTTP workflows by integrating advanced validation, seamless protocol bridging, and dynamic access control.

- **Data Governance**: Validate headers, path parameters, query parameters, and request/response content with [Schema Registry](../../reference/config/catalogs/apicurio-registry.md) support.
- **Protocol Mapping**: Enable effortless communication with Kafka through native Kafka Wire Protocol integration.
- **Continuous Authorization**: Enforce continuous authorization with real-time Challenge events.

## Zilla: HTTP Use Cases

Zilla leverages HTTP Protocol to provide powerful proxying, event streaming, and secure filesystem access.

- **HTTP Proxy**
  - [Echo with JWT](https://github.com/aklivity/zilla-examples/tree/main/http.echo.jwt)
  - [Proxy](https://github.com/aklivity/zilla-examples/tree/main/http.proxy)
- **HTTP Kafka Proxy**
  - [Oneway](https://github.com/aklivity/zilla-examples/tree/main/http.kafka.oneway)
  - [Sync](https://github.com/aklivity/zilla-examples/tree/main/http.kafka.sync)
  - [Async](https://github.com/aklivity/zilla-examples/tree/main/http.kafka.async)
- **HTTP Filesystem Proxy**
  - [Filesystem](https://github.com/aklivity/zilla-examples/tree/main/http.filesystem)
  - [Config Server](https://github.com/aklivity/zilla-examples/tree/main/http.filesystem.config.server)

## Reference

[http Binding](../../reference/config/bindings/http/README.md) The `http` support, with `server` or `client` behavior.

[http-kafka Binding](../../reference/config/bindings/http-kafka/README.md) The `proxy` kind `http-kafka` binding adapts http request-response streams to kafka topic streams.

[http-filesystem Binding](../../reference/config/bindings/http-filesystem/README.md) Binding with `http-filesystem` support, with `proxy` behavior.
