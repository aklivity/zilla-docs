#### options.authorization

> `object` as map of named `object` properties

Authorization by a named guard, used to validate inbound MCP requests. A request with no `Authorization` header is admitted as unauthorized, matching how an unauthenticated request reaches an unguarded route elsewhere in Zilla; a request whose `Authorization` header is present but does not match the [`credentials`](#authorization-credentials) template, or whose extracted credentials the guard rejects, is rejected outright with a `401` response and a `WWW-Authenticate` challenge.

```yaml
authorization:
  my_jwt_guard:
    credentials: "Bearer {credentials}"
```

#### authorization.credentials

> `string` | Default: `Bearer {credentials}`

Template matched against the inbound `Authorization` header, extracting the captured value in place of the required `{credentials}` placeholder and passing it to the named guard to authorize the session.
