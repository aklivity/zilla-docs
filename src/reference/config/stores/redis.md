---
shortTitle: redis
category:
  - Store
tag:
  - redis
---

# redis Store

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

Defines a store backed by Redis.

The `redis` store connects to a Redis instance and can be used to persist session state, rate-limit counters, or other key-value data shared across Zilla instances. TLS connections are supported via the `vault` option.

```yaml {2}
stores:
  my_redis_store:
    type: redis
    options:
      url: rediss://redis.example.com:6380
      vault:
        my_vault:
          keys:
            - client
          trust:
            - ca
      default-ttl: PT10S
```

## Configuration (\* required)

### options\*

> `object`

The `redis` specific options.

```yaml
options:
  url: rediss://redis.example.com:6380
  vault:
    my_vault:
      keys:
        - client
      trust:
        - ca
  default-ttl: PT10S
```

#### options.url\*

> `string`

Redis connection URL, e.g. `redis://localhost:6379` or `rediss://redis.example.com:6380` for TLS.

```yaml
options:
  url: redis://localhost:6379
```

#### options.vault

> `object` as map of named `object` properties

Named vault references used to configure TLS for the Redis connection. Each key is a vault name; the value specifies which keys and trust stores to use.

```yaml
options:
  vault:
    my_vault:
      keys:
        - client
      trust:
        - ca
```

##### vault.keys

> `array` of `string`

List of key aliases from the referenced vault to use for TLS client authentication.

##### vault.trust

> `array` of `string`

List of certificate aliases from the referenced vault to use when verifying the Redis server certificate.

##### vault.trustcacerts

> `boolean`

When `true`, the JVM CA certificates are trusted in addition to any explicitly listed trust certificates. Defaults to `false`.

#### options.default-ttl

> `string` | Pattern: `^PT(\\d+H)?(\\d+M)?(\\d+(\\.\\d+)?S)?$`

Default time-to-live for entries written to the store, specified as an ISO 8601 duration (e.g. `PT10S` for 10 seconds, `PT1M30S` for 90 seconds).

```yaml
options:
  default-ttl: PT10S
```
