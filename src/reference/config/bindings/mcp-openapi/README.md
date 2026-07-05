---
shortTitle: mcp-openapi
category:
  - Binding
tag:
  - mcp-openapi
  - client
---

# mcp-openapi Binding

The `client` kind `mcp_openapi` binding reads OpenAPI specifications from a catalog and compiles each routed operation into a generated `mcp_http` proxy, exposing OpenAPI operations as MCP tools and resources with a single spec parse and no protocol-specific code.

## client

> [Full config](./client.md)

Behave as an `mcp_openapi` `client`.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```
