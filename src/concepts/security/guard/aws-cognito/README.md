---
shortTitle: AWS Cognito
---

# AWS Cognito

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

The **AWS Cognito** guard in Zilla provides authentication and access control by verifying access tokens issued by an AWS Cognito user pool. It uses public keys to verify token integrity when identifying authorized subjects and their associated roles scope. The token issuer, client ID, and audience can also be constrained to prevent access tokens from other applications from being reused inappropriately.

`options` must set `client-id` and/or `audience`. `client-id` gates acceptance of tokens by their `token_use: access` shape, validated against the `client_id` claim: the shape `client_credentials`-grant tokens have, since they carry no `aud` claim at all.

## Key Discovery

Public keys are discovered automatically from the user pool's `.well-known/openid-configuration` and `.well-known/jwks.json` endpoints, constructed from the configured `pool`:

```text
https://cognito-idp.{region}.amazonaws.com/{userPoolId}
```

There is no issuer or JWKS URL to hand-assemble, and no keys to configure manually.

## Usage Example

```yaml {2}
guards:
  my_cognito_guard:
    type: aws-cognito
    options:
      pool: arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_ABC123XYZ
      client-id: "*"
```

## Configuration (\* required)

::: tabs

@tab options

### options

> `object`

The `aws-cognito` specific options.

| Property            | Type                          | Description                                                                        |
|---------------------|-------------------------------|-------------------------------------------------------------------------------------|
| options.pool\*      | `string`                      | Full ARN, full pool ID (`<region>_<suffix>`), or just the pool ID suffix (requires `region`). |
| options.region      | `string`                      | AWS region of the user pool. Overrides any region encoded in `pool`.               |
| options.client-id   | `string`, `array` of `string` | Client ID(s) to accept, matched against the `client_id` claim. Use `*` to accept any. At least one of `client-id` or `audience` is required. |
| options.audience    | `string`, `array` of `string` | Audience claim(s) to accept. At least one of `client-id` or `audience` is required. |
| options.roles       | `string`                      | Default: `cognito:groups`                                                           |
| options.identity    | `string`                      | Default: `sub`                                                                      |
| options.attributes  | `object`                      | Additional claims to extract as named attributes.                                  |

:::

## Reference

[`aws-cognito` Guard](/reference/config/guards/aws-cognito.md)
