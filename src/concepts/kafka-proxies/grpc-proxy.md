---
description: The Zilla gRPC Kafka Proxy lets you implement gRPC service definitions from protobuf files to consume and produce messages from Kafka topics.
prev: false
next: /tutorials/grpc/grpc-intro.md
---

# gRPC Kafka Proxy

The Zilla gRPC Kafka Proxy lets you implement gRPC service definitions from protobuf files to produce and consume messages via Kafka topics.

A service method's request and response messages are routed on and off of Kafka. Zilla can be the server delivering messages to a Kafka topic or fanout messages from a topic to running gRPC services. Additionally, Zilla can sit on the critical path between a gRPC client and server. They can communicate as if they are talking to each other, with Zilla proxying the messages through Kafka.

## Correlated Request-Response

Zilla manages the synchronous request and response messages of a gRPC service on the event stream. Each message is correlated to each other with a `zilla:correlation-id` header, providing an identifier for both Zilla and Kafka workflows to act on. Correlated messages can be on the same or different Kafka topics.

## RPC Service Definitions

Zilla supports all four [gRPC service method definitions](https://grpc.io/docs/what-is-grpc/core-concepts/#service-definition). The request messages are routed to a Kafka topic. The return message(s) can be delivered to the same or a different topic. Zilla can also handle the stream upgrade when a client sends a single request, but the service expects a stream.

- **Simple/Unary RPC** - A single message is sent and will wait for the correlated response message and return it back to the caller.

  ```protobuf:no-line-numbers
  rpc SayHello(HelloRequest) returns (HelloResponse);
  ```

- **Server-side streaming RPC** - A single message is sent with a returned stream back to the caller. The correlated messages produced on the reply-to topic will be sent for the client to read until there are no more messages, and the stream will close.

  ```protobuf:no-line-numbers
  rpc LotsOfReplies(HelloRequest) returns (stream HelloResponse);
  ```

- **Client-side streaming RPC** - The client sends a stream, producing all the messages on a topic. When the client finishes writing to the stream, it will wait for the correlated response message and return it back to the caller.

  ```protobuf:no-line-numbers
  rpc LotsOfGreetings(stream HelloRequest) returns (HelloResponse);
  ```

- **Bidirectional streaming RPC** - Both the client and server use a read-write stream to produce and consume correlated messages.

  ```protobuf:no-line-numbers
  rpc BidiHello(stream HelloRequest) returns (stream HelloResponse);
  ```

## gRPC Metadata

Custom metadata fields can be used for request routing and idempotency. Metadata is preserved through Kafka for both the request and response messages. Zilla can augment the metadata it sends based on the configured route the request matches.

## Reliable Delivery

Zilla sends an event ID with every message serialized as an unknown field in the payload. Any message can be identified without field collision, and the client doesn't need to acknowledge the message receipt explicitly. A client consuming a stream of messages can remember the event ID. If the event the stream gets interrupted. The client reconnects with a `last-event-id` header to recover without message loss or needing to start over from the beginning.
