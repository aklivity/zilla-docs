---
redirectFrom: /reference/config/guards/guard-azure-ad.html
shortTitle: azure-ad
category:
  - Guard
tag:
  - azure-ad
---

# azure-ad Guard

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

Defines a guard with `Azure AD` support.

The `azure-ad` guard uses public keys to verify the integrity of `access tokens` when identifying authorized subjects and their associated roles scope. The token issuer and audience can also be constrained to prevent access tokens from other applications from being reused inappropriately.

Each verified access token has an expiration time, and an optional challenge window prior to the expiration time that can be used by specific protocol bindings to send a challenge to renew the access token before it expires.

For details on public key discovery and rotation, see [Key Discovery & Rotation](../../../concepts/security/guard/azure-ad/README.md#key-discovery-rotation)

```yaml {2}
guards:
  my_azure_ad_guard:
    type: azure-ad
    options:
      audience: 00000000-1111-2222-3333-444444444444
```

Manual configuration is also supported.

```yaml {2}
guards:
  my_azure_ad_guard:
    type: azure-ad
    options:
      issuer: example.onmicrosoft.com
      audience: 00000000-1111-2222-3333-444444444444
      version: v2.0
      challenge: 30
```

## Configuration (\* required)

### options\*

> `object`

The `azure-ad` specific options.

```yaml
options:
  issuer: example.onmicrosoft.com
  audience: 00000000-1111-2222-3333-444444444444
  version: v2.0
  challenge: 30
```

#### options.issuer

> `string` | Default: `organizations`

Issuer.

#### options.audience

> `string`

Audience claim.

#### options.version

> `enum` [ `v1.0`, `v2.0` ] | Default: `v2.0`

Azure AD version.

#### options.challenge

> `integer`

Challenge period (seconds).

#### options.identity

> `string` | Default: `sub`

Claim to extract the user's identity from the token.
