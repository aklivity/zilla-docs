---
shortTitle: mcp-http
category:
  - Binding
tag:
  - mcp-http
  - proxy
---

# mcp-http Binding

The `proxy` kind `mcp_http` binding accepts `mcp` streams and produces `http` streams. It terminates `tools/list`, `resources/list`, and `prompts/list` from configuration, expands `tools/call` and `resources/read` into upstream `http` requests, and renders `prompts/get` from configured message templates.

## proxy

> [Full config](./proxy.md)

Behave as an `mcp_http` `proxy`.

```yaml {3}
<!-- @include: ./.partials/proxy.yaml -->
```
