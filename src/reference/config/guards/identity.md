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

## Configuration (\* required)

<!-- @include: ./.partials/store.md -->

### options

> `object`

The `identity` guard specific options.

```yaml
options:
  format: "{identity}:{credentials}"
  identity: zilla-service-account
  credentials: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
```

#### options.format

> `string`

Pattern for splitting the credential string presented at authorization into an identity part and a credentials part, resolved independently by downstream bindings, for example a `kafka` `client` binding's `username: "{identity}"` and `password: "{credentials}"`. Without `format`, the whole credential string is used as the identity, and the same value is also returned as the credentials, since there is nothing to split.

```yaml
options:
  format: "{identity}:{credentials}"
```

#### options.identity

> `string`

A static identity value returned when no session is active.

```yaml
options:
  identity: zilla-service-account
```

#### options.credentials

> `string`

A static credential value returned when no session is active. Useful for supplying a fixed credential, such as a pre-signed JWT, to a downstream binding without an active upstream session.

```yaml
options:
  credentials: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
```
