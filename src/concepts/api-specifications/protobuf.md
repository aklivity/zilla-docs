---
shortTitle: Protobuf
---

# Protobuf

The Zilla gRPC Kafka Proxy lets you implement gRPC service definitions from protobuf files to produce and consume messages via Kafka topics.

Zilla can be the gRPC server, routing a service method's request and response messages to and from Kafka topics, or Zilla can fanout messages from a Kafka topic to multiple gRPC clients using the [grpc-kafka](../../reference/config/bindings/grpc-kafka/) and [kafka-grpc](../../reference/config/bindings/kafka-grpc/) bindings in a [zilla.yaml](../../reference/config/overview.md) config.

Additionally, Zilla can sit on the critical path between a gRPC client and a server. They can communicate as if they are talking directly to each other, while Zilla actually proxies the messages through Kafka.

> [grpc.kafka.fanout example](https://github.com/aklivity/zilla/tree/develop/examples/grpc.kafka.fanout) | [grpc.proxy example](https://github.com/aklivity/zilla/tree/develop/examples/grpc.proxy)
