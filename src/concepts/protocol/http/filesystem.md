---
shortTitle: Filesystem
---

# Filesystem Proxy Binding

The http-filesystem proxy binding adapts `http` data streams into `filesystem` data streams by mapping the path from an inbound `http` `GET` request into a filesystem relative path.

Behaves as a web server when combined with `tcp`, `tls`, `http` and `filesystem` bindings.

```yaml {3}
<!-- @include: ./.partials/proxy.yaml -->
```

## Configuration (\* required)

::: tabs

@tab routes

<!-- @include: ./.partials/routes.md -->

@tab exit

<!-- @include: ../.partials/exit.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry-http.md -->

:::
