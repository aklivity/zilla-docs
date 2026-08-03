---
shortTitle: client
---

# mcp-kafka-connect client

The `mcp-kafka-connect` client binding exposes the Kafka Connect REST API as a fixed set of intrinsic MCP tools, connecting directly to the Kafka Connect worker named by `options.server` — unlike [`mcp-openapi`](../mcp-openapi/client.md), there is no upstream spec or per-tool schema to author. [`mcp-kafka`](../mcp-kafka/client.md) and [`mcp-schema-registry`](../mcp-schema-registry/client.md) follow the same fixed-tool pattern for the Kafka broker and schema registry APIs.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```

## Configuration (\* required)

<!-- @include: ./.partials/options.md -->
<!-- @include: ./.partials/routes.md -->
<!-- @include: ../.partials/telemetry.md -->

## Tools

<!-- @include: ./.partials/tools.md -->
