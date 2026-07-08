---
shortTitle: server
---

# mcp server

The mcp server binding accepts inbound MCP client connections, handling authorization and elicitation before forwarding to the exit binding.

```yaml {3}
<!-- @include: ./.partials/server.yaml -->
```

## Configuration (\* required)

<!-- @include: ./.partials/options-server.md -->
<!-- @include: ./.partials/options-authorization-server.md -->
<!-- @include: ../.partials/exit.md -->
<!-- @include: ../.partials/telemetry.md -->
