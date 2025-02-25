### options

> `object`

| Property | Type | Description |
| -- | -- | -- |
| options.authorization |  `Map<string, object>` |  Authorization by a named guard. | 
| options.authorization.credentials\* |  `object` |  Defines how to extract credentials from the MQTT connect packet. | 
| options.authorization.credentials.connect\* |  `object` |  MQTT connect packet properties | 
| options.authorization.credentials.connect.username |  `string` |  Extract credentials from the MQTT connect packet username property with `{credentials}`, e.g. `"Bearer` `{credentials}"`. | 
| options.authorization.credentials.connect.password |  `string` |  Extract credentials from the MQTT connect packet password property with `{credentials}`, e.g. `"Bearer` `{credentials}"`. | 

#### Example

The `client` specific options.

```yaml
options:
  authorization:
    my_jwt_guard:
      credentials:
        connect:
          username: Bearer {credentials}
```