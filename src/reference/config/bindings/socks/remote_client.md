---
shortTitle: remote_client
---

# socks remote_client

The socks remote_client binding initiates a SOCKS5 remote bind request and forwards inbound streams arriving from the proxy server to the appropriate exit.

```yaml {3}
<!-- @include: ./.partials/remote_client.yaml -->
```

## Configuration (\* required)

### entry\*

> `string` | Pattern: `^[a-zA-Z]+[a-zA-Z0-9\\._\\-]*$`

The name of the binding that will be the entry point for inbound streams.

```yaml
socks_remote_client:
  type: socks
  kind: remote_client
  entry: socks_client
```

<!-- @include: ./.partials/remote-routes.md -->

<!-- @include: ../.partials/telemetry.md -->

### telemetry.attributes

> `object` as map of named `string` properties

Telemetry attributes for this binding.
