---
shortTitle: grpc
description: Zilla runtime grpc binding
category:
  - Binding
tag:
  - Server
  - Client
---

# grpc Binding

Zilla runtime grpc binding.

## Configuration (\* required)

### type: grpc\*

Defines a binding with `grpc` protocol support, with `server` or `client` behavior.

### kind: server

The `server` kind `grpc` binding adapts `http` request-response streams to `grpc` request-response streams, with support for both `application/grpc+proto` and `application/grpc-web+proto` content types.

```yaml {2}
grpc_server:
  type: grpc
  kind: server
  catalog:
    host_filesystem:
      - subject: echo
  routes:
    - when:
        - method: example.EchoService/*
          metadata:
            custom-text: custom value
            custom-binary:
              base64: Y3VzdG9tIHZhbHVl
      exit: echo_server
```

### kind: client

The `client` kind `grpc` binding adapts `grpc` request-response streams to `http` request-response streams.


### options

> `object`

`grpc`-specific options.
```yaml {2}
grpc_client:
  type: grpc
  kind: client
  exit: http_client
```

#### options.services

::: warning Deprecated
This property will be removed in a future release. To access '.proto' files from the filesystem, use the [filesystem](../catalogs/catalog-filesystem.md) catalog instead.
:::

> `array` of `string`

Protobuf service definition filenames, typically with `.proto` filename extension.
### exit

> `string`

Default exit binding when no conditional routes are viable.

```yaml
exit: echo_server
```

### routes

> `array` of `object`

Conditional `grpc`-specific routes.

```yaml
routes:
  - guarded:
      my_guard:
        - echo:messages
    when:
      - method: example.EchoService/*
        metadata:
          custom-text: custom value
          custom-binary:
            base64: Y3VzdG9tIHZhbHVl
    exit: echo_server
```

#### routes[].guarded

> `object` as named map of `string:string` `array`

Roles required by named guard.

```yaml
routes:
  - guarded:
      my_guard:
        - echo:messages
```

#### routes[].when

> `array` of `object`

List of conditions (any match) to match this route.
Read more: [When a route matches](../../../concepts/bindings.md#when-a-route-matches)

```yaml
routes:
    when:
      - method: example.EchoService/*
        metadata:
          custom-text: custom value
          custom-binary:
            base64: Y3VzdG9tIHZhbHVl
```

##### when[].method

> `string`

gRPC service method name, such as `example.EchoService/EchoUnary`, or service method pattern such as `example.EchoService/*`.

##### when[].metadata

> `map` of `name: value` properties

Metadata header name value pairs (all match).

Each metadata header value can be `string` or `object` with `base64` property.

##### metadata.base64

> `string`

Base64 encoded value for binary metadata header.

#### routes[].exit\*

> `string`

Routed exit binding when conditional route matches.

```yaml
routes:
  - when:
    ...
    exit: echo_server
```

### telemetry

> `object`

Defines the desired telemetry for the binding.

#### telemetry.metrics

> `enum` [ "stream", "grpc" ]

Telemetry metrics to track

```yaml
telemetry:
  metrics:
    - stream.*
    - grpc.*
```

---

::: right
\* required
:::
