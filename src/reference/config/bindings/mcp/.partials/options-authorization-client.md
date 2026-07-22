#### options.authorization

> `object` as map of named `object` properties

Authorization by a named guard, used to authorize outbound requests to the upstream MCP server.

```yaml
authorization:
  my_jwt_guard:
    credentials: "Bearer {credentials}"
```

#### authorization.credentials

> `string` | Default: `Bearer {credentials}`

Template used to build the outbound `Authorization` header. When it contains the `{credentials}` placeholder, the placeholder is replaced with the value returned by the named guard. When omitted from the template, the header is sent as the literal template value regardless of the guard outcome.
