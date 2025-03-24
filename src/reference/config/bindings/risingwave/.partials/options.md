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

> `object` as map of named `array`

Define UDF server

##### udf[].server

> `string`

UDF Server location

##### udf[].language

> `string` | Default: `java`

UDF language

#### options.kafka

> `object`

Kafka properties and message formatting

##### kafka.properties

> `object`

###### kafka.properties.bootstrap.server

> `string`

Kafka bootstrap server

##### kafka.format

> `object`

###### kafka.format.model

> `enum` [ `double`, `float`, `int32`, `int64`, `json`, `string` ]

A schema or type to validate the request content. Refer to the individual [model](../../../models/) docs for type specific implementation.

##### kafka.format.catalog\*

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
