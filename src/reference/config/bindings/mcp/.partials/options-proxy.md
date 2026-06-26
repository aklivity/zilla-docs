### options

> `object`

The `proxy` kind `mcp` specific options.

```yaml
options:
  cache:
    store: my_store
    ttl: 5m
```

#### options.cache

> `object`

Cache configuration for upstream MCP responses, backed by a referenced store binding.

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

#### options.tools

> `enum` [ `avro`, `boolean`, `double`, `float`, `int32`, `int64`, `json`, `string` ], `object`

Validation model applied to `tools/call` request arguments. Refer to the individual [model](../../../models/) docs for type specific implementation.
