---
shortTitle: proxy
description: Zilla runtime proxy binding
category:
  - Binding
tag:
  - Proxy
  - Server
---

# proxy Binding

Zilla runtime proxy binding.

```yaml {2}
proxy_server:
  type: proxy
  kind: server
  routes:
    - when:
        - transport: stream
          family: inet4
          destination:
            port: 443
      exit: tls_server
```

## Configuration (\* required)

### type: proxy\*

Defines a binding with `proxy` protocol support, with `server` or `client` behavior. Conditional routes based on the network transport type or network addresses are used to route these streams to an `exit` binding.

### kind: server\*

The `server` kind `proxy` binding decodes `Proxy v2` protocol on the inbound network stream, producing higher level application streams for each request.

### kind: client\*

The `client` kind `proxy` binding receives inbound application streams and encodes each as a network stream via `Proxy v2` protocol.

### exit

> `string`

Default exit binding when no conditional routes are viable.

```yaml
exit: echo_server
```

### routes

> `array` of `object`

Conditional `proxy`-specific routes.

```yaml
routes:
  - when:
      - transport: stream
        family: inet4
        destination:
          port: 443
    exit: tls_server
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

##### when[].transport

> `enum` [ "stream", "datagram" ]

Transport type.

##### when[].family

> `enum` [ "inet", "inet4", "inet6", "unix" ]

Address family.

##### when[].source

> `object`

Source address.

##### source.host

> `string`

Hostname or IP address.

##### source.port

> `integer`

Port number.

##### when[].destination

> `object`

Destination address.

##### destination.host

> `string`

Hostname or IP address.

##### destination.port

> `integer`

Port number.

#### routes[].exit\*

> `string`

Next binding when following this route.

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

> `enum` [ "stream" ]

Telemetry metrics to track

```yaml
telemetry:
  metrics:
    - stream.*
```

---

::: right
\* required
:::
