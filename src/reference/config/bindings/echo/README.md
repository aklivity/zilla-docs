---
redirectFrom: /reference/config/bindings/binding-echo.html
dir:
  collapsible: false
  link: true
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

<!-- @include: ../.partials/telemetry-grpc.md -->

---

::: right
\* required
:::
