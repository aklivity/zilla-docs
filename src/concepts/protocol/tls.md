---
shortTitle: TLS
description: TLS Protocol in Zilla.
---

# TLS Protocol

## Introduction

Zilla supports **Transport Layer Security (TLS)** as a **protocol binding**, providing robust encryption and authentication for secure communication over networks. TLS ensures data confidentiality and integrity by encrypting messages between clients and servers, preventing eavesdropping, tampering, and forgery. With support for server and mutual authentication, as well as protocol negotiation via ALPN (Application-Layer Protocol Negotiation) and SNI (Server Name Indication), Zilla enables seamless and secure connections for APIs, microservices, and event-driven architectures, ensuring compliance with modern security standards.

## TLS Key Features

![TLS Handshake](./images/tls-initiation.png =450x)

1. **TLS Handshake** - Establishes a secure connection by agreeing on encryption keys and methods between the client and server.
2. **Certificate verification** - TLS ensures authenticity by verifying the server’s X.509 certificate against a trusted Certificate Authority (CA) to prevent man-in-the-middle attacks.
3. **Server Name Indication (SNI) for Virtual Hosting** - SNI allows multiple TLS-protected domains to be hosted on the same IP address by specifying the desired hostname during the handshake.
4. **Application-Layer Protocol Negotiation (ALPN) for Protocol Selection** - ALPN enables automatic selection of the appropriate application protocol (e.g., HTTP/2, MQTT) during the TLS handshake for seamless communication.

## Security

### Securing Protocols with TLS

TLS provides encryption, integrity, and authentication for network communication, ensuring data remains secure from eavesdropping and tampering. TLS can be applied to multiple protocols to enhance security and prevent unauthorized access.

- **[HTTP](./http.md#securing-http-with-https)** - HTTPS is the secure version of HTTP, where TLS encrypts web traffic to protect data from interception and attacks.
- **[Kafka](./kafka.md#encryption-with-ssltls)** - Kafka with TLS ensures encrypted communication between brokers and clients, preventing unauthorized access to message streams.
- **[gRPC](./grpc.md#securing-grpc-with-tls)** - gRPC with TLS secures remote procedure calls by encrypting messages over HTTP/2 to maintain data confidentiality.
- **[MQTT](./mqtt.md#securing-mqtt-with-tls)** - MQTTS is the secure version of MQTT, where TLS encrypts messages to protect IoT device communication.
- **[SSE](./sse.md#securing-sse-with-tls)** - SSE with TLS secures real-time server-sent events by encrypting data over an HTTPS connection.
- **[WS](./ws.md#securing-ws-with-tls)** - WSS is the secure version of WebSockets, where TLS encrypts bi-directional real-time communication between clients and servers.
- **[TCP](./tcp.md#securing-tcp-with-tls)** - TCP with TLS (STARTTLS) upgrades unencrypted TCP connections to secure TLS-encrypted communication to protect transmitted data.
- **[Filesystem](./filesystem.md#https)** - By utilizing HTTP and TLS binding, a TLS encryption can be enforced on the Filesystem bindings.

Zilla also supports [vaults](../security/vault/README.md#vault) for secure key storage, such as a `filesystem` vault that stores PKCS#12 certificates used by the TLS binding to decrypt incoming traffic.

## Zilla: Beyond Standard TLS

Zilla strengthens TLS-based communication by optimizing security, routing, and protocol handling for modern distributed systems.

- **Intelligent TLS Termination**: Provides flexible TLS termination and pass-through modes, allowing selective decryption for efficient traffic handling and reduced backend load.
- **Dynamic SNI-Based Routing**: Leverages Server Name Indication (SNI) to route TLS connections dynamically, enabling multi-tenant deployments and efficient service discovery.
- **Seamless ALPN Negotiation**: Automatically selects the optimal application-layer protocol (e.g., HTTP/2, gRPC, MQTT) during the TLS handshake for streamlined communication.

## Zilla: TLS Use Cases

Zilla enhances TLS-based communication by providing secure proxying, traffic reflection, and optimized data transmission in distributed environments.

- **TLS Proxy**
    - [Echo](https://github.com/aklivity/zilla/tree/develop/examples/tls.echo)
    - [Reflect](https://github.com/aklivity/zilla/tree/develop/examples/tls.reflect)

Zilla's TLS implementation ensures secure communication across various protocols, supporting use cases such as encrypted microservices communication, secure IoT messaging, and private data exchange while seamlessly integrating with [other protocols](#securing-protocols-with-tls) such as HTTP and MQTT.

## Reference

[tls binding](../../reference/config/bindings/tls/README.md) Defines a binding with `tls` protocol support, with `server` or `client` behavior.

[tls proxy binding](../../reference/config/bindings/tls/proxy.md) The `proxy` kind `tls` binding detects `ClientHello` `server_name` extension to provide TLS virtual hosting by routing based on server name.
