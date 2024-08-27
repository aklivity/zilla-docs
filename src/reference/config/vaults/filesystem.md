---
redirectFrom: /reference/config/vaults/vault-filesystem.html
shortTitle: filesystem
category:
  - Vault
---

# filesystem Vault

Defines a vault stored on the local filesystem.

The `filesystem` vault uses `PKCS12` format to store signed certificates and keys.

The [keys](#options-keys) option is used to identify the local peer in a TLS handshake.

The [trust](#options-trust) option is used to verify identity of the remote peer in a TLS handshake.

The [signers](#options-signers) option is used to challenge for mutual authentication in a TLS handshake.

```yaml {2}
server:
  type: filesystem
  options:
    keys:
      store: localhost.p12
      type: pkcs12
      password: ${{env.KEYS_PASSWORD}}
```

## Configuration (\* required)

### options

> `object`

`filesystem`-specific options.

```yaml
options:
  keys:
    store: localhost.p12
    type: pkcs12
    password: ${{env.KEYS_PASSWORD}}
```

#### options.keys

> `object`

Private keys.

#### keys.store\*

> `string`

Relative path to keystore.

#### keys.type

> `string`

Keystore type,\
defaults to `"pkcs12"`

#### keys.password

> `string`

Keystore password.

#### options.trust

> `object`

Trust certificates.

#### trust.store\*

> `string`

Relative path to keystore.

#### trust.type

> `string`

Keystore type,\
defaults to `"pkcs12"`

#### trust.password

> `string`

Keystore password.

#### options.signers

> `object`

Signer certificates.

#### signers.store\*

> `string`

Relative path to keystore.

#### signers.type

> `string`

Keystore type.\
defaults to `"pkcs12"`

#### signers.password

> `string`

Keystore password.