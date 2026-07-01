---
shortTitle: mcp
category:
  - Binding
tag:
  - server
  - client
  - proxy
---

# mcp Binding

Defines a binding with [Model Context Protocol (MCP)](https://modelcontextprotocol.io) support, with `server`, `client`, or `proxy` behavior.

## server

> [Full config](./server.md)

The `server` kind `mcp` binding accepts inbound MCP client connections, handling authorization and elicitation before forwarding to the exit binding.

```yaml {3}
<!-- @include: ./.partials/server.yaml -->
```

## client

> [Full config](./client.md)

The `client` kind `mcp` binding forwards outbound MCP requests to the upstream MCP server configured by its `server` URL.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```

## proxy

> [Full config](./proxy.md)

The `proxy` kind `mcp` binding routes inbound MCP requests to upstream MCP servers based on toolkit, capability, and per-route tool, prompt, and resource filters.

```yaml {3}
<!-- @include: ./.partials/proxy.yaml -->
```
