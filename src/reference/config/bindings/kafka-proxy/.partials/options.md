### options\*

> `object`

The `kafka-proxy` specific options.

```yaml
options:
  cluster-id: development
  external:
    host: kafka-#.external.net
    port: 9093
  internal:
    host: b-#.kafka.internal.net
    port: 9094
```

#### options.cluster-id

> `string`

Specifies the cluster id for virtual cluster configuration.

#### options.clusters

> `array` of `string`

List of cluster id patterns matched against the virtual cluster configuration.

::: warning Deprecated
Use `cluster-id` instead.
:::

#### options.external\*

> `object`

Kafka proxy endpoint used by external clients.

```yaml
external:
  host: kafka-#.external.net
  port: 9093
  authorization:
    cognito0:
      mechanism: oauthbearer
```

#### external.host\*

> `string` | Pattern: `^[^:]+(?:-({[^}]+}|[^.]+))?(?::(\\d+)\\+)?$`

Hostname pattern for external Kafka broker names, where `#` is an integer.

#### external.port\*

> `integer`

Port number for external Kafka broker.

#### external.default

> `string` | Pattern: `^[^:]+$`

Default external hostname.

#### external.radix

> `enum` [ `10`, `16`, `36` ] | Default: `16`

Radix used to encode the broker number in the external hostname pattern.

#### external.authorization

> `object` as map of named `object` properties

Authorization configuration for external connections, keyed by guard name. Each named entry authenticates the external SASL handshake against that guard.

#### authorization.mechanism

> `enum` [ `plain`, `oauthbearer` ]

Authorization mechanism.

- `plain`: extracts `authzid`/`authcid`/`passwd` from a SASL/PLAIN initial response and substitutes them into the `credentials` template before authorizing with the guard.
- `oauthbearer`: parses an RFC 7628 SASL/OAUTHBEARER initial response and extracts the bearer token, substituting it into the `credentials` template before authorizing with the guard. On rejection, the client receives an RFC 7628 §3.7 error response instead of an immediate SASL failure.

#### authorization.credentials

> `string` | Default: `"Bearer {credentials}"` when `mechanism` is `oauthbearer`

Template used to build the credentials string passed to the guard.

- For `plain`, `{username}` and `{password}` are substituted from the SASL/PLAIN initial response's `authcid`/`passwd`. Required.
- For `oauthbearer`, `{credentials}` is substituted from the extracted bearer token. Optional.

```yaml
external:
  authorization:
    test0:
      mechanism: plain
      credentials: "{username}:{password}"
    cognito0:
      mechanism: oauthbearer
```

#### options.internal\*

> `object`

Internal Kafka broker endpoint.

```yaml
internal:
  host: b-#.kafka.internal.net
  port: 9094
```

#### internal.host\*

> `string` | Pattern: `^[^:]+$`

Hostname pattern for internal Kafka broker names, where `#` is an integer.

#### internal.port\*

> `integer`

Port number for internal Kafka broker.

#### internal.default

> `string` | Pattern: `^[^:]+$`

Default internal hostname.

#### internal.radix

> `enum` [ `10`, `16`, `36` ] | Default: `16`

Radix used to encode the broker number in the internal hostname pattern.

#### internal.authorization

> `object`

Authorization configuration for internal connections.

#### credentials.mechanism

> `enum` [ `plain`, `scram-sha-256`, `scram-sha-512`, `oauthbearer` ]

Authentication mechanism.

- `plain`, `scram-sha-256`, `scram-sha-512`: authenticates to the internal broker with the static `username`/`password` below.
- `oauthbearer`: authenticates to the internal broker with a token built from the `credentials` template below, evaluated against the session an external guard already authorized. Lets Zilla present the external client's own credentials to the internal broker instead of a static service-account secret.

#### credentials.username

> `string`

Username for authentication. Required when `mechanism` is `plain`, `scram-sha-256`, or `scram-sha-512`.

#### credentials.password

> `string`

Password for authentication. Required when `mechanism` is `plain`, `scram-sha-256`, or `scram-sha-512`.

```yaml
internal:
  authorization:
    credentials:
      mechanism: plain
      username: admin
      password: admin-secret
```

#### credentials.credentials

> `string`

Template used to build the bearer token presented to the internal broker. Required when `mechanism` is `oauthbearer`. Supports `${guarded['my_guard'].credentials}` to reference the raw credential string an external guard authorized the session with.

