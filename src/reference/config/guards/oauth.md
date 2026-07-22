---
shortTitle: oauth
category:
  - Guard
tag:
  - oauth
---

# oauth Guard

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

Defines a guard with `OAuth 2.0` support.

The `oauth` guard acquires access tokens from an external Identity Provider (IdP) so that Zilla can authorize requests to upstream APIs on behalf of itself, or on behalf of a caller who has already been authenticated some other way. Which flow runs, and which options apply, depends on the configured `grant`.

| `grant` | Purpose |
| --- | --- |
| [`client-credentials`](#client-credentials) | Zilla obtains a token for itself, using a client ID and secret. |
| [`jwt-bearer`](#jwt-bearer) | Zilla obtains a token for itself, using a self-signed JWT assertion ([RFC 7523](https://datatracker.ietf.org/doc/html/rfc7523)). |
| [`token-exchange`](#token-exchange) | Zilla exchanges a caller's already-validated credential for a token scoped to a downstream audience ([RFC 8693](https://datatracker.ietf.org/doc/html/rfc8693)). |
| [`authorization-code`](#authorization-code) | Zilla redirects a user through the IdP's browser consent screen ([RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749) with mandatory PKCE, [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636)). |

## client-credentials

Zilla exchanges a client ID and secret for its own service-account token, then reuses the cached token for every request routed through the guard until it expires.

```yaml {2}
guards:
  my_oauth_guard:
    type: oauth
    options:
      grant: client-credentials
      endpoint: https://auth.example.com/oauth/token
      scope: api:read
      credentials:
        client-id: my-service
        client-secret: my-secret
```

## jwt-bearer

Also machine-to-machine, but Zilla authenticates with a self-signed JWT assertion signed by a private key instead of a shared secret — the shape expected by IdPs such as Google service accounts.

```yaml {2}
guards:
  my_oauth_guard:
    type: oauth
    options:
      grant: jwt-bearer
      endpoint: https://auth.example.com/oauth/token
      scope: api:read
      credentials:
        issuer: my-service@example.iam.gserviceaccount.com
        private-key: |
          -----BEGIN PRIVATE KEY-----
          ...
          -----END PRIVATE KEY-----
        kid: 1a2b3c4d
```

The assertion's `iss` claim is `credentials.issuer` and its `aud` claim is the token `endpoint`; its lifetime is controlled by the `zilla.guard.oauth.assertion.lifetime.seconds` [engine property](#engine-properties). When `credentials.kid` is set, it is added to the assertion's JWS header, for IdPs that select the verification key by `kid`.

## token-exchange

Zilla exchanges a credential already validated by another guard for a token scoped to a different audience — for example, swapping a caller's validated JWT for a token accepted by a downstream API.

```yaml {2}
guards:
  jwt0:
    type: jwt
    options:
      issuer: https://auth.example.com
      audience: https://gateway.example.com
  my_oauth_guard:
    type: oauth
    store: sessions
    options:
      grant: token-exchange
      endpoint: https://auth.example.com/oauth/token
      audience: https://api.example.com
      via: "${guarded['jwt0'].credentials}"
      callback: /oauth/callback
```

`via` names the upstream guard supplying the subject credential to exchange. `callback` is the redirect URI Zilla listens on to complete the exchange when the subject credential arrives through a redirect rather than being presented directly. Configure `store` whenever Zilla runs with more than one worker or replica, since the pending exchange must be readable regardless of which worker receives the callback.

## authorization-code

Use `authorization-code` when a person needs to grant consent through the IdP's browser login page — for example, letting a user connect their GitHub account. A `client` and an `elicitation` block are always required, along with either an `issuer` for endpoint discovery or explicit `authorize-endpoint` and `token-endpoint` values. PKCE is always used and cannot be disabled.

Discovering endpoints from `issuer`, with [dynamic client registration](https://datatracker.ietf.org/doc/html/rfc7591):

```yaml {2}
guards:
  my_oauth_guard:
    type: oauth
    store: sessions
    options:
      grant: authorization-code
      issuer: https://github.com
      scope: repo read:user
      elicitation:
        callback: /oauth/callback
      client:
        registration: dynamic
```

Zilla resolves `authorize`, `token`, and `registration` endpoints once at startup from `<issuer>/.well-known/oauth-authorization-server` (falling back to `<issuer>/.well-known/openid-configuration`), then registers itself with the IdP using `elicitation.callback` as its sole redirect URI.

Explicit endpoints, with a statically registered client:

```yaml {2}
guards:
  my_oauth_guard:
    type: oauth
    store: sessions
    options:
      grant: authorization-code
      authorize-endpoint: https://github.com/login/oauth/authorize
      token-endpoint: https://github.com/login/oauth/access_token
      scope: repo read:user
      elicitation:
        callback: /oauth/callback
      client:
        registration: static
        id: my-github-client
        secret: my-github-client-secret
```

An explicit endpoint always overrides the value discovered from `issuer`, so the two styles can be mixed — for example, discovering `authorize-endpoint` and `token-endpoint` from `issuer` while pinning a specific `registration-endpoint`. Configure `store` whenever Zilla runs with more than one worker or replica, for the same reason as `token-exchange`.

## Configuration (\* required)

<!-- @include: ./.partials/store.md -->

### options\*

> `object`

The `oauth` specific options. Which properties apply, and which are required, depends on `options.grant`.

```yaml
options:
  grant: client-credentials
  endpoint: https://auth.example.com/oauth/token
  scope: api:read
  credentials:
    client-id: my-service
    client-secret: my-secret
```

#### options.grant\*

> `enum` [ `client-credentials`, `jwt-bearer`, `token-exchange`, `authorization-code` ]

The OAuth grant used to acquire access tokens.

#### options.endpoint

> `string`

Token endpoint URL. Required for `client-credentials` and `jwt-bearer`; also used by `token-exchange` for the token, and refresh, requests.

#### options.issuer

> `string`

Issuer base URL for `authorization-code`, used to discover the `authorize`, `token`, `registration`, `revocation`, and `introspection` endpoints. Required unless `authorize-endpoint` and `token-endpoint` are both set explicitly.

#### options.authorize-endpoint

> `string`

Authorization endpoint URL for `authorization-code`, overriding the value discovered from `issuer`.

#### options.token-endpoint

> `string`

Token endpoint URL for `authorization-code`, overriding the value discovered from `issuer`.

#### options.registration-endpoint

> `string`

Dynamic client registration endpoint URL for `authorization-code`, overriding the value discovered from `issuer`. Required, explicitly or via discovery, when `client.registration` is `dynamic`.

#### options.revocation-endpoint

> `string`

Token revocation endpoint URL for `authorization-code`, overriding the value discovered from `issuer`.

#### options.introspection-endpoint

> `string`

Token introspection endpoint URL for `authorization-code`, overriding the value discovered from `issuer`.

#### options.audience

> `string`

Audience requested from the IdP. Required for `token-exchange`; also sent as the `audience` parameter for `client-credentials`.

#### options.scope

> `string`

Space-delimited scope requested from the IdP. After a token is granted, the scope the IdP actually granted is available to downstream bindings as the guard's `scope` attribute, which may differ from the requested value.

#### options.via

> `string`

References another guard's credentials, using `${guarded['<guard-name>'].credentials}`, supplying the subject whose token is being exchanged. Required for `token-exchange`; optional for `authorization-code` to bind the browser consent to an already-authenticated caller.

#### options.callback

> `string`

Redirect URI Zilla listens on to complete a pending authorization when the IdP redirects back with `state` and `code` query parameters. Required for `token-exchange`. Not permitted for `client-credentials` or `jwt-bearer`, since neither grant redirects. For `authorization-code`, configure `elicitation.callback` instead.

#### options.challenge

> `integer`

Number of seconds before the access token's expiration to begin signaling a pending challenge, so specific protocol bindings can proactively renew it.

#### options.credentials

> `object`

Client authentication material for `client-credentials` and `jwt-bearer`. Not used by `authorization-code`, which authenticates using `options.client` instead.

```yaml
options:
  credentials:
    client-id: my-service
    client-secret: my-secret
```

##### credentials.client-id

> `string`

Client ID sent as HTTP Basic authentication when requesting a token. Required for `client-credentials`.

##### credentials.client-secret

> `string`

Client secret sent as HTTP Basic authentication when requesting a token. Required for `client-credentials`.

##### credentials.private-key

> `string`

PEM-encoded PKCS8 RSA private key used to sign the `jwt-bearer` assertion. Required for `jwt-bearer`.

```yaml
options:
  credentials:
    private-key: |
      -----BEGIN PRIVATE KEY-----
      ...
      -----END PRIVATE KEY-----
```

##### credentials.issuer

> `string`

Value embedded as the `iss` claim of the `jwt-bearer` assertion. Required for `jwt-bearer`.

##### credentials.kid

> `string`

Key ID embedded in the `jwt-bearer` assertion's JWS header, for IdPs that select the verification key by `kid`.

#### options.client

> `object`

OAuth client identity for `authorization-code`. Required for `authorization-code`.

```yaml
options:
  client:
    registration: static
    id: my-github-client
    secret: my-github-client-secret
```

##### client.registration\*

> `enum` [ `dynamic`, `static` ]

How the OAuth client is established. `static` uses `client.id`, and optionally `client.secret`, as configured. `dynamic` registers a new client with the resolved `registration-endpoint` at startup, using the credentials the IdP returns.

##### client.id

> `string`

Client ID. Required when `client.registration` is `static`.

##### client.secret

> `string`

Client secret, for confidential clients. Omit for public clients relying on PKCE alone.

#### options.elicitation

> `object`

Configuration for the browser-based consent step of `authorization-code`. Required for `authorization-code`.

```yaml
options:
  elicitation:
    callback: /oauth/callback
```

##### elicitation.callback\*

> `string`

Redirect URI Zilla presents to the IdP as part of the authorization request, and where the IdP redirects the user back to after consent. Also registered as the client's sole redirect URI during dynamic client registration.

## Engine Properties

Two engine-level properties, set with [`zilla start -P`](../zilla-cli.md#p-property), affect every `oauth` guard:

| Property | Default | Purpose |
| --- | --- | --- |
| `zilla.guard.oauth.assertion.lifetime.seconds` | `600` | Lifetime of the self-signed JWT assertion built for the `jwt-bearer` grant. |
| `zilla.guard.oauth.nonce.ttl.seconds` | `300` | How long a pending `authorization-code` or `token-exchange` authorization stays valid while waiting for the IdP's redirect callback. |
