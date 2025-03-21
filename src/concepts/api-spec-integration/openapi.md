---
shortTitle: OpenAPI
---

# OpenAPI

Zilla implements the RESTful APIs defined in the [openapi](#openapi-client) binding. A REST Kafka proxy is defined using the [openapi-asyncapi](./openapi-asyncapi.md#openapi-asyncapi) binding. The Kafka configuration is defined with an [asyncapi](./asyncapi.md#asyncapi-client) `client` binding.

> [Petstore REST demo](https://github.com/aklivity/zilla-demos/tree/main/petstore) | [Taxi Hailing demo](https://github.com/aklivity/zilla-demos/tree/main/taxi) | [openapi.proxy example](https://github.com/aklivity/zilla/tree/develop/examples/openapi.proxy)

## OpenAPI Client

The openapi client binding creates composite of `http`, `tls`, and `tcp` bindings with client kind and adapts OpenAPI request-response streams to HTTP request-response streams.

```yaml {3}
<!-- @include: ./.partials/openapi-client.yaml -->
```

### OpenAPI Client Configuration (\* required)

:::tabs

@tab vault

<!-- @include: ./.partials/vault.md -->

@tab options

<!-- @include: ./.partials/openapi-options.md -->

@tab telemetry

<!-- @include: ./.partials/telemetry.md -->

:::

## OpenAPI Server

The openapi server binding creates composite of `tcp`, `tls`, and `http` bindings with server kind and adapts HTTP request-response streams to OpenAPI request-response streams.

```yaml {3}
<!-- @include: ./.partials/openapi-server.yaml -->
```

### OpenAPI Server Configuration (\* required)

:::tabs

@tab vault

<!-- @include: ./.partials/vault.md -->

@tab options

<!-- @include: ./.partials/openapi-options.md -->

@tab exit

<!-- @include: ./.partials/exit.md -->

@tab telemetry

<!-- @include: ./.partials/telemetry.md -->

:::
