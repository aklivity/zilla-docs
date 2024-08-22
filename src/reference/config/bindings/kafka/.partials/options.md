### options

> `object`

`kafka`-specific options.

```yaml
options:
  bootstrap:
    - items-requests
    - items-responses
  topics:
    - name: items-requests
      defaultOffset: live
```

#### options.bootstrap

> `array` of `string`

Topics to bootstrap in cache server even when no clients.

#### options.topics

> `array` of `object`

Topic configuration.

#### topics[].name\*

> `string`

Topic name.

#### topics[].defaultOffset

> `enum` [ "live", "historical" ] | Default: `"historical"`

Fetch offset to use for new consumers

#### topics[].key

> `object` of a named [`model`](../models/)

Enforce validation for key

#### topics[].value

> `object` of a named [`model`](../models/)

Enforce validation for value

#### options.servers

> `array` of `string`

Bootstrap servers to use when connecting to `kafka` cluster.

#### options.sasl

> `object`

SASL credentials to use when connecting to `kafka` brokers.

#### sasl.mechanism\*

> `enum` [ "plain", "scram-sha-1", "scram-sha-256", "scram-sha-512" ]

SASL mechanism\
Supports `plain` and `scram` mechanisms.

#### sasl.username

> `string`

SASL username.

#### sasl.password

> `string`

SASL password.
