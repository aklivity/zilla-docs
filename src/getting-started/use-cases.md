---
shortTitle: Real-World Use Cases
description: Zilla supports use cases as a service proxy for HTTP, SSE, MQTT, Kafka, and gRPC services and as an OpenAPI and AsyncAPI Kafka gateway.
breadcrumb: false
---

# Real-World Use Cases

A collection of Zilla examples demonstrating its real-world use cases.

::: info
Explore all examples in the [zilla-examples](https://github.com/aklivity/zilla/tree/develop/examples) repository.
:::

## Service Proxy

Zilla serves as a service proxy and an adapter between the supported protocols and Kafka. Zilla supports HTTP, SSE, MQTT, gRPC, and Kafka protocols. Explore the examples below to learn how Zilla can be used for each protocol.

### For HTTP Services

<div class="use_cases_cards">
  <VPCard
    logo="/assets/icons/proxy.svg"
    title="HTTP Proxy"
    desc="A Zilla API gateway setup that forwards HTTP requests to an upstream server."
    link="https://github.com/aklivity/zilla/tree/develop/examples/http.proxy"
  />
  <VPCard
    logo="/assets/icons/connecting kafka.svg"
    title="HTTP Kafka CRUD"
    desc="A Zilla API gateway setup enabling CRUD operations over HTTP with Kafka integration."
    link="https://github.com/aklivity/zilla/tree/develop/examples/http.kafka.crud"
  />
</div>

### For SSE Services

<div class="use_cases_cards">
  <VPCard
    logo="/assets/icons/connecting kafka.svg"
    title="SSE Kafka Fanout"
    desc="A Zilla API gateway setup that distributes Kafka messages to multiple SSE clients."
    link="https://github.com/aklivity/zilla/tree/develop/examples/sse.kafka.fanout"
  />
  <VPCard
    logo="/assets/icons/proxy.svg"
    title="SSE Proxy with JWT"
    desc="A Zilla API gateway setup that proxies SSE traffic with JWT authentication."
    link="https://github.com/aklivity/zilla/tree/develop/examples/sse.proxy.jwt"
  />
</div>

### For MQTT Services

<div class="use_cases_cards">
  <VPCard
    logo="/assets/icons/data governance.svg"
    title="MQTT Kafka Proxy"
    desc="A Zilla API gateway setup acting as an MQTT broker with Kafka integration."
    link="https://github.com/aklivity/zilla/tree/develop/examples/mqtt.kafka.proxy"
  />
  <VPCard
    logo="/assets/icons/proxy.svg"
    title="MQTT Proxy with JWT"
    desc="A Zilla setup that set up MQTT as a proxy with JWT authentication."
    link="https://github.com/aklivity/zilla/tree/develop/examples/mqtt.proxy.jwt"
  />
</div>

### For Kafka Services

<div class="use_cases_cards">
  <VPCard
    logo="/assets/icons/security.svg"
    title="Secure Public Access"
    desc="A secure Public Access Proxy allows authorized Kafka clients to connect to your Amazon MSK cluster or Confluent Cloud via the Internet."
    link="/deployment/zilla-plus-in-production/secure-public-access/README.md"
  />
  <VPCard
    logo="/assets/icons/changelog.svg"
    title="Secure Private Access"
    desc="A secure Private Access Proxy allows authorized Kafka clients to connect to your Amazon MSK cluster from different VPCs."
    link="/deployment/zilla-plus-in-production/secure-private-access/README.md"
  />
  <VPCard
    logo="/assets/icons/scalability.svg"
    title="IoT Ingest and Control"
    desc="The IoT Ingest and Control Broker lets authorized Kafka clients connect, publish messages, and subscribe to topics via the internet."
    link="/deployment/zilla-plus-in-production/iot-ingest-and-control/README.md"
  />
  <VPCard
    logo="/assets/icons/use cases.svg"
    title="Amazon MSK Web Streaming"
    desc="Expose your Amazon MSK cluster to the internet via REST and SSE API."
    link="/deployment/zilla-plus-in-production/web-streaming/README.md"
  />
</div>

### For gRPC Services

<div class="use_cases_cards">
  <VPCard
    logo="/assets/icons/proxy.svg"
    title="gRPC Proxy"
    desc="A Zilla API gateway setup that forwards gRPC requests to an upstream server."
    link="https://github.com/aklivity/zilla/tree/develop/examples/grpc.proxy"
  />
  <VPCard
    logo="/assets/icons/connecting kafka.svg"
    title="gRPC Kafka Proxy"
    desc="A Zilla API gateway setup that proxy messages over Kafka using gRPC."
    link="https://github.com/aklivity/zilla/tree/develop/examples/grpc.kafka.proxy"
  />
</div>

## AsyncAPI and OpenAPI Proxy Gateway

Zilla supports standard API schema definitions like AsyncAPI and OpenAPI, simplifying configuration by reusing existing schema. Explore the examples below to learn how Zilla integrates with AsyncAPI and OpenAPI.

### AsyncAPI Proxy Gateway

<div class="use_cases_cards">
  <VPCard
    logo="/assets/icons/proxy.svg"
    title="AsyncAPI MQTT Proxy"
    desc="A Zilla API gateway setup that proxies MQTT messages using AsyncAPI."
    link="https://github.com/aklivity/zilla/tree/develop/examples/asyncapi.mqtt.proxy"
  />
  <VPCard
    logo="/assets/icons/data governance.svg"
    title="AsyncAPI SSE Proxy"
    desc="A Zilla API gateway setup that proxies Server-Sent Events (SSE) using AsyncAPI."
    link="https://github.com/aklivity/zilla/tree/develop/examples/asyncapi.sse.proxy"
  />
  <VPCard
    logo="/assets/icons/scalability.svg"
    title="AsyncAPI MQTT Kafka Proxy"
    desc="A Zilla API gateway setup that proxies MQTT requests to Kafka using AsyncAPI."
    link="https://github.com/aklivity/zilla/tree/develop/examples/asyncapi.mqtt.kafka.proxy"
  />
  <VPCard
    logo="/assets/icons/connecting kafka.svg"
    title="AsyncAPI HTTP Kafka Proxy"
    desc="A Zilla API gateway setup that proxies HTTP requests to Kafka using AsyncAPI."
    link="https://github.com/aklivity/zilla/tree/develop/examples/asyncapi.http.kafka.proxy"
  />
</div>

### OpenAPI Proxy Gateway

<div class="use_cases_cards">
  <VPCard
    logo="/assets/icons/proxy.svg"
    title="OpenAPI Proxy"
    desc="A Zilla API gateway that proxies HTTP requests based on predefined OpenAPI specification."
    link="https://github.com/aklivity/zilla/tree/develop/examples/asyncapi.http.kafka.proxy"
  />
  <VPCard
    logo="/assets/icons/bring your own.svg"
    title="OpenAPI-AsyncAPI Proxy"
    desc="A Zilla API gateway setup that bridges OpenAPI and AsyncAPI protocols for seamless service integration."
    link="https://github.com/aklivity/zilla/tree/develop/examples/openapi.asyncapi.kakfa.proxy"
  />
</div>
