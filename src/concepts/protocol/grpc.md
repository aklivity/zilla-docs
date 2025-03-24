---
shortTitle: gRPC
description: gRPC Protocol in Zilla.
---

# gRPC Protocol

## Introduction

Zilla supports **gRPC (Google Remote Procedure Call)** as a **protocol binding**, designed to enable high-performance, low-latency communication between clients and services in modern distributed systems. gRPC uses HTTP/2 for transport, providing features like bidirectional streaming, flow control, and efficient binary serialization using Protocol Buffers (Protobuf). This makes gRPC ideal for microservices, real-time communication, and APIs requiring high throughput and low latency.

## gRPC Request-Response Flow

![gRPC Request-Response Flow](/grpc/grpc_request_response.png =500x)

1. **Client Stub Invocation**: The client calls a gRPC method via the client stub.
2. **Message Encoding**: The client serializes the request using Protobuf.
3. **HTTP/2 Request Building**: The serialized message is wrapped into an HTTP/2 request.
4. **Data Transport**: The request is sent over the network to the server.
5. **Server Stub Invocation**: The server receives the request and passes it to the server stub.
6. **Message Decoding**: The server deserializes the Protobuf message.
7. **Remote Method Invocation**: The server invokes the appropriate method and generates a response.
8. **Response Processing**: The response follows the reverse path: encoding, HTTP/2 transport, decoding, and client processing.

### gRPC Request Structure

![gRPC Request Structure](/grpc/grpc_request.png =600x)

```protobuf
syntax = "proto3";

service Greeter {
 RPC SayHello (HelloRequest) returns (HelloResponse);
}

message HelloRequest {
 string name = 1;
}

message HelloResponse {
 string message = 1;
}
```

```http
POST /Greeter/SayHello HTTP/2
Content-Type: application/grpc
```

### gRPC Response Structure

![gRPC Response Structure](/grpc/grpc_response.png =600x)

```http
HTTP/2 200 OK
Content-Type: application/grpc

<Serialized Protobuf Payload>
```

::: note Note
While it is possible to perform gRPC calls directly with HTTP, it is advised to call gRPC endpoints through generated code in the designated programming language.
:::

## Supported Features

- **Unary RPC**: Simple request-response model.
- **Server Streaming RPC**: The client sends a single request, and the server streams multiple responses.
- **Client Streaming RPC**: The client streams multiple requests, and the server sends a single response.
- **Bidirectional Streaming RPC**: Both client and server stream data simultaneously.

### Comparing REST API (JSON) vs gRPC API (Protobuf)

| Feature         | REST API (JSON)                              | gRPC API (Protobuf)                                        |
| --------------- | -------------------------------------------- | ---------------------------------------------------------- |
| **Format** | Human-readable test                          | Compact binary                                             |
| **Data Size** | Larger due to text-based format              | More efficient due to binary encoding                      |
| **Debugging** | Easily readable and editable                 | Require tools for decoding                                 |
| **Type Safety** | Not strictly enforced, relies on conventions | Strongly enforced, prevents schema violations              |
| **Performance** | Slower due to text parsing and conversion    | Faster Faster with optimized serialization/deserialization |

## Security

### Securing gRPC with TLS

gRPC encrypt data in transit by utilizing TLS integrated with HTTP/2. Zilla provides support for TLS bindings to enforce encryption and protect gRPC communication.

### Authentication

**Zilla natively supports [JWT-based authentication](../../reference/config/guards/jwt.md)**, using a `guard` implementation that allows seamless validation and access control for protected resources.

**JWT** is a compact, URL-safe token used for authentication and authorization. It consists of three parts:

- **Header**: Contains the type of token (`JWT`) and the signing algorithm (`HS256` or `RS256`).
- **Payload**: Contains claims (user data, expiration, roles, etc.).
- **Signature**: Ensures the token has not been tampered with.

During authentication, the client sends the token in the Authorization header or requests metadata with the Authorization key on each request:

::: code-tabs

@tab HTTP

```http
Authorization: Bearer <JWT-TOKEN>
```

@tab Python

```python
response, call = stub.SayHello.with_call(
 helloworld_pb2.HelloRequest(name="you"),
  metadata=(
 ("Authorization", "Bearer ..."),
 ),
)
```

:::

The server validates the token’s integrity and claims before granting access.

## Zilla: Beyond Standard gRPC

Zilla enhances traditional gRPC workflows by integrating advanced validation, seamless protocol bridging, and dynamic access control.

- **Data Governance**: Validate metadata, payloads, and request/response content with [Schema Registry](../../reference/config/catalogs/apicurio-registry.md) support.
- **Protocol Mapping**: Enable effortless communication with Kafka through native Kafka Wire Protocol integration.
- **Continuous Authorization**: Enforce continuous authorization with real-time Challenge events.

## Zilla: gRPC Use Cases

Zilla leverages gRPC Protocol to provide powerful proxying, event streaming, and secure communication.

- **gRPC Proxy**
  - [Echo](https://github.com/aklivity/zilla/tree/develop/examples/grpc.echo)
  - [Proxy](https://github.com/aklivity/zilla/tree/develop/examples/grpc.proxy)
- **gRPC Kafka Proxy**
  - [Echo](https://github.com/aklivity/zilla/tree/develop/examples/grpc.kafka.echo)
  - [Fanout](https://github.com/aklivity/zilla/tree/develop/examples/grpc.kafka.fanout)
  - [Proxy](https://github.com/aklivity/zilla/tree/develop/examples/grpc.kafka.proxy)

## Reference

[grpc Binding](../../reference/config/bindings/grpc/README.md) The `grpc` support, with `server` or `client` behavior.

[grpc-kafka Binding](../../reference/config/bindings/grpc-kafka/README.md) The `proxy` kind `grpc-kafka` binding adapts gRPC request-response streams to Kafka topic streams.
