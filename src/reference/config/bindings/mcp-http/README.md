---
shortTitle: mcp-http
category:
  - Binding
tag:
  - mcp-http
  - proxy
---

# mcp-http Binding

The `proxy` kind `mcp_http` binding accepts `mcp` streams and produces `http` streams. It terminates `tools/list`, `resources/list`, and `resources/templates/list` from configuration, and expands `tools/call` and `resources/read` into upstream `http` requests.

## proxy

> [Full config](./proxy.md)

Behave as an `mcp_http` `proxy`.

```yaml {3}
<!-- @include: ./.partials/proxy.yaml -->
```
