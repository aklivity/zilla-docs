---
description: The Zilla gRPC Kafka Proxy Zilla lets you define and expose gRPC services from protobuf files.
prev: false
next: /tutorials/grpc/grpc-intro.md
---

# gRPC Kafka Proxy

The Zilla gRPC Kafka Proxy Zilla lets you define and expose gRPC services from protobuf files.

A service methods request and response messages are routed on and off of Kafka. Both the gRPC client and server can communicate as if they are talking to each other with Zilla taking care of the rest.

## Correlated Request-Response

Zilla manages the synchronous request and response messages of a gRPC service on the event stream. Each message is correlated to each other with a `zilla:correlation-id` header, providing an identifier for both Zilla and Kafka workflows to act on. Correlated messages can be on the same or different Kafka topics.

## RPC Service Definitions

Zilla supports all four of the [gRPC service methods](https://grpc.io/docs/what-is-grpc/core-concepts/#service-definition). The request messages are routed to a Kafka topic. The return message(s) can be delivered to the same or a different topic.

- **Simple/Unary RPC** - A single message is produced and will wait for the correlated response message to return back to the caller.

  ```protobuf:no-line-numbers
  rpc SayHello(HelloRequest) returns (HelloResponse);
  ```

- **Server-side streaming RPC** - A single message is produced with a returned stream back to the caller. Every correlated message produced will be sent for the client to read from until there are no more messages and the stream will close.

  ```protobuf:no-line-numbers
  rpc LotsOfReplies(HelloRequest) returns (stream HelloResponse);
  ```

- **Client-side streaming RPC** - The client sends a stream, producing all of the messages on a topic. When the client finishes writing to the stream it waits for the correlated response message to return to the caller.

  ```protobuf:no-line-numbers
  rpc LotsOfGreetings(stream HelloRequest) returns (HelloResponse);
  ```

- **Bidirectional streaming RPC** - Both the client and server use a read-write stream to produce and consume correlated messages.

  ```protobuf:no-line-numbers
  rpc BidiHello(stream HelloRequest) returns (stream HelloResponse);
  ```

## gRPC Metadata

Client metadata can be used for request routing and idempotency.

## Reliable Delivery

Zilla sends the event id and last-event-id header to recover from an interrupted stream without message loss and without needing the client to acknowledge message receipt explicitly.

- Deadlines/Timeouts

- RPC termination

- Cancelling an RPC
