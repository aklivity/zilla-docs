
### catalog

> `object` as map of named `array`

To map defined catalog for schema retrieval based on catalog specific parameters.

#### catalog[].id\*

> `integer`

Define specific schema id to refer from catalog.

#### catalog[].strategy\*

> `enum` [ `topic` ]

To determine the subject based on the specified strategy.

#### catalog[].version

> `string` | Default: `latest`

Specific iteration or version of a registered schema in the defined catalog.

#### catalog[].subject\*

> `string`

Unique identifier for schema categorization in the catalog.

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

#### options.external\*

> `object`

Kafka proxy endpoint used by external clients.

```yaml
external:
  host: kafka-#.external.net
  port: 9093
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

#### external.authorization

> `object` as map of named `object` properties

Authorization configuration for external connections.

#### authorization.credentials\*

> `object`

Credentials configuration for authorization.

#### authorization.mechanism

> `enum` [ `plain` ]

Authorization mechanism.

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

#### internal.authorization

> `object`

Authorization configuration for internal connections.

#### credentials.mechanism

> `enum` [ `plain`, `scram-sha-256`, `scram-sha-512` ]

Authentication mechanism.

#### credentials.mechanism: plain\*

> `const`

Plain authentication mechanism.

#### credentials.username\*

> `string`

Username for authentication.

#### credentials.password\*

> `string`

Password for authentication.

#### credentials.mechanism: scram-sha-256\*

> `const`

SCRAM-SHA-256 authentication mechanism.

#### credentials.mechanism: scram-sha-512\*

> `const`

SCRAM-SHA-512 authentication mechanism.

#### options.topics

> `array` of `object`

Topic configuration list.

#### topics[].name

> `string`

Topic name.

#### topics[].key

> `enum` [ `avro`, `boolean`, `double`, `float`, `int32`, `int64`, `json`, `string` ], `object`

Enforce validation for key.

#### key.model\*

> `enum` [ `avro`, `boolean`, `double`, `float`, `int32`, `int64`, `json`, `string` ]

A schema or type to validate the topic's key.

#### topics[].value

> `enum` [ `avro`, `boolean`, `double`, `float`, `int32`, `int64`, `json`, `string` ], `object`

Enforce validation for value.

#### value.model\*

> `enum` [ `avro`, `boolean`, `double`, `float`, `int32`, `int64`, `json`, `string` ]

A schema or type to validate the topic's value.

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
