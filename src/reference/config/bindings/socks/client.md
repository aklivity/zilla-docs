---
shortTitle: client
---

# socks client

The socks client binding encodes outbound application streams as SOCKS5 proxy connections to a remote server.

## Configuration (\* required)

<!-- @include: ../.partials/cataloged.md -->
<!-- @include: ./.partials/options.md -->
<!-- @include: ./.partials/routes.md -->
<!-- @include: ../.partials/exit.md -->

### entry

> `string` | Pattern: `^[a-zA-Z]+[a-zA-Z0-9\\._\\-]*$`

The name of the binding that starts the entrypoint for a flow of streams.

<!-- @include: ../.partials/telemetry.md -->

### telemetry.attributes

> `object` as map of named `string` properties

Telemetry attributes for this binding.
