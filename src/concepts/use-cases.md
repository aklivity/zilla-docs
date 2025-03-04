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

<div class="use_cases_cards">
  <VPCard
    title="HTTP Request Echo"
    desc="A Zilla API gateway setup that echoes back received HTTP requests."
    link="https://github.com/aklivity/zilla-examples/tree/main/http.echo"
  />
  <VPCard
    title="Static File Server"
    desc="A Zilla API gateway setup for serving static files over HTTP from a filesystem."
    link="https://github.com/aklivity/zilla-examples/tree/main/http.filesystem"
  />
  <VPCard
    title="HTTP Proxy Forwarding"
    desc="A Zilla API gateway setup that forwards HTTP requests to an upstream server."
    link="https://github.com/aklivity/zilla-examples/tree/main/http.proxy"
  />
  <VPCard
    title="HTTP to Kafka CRUD"
    desc="A Zilla API gateway setup enabling CRUD operations over HTTP with Kafka integration."
    link="https://github.com/aklivity/zilla-examples/tree/main/http.kafka.crud"
  />
</div>

### For SSE Services

<div class="use_cases_cards">
  <VPCard
    title="SSE Kafka Fanout"
    desc="A Zilla API gateway setup that distributes Kafka messages to multiple SSE clients."
    link="https://github.com/aklivity/zilla-examples/tree/main/sse.kafka.fanout"
  />
  <VPCard
    title="SSE Proxy with JWT"
    desc="A Zilla API gateway setup that proxies SSE traffic with JWT authentication."
    link="https://github.com/aklivity/zilla-examples/tree/main/sse.proxy.jwt"
  />
</div>

### For MQTT Services

<div class="use_cases_cards">
  <VPCard
    title="MQTT Kafka Broker"
    desc="A Zilla API gateway setup acting as an MQTT broker with Kafka integration."
    link="https://github.com/aklivity/zilla-examples/tree/main/mqtt.kafka.broker"
  />
  <VPCard
    title="MQTT Kafka Broker with JWT"
    desc="A Zilla API gateway setup that provides an MQTT broker with Kafka integration and JWT authentication."
    link="https://github.com/aklivity/zilla-examples/tree/main/mqtt.kafka.broker.jwt"
  />
</div>

### For Kafka Services

<div class="use_cases_cards">
  <VPCard
    title="Kafka Broker"
    desc="A Zilla API gateway setup that acts as a Kafka broker for managing message streams."
    link="https://github.com/aklivity/zilla-examples/tree/main/kafka.broker"
  />
  <VPCard
    title="HTTP to Kafka CRUD"
    desc="A Zilla API gateway setup enabling CRUD operations over HTTP with Kafka integration."
    link="https://github.com/aklivity/zilla-examples/tree/main/http.kafka.crud"
  />
  <VPCard
    title="MQTT Kafka Broker"
    desc="A Zilla API gateway setup acting as an MQTT broker with Kafka integration."
    link="https://github.com/aklivity/zilla-examples/tree/main/mqtt.kafka.broker"
  />
  <VPCard
    title="SSE Kafka Fanout"
    desc="A Zilla API gateway setup that distributes Kafka messages to multiple SSE clients."
    link="https://github.com/aklivity/zilla-examples/tree/main/sse.kafka.fanout"
  />
  <VPCard
    title="gRPC Kafka Echo"
    desc="A Zilla API gateway setup that echoes messages over Kafka using gRPC."
    link="https://github.com/aklivity/zilla-examples/tree/main/grpc.kafka.echo"
  />
</div>

### For gRPC Services

<div class="use_cases_cards">
  <VPCard
    title="gRPC Echo"
    desc="A Zilla API gateway setup that echoes received gRPC requests."
    link="https://github.com/aklivity/zilla-examples/tree/main/grpc.echo"
  />
  <VPCard
    title="gRPC Proxy"
    desc="A Zilla API gateway setup that forwards gRPC requests to an upstream server."
    link="https://github.com/aklivity/zilla-examples/tree/main/grpc.proxy"
  />
  <VPCard
    title="gRPC Kafka Echo"
    desc="A Zilla API gateway setup that echoes messages over Kafka using gRPC."
    link="https://github.com/aklivity/zilla-examples/tree/main/grpc.kafka.echo"
  />
</div>

## AsyncAPI Kafka Gateway

Zilla abstracts Apache Kafka for web applications, IoT clients, and non-Kafka microservices by mapping OpenAPI and AsyncAPI definitions to Kafka. It natively supports the Kafka wire protocol without external dependencies, enabling secure, observable, and stateless API entry points over REST, SSE, MQTT, and gRPC. This flexibility allows Zilla to power various use cases:

- **Kafka Fan-Out (Data Broadcasting)** : Zilla enables Kafka to broadcast real-time data to millions of clients over SSE, MQTT, and gRPC. It offloads connections using a real-time cache synchronized with Kafka, ensuring efficient message distribution without overloading Kafka brokers.  
- **Kafka Fan-In (Clickstream and Telemetry Ingestion)**: Zilla ingests high-volume data from HTTP, MQTT, and gRPC clients into Kafka for real-time processing. It pools connections, preventing excessive load on Kafka and ensuring seamless data collection from millions of devices.  
- **IoT Ingestion and Control**: Zilla replaces traditional MQTT brokers by persisting MQTT messages and client states directly in Kafka. This allows IoT devices to interact with Kafka without intermediaries, making data accessible to Kafka consumers and stream processors.  
- **Event Mesh**: Zilla connects REST and gRPC service meshes with event-driven architectures, enabling event sourcing, CQRS, and request-response over Kafka. This allows services to communicate asynchronously while integrating seamlessly with existing microservices.  
- **Secure Public Access (Zilla Plus)**: Zilla routes Kafka client connections to privately networked Kafka brokers, allowing secure external and third-party access. It provides authentication and authorization mechanisms to control access while ensuring high availability and performance.  

These are examples of Zilla API gateway implementations that utilize AsyncAPI to enable seamless communication across different protocols.

<div class="use_cases_cards">
  <VPCard
    title="AsyncAPI HTTP to Kafka Proxy"
    desc="A Zilla API gateway setup that proxies HTTP requests to Kafka using AsyncAPI."
    link="https://github.com/aklivity/zilla-examples/tree/main/asyncapi.http.kafka.proxy"
  />
  <VPCard
    title="AsyncAPI MQTT Proxy"
    desc="A Zilla API gateway setup that proxies MQTT messages using AsyncAPI."
    link="https://github.com/aklivity/zilla-examples/tree/main/asyncapi.mqtt.proxy"
  />
  <VPCard
    title="AsyncAPI SSE Proxy"
    desc="A Zilla API gateway setup that proxies Server-Sent Events (SSE) using AsyncAPI."
    link="https://github.com/aklivity/zilla-examples/tree/main/asyncapi.sse.proxy"
  />
  <VPCard
    title="OpenAPI to AsyncAPI Proxy"
    desc="A Zilla API gateway setup that bridges OpenAPI and AsyncAPI protocols for seamless service integration."
    link="https://github.com/aklivity/zilla-examples/tree/main/openapi.asyncapi.proxy"
  />
</div>
