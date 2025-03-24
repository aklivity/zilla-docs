---
shortTitle: AWS Secrets
category:
  - Vault
---

# AWS Secrets Vault

The `aws-secrets` is a type of vault that enables remote access to AWS services from an EC2 instance. This is typically combined with a tls binding `vault` property, referencing resources such as `certificates` by Amazon Resource Names (ARNs).

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

## Usage Example

```yaml
vaults:
  remote_servers:
    type: aws-secrets
```
