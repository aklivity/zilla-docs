---
shortTitle: TCP
description: TCP Protocol in Zilla.
---

# TCP Protocol

## Introduction

Zilla implements **Transmission Control Protocol (TCP)** as a **first-class protocol binding**, designed to enable reliable, high-performance communication between systems in distributed environments. This empowers Zilla to handle bidirectional, low-latency, and stream-based data exchange, making it ideal for services that require fast and dependable connections, such as IoT devices, real-time data pipelines, and microservices that need direct, high-throughput communication.

## TCP Key Features

1. **Connection-Oriented Communication** - A TCP connection must be established before data transmission using a three-way handshake to ensures both parties are ready to communicate.
2. **Reliable** - TCP guarantees that all sent data is received correctly and in order by using acknowledgments and retransmissions to handle packet loss or errors.
3. **Flow Control** - TCP employs a sliding window mechanism to prevent overwhelming the receiver.
4. **Congestion Control** - TCP dynamically adjusts the data transmission rate based on network conditions.
5. **Error Detection and Recovery** - TCP uses checksums to detect errors in transmitted data so that if an error is found, it triggers retransmission of the affected segment.

![How TCP initiates Communication](./images/tcp-initiates-connection.png =350x)

## Security

### Securing TCP with TLS

TCP, a foundational transport protocol, ensures reliable data transmission but lacks built-in encryption, making it vulnerable to interception and tampering. Encrypting TCP traffic with TLS (Transport Layer Security) enhances security by preventing unauthorized access and protecting against threats like man-in-the-middle (MITM) attacks. By implementing TLS over TCP, applications can establish secure, encrypted communication channels while maintaining data integrity and authentication.

Zilla provides [TLS bindings](../../reference/config/bindings/tls/README.md) to enforce secure communication over TCP, ensuring that all transmitted data is encrypted. By integrating TLS with Zilla, organizations can enhance security for various TCP-based applications, protecting sensitive information while maintaining reliable and efficient data exchange.

## Zilla: Beyond Standard TCP

Zilla acts as a smart gateway that manages both incoming and outgoing TCP connections.

- **Handles External Connections**: Zilla accepts connections from external clients and routes them to the appropriate internal service, such as a web server or database.
- **Routing and Service Mapping**: Zilla intelligently routes each connection to the right service based on the request type or destination, ensuring efficient traffic flow.
- **TLS Binding for Secure Communication**: Zilla supports TLS binding to ensure that both inbound and outbound connections are securely encrypted, protecting sensitive data during transmission.
- **Efficient Outbound Communication**: When sending data out, Zilla initiates secure and optimized connections to external destinations, ensuring smooth communication.

## Zilla: TCP Use Cases

Zilla leverages the power of the TCP protocol to enhance communication and provide efficient proxying and reflection services.

- **TCP Proxy**
    - [Echo](https://github.com/aklivity/zilla/tree/develop/examples/tcp.echo)
    - [Reflect](https://github.com/aklivity/zilla/tree/develop/examples/tcp.reflect)

Zilla also improves TCP performance but also enables its use for a wide range of protocols, including [HTTP](./http.md#http-protocol), [Kafka](./kafka.md#kafka-protocol), [gRPC](./grpc.md#grpc-protocol), [MQTT](./mqtt.md#mqtt-protocol), [TLS](./tls.md#tls-protocol), and [WebSockets (WS)](./ws.md#ws-protocol).

## Reference

[tcp binding](../../reference/config/bindings/tcp/README.md) The `tcp` support, with `server` or `client` behavior.

