---
redirectFrom: /reference/config/bindings/binding-pgsql-kafka.html
dir:
  collapsible: false
  link: true
shortTitle: pgsql-kafka
category:
  - Binding
tag:
  - pgsql-kafka
  - proxy
---

# pgsql-kafka Binding

The `proxy` kind `pgsql-kafka` binding adapts `pgsql` request-response streams to `kafka` topic streams.

## proxy

> [Full config](./proxy.md)

Behave as an `pgsql-kafka` `proxy`.

```yaml {3}
<!-- @include: ./.partials/proxy.yaml -->
```
