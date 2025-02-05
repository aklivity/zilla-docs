---
shortTitle: Server
---

# MQTT Server

The MQTT server binding decodes the MQTT protocol on the inbound network stream, producing higher level application streams for each `publish` or `subscribe` MQTT topic.

```yaml {3}
<!-- @include: ./.partials/server.yaml -->
```

## Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/server-options.md -->

@tab routes

<!-- @include: ./.partials/routes.md -->

@tab exit

<!-- @include: ../.partials/exit.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry.md -->

:::