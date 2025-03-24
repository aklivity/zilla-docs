---
shortTitle: AWS ACM
category:
  - Vault
---

# AWS Certificate Manager (ACM) Vault

The `aws-acm` is a type of vault that enables remote access to AWS services from an EC2 instance. This is typically combined with a tls binding `vault` property, referencing resources such as `certificates` by Amazon Resource Names (ARNs).

::: info
Note: this requires AWS Nitro Enclaves for ACM to be enabled on the instance where Zilla Plus is running.
:::

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

## Usage Example

```yaml
vaults:
  remote_servers:
    type: aws-acm
```
