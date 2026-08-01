---
shortTitle: client
---

# mcp-kafka client

The `mcp_kafka` client binding exposes a fixed set of Kafka broker operations as intrinsic MCP tools, connecting directly to the Kafka cluster named by `options.servers` — unlike `mcp_openapi` or `mcp_schema_registry`, there is no upstream server, spec, or per-tool schema to author.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```

## Configuration (\* required)

<!-- @include: ./.partials/options.md -->
<!-- @include: ./.partials/routes.md -->
<!-- @include: ../.partials/exit.md -->
<!-- @include: ../.partials/telemetry.md -->

## Tools

<!-- @include: ./.partials/tools.md -->
