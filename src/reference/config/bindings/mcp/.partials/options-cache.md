#### options.cache

> `object`

Cache configuration for upstream MCP responses, backed by a referenced store binding.

```yaml
cache:
  store: my_memory_store
  ttl: 5m
  authorization:
    my_jwt_guard:
      credentials: scope
```

#### cache.store\*

> `string`

Name of the store binding used to persist cached entries.

#### cache.ttl

> `string` | Default: `PT5M`

Time-to-live before a cached entry is refreshed.

#### cache.authorization

> `object` as map of named `object` properties

Authorization by a named guard used when refreshing cached entries.

#### authorization.credentials

> `string`

Credentials used by the named guard when refreshing cached entries.
