#### tls.version

> `string`

Protocol version.

#### tls.keys

> `array` of `string`

A list of reference names for the Vault key.

#### tls.trust

> `array` of `string`

A list of reference names for the Vault certificate.

#### tls.signers

> `array` of `string`

A list of reference names for the Vault signer certificate.

#### tls.trustcacerts

> `boolean` | Default: `true` when trust is `null`

Trust CA certificates.

#### tls.sni\*

> `array` of `string`

A list of the Server Name Indications.

#### tls.alpn

> `array` of `string`

Application protocols.

#### tls.mutual

> `enum` [ "required", "requested", "none" ] | Default: `"none"`

Mutual authentication.
