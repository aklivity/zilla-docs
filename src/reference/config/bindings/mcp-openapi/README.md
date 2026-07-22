---
shortTitle: mcp-openapi
category:
  - Binding
tag:
  - mcp-openapi
  - client
---

# mcp-openapi Binding

The `client` kind `mcp_openapi` binding reads OpenAPI specifications from a catalog and compiles routed operations — named individually or bulk-selected by spec, tag, or glob pattern — into a generated `mcp_http` proxy, exposing them as MCP tools and resources with a single spec parse and no protocol-specific code.

## client

> [Full config](./client.md)

Behave as an `mcp_openapi` `client`.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```
