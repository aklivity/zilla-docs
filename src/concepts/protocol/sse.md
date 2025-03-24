---
shortTitle: SSE
description: SSE Protocol in Zilla.
---

# SSE Protocol

## Introduction

Zilla implements **Server-Sent Events (SSE)** as a protocol binding, enabling real-time data streaming over HTTP and seamlessly integrating with Kafka for event-driven architectures. SSE provides an efficient way to push updates from servers to clients over a persistent connection, eliminating the need for polling while maintaining compatibility with standard HTTP infrastructure. With Zilla's SSE-Kafka binding, Kafka events can be streamed directly to HTTP clients, enabling real-time dashboards, notifications, and microservices without complex middleware. By leveraging schema registry, caching, and protocol conversion, Zilla simplifies the interoperability between Kafka and HTTP-based consumers, making it easier to build scalable and efficient event-driven systems.

## SSE Workflow

![SSE Workflow](./images/sse-workflow.png =500x)

### How SSE Works

1. **Client Request** - The client initiates a request to the server by creating a new `EventSource` object in JavaScript, specifying the URL of the server endpoint that will handle the SSE.
2. **Server Response** - The server accepts the incoming HTTP request and keeps the connection open. The response should have a `Content-Type` of `text/event-stream`. The server can then send messages to the client at any time by writing to this open connection.
3. **Message Format** - The server sends messages in a specific format. Each message is a block of text terminated by a pair of newlines. A message can consist of one or more lines of text in the format `field: value`. The most common field is `data:`, which contains the actual content of the message. Other fields include `id:` for setting an event ID and `event:` for specifying an event type.
    Example of a server message:

    ```js
    id: 1
    event: update
    data: {"message": "This is an update"}
    ```

4. **Client Handling** - On the client side, the `EventSource` object listens for messages from the server. It triggers an event for each message received. The client can listen for generic messages or specific event types.
5. **Reconnection** - If the connection is lost, the `EventSource` object will automatically attempt to reconnect to the server. The server can suggest a delay before reconnection attempts by sending a `retry:` field in the message.
6. **Connection Termination** - The client or server can terminate the connection. The client can close the connection by calling `eventSource.close()`. The server can end the connection by closing the HTTP response.

### Key Features of SSE

- **Unidirectional Streaming** - Unlike regular HTTP, where the client repeatedly requests updates, SSE allows the server to push data continuously.
- **Persistent Connection** - Maintains a long-lived connection instead of requiring multiple HTTP requests.
- **Automatic Reconnection** - If the connection drops, SSE retries without extra client logic.
- **Lightweight Alternative** - Uses standard HTTP without the complexity of WebSockets.

## Security

### Securing SSE with TLS

SSE provide a unidirectional connection where the server pushes updates to the client. However, without encryption, SSE streams can be vulnerable to interception and man-in-the-middle (MITM) attacks. To enhance security, SSE can operate over TLS (Transport Layer Security) using HTTPS instead of HTTP, ensuring that all transmitted data is encrypted and protected from unauthorized access or tampering.

Zilla provides support for [TLS bindings](../../reference/config/bindings/tls/README.md) to enforce secure communication between SSE clients and servers, ensuring confidentiality and integrity of real-time event streams. By using TLS, organizations can secure SSE-based applications such as live notifications, financial data feeds, and real-time dashboards.

### JWT Guard for SSE

While TLS secures data transmission, JWT (JSON Web Token) authentication ensures that only authorized clients can access SSE streams. With JWT, the server verifies the client’s identity before establishing the event stream, preventing unauthorized access. JWT tokens contain claims that define user roles, access permissions, and expiration times, making it possible to enforce fine-grained access control.

Zilla provides support for [JWT Guard](../../reference/config/guards/jwt.md) to authenticate SSE connections, ensuring that only clients with valid JWT tokens can subscribe to event streams. This is especially useful for applications requiring user-specific real-time updates, such as personalized notifications or financial market data streams.

## Zilla: Beyond Standard SSE

Zilla serves as an intelligent gateway for SSE, seamlessly bridging real-time event streams between Kafka, HTTP, and SSE clients while ensuring security, reliability, and efficiency.

- **Bridging SSE with Kafka**: Zilla’s SSE-Kafka binding allows direct streaming of Kafka events to SSE clients, enabling real-time data delivery from a high-throughput event store.
- **Message Filtering**: Zilla enables [fine-grained message filtering](/concepts/proxy/sse/kafka.md#message-filtering) for SSE streams, allowing clients to receive only relevant events based on predefined criteria, reducing unnecessary data transfer and improving efficiency.
- **Reliable Delivery**: Zilla ensures [reliable event delivery](/concepts/proxy/sse/kafka.md#reliable-delivery) to SSE clients by leveraging Kafka’s durability and replayability, preventing message loss and enabling clients to reconnect and resume streams from where they left off.
- **Schema Validation**: Zilla integrates with [schema registries](../../reference/config/catalogs/apicurio-registry.md), ensuring SSE messages conform to predefined formats, improving data consistency and preventing malformed data from propagating.
- **Security and Access Control**: Zilla enhances SSE security with JWT authentication, role-based access control (RBAC), and token validation, ensuring that only authorized clients can subscribe to event streams.

## Zilla: SSE Use Cases

Zilla leverages the Server-Sent Events (SSE) protocol to enable efficient unidirectional communication, real-time event streaming, and secure data delivery, ensuring scalable and reliable connections between Kafka, HTTP, and SSE clients.

- **SSE Proxy**
    - [SSE with JWT](https://github.com/aklivity/zilla/tree/develop/examples/sse.proxy.jwt)
- **SSE Kafka Proxy**
    - [Simple Stream](../../tutorials/sse/sse-intro.md)
    - [Fanout](https://github.com/aklivity/zilla/tree/develop/examples/sse.kafka.fanout)
    - [TodoMVC CQRS Demo](https://github.com/aklivity/zilla-demos/tree/main/todo-mvc-cqrs)

## Reference

[sse binding](../../reference/config/bindings/sse/README.md) The `sse` support, with `server` or `client` behavior.

[sse-kafka binding](../../reference/config/bindings/sse-kafka/README.md) The `sse-kafka` proxy binding for adapting `sse` data streams to `kafka` data streams.

