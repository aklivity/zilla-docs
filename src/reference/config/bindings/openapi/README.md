---
redirectFrom: /reference/config/bindings/binding-openapi.html
dir:
  collapsible: false
  link: true
shortTitle: openapi
description: Zilla runtime openapi binding
category:
  - Binding
tag:
  - Server
  - Client
---

# openapi Binding

Defines a binding with `openapi` spec, with `server` or `client` behavior.

## server

> [Full config](./server.md)

The `server` kind `openapi` binding creates composite of `tcp`, `tls`, and `http` bindings with server kind and adapts HTTP request-response streams to OpenAPI request-response streams.

```yaml {3}
<!-- @include: ./.partials/server.yaml -->
```

## client

> [Full config](./client.md)

The `client` kind `openapi` binding creates composite of `http`, `tls`, and `tcp` bindings with client kind and adapts OpenAPI request-response streams to HTTP request-response streams.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```

