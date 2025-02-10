---
shortTitle: Server
---

# TCP Server

The tcp server binding listens for inbound socket connections, producing higher level application streams for each remote TCP client.

```yaml {3}
<!-- @include: ./.partials/server.yaml -->
```

## Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/options.md -->

@tab routes

<!-- @include: ./.partials/server-routes.md -->

@tab exit

<!-- @include: ../.partials/exit.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry.md -->

:::