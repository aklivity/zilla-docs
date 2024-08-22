
### options

> `object`

`mqtt`-specific options.

```yaml
options:
  authorization:
    my_jwt_guard:
      credentials:
        connect:
          username: Bearer {credentials}
  versions:
    - v5
    - v3.1.1
```

#### options.authorization

> `object` as map of named objects

Authorization by a named guard.

```yaml
authorization:
  my_jwt_guard:
    credentials:
      connect:
        username: Bearer {credentials}
```

#### authorization.credentials

> `object`

Defines how to extract credentials from the MQTT connect packet.

##### credentials.connect

> `object`

MQTT connect packet properties

##### connect.username

> `string`

Extract credentials from the MQTT connect packet username property with `{credentials}`, e.g. `"Bearer` `{credentials}"`.

##### connect.password

> `string`

Extract credentials from the MQTT connect packet password property with `{credentials}`, e.g. `"Bearer` `{credentials}"`.

#### options.versions

> `array` of `enum` [ "v5", "v3.1.1" ]

Supported protocol versions.

#### options.topics

> `array` of `object`

Topic configuration.

#### topics[].name\*

> `string`

Topic name.

#### topics[].content

> `object` of a named [`model`](../models/)

Enforce validation for content

#### topics[].user-properties

> `map` of "name: [model](../models/)" properties

Enforce validation for user provided properties

```yaml
user-properties:
  my-app-prop:
    type: integer
    minimum: 0
    maximum: 100
```
