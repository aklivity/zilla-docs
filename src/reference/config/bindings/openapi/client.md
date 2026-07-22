---
shortTitle: client
---

# openapi client

The openapi client binding creates composite of `http`, `tls`, and `tcp` bindings with client kind and adapts OpenAPI request-response streams to HTTP request-response streams.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```

## Configuration (\* required)

<!-- @include: ./.partials/options.md -->

<!-- @include: ../.partials/vault.md -->

For each `https` server, a `tls` binding is generated automatically, with keys, trust, signers, and SNI resolved from `vault` and ALPN computed automatically — no separate TLS options are configured on this binding.

<!-- @include: ../.partials/telemetry.md -->
