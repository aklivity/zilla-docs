### options

> `object`

`risingwave` specific options.

```yaml
options:
  udf:
    - server: http://localhost:8815
    - server: http://localhost:8816
      language: python
  kafka:
    properties:
      bootstrap.server: localhost:9092
    format:
      model: json
      catalog:
        catalog0:
          - strategy: topic
```

#### options.udf

> `array` of `object`

Define UDF server

##### udf[].server

> `string` | Pattern: `^([a-zA-Z0-9\\\\.-]+)(:(\\\\{[a-zA-Z_]+\\\\}|[0-9]+))?$`

UDF Server location

##### udf[].language

> `enum` [ `java`, `python` ] | Default: `java`

UDF language

#### options.kafka

> `object`

Kafka properties and message formatting

##### kafka.properties

> `object`

###### properties.bootstrap.server

> `string`

Kafka bootstrap server

##### kafka.format

> `enum` [ `avro`, `boolean`, `double`, `float`, `int32`, `int64`, `json`, `protobuf`, `string` ], `object`

###### format.model\*

> `enum` [ `avro`, `boolean`, `double`, `float`, `int32`, `int64`, `json`, `protobuf`, `string` ]

A schema or type to validate the request content. Refer to the individual [model](../../../models/) docs for type specific implementation.

##### catalog

> `object` as map of named `array`

To map defined catalog for schema retrieval based on catalog specific parameters. Any of the possible combination can be configured.

> `id`
-----
> `strategy`
> `version`
-----
> `subject`
> `version`

###### catalog[].id\*

> `integer`

Define specific schema id to refer from catalog.

###### catalog[].version

> `string` | Default: `latest`

Specific iteration or version of a registered schema in the defined catalog.

###### catalog[].strategy\*

> `enum` [ `topic` ]

To determine the subject based on the specified strategy

###### catalog[].subject\*

> `string`

Unique identifier for schema categorization in the catalog.
