---
shortTitle: Server
---

# TLS Server

The tls server binding decodes encrypted TLS protocol on the inbound network stream, producing higher level cleartext application streams for each request.

```yaml {3}
<!-- @include: ./.partials/server.yaml -->
```

## Configuration (\* required)

::: tabs

@tab vault

<!-- @include: ../.partials/vault.md -->

@tab options

<!-- @include: ./.partials/options.md -->

@tab routes

<!-- @include: ./.partials/routes.md -->

@tab exit

<!-- @include: ../.partials/exit.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry.md -->

:::
