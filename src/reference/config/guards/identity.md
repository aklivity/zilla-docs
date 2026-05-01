---
shortTitle: identity
category:
  - Guard
tag:
  - identity
---

# identity Guard

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

Defines a guard with pass-through identity support.

The `identity` guard authorizes all requests unconditionally, using the raw credential string as the identity.

```yaml {2}
guards:
  my_identity_guard:
    type: identity
```
