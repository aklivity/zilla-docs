---
shortTitle: Zilla Use Cases
description: Zilla support use cases as a service proxy for HTTP, SSE, MQTT, Kafka, and gRPC services and as a AsyncAPI Kafka gateway.
breadcrumb: false
---

# Real-World Use Cases

Zilla can be used as a service proxy (sidecar) or as an [AsyncAPI](https://www.asyncapi.com/) Kafka gateway.

## Service Proxy

When deployed in front of an existing HTTP, SSE (Server Sent Events), MQTT, Kafka, or gRPC service, Zilla adds metrics, logging, message validation, and authentication.

### For HTTP Services

- Gather metrics and telemetry data on traffic flowing in and out of an HTTP service.
- Add JWT-based client authentication.
- Enforce OpenAPI and AsyncAPI schema definitions and reject invalid requests.

### For SSE Services

- Gather metrics and telemetry data on traffic flowing out of an SSE service.
- Add JWT-based client authentication with [Continuous Authorization](https://www.aklivity.io/post/a-primer-on-server-sent-events-sse#:~:text=Securing%20SSE%20with%20aklivity%20Zilla). Zilla supports Continuous Authorization which gracefully re-authorizes a client on an SSE server’s behalf, without abruptly terminating message streams.
- Enforce AsyncAPI schema definitions and reject invalid outbound messages.

### For MQTT Services

- Gather metrics and telemetry data on traffic flowing in and out of an MQTT service.
- Add JWT-based client authentication.
- Enforce AsyncAPI schema definitions and reject invalid inbound messages.

### For Kafka Services

- Gather metrics and telemetry data on traffic flowing in and out of a Kafka service in <ZillaPlus/>.

### For gRPC Services

- Gather metrics and telemetry data on traffic flowing in and out of a gRPC service.
- Enforce Protobuf schema definitions and reject invalid inbound messages.

## AsyncAPI Kafka Gateway

Zilla can abstract Apache Kafka for web applications, IoT clients, and non-Kafka microservices. With Zilla, [OpenAPI](https://www.openapis.org/) and [AsyncAPI](https://www.asyncapi.com/) definitions can be mapped to Kafka, enabling Kafka topics to be exposed over user-defined REST, SSE, MQTT, and gRPC APIs.

Zilla has no external dependencies and does not rely on the Kafka Consumer/Producer API or Kafka Connect. Instead, it natively supports the Kafka wire protocol and uses novel protocol mapping techniques to establish stateless API entry points into Kafka. As a gateway, Zilla also addresses security enforcement, observability, and connection offloading on the data path.

### Kafka Fan-Out to Web and IoT (Data Broadcasting)

Broadcast data from Kafka to millions of clients over SSE, MQTT, and gRPC. With Kafka and Zilla real-time updates such as stock tickers, sports scores, logistics trackers, and push notifications can be reliably delivered to end users and systems at scale. Kafka is not designed to support a large number of connected clients, so besides protocol mapping, Zilla also handles connection offloading, by pushing data out of a real-time cache. This local cache is synchronized with Kafka for specific topics through a small number of connections, independent of the number of connected clients. The cache also indexes message keys and headers upon retrieval from Kafka, supporting efficiently filtered reads from cached topics.

### Kafka Fan-In from Web and IoT (Clickstream and Telemetry Ingestion)

Ingest data into Kafka from millions of clients over HTTP, MQTT, and gRPC. With Kafka and Zilla, clickstream and telemetry data can be processed and responded to in real time. Kafka is not designed to support a large number of connected clients, so besides protocol mapping, Zilla also pools connections, ensuring the number of inbound connections is independent of the number of connected clients.

### IoT Ingestion and Control

Remove an MQTT broker from a Kafka-based EDA to streamline an IoT deployment. Zilla can persist MQTT messages and client states across pre-configured Kafka topics. Once these messages are in Kafka, they become readily available to Kafka clients, consumers, and stream processing pipelines. Zilla works bidirectionally, so data can be forwarded back to MQTT clients from Kafka producers.

### Event Mesh

Interface REST or gRPC service meshes to an event-driven architecture for an event mesh deployment. Achieve CQRS, request-response over messaging, and event-sourcing design patterns.

### Secure Public Access (Zilla Plus)

Route connectivity between Kafka clients and privately networked Kafka brokers. With <ZillaPlus/>, external and third-party Kafka clients can securely connect, publish messages, and subscribe to topics in a remote, private cluster.
