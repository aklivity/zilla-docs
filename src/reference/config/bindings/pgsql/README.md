---
redirectFrom: /reference/config/bindings/binding-pgsql.html
dir:
  collapsible: false
  link: true
shortTitle: pgsql
category:
  - Binding
tag:
  - pgsql
  - server
  - client
---

# pgsql Binding

Defines a binding with `pgsql` protocol support, with `server` or `client` behavior.

## server

> [Full config](./server.md)

The pgsql server binding receives inbound network stream, producing higher level application streams for each request.

```yaml {3}
<!-- @include: ./.partials/server.yaml -->
```

## client

> [Full config](./client.md)

The pgsql `client` binding receives inbound application streams and route through `exit`.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```
