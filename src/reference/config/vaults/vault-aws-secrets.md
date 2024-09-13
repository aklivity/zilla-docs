---
shortTitle: aws-secrets
description: Zilla runtime aws-secrets vault
icon: aky-zilla-plus
category:
  - Vault
---

# aws-secrets Vault

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

Zilla runtime aws-secrets vault.

```yaml {2}
server:
  type: aws-secrets
```

## Summary

Defines a vault remotely accessing AWS services from an EC2 instance.

This is typically combined with `tls` binding `vault` property, referencing resources such as `secrets` by Amazon Resource Names (ARNs).
