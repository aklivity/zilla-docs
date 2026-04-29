---
shortTitle: socks
category:
  - Binding
tag:
  - server
  - client
  - remote_server
  - remote_client
---

# socks Binding

Defines a binding with [SOCKS5](https://datatracker.ietf.org/doc/html/rfc1928) protocol support, with `server`, `client`, `remote_server`, or `remote_client` behavior.

The `server` and `client` kinds handle local SOCKS5 proxy connections. The `remote_server` and `remote_client` kinds enable remote port binding scenarios, allowing a client to request the SOCKS5 proxy server bind to a specific address and forward inbound connections back to the client.

## server

> [Full config](./server.md)

The `server` kind `socks` binding decodes inbound SOCKS5 proxy connections, producing higher level application streams for each request.

```yaml {3}
<!-- @include: ./.partials/server.yaml -->
```

## client

> [Full config](./client.md)

The `client` kind `socks` binding encodes outbound application streams as SOCKS5 proxy connections to a remote server.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```

## remote_server

> [Full config](./remote_server.md)

The `remote_server` kind `socks` binding accepts inbound streams from a `remote_client` and forwards them to the appropriate exit based on the bound address.

```yaml {3}
<!-- @include: ./.partials/remote_server.yaml -->
```

## remote_client

> [Full config](./remote_client.md)

The `remote_client` kind `socks` binding initiates a SOCKS5 remote bind request and forwards inbound streams from the proxy server to the appropriate exit.

```yaml {3}
<!-- @include: ./.partials/remote_client.yaml -->
```
