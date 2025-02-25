---
shortTitle: gRPC Remote Server
---

# Kafka gRPC Remote Server

The kafka-grpc remote_server binding for adapting `kafka` topic streams to `grpc` request-response streams.

```yaml {3}
<!-- @include: ./.partials/remote_server.yaml -->
```

## Configuration (\* required)

::: tabs

@tab entry\*

### entry\*

> `string` | Pattern: `^[a-zA-Z]+[a-zA-Z0-9\\._\\-]*$`

The name of the binding that will be the entrypoint for Kafka streams.

```yaml
  kafka_grpc_proxy:
    type: kafka-grpc
    kind: remote_server
    entry: kafka_cache_client
```

@tab options

<!-- @include: ./.partials/grpc-options.md -->

@tab routes\*

<!-- @include: ./.partials/grpc-routes.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry-grpc.md -->

:::
