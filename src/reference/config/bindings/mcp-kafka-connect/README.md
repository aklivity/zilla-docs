---
shortTitle: mcp-kafka-connect
category:
  - Binding
tag:
  - mcp-kafka-connect
  - client
---

# mcp-kafka-connect Binding

The `client` kind `mcp-kafka-connect` binding exposes the Kafka Connect REST API — connectors, tasks, offsets, and plugins — as a fixed set of intrinsic MCP tools, connecting directly to the Kafka Connect worker named by `options.server`, with no upstream MCP server, OpenAPI spec, or per-tool schema authoring.

## client

> [Full config](./client.md)

Behave as an `mcp-kafka-connect` `client`.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```
