### options

> `object`

| Property | Type | Description |
| -- | -- | -- |
| options.version |  `string` |  Protocol version. |
| options.keys |  `string[]` |  A list of reference names for the Vault key. |
| options.trust |  `string[]` |  A list of reference names for the Vault certificate. |
| options.signers |  `string[]` |  A list of reference names for the Vault signer certificate. |
| options.trustcacerts |  `boolean` |  Trust CA certificates. When the this property is not explicitly set it will be automatically set to `true` if `options.trust` is `null`. |
| options.sni |  `string[]` |  A list of the Server Name Indications. |
| options.alpn |  `string[]` |  Application protocols. |
| options.mutual |  `enum` [ `required`, `requested`, `none` ] |  Mutual authentication. When the this property is not explicitly set it will be automatically set to `none` if `options.trust` is `null`, otherwise it will be set to `required`. |

#### Examples

The `tls` specific options.

```yaml
options:
  keys:
  - localhost
  sni:
  - localhost
  alpn:
  - echo
```
