---
shortTitle: mcp-kafka
category:
  - Binding
tag:
  - mcp-kafka
  - client
---

# mcp-kafka Binding

The `client` kind `mcp_kafka` binding exposes a fixed set of Kafka broker operations — producing and consuming records, managing topics and their configs, and inspecting brokers and consumer groups — as intrinsic MCP tools, connecting directly to the Kafka cluster named by `options.servers`, with no upstream MCP or REST server and no per-tool schema authoring.

## client

> [Full config](./client.md)

Behave as an `mcp_kafka` `client`.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```
