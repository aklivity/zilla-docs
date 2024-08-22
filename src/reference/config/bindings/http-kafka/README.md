---
redirectFrom: /reference/config/bindings/binding-http-kafka.html
dir:
  collapsible: false
  link: true
shortTitle: http-kafka
description: Zilla runtime http-kafka binding
category:
  - Binding
tag:
  - Proxy
---

# http-kafka Binding

The `proxy` kind `http-kafka` binding adapts `http` request-response streams to `kafka` topic streams.

## proxy

> [Full config](./proxy.md)

Behave as an `http-kafka` `proxy`.

```yaml {3}
<!-- @include: ./.partials/proxy.yaml -->
```
