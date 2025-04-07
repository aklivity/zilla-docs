---
shortTitle: Azure AD
---

# Azure AD

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

The **Azure AD** guard in Zilla provides authentication and access control by verifying `Access Token`. It ensures the integrity of tokens using public `keys`, allowing only authorized subjects with valid roles to access protected resources.

To prevent unauthorized token reuse, the Azure AD guard enforces constraints on both:

- the `issuer` (who issued the token)
- the `audience` (who the token is intended for)

Additionally, each `Access Token` has a set expiration time, with an optional `challenge` window that allows protocol bindings to request token renewal before expiration, ensuring uninterrupted access.

This guard supports both `v1.0` and `v2.0` Azure AD Access token formats.

## Key Discovery & Rotation

The guard uses the `issuer` value to construct the discovery endpoint URL:

- If `issuer` is omitted, `organizations` is used as default:
```text
https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration
```

- If `issuer` is configured(`options.issuer`), a tenant-specific configuration is used:
```text
https://login.microsoftonline.com/example.onmicrosoft.com/v2.0/.well-known/openid-configuration
```

From this discovery document, it extracts the `jwks_uri` to validate tokens.

The Azure AD guard detects `public-private` key rotations based on `max-age`, defaulting to a `24 hours` refresh interval to ensure uninterrupted token validation.

## Usage Example

```yaml {2}
guards:
  my_azure_ad_guard:
    type: azure-ad
    options:
      audience: 00000000-1111-2222-3333-444444444444
```

## Configuration (\* required)

::: tabs

@tab options

### options

> `object`

The `azure-ad` specific options.

| Property          | Type                          | Description                 |
|-------------------|-------------------------------|-----------------------------|
| options.issuer    | `string`                      | Default: `organizations`    |
| options.audience  | `string`                      | Audience claim.             |
| options.version   | `enum` [ `v1.0`, `v2.0` ]     | Default: `v2.0`             |
| options.challenge | `integer`                     | Challenge period (seconds). |

:::

## Reference

[`azure-ad` Guard](/reference/config/guards/azure-ad.md)
