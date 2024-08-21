---
redirectFrom: /reference/config/bindings/binding-ws.html
dir:
  collapsible: false
  link: true
shortTitle: ws
description: Zilla runtime ws binding
category:
  - Binding
tag:
  - Server
---

# ws Binding

Zilla runtime ws binding.

```yaml {2}
ws_server:
  type: ws
  kind: server
  routes:
    - when:
        - protocol: echo
    exit: echo_server
```

## Configuration (\* required)

### type: ws\*

Defines a binding with WebSockets protocol support, with `server` or `client` behavior.

## server

> [Full config](./server.md)

The `server` kind `ws` binding converts inbound `http` request-response streams into `ws` full-duplex streams.

Conditional routes based on `ws` scheme, authority, path or negotiated subprotocol are used to route these streams to an `exit` binding.

## client

> [Full config](./client.md)

The `client` kind `ws` binding converts inbound `ws` full duplex streams into `http` request-response streams.

Conditional routes based on `ws` scheme, authority, path or negotiated subprotocol are used to route these streams to an `exit` binding.

### options

> `object`

`ws`-specific options.

#### options.defaults

> `object`

Defaults.

#### defaults.protocol

> `string`

Subprotocol.

#### defaults.scheme

> `string`

Scheme.

#### defaults.authority

> `string`

Authority.

#### defaults.path

> `string`

Path.

<!-- @include: ../.partials/exit.md -->

### routes

> `array` of `object`

Conditional `ws`-specific routes.

```yaml
routes:
  - when:
      - protocol: echo
  exit: echo_server
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
Read more: [When a route matches](../../../../concepts/bindings.md#when-a-route-matches)

```yaml
routes:
  - when:
      - protocol: echo
```

##### when[].protocol

> `string`

Subprotocol pattern.

##### when[].scheme

> `string`

Scheme pattern.

##### when[].authority

> `string`

Authority pattern.

##### when[].path

> `string`

Path pattern.

#### routes[].exit\*

> `string`

Next binding when following this route.

```yaml
routes:
  - when:
    ...
    exit: echo_server
```

<!-- @include: ../.partials/telemetry.md -->

---

::: right
\* required
:::
