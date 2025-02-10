---
shortTitle: Proxy
---

# TLS Proxy

The tls proxy binding detects `ClientHello` `server_name` extension to provide TLS virtual hosting by routing based on server name.

```yaml {3}
<!-- @include: ./.partials/proxy.yaml -->
```

## Configuration (\* required)

::: tabs

@tab vault

<!-- @include: ../.partials/vault.md -->

@tab routes

<!-- @include: ./.partials/routes.md -->

@tab exit

<!-- @include: ../.partials/exit.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry.md -->

:::