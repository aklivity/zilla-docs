### options

> `object`

We define `TypeEnum` as `enum` [ `double`, `float`, `int32`, `int64`, `json`, `string` ]

| Property | Type | Description |
| -- | -- | -- |
| options.authorization |  `Map<string, object>` |  Authorization by a named guard. |
| options.authorization.credentials\* |  `object` |  Defines how to extract credentials from the MQTT connect packet. |
| options.authorization.credentials.connect\* |  `object` |  MQTT connect packet properties |
| options.authorization.credentials.connect.username |  `string` |  Extract credentials from the MQTT connect packet username property with `{credentials}`, e.g. `"Bearer` `{credentials}"`. |
| options.authorization.credentials.connect.password |  `string` |  Extract credentials from the MQTT connect packet password property with `{credentials}`, e.g. `"Bearer` `{credentials}"`. |
| options.versions |  `array` of `enum` [ `v3.1.1`, `v5` ] |  Supported protocol versions. |
| options.topics |  `object[]` |  Topic configuration. |
| options.topics[].name |  `string` |  Topic name. |
| options.topics[].content |  `TypeEnum`, `object` |  Enforce validation for content |
| options.topics[].content.model\* |  `TypeEnum` |  A schema or type to validate the request content. Refer to the individual [model](../../../../reference/config/models/) docs for type specific implementation. |
| options.topics[].user-properties |  `Map<string, enum>` with `TypeEnum`, `Map<string, object>` |  Enforce validation for user provided properties. |
| options.topics[].user-properties.model\* |  `TypeEnum` |  A schema or type to validate the user-properties content. Refer to the individual [model](../../../../reference/config/models/) docs for type specific implementation. |

#### Example

The `server` specific options.

```yaml
options:
  authorization:
    my_jwt_guard:
      credentials:
        connect:
          username: Bearer {credentials}
```

The `options.topics[].user-properties` example.

```yaml
user-properties:
  my-app-prop:
    model: int32
    range: 0-100
```
