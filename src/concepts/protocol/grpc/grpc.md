# gRPC

## Client Binding

The grpc client binding adapts `grpc` request-response streams to `http` request-response streams.

```yaml
<!-- @include: ./.partials/client.yaml -->
```

### Configuration (\* required)

::: tabs

@tab routes

<!-- @include: ./.partials/routes.md -->

@tab exit

<!-- @include: ../.partials/exit.md -->

@tab telemetry-grpc

<!-- @include: ../.partials/telemetry-grpc.md -->

:::

## Server Binding

The grpc server binding adapts `http` request-response streams to `grpc` request-response streams, with support for both `application/grpc+proto` and `application/grpc-web+proto` content types.

```yaml {4-6,9-13}
<!-- @include: ./.partials/server.yaml -->
```

### Configuration (\* required)

::: tabs

@tab catalog

<!-- @include: ./.partials/catalog.md -->

@tab routes

<!-- @include: ./.partials/routes.md -->

@tab exit

<!-- @include: ../.partials/exit.md -->

@tab telemetry
<!-- @include: ../.partials/telemetry-grpc.md -->

:::

## Kafka Proxy Binding

The grpc-kafka proxy binding adapts `grpc` request-response streams to `kafka` topic streams.

```yaml {3}
<!-- @include: ./.partials/proxy.yaml -->
```

### Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/kafka-options.md -->

@tab routes

<!-- @include: ./.partials/kafka-routes.md -->

@tab telemetry
<!-- @include: ../.partials/telemetry-grpc.md -->

:::
