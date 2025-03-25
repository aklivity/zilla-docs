# Proxy

Zilla enables protocol bindings, allowing seamless stream mapping between different technologies. For example, a gRPC server stream can be transformed into SSE, unlocking interoperability across architectures.

- [HTTP](./http/README.md)
- [gRPC](./grpc/README.md)
- [Kafka](./kafka/README.md)
- [MQTT](./mqtt/README.md)
- [SSE](./sse/README.md)

## Highlights

### [HTTP-Kafka Proxy](/concepts/proxy/http/kafka.md)

Zilla allows developers to define custom HTTP mappings to Kafka, offering full control over topics, message keys, headers, and payloads. This enables any HTTP client to interact with Kafka without requiring Kafka-specific knowledge. REST APIs and SSE streams can seamlessly integrate with Kafka’s event-driven architecture.

### [MQTT-Kafka Proxy](/concepts/proxy/mqtt/kafka.md)

Zilla bridges MQTT Pub/Sub with Kafka, enabling IoT devices to interact with Kafka-backed systems. By proxying MQTT messages through Kafka, organizations can scale their messaging infrastructure while maintaining compatibility with MQTT clients and brokers.

### [gRPC-Kafka Proxy](/concepts/proxy/grpc/kafka.md)

Zilla can act as a gRPC server or intermediary, routing service method requests and responses through Kafka. It supports:

- Mapping gRPC service definitions from protobuf files to Kafka topics
- Fan-out messaging from Kafka to multiple gRPC clients
- Acting as a transparent bridge between gRPC clients and servers while proxying messages via Kafka
