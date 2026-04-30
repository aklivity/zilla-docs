---
shortTitle: smux
category:
  - Binding
tag:
  - server
  - client
---

# smux Binding

Defines a binding with `smux` stream multiplexing support, with `server` or `client` behavior. The `smux` protocol multiplexes multiple independent streams over a single network connection.

## server

> [Full config](./server.md)

The `server` kind `smux` binding decodes `smux`-framed streams on the inbound network connection, producing higher level application streams for each multiplexed session.

```yaml {3}
<!-- @include: ./.partials/server.yaml -->
```

## client

> [Full config](./client.md)

The `client` kind `smux` binding receives multiple inbound application streams and encodes them as multiplexed sessions over a single `smux`-framed network connection.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```
