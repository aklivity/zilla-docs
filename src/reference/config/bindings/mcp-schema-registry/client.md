---
shortTitle: client
---

# mcp-schema-registry client

The `mcp-schema-registry` client binding exposes a Karapace-compatible schema registry's subject, schema, and compatibility operations as a fixed set of intrinsic MCP tools, connecting directly to the registry named by `options.server` — unlike [`mcp-openapi`](../mcp-openapi/client.md), there is no upstream spec or per-tool schema to author. [`mcp-kafka`](../mcp-kafka/client.md) and [`mcp-kafka-connect`](../mcp-kafka-connect/client.md) follow the same fixed-tool pattern for the Kafka broker and Kafka Connect REST APIs.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```

## Configuration (\* required)

<!-- @include: ./.partials/options.md -->
<!-- @include: ./.partials/routes.md -->
<!-- @include: ../.partials/telemetry.md -->

## Tools

<!-- @include: ./.partials/tools.md -->
