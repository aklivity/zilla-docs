---
shortTitle: aws-cognito
category:
  - Guard
tag:
  - aws-cognito
---

# aws-cognito Guard

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

Defines a guard with `AWS Cognito` support.

The `aws-cognito` guard uses public keys to verify the integrity of access tokens issued by an AWS Cognito user pool when identifying authorized subjects and their associated roles scope. The token issuer, client ID, and audience can also be constrained to prevent access tokens from other applications from being reused inappropriately.

Each verified access token has an expiration time, and specific protocol bindings can use it to determine when a client's authorization needs to be renewed.

Public keys are discovered automatically from the user pool's `.well-known/openid-configuration` and `.well-known/jwks.json` endpoints.

```yaml {2}
guards:
  my_aws_cognito_guard:
    type: aws-cognito
    options:
      pool: arn:aws:cognito-idp:us-east-1:012345678901:userpool/us-east-1_ABC123XYZ
      client-id: "*"
```

`options` must set `client-id` and/or `audience`. `client-id` gates acceptance of tokens by their `token_use: access` shape, validated against the `client_id` claim — the shape `client_credentials`-grant tokens have, since they carry no `aud` claim at all.

## Configuration (\* required)

<!-- @include: ./.partials/store.md -->

### options\*

> `object`

The `aws-cognito` specific options.

```yaml
options:
  pool: arn:aws:cognito-idp:us-east-1:012345678901:userpool/us-east-1_ABC123XYZ
  region: us-east-1
  client-id: "*"
  audience: https://api.example.com
  roles: cognito:groups
  identity: sub
  attributes:
    tenant: custom:tenant
```

#### options.pool\*

> `string`

The Cognito user pool, given as a full ARN (`arn:aws:cognito-idp:<region>:<account-id>:userpool/<pool-id>`), a full pool ID (`<region>_<suffix>`), or just the pool ID suffix. When only the suffix is given, `region` must be set, or resolvable from the AWS default region provider chain.

#### options.region

> `string`

AWS region of the user pool. Overrides any region encoded in `pool`, and is required when `pool` is given as just the pool ID suffix and no default region is otherwise resolvable.

#### options.client-id

> `string`, `array` of `string`

Client ID(s) to accept, matched against the token's `client_id` claim. Use `*` to accept any client ID. At least one of `client-id` or `audience` is required.

#### options.audience

> `string`, `array` of `string`

Audience claim(s) to accept. At least one of `client-id` or `audience` is required.

#### options.roles

> `string` | Default: `cognito:groups`

Claim to check for authorized roles.

#### options.identity

> `string` | Default: `sub`

Claim to extract the user's identity from the token.

#### options.attributes

> `object` as map of named `string` properties

Additional claims to extract from the token as named attributes.
