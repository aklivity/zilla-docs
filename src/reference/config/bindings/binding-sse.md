---
shortTitle: sse
description: Zilla runtime sse binding
category:
  - Binding
tag:
  - Server
---

# sse Binding

Zilla runtime sse binding.

```yaml {2}
sse_server:
  type: sse
  kind: server
  exit: sse_kafka_proxy
```

## Configuration (\* required)

### type: sse\*

Defines a binding with Server Sent Events (sse) protocol support, with `server` behavior.

### kind: server\*

The `server` kind `sse` binding converts inbound `http` request-response streams into `sse` request-response streams.

Messages received on the `sse` response stream are encoded using `Server Sent Events` protocol, including support for custom `event` types and last event `id`.

### kind: client\*

The `client` kind `sse` binding converts outbound `see` request-response streams into `http` request-response streams.

### options

> `object`

`sse`-specific options.

```yaml
options:
  retry: 2000
```

#### options.retry

> `integer` | Default: `2000`

Retry delay (ms)

#### options.requests

> `array` of `object`

the `requests`-specific options.

##### requests[].path

> `string`

The path selector.

##### requests[].content

> `object` of a named [`model`](../models/)

Enforce validation for the request content.

### exit

> `string`

Default exit binding when no conditional routes are viable.

```yaml
exit: sse_kafka_proxy
```

### routes

> `array` of `object`

Conditional `sse`-specific routes.

```yaml
routes:
  - guarded:
      my_guard:
        - read:items
    when:
      - path: /items
    exit: sse_kafka_proxy
```

#### routes[].guarded

> `object` as named map of `string:string` `array`

List of roles required by each named guard to authorize this route.

```yaml
routes:
  - guarded:
      my_guard:
        - read:items
```

#### routes[].when

> `array` of `object`

List of conditions (any match) to match this route.
Read more: [When a route matches](../../../concepts/bindings.md#when-a-route-matches)

```yaml
routes:
  - when:
      - path: /items
```

##### when[].path\*

> `string`

Path pattern.

#### routes[].exit\*

> `string`

Next binding when following this route.

```yaml
routes:
  - when:
    ...
    exit: sse_kafka_proxy
```

### telemetry

> `object`

Defines the desired telemetry for the binding.

#### telemetry.metrics

> `enum` [ "stream", "http" ]

Telemetry metrics to track

```yaml
telemetry:
  metrics:
    - stream.*
    - http.*
```

---

::: right
\* required
:::
