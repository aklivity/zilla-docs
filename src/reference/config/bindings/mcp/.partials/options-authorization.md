#### options.authorization

> `object` as map of named `object` properties

Authorization by a named guard.

```yaml
authorization:
  my_jwt_guard:
    credentials: scope
```

#### authorization.credentials

> `string`

Credentials used by the named guard to authorize the MCP session.
