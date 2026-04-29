---
shortTitle: aws-secrets
category:
  - Vault
---

# aws-secrets Vault

A Zilla runtime aws-secrets vault that enables remote access of AWS services from an EC2 instance.

This is typically combined with a [tls](../bindings/tls/README.md) binding `vault` property, referencing resources such as `secrets` by Amazon Resource Names (ARNs).

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

The [revocation](#options-revocation) option is used to specify the certificate revocation method.

```yaml {2}
server:
  type: aws-secrets
  options:
    revocation: crl
```

## Configuration (\* required)

### options

> `object`

The `aws-secret` specific options.

#### options.revocation

> `enum` [ `crl` ]

Certificate revocation method.

#### options.aliases

> `object` as map of named `string` properties

Map of alias names to AWS secret ARNs.

#### options.tags

> `object` as map of named `string` properties

AWS resource tags to apply when creating secrets.
