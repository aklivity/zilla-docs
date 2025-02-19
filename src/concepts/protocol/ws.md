---
shortTitle: WS
description: WS Protocol in Zilla.
---

# WS Protocol

## Introduction

Zilla implements **WebSockets (WS)** as a **protocol binding**, designed to enable full-duplex, low-latency communication between clients and servers in distributed environments. This empowers Zilla to support real-time, event-driven interactions, making it ideal for applications such as live notifications, collaborative tools, and interactive web experiences that demand persistent, high-performance connections.

## WS Communication 

The WebSocket protocol enables ongoing, full-duplex, bidirectional communication between a web client and a web server over an underlying TCP connection. The protocol is designed to allow clients and servers to communicate in realtime, allowing for efficient and responsive data transfer in web applications.

### WS Communication Workflow

![WS Communication Workflow](./images/websocket-connection.png)

Here's a step-by-step explanation of how WebSocket works:

1. **Connection initiation** - The client and the server initiate the process of establishing a WebSocket connection through an opening handshake, which consists of an `HTTP/1.1 request` and `response` exchange.

    Here is an example of the HTTP request and response for WebSocket connection initiation:

    ```make Client Request
    GET /chat HTTP/1.1
    Host: example.com
    Connection: Upgrade
    Upgrade: websocket
    Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
    Sec-WebSocket-Version: 13
    ```
    
    ```make Server Response
    HTTP/1.1 101 Switching Protocols
    Upgrade: websocket
    Connection: Upgrade
    Sec-WebSocket-Accept: s3pPLMBiTxaQ9kZCZrXkE9s7wE3R4Kkg1s5H1YcG3uo=
    ```

2. **Data transmission** - Once the connection is established, data is sent in both directions as messages; for example, the client sends a message like `{"action": "sendMessage", "content": "Hello"}` and the server responds with `{"status": "ok", "messageId": 123}`.

3. **Connection termination** - Either the client or server initiates the closing handshake, sending a close frame to gracefully terminate the connection, and the other party acknowledges the closure; for example, the client sends `{"action": "close"}`, and the server responds with `{"status": "closed"}`.

### WS Frame Structure

![WS Frame Structure](./images/websocket-frame-structure.png)

The WebSocket frame structure consists of several components:
- **FIN (1 bit)** – Indicates if this is the final fragment (1 for final, 0 for more frames).
- **RSV1, RSV2, RSV3 (1 bit each)** – Reserved for extensions, usually set to 0.
- **Opcode (4 bits)** – Defines the type of frame (e.g., 0x1 for text, 0x2 for binary, 0x8 for close).
- **Mask (1 bit)** – Specifies if the payload is masked (1 for client-to-server, 0 for server-to-client).
- **Payload Length (7, 16, or 64 bits)** – Defines the size of the payload (small values fit in 7 bits, larger require extra bytes).
- **Masking Key (32 bits, optional)** – A key used to XOR the payload (only present if the mask bit is 1).
- **Payload Data (variable size)** – The actual message content, either text or binary.

## Security

### Securing WS with TLS

WebSocket is a communication protocol that enables real-time, bidirectional data exchange between clients and servers. To ensure secure transmission, WebSocket can operate over TLS (Transport Layer Security) using WSS (WebSocket Secure), which encrypts data and protects against unauthorized interception, data tampering, and man-in-the-middle (MITM) attacks.

Zilla provides support for [TLS bindings](https://docs.aklivity.io/zilla/latest/reference/config/bindings/tls/) to enforce secure communication between WebSocket clients and servers, ensuring that all messages are encrypted in transit and protected from unauthorized access or tampering.

### JWT Guard

Zilla provides support for [JWT Guard](https://docs.aklivity.io/zilla/latest/reference/config/guards/jwt.html) to enable authentication and authorization using JSON Web Tokens (JWT), ensuring that only trusted clients can access protected resources by validating token integrity and claims.

## Zilla: Beyond Standard TCP

Zilla serves as an intelligent gateway for WebSocket (WS) connections, managing both inbound and outbound data streams.

- **Dynamic Routing**: Routes WebSocket connections based on conditions like protocol and path, ensuring traffic is directed efficiently.
- **Full-Duplex Communication**: Converts HTTP streams into WebSocket streams, enabling continuous two-way communication.
- **Secure Connections**: Integrates TLS binding for encrypted WebSocket communication, ensuring data privacy.
- **Data Governance**: Leverages [Schema Registry](../../reference/config/catalogs/apicurio-registry.md) for message validation, ensuring data integrity and consistent structure in WS communications.

## Zilla: WS Use Cases

Zilla leverages the WebSocket protocol to provide powerful bidirectional communication, real-time event streaming, and secure data exchange, ensuring efficient and persistent connections between clients and servers.

- **WS Proxy** 
    - [Echo](https://github.com/aklivity/zilla-examples/tree/main/ws.echo)
    - [Reflect](https://github.com/aklivity/zilla-examples/tree/main/ws.reflect)

## Reference

[ws Binding](../../reference/config/bindings/ws/README.md) The `ws` support, with `server` or `client` behavior.
