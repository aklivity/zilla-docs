### options

> `object`

| Property                                      | Type                                                                                                                                       | Description                                                                                                                                                                                                    |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| options.bootstrap                             | `string[]`                                                                                                                                 | Topics to bootstrap in cache server even when no clients.                                                                                                                                                      |
| options.topics                                | `object[]`                                                                                                                                 | Topic configuration.                                                                                                                                                                                           |
| options.topics[].name                         | `string`                                                                                                                                   | Topic name.                                                                                                                                                                                                    |
| options.topics[].key                          | `enum` [ `avro`, `double`, `float`, `int32`, `int64`, `json`, `protobuf`, `string` ], `object`                                             | Enforce validation for key                                                                                                                                                                                     |
| options.topics[].key.model\*                  | `enum` [ `avro`, `double`, `float`, `int32`, `int64`, `json`, `protobuf`, `string` ]                                                       | A schema or type to validate the topic's key. Refer to the individual [model](../../../../reference/config/models/) docs for type specific implementation.                                                     |
| options.topics[].value                        | `enum` [ `avro`, `double`, `float`, `int32`, `int64`, `json`, `protobuf`, `string` ], `object`                                             | Enforce validation for value                                                                                                                                                                                   |
| options.topics[].value.model\*                | `enum` [ `avro`, `double`, `float`, `int32`, `int64`, `json`, `protobuf`, `string` ]                                                       | A schema or type to validate the topic's value. Refer to the individual [model](../../../../reference/config/models/) docs for type specific implementation.                                                   |
| options.topics[].defaultOffset                | `enum` [ `live`, `historical` ]                                                                                                            | Fetch offset to use for new consumers                                                                                                                                                                          |
| options.topics[].transforms                   | `object[]`                                                                                                                                 | Extract key or value attributes from the typed Kafka message to apply to the Kafka message id or Kafka headers. The `extract-key` property must come before the `extract-headers` property if they both exist. |
| options.topics[].transforms[].extract-key     | `string` \| Pattern: `^\\$\\{message\\.(key\|value)\\.([A-Za-z\_][A-Za-z0-9_]\*)\\}$` | Use a part of the Kafka message as the Kafka message key.                                                                                                                                                      |
| options.topics[].transforms[].extract-headers | `Map<string, string>` \| Pattern: `^\\$\\{message\\.(key\|value)\\.([A-Za-z\_][A-Za-z0-9_]\*)\\}$` | Use a part of the Kafka message as a Kafka message header.                                                                                                                                                     |

#### Transform Example

```yaml
transforms:
  - extract-key: ${message.key.id}
```

```yaml
transforms:
  - extract-headers:
      my-kafka-header: ${message.value.test}
```

```yaml
transforms:
  - extract-key: ${message.value.id}
  - extract-headers:
      my-kafka-header: ${message.value.test}
```

#### Example

The `cache_server` specific options.

```yaml
options:
  bootstrap:
    - items-requests
    - items-responses
  topics:
    - name: items-requests
      defaultOffset: live
```
