---
shortTitle: remote_server
---

# socks remote_server

The socks remote_server binding accepts inbound streams and forwards them to the appropriate exit based on the bound address established by a paired `remote_client`.

```yaml {3}
<!-- @include: ./.partials/remote_server.yaml -->
```

## Configuration (\* required)

### entry\*

> `string` | Pattern: `^[a-zA-Z]+[a-zA-Z0-9\\._\\-]*$`

The name of the binding that will be the entry point for inbound streams.

```yaml
socks_remote_server:
  type: socks
  kind: remote_server
  entry: socks_server
```

<!-- @include: ./.partials/remote-routes.md -->

<!-- @include: ../.partials/telemetry.md -->
<!-- @include: ../.partials/exit.md -->

### telemetry.attributes

> `object` as map of named `string` properties

Telemetry attributes for this binding.
