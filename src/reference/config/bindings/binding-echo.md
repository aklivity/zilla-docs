---
shortTitle: echo
description: Zilla runtime echo binding
category:
  - Binding
tag:
  - Server
---

# echo Binding

Zilla runtime echo binding.

```yaml {2}
echo_server:
    type: echo
    kind: server
```

## Configuration (\* required)

### type: echo

This binding supports the `echo` protocol and is run with the `server` behavior. It reads inbound messages and writes it back to the sender.

### kind: server

Behaves as an `echo` `server`.

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
