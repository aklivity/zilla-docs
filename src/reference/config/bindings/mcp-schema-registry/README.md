---
shortTitle: mcp-schema-registry
category:
  - Binding
tag:
  - mcp-schema-registry
  - client
---

# mcp-schema-registry Binding

The `client` kind `mcp-schema-registry` binding exposes a Karapace-compatible schema registry's subject, schema, and compatibility operations as a fixed set of intrinsic MCP tools, connecting directly to the registry named by `options.server`, with no upstream MCP server, OpenAPI spec, or per-tool schema authoring.

## client

> [Full config](./client.md)

Behave as an `mcp-schema-registry` `client`.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```
