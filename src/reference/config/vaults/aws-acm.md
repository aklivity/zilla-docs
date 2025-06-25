---
redirectFrom: /reference/config/vaults/vault-aws.html
shortTitle: aws-acm
category:
  - Vault
---

# aws-acm Vault

A Zilla runtime aws-acm vault that enables remote access of AWS services from an EC2 instance.

This is typically combined with a [tls](../bindings/tls/README.md) binding `vault` property, referencing resources such as `certificates` by Amazon Resource Names (ARNs).

Note: this requires AWS Nitro Enclaves for ACM to be enabled on the instance where Zilla Plus is running.

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

The [revocation](#options-revocation) option is used to specify the certificate revocation method.

```yaml {2}
server:
  type: aws-acm
  options:
    revocation: crl
```

## Configuration (\* required)

### options

> `object`

The `aws-acm` specific options.

#### options.revocation

> `enum` [ `crl`, `none` ] | Default `none`

Certificate revocation method.
