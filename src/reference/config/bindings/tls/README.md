---
redirectFrom: /reference/config/bindings/binding-tls.html
dir:
  collapsible: false
  link: true
shortTitle: tls
description: Zilla runtime tls binding
category:
  - Binding
tag:
  - Server
---

# tls Binding

Zilla runtime tls binding.

```yaml {2}
tls_server:
  type: tls
  kind: server
  vault: server
  options:
    keys:
      - localhost
    sni:
      - localhost
    alpn:
      - echo
  routes:
    - when:
        - alpn: echo
    exit: echo_server
```

## Configuration (\* required)

### type: tls\*

Defines a binding with `tls` protocol support, with `server`, `client` or `proxy` behavior.

## server

> [Full config](./server.md)

The `server` kind tls binding decodes encrypted TLS protocol on the inbound network stream, producing higher level cleartext application streams for each request.

Certificates and keys required to complete the TLS handshake are provided by a `vault` referenced in the binding configuration.

Conditional routes based on `tls` hostname authority or negotiated ALPN protocol are used to route these streams to an `exit` binding.

## client

> [Full config](./client.md)

The `client` kind `tls` binding receives inbound application streams and encodes each as an encrypted network stream via TLS protocol.

Certificates and keys required to complete the TLS handshake are provided by a `vault` referenced in the binding configuration.

Conditional routes based on `tls` hostname authority or negotiated ALPN protocol are used to route these streams to an `exit` binding.

## proxy

> [Full config](./proxy.md)

The `proxy` kind `tls` binding detects `ClientHello` `server_name` extension to provide TLS virtual hosting by routing based on server name.

A `vault` is not required to proxy TLS protocol as the handshake is only observed read-only as it routes through the `tls` `proxy` binding.

### vault

> `string`

Vault name.

### options

> `object`

`tls`-specific options.

```yaml
options:
  keys:
  - localhost
  sni:
  - localhost
  alpn:
  - echo
```

#### options.version

> `string`

Protocol version.

#### options.keys

> `array` of `string`

A list of reference names for the Vault key.

#### options.trust

> `array` of `string`

A list of reference names for the Vault certificate.

#### options.signers

> `array` of `string`

A list of reference names for the Vault signer certificate.

#### options.trustcacerts

> `boolean` | Default: `true` when trust is `null`

Trust CA certificates.

#### options.sni\*

> `array` of `string`

A list of the Server Name Indications.

#### options.alpn

> `array` of `string`

Application protocols.

#### options.mutual

> `enum` [ "required", "requested", "none" ] | Default: `"none"`

Mutual authentication

<!-- @include: ../.partials/exit.md -->

### routes

> `array` of `object`

Conditional `tls`-specific routes.

```yaml
routes:
  - when:
      - alpn: echo
  exit: echo_server
```

#### routes[].guarded

> `object` as named map of `string:string` `array`

List of roles required by each named guard to authorize this route.

```yaml
routes:
  - guarded:
      my_guard:
        - read:items
```

#### routes[].when

> `array` of `object`

List of conditions (any match) to match this route.
Read more: [When a route matches](../../../../concepts/bindings.md#when-a-route-matches)

```yaml
routes:
  - when:
      - alpn: echo
```

##### when[].authority

> `string`

Associated authority.

##### when[].alpn

> `string`

Application protocol.

##### when[].port

> `integer` | `string` | `array` of  `integer` | `array` of `string`

Port number(s), including port number ranges.

#### routes[].exit\*

> `string`

Next binding when following this route.

```yaml
routes:
  - when:
    ...
    exit: echo_server
```

<!-- @include: ../.partials/telemetry.md -->

---

::: right
\* required
:::
