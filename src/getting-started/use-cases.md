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
    logo="/assets/icons/proxy.svg"
    title="HTTP Proxy"
    desc="A Zilla API gateway setup that forwards HTTP requests to an upstream server."
    link="https://github.com/aklivity/zilla-examples/tree/main/http.proxy"
  />
  <VPCard
    logo="/assets/icons/connecting kafka.svg"
    title="HTTP Kafka CRUD"
    desc="A Zilla API gateway setup enabling CRUD operations over HTTP with Kafka integration."
    link="https://github.com/aklivity/zilla-examples/tree/main/http.kafka.crud"
  />
</div>

### For SSE Services

<div class="use_cases_cards">
  <VPCard
    logo="/assets/icons/connecting kafka.svg"
    title="SSE Kafka Fanout"
    desc="A Zilla API gateway setup that distributes Kafka messages to multiple SSE clients."
    link="https://github.com/aklivity/zilla-examples/tree/main/sse.kafka.fanout"
  />
  <VPCard
    logo="/assets/icons/proxy.svg"
    title="SSE Proxy with JWT"
    desc="A Zilla API gateway setup that proxies SSE traffic with JWT authentication."
    link="https://github.com/aklivity/zilla-examples/tree/main/sse.proxy.jwt"
  />
</div>

### For MQTT Services

<div class="use_cases_cards">
  <VPCard
    logo="/assets/icons/data governance.svg"
    title="MQTT Kafka Proxy"
    desc="A Zilla API gateway setup acting as an MQTT broker with Kafka integration."
    link="https://github.com/aklivity/zilla-examples/tree/main/mqtt.kafka.broker"
  />
  <VPCard
    logo="/assets/icons/security.svg"
    title="MQTT Kafka Broker with JWT"
    desc="A Zilla API gateway setup that provides an MQTT broker with Kafka integration and JWT authentication."
    link="https://github.com/aklivity/zilla-examples/tree/main/mqtt.kafka.broker.jwt"
  />
</div>

### For Kafka Services

<div class="use_cases_cards">
  <VPCard
    logo="/assets/icons/security.svg"
    title="Secure Public Access"
    desc="A secure Public Access Proxy allows authorized Kafka clients to connect to your Amazon MSK cluster or Confluent Cloud via the Internet."
    link="../solutions/concepts/kafka-proxies/secure-public-access.md"
  />
  <VPCard
    logo="/assets/icons/changelog.svg"
    title="Secure Private Access"
    desc="A secure Private Access Proxy allows authorized Kafka clients to connect to your Amazon MSK cluster from different VPCs."
    link="../solutions/concepts/kafka-proxies/secure-private-access.md"
  />
  <VPCard
    logo="/assets/icons/scalability.svg"
    title="IoT Ingest and Control"
    desc="The IoT Ingest and Control Broker lets authorized Kafka clients connect, publish messages, and subscribe to topics via the internet."
    link="../solutions/concepts/kafka-proxies/iot-ingest-control.md"
  />
  <VPCard
    logo="/assets/icons/use cases.svg"
    title="Amazon MSK Web Streaming"
    desc="Expose your Amazon MSK cluster to the internet via REST and SSE API."
    link="../solutions/concepts/kafka-proxies/iot-ingest-control.md"
  />
</div>

### For gRPC Services

<div class="use_cases_cards">
  <VPCard
    logo="/assets/icons/proxy.svg"
    title="gRPC Proxy"
    desc="A Zilla API gateway setup that forwards gRPC requests to an upstream server."
    link="https://github.com/aklivity/zilla-examples/tree/main/grpc.proxy"
  />
  <VPCard
    logo="/assets/icons/connecting kafka.svg"
    title="gRPC Kafka Proxy"
    desc="A Zilla API gateway setup that proxy messages over Kafka using gRPC."
    link="https://github.com/aklivity/zilla-examples/tree/main/grpc.kafka.proxy"
  />
</div>

## AsyncAPI and OpenAPI Proxy Gateway

Zilla can leverage standard API schema specifications such as AsyncAPI and OpenAPI to configure the settings that define common API interfaces. Zilla will use the details specified to reuse existing designs and reduce complexity.

### AsyncAPI Proxy Gateway

These are examples of Zilla API gateway implementations that utilize AsyncAPI:

<div class="use_cases_cards">
  <VPCard
    logo="/assets/icons/proxy.svg"
    title="AsyncAPI MQTT Proxy"
    desc="A Zilla API gateway setup that proxies MQTT messages using AsyncAPI."
    link="https://github.com/aklivity/zilla-examples/tree/main/asyncapi.mqtt.proxy"
  />
  <VPCard
    logo="/assets/icons/data governance.svg"
    title="AsyncAPI SSE Proxy"
    desc="A Zilla API gateway setup that proxies Server-Sent Events (SSE) using AsyncAPI."
    link="https://github.com/aklivity/zilla-examples/tree/main/asyncapi.sse.proxy"
  />
  <VPCard
    logo="/assets/icons/scalability.svg"
    title="AsyncAPI MQTT Kafka Proxy"
    desc="A Zilla API gateway setup that proxies MQTT requests to Kafka using AsyncAPI."
    link="https://github.com/aklivity/zilla-examples/tree/main/asyncapi.mqtt.kafka.proxy"
  />
  <VPCard
    logo="/assets/icons/connecting kafka.svg"
    title="AsyncAPI HTTP Kafka Proxy"
    desc="A Zilla API gateway setup that proxies HTTP requests to Kafka using AsyncAPI."
    link="https://github.com/aklivity/zilla-examples/tree/main/asyncapi.http.kafka.proxy"
  />
</div>

### OpenAPI Proxy Gateway

These are examples of Zilla API gateway implementations that utilize OpenAPI:

<div class="use_cases_cards">
  <VPCard
    logo="/assets/icons/proxy.svg"
    title="OpenAPI Proxy"
    desc="A Zilla API gateway that proxies HTTP requests based on predefined OpenAPI specification."
    link="https://github.com/aklivity/zilla-examples/tree/main/asyncapi.http.kafka.proxy"
  />
  <VPCard
    logo="/assets/icons/bring your own.svg"
    title="OpenAPI-AsyncAPI Proxy"
    desc="A Zilla API gateway setup that bridges OpenAPI and AsyncAPI protocols for seamless service integration."
    link="https://github.com/aklivity/zilla-examples/tree/main/openapi.asyncapi.proxy"
  />
</div>
