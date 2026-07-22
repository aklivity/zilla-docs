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

> `enum` [ `crl` ]

Certificate revocation method.

#### options.keys

> `array` of `string`, or `object` as map of named `string` properties

Amazon Resource Names (ARNs) of AWS Nitro Enclaves for ACM certificates to expose as private keys, resolved via the enclaves configuration. Accepts either a list of ARNs or a map of alias name to ARN, so an alias can be referenced by name wherever an ARN would otherwise be required.

```yaml
options:
  keys:
    server-cert: arn:aws:acm-pca:us-east-1:123456789012:certificate-authority/12345678-1234-1234-1234-123456789012
```

When no explicit key reference is given, every key configured via the enclaves configuration is resolved.

#### options.trust

> `array` of `string`, or `object` as map of named `string` properties

Amazon Resource Names (ARNs) of ACM or ACM Private CA certificates to trust as certificate authorities. Accepts either a list of ARNs or a map of alias name to ARN, so an alias can be referenced by name wherever an ARN would otherwise be required.

```yaml
options:
  trust:
    root-ca: arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012
```
