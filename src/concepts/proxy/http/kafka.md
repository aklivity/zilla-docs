---
shortTitle: Kafka
---

# HTTP Kafka Proxy

## Overview

The Zilla HTTP Kafka Proxy lets you configure application-centric REST APIs and SSE streams that unlock Kafka event-driven architectures.

A developer has the freedom to define their own HTTP mapping to Kafka, with control over the topics, message key, message headers, and payload. Any HTTP client can interact with Kafka without navigating Kafka-specific paradigms.

## Key Capabilities

### Configurable Endpoints

Zilla can map REST APIs to Kafka using the [http-kafka](../../../reference/config/bindings/http-kafka/README.md) binding in a [zilla.yaml](../../../reference/config/overview.md) config. Zilla routes REST urls using wildcard pattern matching and dynamic path params. Dynamic path matching and custom message routing from endpoints to Kafka topics help prevent API lock-in.

Zilla groups HTTP methods into two capabilities:
- **Produce**: Handles `POST`, `PUT`, `DELETE`, and `PATCH` to send messages to Kafka.
- **Fetch**: Uses `GET` to retrieve messages from Kafka.

For asynchronous operations, a `PUT` request submits data, and a `GET` request retrieves the response from the provided async location.

### Correlated Request-Response

Zilla handles HTTP requests and responses using Kafka topics, linking them with a `zilla:correlation-id` header.
- **Synchronous (sync)**: The client sends a request, and the server waits for the corresponding response message before replying.
- **Asynchronous (async)**: The client includes a `prefer: respond-async` header, gets a `202 Accepted` response with a location path, and later sends a GET request with `prefer: wait=N` to retrieve the response once it's available, avoiding constant polling.

### Message Filtering

Zilla allows HTTP clients to filter Kafka messages based on criteria such as message keys and headers. When an HTTP request is sent, filters can be applied at the request level to ensure only relevant Kafka messages are retrieved. This improves efficiency by reducing unnecessary data transfer and processing.

### Oneway Messaging

Zilla supports oneway messaging for scenarios where a response is unnecessary. Clients can send messages to Kafka topics without awaiting a response, suitable for fire-and-forget use cases. The Kafka message key and headers are set using path params.

### Idempotency

Requests can be idempotent (to make multiple identical requests and receive the same response every time) by including an `idempotency-key` header. Zilla will use the `idempotency-key` and `zilla:correlation-id` headers to identify and return the same message fetched from the response topic without producing a second message to the request topic. Each new `idempotency-key` used will produce a message with "at least once" delivery. A second message will be produced if the same request is made in the short window before a correlated response is added to the response topic. A Kafka consumer can detect and ignore any potential duplicate requests because they will have the same `idempotency-key` and `zilla:correlation-id`.

### Caching

Bindings can retrieve messages from a Kafka topic, filtered by message key and headers, with the key and header values extracted from the path params.

An HTTP response returns with an [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) header. This fetch supports a conditional [if-none-match](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) request, returning `304` if not modified or `200` if modified (with a new ETag header). A client can wait for a modified response by including `prefer:wait=N` and `cache-control: no-cache` headers. The request will wait for up to `N` seconds and return once a message with a new ETag header is delivered on the response topic.

### CORS Support

Zilla supports Cross-Origin Resource Sharing (CORS) and allows you to specify fine-grained access control, including specific request origins, methods and headers allowed, and specific response headers exposed. Since it acts more like a guard and has no dependency on Apache Kafka configuration, you need to define it in the [http](../../../reference/config/bindings/http/README.md) binding.

### Authorization

Zilla has a modular config that includes the concept of a [Guard](../../security/guard.md#guard) where you define your `guard` configuration and reference that `guard` to authorize a specific endpoint. JSON Web Token (JWT) authorization is supported with the [`jwt`](../../security/guard/jwt.md#jwt) Guard.

## Use Cases

### Event-Driven Web Applications
Web applications often need real-time event updates. With an HTTP Kafka Proxy, web apps can push events to Kafka using `POST` requests and fetch events using `GET` or **Server-Sent Events (SSE)**. A common example is a **chat application**, where user messages are sent via HTTP and consumed from Kafka for real-time distribution.

### Simplifying REST API Integration with Kafka
Many modern applications use REST APIs, but Kafka-based event-driven architectures require message brokers. An HTTP Kafka Proxy enables microservices to produce and consume Kafka messages over HTTP, eliminating the need for direct Kafka clients. This is especially useful when transitioning from REST-based systems to Kafka without significant refactoring.

## Examples

Try out HTTP Kafka examples:

- [http.kafka.async](https://github.com/aklivity/zilla-examples/tree/main/http.kafka.async)
- [http.kafka.cache](https://github.com/aklivity/zilla-examples/tree/main/http.kafka.cache)
- [http.kafka.crud](https://github.com/aklivity/zilla-examples/tree/main/http.kafka.crud)
- [http.kafka.oneway](https://github.com/aklivity/zilla-examples/tree/main/http.kafka.oneway)
- [http.kafka.sync](https://github.com/aklivity/zilla-examples/tree/main/http.kafka.sync)
