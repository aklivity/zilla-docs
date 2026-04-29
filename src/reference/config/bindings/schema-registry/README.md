---
dir:
  collapsible: false
  link: true
shortTitle: schema-registry
category:
  - Binding
tag:
  - schema-registry
  - proxy
---

# schema-registry Binding

Defines a binding with `schema-registry` protocol support, with `proxy` behavior. The `schema-registry` binding proxies Schema Registry API requests from an external endpoint to an internal schema registry, optionally filtering by cluster ID.

## proxy

> [Full config](./proxy.md)

The `proxy` kind `schema-registry` binding receives inbound Schema Registry API requests on the external endpoint and forwards them to the internal schema registry endpoint.

```yaml {3}
<!-- @include: ./.partials/proxy.yaml -->
```
