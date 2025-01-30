---
shortTitle: Zilla Use Cases
description: Zilla supports use cases as a service proxy for HTTP, SSE, MQTT, Kafka, and gRPC services and as an AsyncAPI Kafka gateway.
breadcrumb: false
---

# Real-World Use Cases

Zilla can be used as a service proxy (sidecar) or as an [AsyncAPI](https://www.asyncapi.com/) Kafka gateway.

## Service Proxy

Zilla enhances your existing services by adding metrics, logging, message validation, and authentication. Here's how it works for different service protocols:

### For HTTP Services

- **Metrics and Telemetry:** Gather metrics and telemetry data on inbound and outbound traffic.
- **Client Authentication:** Implement JWT-based authentication.
- **Schema Enforcement:** Enforce OpenAPI and AsyncAPI schema on requests.

### For SSE Services

- **Metrics and Telemetry:** Gather metrics and telemetry data on inbound and outbound traffic.
- **Client Authentication:** Implement JWT-based authentication.
- **Continuous Authorization:** Zilla supports Continuous Authorization, which gracefully re-authorizes a client on an SSE server's behalf without abruptly terminating message streams. For more information, read [this article](https://www.aklivity.io/post/a-primer-on-server-sent-events-sse#:~:text=Securing%20SSE%20with%20aklivity%20Zilla).
- **Schema Enforcement:** Enforce AsyncAPI schema definition on outbound messages.

### For MQTT Services

- **Metrics and Telemetry:** Gather metrics and telemetry data on inbound and outbound traffic.
- **Client Authentication:** Implement JWT-based authentication.
- **Schema Enforcement:** Enforce AsyncAPI schema definition on outbound messages.

### For Kafka Services

- **Metrics and Telemetry:** Gather metrics and telemetry data on inbound and outbound traffic on Kafka service in <ZillaPlus/>.

### For gRPC Services

- **Metrics and Telemetry:** Gather metrics and telemetry data on inbound and outbound traffic.
- **Schema Enforcement:** Enforce Protobuf schema definition on inbound messages.

## AsyncAPI Kafka Gateway

Zilla can abstract Apache Kafka for web applications, IoT clients, and non-Kafka microservices. Key features include:

- **Protocol Mapping:** Zilla can use [OpenAPI](https://www.openapis.org/) and [AsyncAPI](https://www.asyncapi.com/) definitions to be mapped to Kafka, enabling Kafka topics to be exposed over user-defined REST, SSE, MQTT, and gRPC APIs.
- **No External Dependencies:** Zilla has no external dependencies and does not rely on the Kafka Consumer/Producer API or Kafka Connect. Instead, it natively supports the Kafka wire protocol and uses novel protocol mapping techniques to establish stateless API entry points into Kafka.
- **Security and Observability:** Enforce security, provide observability, and offload connections on the data path.

### Kafka Fan-Out to Web and IoT (Data Broadcasting)

Broadcast data from Kafka to millions of clients over SSE, MQTT, and gRPC. With Kafka and Zilla, real-time updates such as stock tickers, sports scores, logistics trackers, and push notifications can be reliably delivered to end users and systems at scale.

Kafka is not designed to support many connected clients, so besides protocol mapping, Zilla also handles connection offloading by pushing data out of a real-time cache. This local cache is synchronized with Kafka for specific topics through several connections, independent of the number of connected clients. The cache also indexes message keys and headers upon retrieval from Kafka, supporting efficiently filtered reads from cached topics.

### Kafka Fan-In from Web and IoT (Clickstream and Telemetry Ingestion)

Ingest data into Kafka from millions of clients over HTTP, MQTT, and gRPC. With Kafka and Zilla, clickstream and telemetry data can be processed and responded to in real-time. Kafka is not designed to support many connected clients, so besides protocol mapping, Zilla also pools connections, ensuring the number of inbound connections is independent of the number of connected clients.

### IoT Ingestion and Control

Remove an MQTT broker from a Kafka-based EDA to streamline an IoT deployment. Zilla can persist MQTT messages and client states across pre-configured Kafka topics. Once these messages are in Kafka, they become readily available to Kafka clients, consumers, and stream processing pipelines. Zilla works bi-directionally to return data to MQTT clients from Kafka producers.

### Event Mesh

Interface REST or gRPC service meshes to an event-driven architecture for an event mesh deployment. Achieve CQRS, request-response over messaging, and event-sourcing design patterns.

### Secure Public Access (Zilla Plus)

Route connectivity between Kafka clients and privately networked Kafka brokers. With <ZillaPlus/>, external and third-party Kafka clients can securely connect, publish messages, and subscribe to topics in a remote, private cluster.
