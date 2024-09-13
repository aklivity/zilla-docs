---
shortTitle: aws-acm
description: Zilla runtime aws-acm vault
icon: aky-zilla-plus
category:
  - Vault
---

# aws-acm Vault

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

Zilla runtime aws-acm vault.

```yaml {2}
server:
  type: aws-acm
```

## Summary

Defines a vault remotely accessing AWS services from an EC2 instance.

This is typically combined with `tls` binding `vault` property, referencing resources such as `certificates` by Amazon Resource Names (ARNs).

Note: this requires AWS Nitro Enclaves for ACM to be enabled on the instance where Zilla Plus is running.
