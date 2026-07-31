### options\*

> `object`

The `client` specific options.

```yaml
options:
  servers:
    - kafka.examples.dev:9092
  authorization:
    my_auth:
      credentials:
        mechanism: plain
        username: my_username
        password: my_password
  topics:
    - name: orders
```

#### options.servers\*

> `array` of `string`

Bootstrap servers to use when connecting to the `kafka` cluster.

#### options.authorization

> `object` as map of named `object`

Credentials used to authenticate this binding's own connection to the `kafka` cluster, keyed by an arbitrary name. At most one entry is allowed.

#### authorization.credentials\*

> `object`

```yaml
credentials:
  mechanism: plain
  username: my_username
  password: my_password
```

#### credentials.mechanism\*

> `enum` [ `plain`, `scram-sha-1`, `scram-sha-256`, `scram-sha-512`, `oauthbearer` ]

SASL mechanism used to authenticate with the broker.

#### credentials.username\*

> `string`

SASL username. Required when `mechanism` is `plain` or a `scram-sha-*` variant; not allowed with `oauthbearer`.

#### credentials.password\*

> `string`

SASL password. Required when `mechanism` is `plain` or a `scram-sha-*` variant; not allowed with `oauthbearer`.

#### credentials.token\*

> `string`

SASL token. Required when `mechanism` is `oauthbearer`; not allowed with any other mechanism.

#### options.topics

> `array` of `object`

Per-topic key and value validation, applied to `produce` calls and to records read back by `consume`.

<!-- @include: ../.partials/options-kafka-topics.md -->
