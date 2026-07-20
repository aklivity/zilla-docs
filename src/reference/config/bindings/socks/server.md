---
shortTitle: server
---

# socks server

The socks server binding decodes inbound SOCKS5 proxy connections, producing higher level application streams for each request.

```yaml {3}
<!-- @include: ./.partials/server.yaml -->
```

## Configuration (\* required)

### options

> `object`

The `socks` server specific options.

#### options.authorization

> `object` as map of named `object` properties

Guard-based authorization for SOCKS5 username/password authentication. Maps a guard name to its credential extraction pattern.

```yaml
options:
  authorization:
    my_guard:
      credentials: "{username}/{password}"
```

##### authorization.credentials

> `string`

Credential extraction pattern using SOCKS5 username and password fields.

<!-- @include: ./.partials/routes.md -->
<!-- @include: ../.partials/exit.md -->

<!-- @include: ../.partials/telemetry.md -->

### telemetry.attributes

> `object` as map of named `string` properties

Telemetry attributes for this binding.
