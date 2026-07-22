---
shortTitle: server
---

# openapi server

The openapi server binding creates composite of `tcp`, `tls`, and `http` bindings with server kind and adapts HTTP request-response streams to OpenAPI request-response streams.

```yaml {3}
<!-- @include: ./.partials/server.yaml -->
```

## Configuration (\* required)

<!-- @include: ../.partials/vault.md -->
<!-- @include: ./.partials/options.md -->

For each `https` server, a `tls` binding is generated automatically, with keys, trust, signers, and SNI resolved from `vault` and ALPN computed automatically — no separate TLS options are configured on this binding.

<!-- @include: ./.partials/routes.md -->
<!-- @include: ../.partials/exit.md -->
<!-- @include: ../.partials/telemetry.md -->
