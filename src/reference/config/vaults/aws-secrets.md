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

> `object` as map of named `string` properties | Deprecated

Map of alias name to AWS Secrets Manager secret ARN, used to expose [`keys`](#options-keys), [`trust`](#options-trust), and [`signers`](#options-signers) when those options are not given. Cannot be combined with `keys`, `trust`, or `signers` — use those options instead.

#### options.keys

> `array` of `string`, or `object` as map of named `string` properties

Amazon Resource Names (ARNs) of AWS Secrets Manager secrets to expose as private keys. Accepts either a list of ARNs or a map of alias name to ARN, so an alias can be referenced by name wherever an ARN would otherwise be required.

```yaml
options:
  keys:
    server-cert: arn:aws:secretsmanager:us-east-1:123456789012:secret:example.com-a1b2c3
```

Falls back to [`aliases`](#options-aliases) when omitted. When no explicit key reference is given, every configured key is resolved.

#### options.trust

> `array` of `string`, or `object` as map of named `string` properties

Amazon Resource Names (ARNs) of AWS Secrets Manager secrets to trust as certificate authorities. Accepts either a list of ARNs or a map of alias name to ARN, so an alias can be referenced by name wherever an ARN would otherwise be required.

```yaml
options:
  trust:
    root-ca: arn:aws:secretsmanager:us-east-1:123456789012:secret:wildcard.example.com-a1b2c3
```

Falls back to [`aliases`](#options-aliases) when omitted. When no explicit trust reference is given, every configured trust entry is resolved.

#### options.signers

> `array` of `string`, or `object` as map of named `string` properties

Amazon Resource Names (ARNs) of AWS Secrets Manager secrets to expose as signer keys. Accepts either a list of ARNs or a map of alias name to ARN, so an alias can be referenced by name wherever an ARN would otherwise be required.

```yaml
options:
  signers:
    env.example.com: arn:aws:secretsmanager:us-east-1:123456789012:secret:example.com-a1b2c3
```

Falls back to [`aliases`](#options-aliases) when omitted. When no explicit signer reference is given, every configured signer is resolved.

#### options.tags

> `object` as map of named `string` properties

AWS resource tags to apply when creating secrets.
