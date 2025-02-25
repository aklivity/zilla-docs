---
shortTitle: Client
---

# TCP Client

The tcp client binding receives inbound application streams and initiates outbound TCP network connections to a remote TCP server address.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```

## Usage Example

![Pipeline with TCP Client Example](../images/http-part2.png)

::: details Full HTTP Proxy zilla.yaml Config

```yaml
<!-- @include: ../../../cookbooks/quickstart/http-zilla.yaml -->
```

:::

In the above example, a TCP Client handles outgoing socket connection (from inside Zilla to outside). In this example:

1. TCP Client handles outgoing connection from the previous pipe (a TCP Client). It can receive requests directly from a client binding or via TLS binding.
2. TCP Client initiates the outbound connection to the designated address.

## Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/options.md -->

@tab routes

<!-- @include: ./.partials/client-routes.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry.md -->

:::
