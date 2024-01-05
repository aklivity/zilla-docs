---
description: This guide will walk through each unique gRPC message request and response design and how Zilla is configured to manage the connection for each.
prev: false
next: /tutorials/grpc/grpc-intro.md
---

# gRPC Kafka Proxy

Zilla lets you configure application-centric REST API and SSE stream endpoints that unlock Kafka event-driven architectures. Zilla gives the developer freedom to define their own HTTP mapping to Kafka, with control over the topics, message key, message headers, and payload. Zilla enables an HTTP client to connect and interact with Kafka without needing to understand Kafka-specific paradigms.

## Configure Endpoints

Zilla can be configured to map REST APIs to Kafka using the [http-kafka](../../reference/config/bindings/binding-http-kafka.md) binding in `zilla.yaml`. Zilla can map route REST urls using [wildcard pattern matching](../../concepts/config-intro.md#pattern-matching) and [dynamic path params](../../concepts/config-intro.md#dynamic-path-parameters).

### RPC methods

Zilla separates the HTTP request methods in two groups called capabilities, produce and fetch. The [produce](../../concepts/config-intro.md#the-fetch-capability) capability handles method types `POST`, `PUT`, `DELETE`, and `PATCH` that put messages onto Kafka topics. The [fetch](../../reference/config/bindings/binding-http-kafka.md#with-capability-fetch) capability handles the `GET` method that gets messages off of Kafka topics.

- **Simple RPC** - The client sends a single request to the server and then waits for the response, just like a normal function call.
- **Server-side streaming RPC** - The client sends a request to the server and receives a stream of messages in response. The client reads from the returning stream until no more messages are found.
- **Client-side streaming RPC** - A method similar to server streaming, but in this case, the client sends a stream of messages to the server. When the client has completed writing all of the messages, it waits for the server to read them all and respond.
- **Bidirectional streaming RPC** - A model where both the client and server use a read-write stream to convey a series of messages. Because the two streams function independently, clients and servers can read and write in whatever sequence they want.

## Correlated Request-Response

Zilla manages the HTTP lifecycle with the request and response payload on the event stream. Each message is correlated to each other with a `zilla:correlation-id` header, providing an identifier for both Zilla and Kafka workflows to act on. Correlated messages can be on the same or different Kafka topics.

### sync

A synchronous interaction from the client will open the connection and wait for the correlated response message to be delivered to the caller.

### async

An asynchronous interaction is managed over a pair of Kafka topics. An initiating request can include a `prefer: respond-async` header which will immediately return with `202 Accepted` plus the location to retrieve a correlated response. The client then sends a request to the returned location with the `prefer: wait=N` header to retrieve the correlated response as soon as it becomes available, removing the need for client polling.

## Message Filtering

Messages from Kafka are mapped using a route that will define a path for the client to connect and the message's topic. A route can [filter](../../reference/config/bindings/binding-sse-kafka.md#routes-with) messages delivered to the SSE stream using the message key and headers. A filter's value can be statically defined in the config or be a [path param](../../concepts/config-intro.md#dynamic-path-parameters) used when the client connects.

### Reliable Delivery

Zilla sends the event id and last-event-id header to recover from an interrupted stream without message loss and without needing the client to acknowledge message receipt explicitly.

## Oneway

Clients can produce an HTTP request payload to a Kafka topic. A Kafka message key and/or headers can be set using [path params](../../concepts/config-intro.md#dynamic-path-parameters).

## Cache

Bindings can retrieve messages from a Kafka topic, filtered by message key and/or headers, with key and/or header values extracted from the [path params](../../concepts/config-intro.md#dynamic-path-parameters).

An HTTP response returns with an `etag` header. This fetch supports a conditional `GET if-none-match request`, returning `304` if not modified or `200` if modified (with a new `etag` header).

## Authorization

Zilla has a modular config that includes the concept of a [Guard](../../reference/config/overview.md#guards) where you define your `guard` configuration and reference that `guard` to authorize a specific endpoint. Currently, Zilla supports JSON Web Token (JWT) authorization with the [`jwt`](../../reference/config/guards/guard-jwt.md) Guard.
