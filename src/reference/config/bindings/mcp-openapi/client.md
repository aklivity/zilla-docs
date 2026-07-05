---
shortTitle: client
---

# mcp-openapi client

The `mcp_openapi` client binding parses OpenAPI specifications from a catalog and compiles each routed operation into a generated composite `mcp_http` proxy binding, exposing OpenAPI operations as MCP tools and resources with a single spec parse.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```

## Configuration (\* required)

<!-- @include: ./.partials/options.md -->
<!-- @include: ./.partials/routes.md -->
<!-- @include: ../.partials/telemetry.md -->