```yaml
internal:
  authorization:
    credentials:
      mechanism: oauthbearer
      credentials: "Bearer ${guarded['cognito0'].credentials}"
```

#### options.topics

> `array` of `object`

Topic configuration list.

#### topics[].name

> `string`

Topic name, as observed by the external client.

#### topics[].alias

> `string`

Template for the internal topic name. Supports `${topic}` to reference the topic's own `name`, along with identity and attribute placeholders such as `${guarded['my_guard'].identity}` and `${guarded['my_guard'].attributes.my_attribute}`. When omitted, the existing rules apply, either cluster-id prefixed or match the external name.

```yaml
topics:
  - name: messages
    alias: "${topic}-${guarded['my_guard'].identity}"
```

#### topics[].key

> `enum` [ `avro`, `boolean`, `double`, `float`, `int32`, `int64`, `json`, `string` ], `object`

Enforce validation for key.

#### key.model\*

> `enum` [ `avro`, `boolean`, `double`, `float`, `int32`, `int64`, `json`, `string` ]

A schema or type to validate the topic's key. Refer to the individual [model](../../../models/) docs for type specific implementation.

#### topics[].value

> `enum` [ `avro`, `boolean`, `double`, `float`, `int32`, `int64`, `json`, `string` ], `object`

Enforce validation for value.

#### value.model\*

> `enum` [ `avro`, `boolean`, `double`, `float`, `int32`, `int64`, `json`, `string` ]

A schema or type to validate the topic's value. Refer to the individual [model](../../../models/) docs for type specific implementation.

##### catalog

> `object` as map of named `array`

Catalog for schema retrieval. Required when `model` is `avro`, `json`, or `protobuf`. Applies to both key and value models.

###### catalog[].id\*

> `integer`

Define specific schema id to refer from catalog.

###### catalog[].strategy\*

> `enum` [ `topic` ]

To determine the subject based on the specified strategy.

###### catalog[].version

> `string` | Default: `latest`

Specific iteration or version of a registered schema in the defined catalog.

###### catalog[].subject\*

> `string`

Unique identifier for schema categorization in the catalog.

#### topics[].limit

> `string`

Topic limit.

#### topics[].constraints

> `array` of `object`

Constraints applied to this topic.

#### constraints[].mode

> `enum` [ `enforce`, `warn` ]

Constraint enforcement mode.

#### constraints[].regex

> `string`

Constraint regex pattern.

#### constraints[].partitions

> `object`

Partition constraints.

#### partitions.min

> `integer` | Minimum: `1`

Minimum number of partitions.

#### partitions.max

> `integer` | Minimum: `1`

Maximum number of partitions.

#### constraints[].replicas

> `object`

Replica constraints.

#### replicas.min

> `integer` | Minimum: `1`

Minimum number of replicas.

#### replicas.max

> `integer` | Minimum: `1`

Maximum number of replicas.

#### constraints[].configs

> `object` as map of named `string` properties, `object` as map of named `object` properties

Topic configuration constraints.

#### configs.min

> `integer`

Minimum configs.

#### configs.max

> `integer`

Maximum configs.

#### configs.enum

> `array` of `string`

Allowed config values.

#### constraints[].deletion

> `enum` [ `protected` ]

Topic deletion constraint.

#### options.limits

> `object` as map of named `object` properties

Rate limits by named group.

#### limits.produce

> `object`

Produce rate limit.

#### produce.bytes

> `string` | Pattern: `^[0-9]+(\\.[0-9]+)?\\s*(B|kB|KB|MB|mB|GB|gB|TB|tB|b|kb|Kb|mb|Mb|gb|Gb|tb|Tb)/s$`

Maximum produce data rate.

#### options.constraints

> `array` of `object`

Global connection constraints.

#### constraints[].client_id

> `string` | Pattern: `^[a-zA-Z0-9_-]*\\*?$`

Client ID pattern to match.

#### constraints[].api_versions

> `object`

API version constraints.

#### api_versions.min

> `object` as map of named `integer` properties

Minimum API versions by key.

#### api_versions.max

> `object` as map of named `integer` properties

Maximum API versions by key.

#### constraints[].cooldown

> `string`

Cooldown duration.

#### constraints[].producer

> `enum` [ `idempotent` ]

Producer constraint.

#### constraints[].compression

> `array` of `enum` [ `none`, `gzip`, `snappy`, `lz4`, `zstd` ]

Allowed compression types.
