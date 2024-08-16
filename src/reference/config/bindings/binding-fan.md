---
shortTitle: fan
description: Zilla runtime fan binding
category:
  - Binding
tag:
  - Server
---

# fan Binding

Zilla runtime fan binding.

```yaml {2}
fan_server:
  type: fan
  kind: server
  exit: echo_server
```

## Configuration (\* required)

### type: fan\*

Defines a binding with `fan-in` and `fan-out` support, with `server` behavior.

### kind: server\*

Behave as an `fan-in` and `fan-out` `server`. The `server` kind `fan` binding performs fan-in of data on all inbound network streams, grouping them into a single application stream. Then data received from the application stream is fanned-out to all network streams in the group.

### exit\*

> `string`

Default exit binding. When the `exit` is an `echo` server binding, the combination reflects all inbound data from each client to all clients.

```yaml
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
