---
shortTitle: Filesystem
category:
  - Vault
---

# Filesystem Vault

Represent a vault stored on the local filesystem. This vault uses the `pkcs12` format to store signed certificates and keys. There are three options available in the filesystem vault:

- The keys option is used to identify the local peer in a TLS handshake.
- The trust option is used to verify the identity of the remote peer in a TLS handshake.
- The signers option is used to challenge mutual authentication in a TLS handshake.

```yaml
vaults:
  my_servers:
    type: filesystem
    options:
      keys:
        store: my_servers.p12
        type: pkcs12
        password: ${{env.KEYSTORE_PASSWORD}}
```

## Configuration (\* required)

| Property                 | Type                         | Description                |
| ------------------------ | ---------------------------- | -------------------------- |
| options.keys             | `object`                     | Private keys.              |
| options.keys.store       | `string`                     | Relative path to keystore. |
| options.keys.type        | `string` (default: `pkcs12`) | Keystore type.             |
| options.keys.password    | `string`                     | Keystore password.         |
| options.trust            | `object`                     | Trust certificates.        |
| options.trust.store      | `string`                     | Relative path to keystore. |
| options.trust.type       | `string` (default: `pkcs12`) | Keystore type.             |
| options.trust.password   | `string`                     | Keystore password.         |
| options.signers          | `object`                     | Signers certificates.      |
| options.signers.store    | `string`                     | Relative path to keystore. |
| options.signers.type     | `string` (default: `pkcs12`) | Keystore type.             |
| options.signers.password | `string`                     | Keystore password.         |
