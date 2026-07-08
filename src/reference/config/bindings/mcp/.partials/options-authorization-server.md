#### options.authorization

> `object` as map of named `object` properties

Authorization by a named guard, used to validate inbound MCP requests. When configured, every request must carry an `Authorization` header matching the [`credentials`](#authorization-credentials) template, otherwise the session is rejected with a `401` response and a `WWW-Authenticate` challenge.

```yaml
authorization:
  my_jwt_guard:
    credentials: "Bearer {credentials}"
```

#### authorization.credentials

> `string` | Default: `Bearer {credentials}`

Template matched against the inbound `Authorization` header, extracting the captured value in place of the required `{credentials}` placeholder and passing it to the named guard to authorize the session.
