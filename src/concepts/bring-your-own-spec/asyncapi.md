---
shortTitle: AsyncAPI
---

# AsyncAPI

Zilla implements Event-Driven APIs defined in the [asyncapi](#asyncapi-client) binding. A Kafka proxy is defined using the [asyncapi](#asyncapi-proxy) `proxy` binding. The Kafka configuration is defined with an [asyncapi](#asyncapi-client) `client` binding.

> [Taxi Hailing demo](https://github.com/aklivity/zilla-demos/tree/main/taxi) | [asyncapi.http.kafka.proxy example](https://github.com/aklivity/zilla-examples/tree/main/asyncapi.http.kafka.proxy) | [asyncapi.mqtt.kafka.proxy example](https://github.com/aklivity/zilla-examples/tree/main/asyncapi.mqtt.kafka.proxy) | [asyncapi.sse.kafka.proxy example](https://github.com/aklivity/zilla-examples/tree/main/asyncapi.sse.kafka.proxy)

## AsyncAPI Client

The asyncapi client binding creates composite of `kafka` or `mqtt` or `http`, and `tls`, `tcp` bindings with client kind and adapts AsyncAPI streams to Kafka/MQTT/HTTP streams.

```yaml {3}
<!-- @include: ./.partials/asyncapi-client.yaml -->
```

### Configuration (\* required)

:::tabs

@tab vault

<!-- @include: ../protocol/.partials/vault.md -->

@tab options

<!-- @include: ./.partials/asyncapi-options.md -->

@tab routes

<!-- @include: ./.partials/asyncapi-routes.md -->

@tab telemetry

<!-- @include: ../protocol/.partials/telemetry.md -->

:::

## AsyncAPI Proxy

The asyncapi proxy binding creates composite of `mqtt-kafka` binding with proxy kind mapping MQTT streams to Kafka streams.

```yaml
<!-- @include: ./.partials/asyncapi-proxy.yaml -->
```

### Configuration (\* required)

:::tabs

@tab vault

<!-- @include: ../protocol/.partials/vault.md -->

@tab options

<!-- @include: ./.partials/asyncapi-options.md -->

@tab routes

<!-- @include: ./.partials/asyncapi-routes-with-exit.md -->

@tab exit

<!-- @include: ../protocol/.partials/exit.md -->

@tab telemetry

<!-- @include: ../protocol/.partials/telemetry.md -->

:::

## AsyncAPI Server

The asyncapi server binding creates composite of `tcp`, `tls`, and `mqtt` or `http` bindings with server kind and adapts MQTT/HTTP streams to AsyncAPI streams.

```yaml
<!-- @include: ./.partials/asyncapi-server.yaml -->
```

### Configuration (\* required)

:::tabs

@tab vault

<!-- @include: ../protocol/.partials/vault.md -->

@tab options

<!-- @include: ./.partials/asyncapi-options.md -->

@tab routes

<!-- @include: ./.partials/asyncapi-routes-with-exit.md -->

@tab exit

<!-- @include: ../protocol/.partials/exit.md -->

@tab telemetry

<!-- @include: ../protocol/.partials/telemetry.md -->

:::