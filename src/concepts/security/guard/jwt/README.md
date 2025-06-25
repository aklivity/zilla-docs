---
shortTitle: JWT
---

# JWT

The JWT guard in Zilla provides authentication and access control by verifying `JSON Web Tokens (JWTs)`. It ensures the integrity of tokens using public `keys`, allowing only authorized subjects with valid roles to access protected resources.

To prevent unauthorized token reuse, the JWT guard enforces constraints on both the `issuer` (who issued the token) and the `audience` (who the token is intended for). Additionally, each JWT has a set expiration time, with an optional `challenge` window that allows protocol bindings to request token renewal before expiration, ensuring uninterrupted access.

## Usage Example

If using an Identity Provider that exposes a `.well-known/jwks.json` file, simply provide the issuer and audience. The JWKS will be fetched, remotely.

```yaml {2}
guards:
  my_jwt_guard:
    type: jwt
    options:
      issuer: https://auth.example.com
      audience: https://api.example.com
```

Manual configuration is also supported.

```yaml {2}
guards:
  my_jwt_guard:
    type: jwt
    options:
      issuer: https://auth.example.com
      audience: https://api.example.com
      keys:
        - kty: EC
          crv: P-256
          x: MKBCTNIcKUSDii11ySs3526iDZ8AiTo7Tu6KPAqv7D4
          y: 4Etl6SRW2YiLUrN5vfvVHuhp7x8PxltmWWlbbM4IFyM
          use: enc
          kid: "1"
        - kty: RSA
          n: 0vx7agoebGcQSuuPiLJXZptN9nndrQmbXEps2aiAFbWhM78LhWx4cbbfAAtVT86zwu1RK7aPFFxuhDR1L6tSoc_BJECPebWKRXjBZCiFV4n3oknjhMstn64tZ_2W-5JsGY4Hc5n9yBXArwl93lqt7_RN5w6Cf0h4QyQ5v-65YGjQR0_FDW2QvzqY368QQMicAtaSqzs8KJZgnYb9c7d0zgdAZHzu6qMQvRL5hajrn1n91CbOpbISD08qNLyrdkt-bFTWhAI4vMQFh6WeZu0fM4lFd2NcRwr3XPksINHaQ-G_xBniIqbw0Ls1jF44-csFCur-kEgU8awapJzKnqDKgw
          e: AQAB
          alg: RS256
          kid: "2011-04-29"
      challenge: 30
```

## Configuration (\* required)

::: tabs

@tab options

### options

> `object`

The `jwt` specific options.

| Property          | Type                   | Description                                                                                                                                                                            |
|-------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| options.issuer    | `string`               | Issuer claim.                                                                                                                                                                          |
| options.audience  | `string`               | Audience claim.                                                                                                                                                                        |
| options.challenge | `integer`              | Challenge period (seconds).                                                                                                                                                            |
| options.roles     | `integer`              | Claim to check for authorized roles.                                                                                                                                                   |
| options.identity  | `string`               | Default: `sub`                                                                                                                                                                         |
| options.keys      | `string`, `object[]`   | If not specified, the JWT vault derives the key location from the issuer's `.well-known/jwks.json`. It can also be set as a URI string or a list of objects with supported key values. |
| options.keys.kty  | `string`               | Key type, e.g. "RSA" , "EC".                                                                                                                                                           |
| options.keys.kid  | `string`               | Key ID.                                                                                                                                                                                |
| options.keys.n    | `string`               | "RSA" modulus.                                                                                                                                                                         |
| options.keys.e    | `string`               | "RSA" exponent.                                                                                                                                                                        |
| options.keys.alg  | `string`               | "RSA" algorithm, e.g. "RS256".                                                                                                                                                         |
| options.keys.crv  | `string`               | "EC" curve name.                                                                                                                                                                       |
| options.keys.x    | `string`               | "EC" point X coordinate.                                                                                                                                                               |
| options.keys.y    | `string`               | "EC" point Y coordinate.                                                                                                                                                               |

:::

## Reference

[`jwt` Guard](/reference/config/guards/jwt.md)
