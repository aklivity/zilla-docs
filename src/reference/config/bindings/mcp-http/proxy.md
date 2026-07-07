---
shortTitle: proxy
---

# mcp-http proxy

The `mcp_http` proxy binding accepts `mcp` streams and produces `http` streams, terminating `tools/list`, `resources/list`, and `resources/templates/list` from configuration, and expanding `tools/call` and `resources/read` into upstream `http` requests.

```yaml {3}
<!-- @include: ./.partials/proxy.yaml -->
```

## Configuration (\* required)

<!-- @include: ./.partials/options.md -->
<!-- @include: ./.partials/routes.md -->
<!-- @include: ../.partials/exit.md -->
<!-- @include: ../.partials/telemetry.md -->
