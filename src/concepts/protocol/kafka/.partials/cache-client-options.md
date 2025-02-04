### options

> `object`

| Property                       | Type                                                                                           | Description                                                                                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| options.topics                 | `object[]`                                                                                     | Topic configuration.                                                                                                                                         |
| options.topics[].name          | `string`                                                                                       | Topic name.                                                                                                                                                  |
| options.topics[].key           | `enum` [ `avro`, `double`, `float`, `int32`, `int64`, `json`, `protobuf`, `string` ], `object` | Enforce validation for key                                                                                                                                   |
| options.topics[].key.model\*   | `enum` [ `avro`, `double`, `float`, `int32`, `int64`, `json`, `protobuf`, `string` ]           | A schema or type to validate the topic's key. Refer to the individual [model](../../../../reference/config/models/) docs for type specific implementation.   |
| options.topics[].value         | `enum` [ `avro`, `double`, `float`, `int32`, `int64`, `json`, `protobuf`, `string` ], `object` | Enforce validation for value                                                                                                                                 |
| options.topics[].value.model\* | `enum` [ `avro`, `double`, `float`, `int32`, `int64`, `json`, `protobuf`, `string` ]           | A schema or type to validate the topic's value. Refer to the individual [model](../../../../reference/config/models/) docs for type specific implementation. |

#### Example

The `cache_client` specific options.

```yaml
options:
  topics:
    - name: items-requests
```
