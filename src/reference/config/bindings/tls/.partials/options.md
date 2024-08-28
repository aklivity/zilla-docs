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

#### options.sni

> `array` of `string`

A list of the Server Name Indications.

#### options.alpn

> `array` of `string`

Application protocols.

#### options.mutual

> `enum` [ "required", "requested", "none" ] | Default: `"none"`

Mutual authentication
