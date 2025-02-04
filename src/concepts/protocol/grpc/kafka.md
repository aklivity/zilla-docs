---
shortTitle: Kafka Proxy
---

# gRPC Kafka Proxy Binding

The grpc-kafka proxy binding adapts `grpc` request-response streams to `kafka` topic streams.

```yaml {3}
<!-- @include: ./.partials/proxy.yaml -->
```

## Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/kafka-options.md -->

@tab routes

<!-- @include: ./.partials/kafka-routes.md -->

@tab telemetry
<!-- @include: ../.partials/telemetry-grpc.md -->

:::
