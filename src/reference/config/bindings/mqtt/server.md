---
shortTitle: server
---

# mqtt server

The mqtt server binding decodes the MQTT protocol on the inbound network stream, producing higher level application streams for each `publish` or `subscribe` MQTT topic.

```yaml {3}
<!-- @include: ./.partials/server.yaml -->
```

## Configuration (\* required)

### options\*

> `object`

The `server` specific options.

```yaml
options:
  store: my_store
  authorization:
    my_jwt_guard:
      credentials:
        connect:
          username: Bearer {credentials}
  versions:
    - v5
    - v3.1.1
```

<!-- @include: ./.partials/options.md -->

#### options.store\*

> `string`

The name of a configured [store](../../stores/memory.md) used to coordinate MQTT session ownership across connections and Zilla instances. Required for the `server` kind.

```yaml
options:
  store: my_store
```

#### options.authorization

> `object` as map of named `object` properties

Authorization by a named guard.

```yaml
authorization:
  my_jwt_guard:
    credentials:
      connect:
        username: Bearer {credentials}
```

<!-- @include: ../.partials/options-mqtt-auth.md -->

#### options.versions

> `array` of `enum` [ `v3.1.1`, `v5` ]

Supported protocol versions.

#### options.topics

> `array` of `object`

Topic configuration.

#### topics[].name

> `string`

Topic name.

#### topics[].content

> `enum` [ `avro`, `boolean`, `double`, `float`, `int32`, `int64`, `json`, `string` ], `object`

Enforce validation for content

#### content.model\*

> `enum` [ `avro`, `boolean`, `double`, `float`, `int32`, `int64`, `json`, `string` ]

A schema or type to validate the request content. Refer to the individual [model](../../models/) docs for type specific implementation.

#### topics[].user-properties

> `object` as map of named `enum` [ `avro`, `boolean`, `double`, `float`, `int32`, `int64`, `json`, `string` ], `object` as map of named `object` properties

Enforce validation for user provided properties.

```yaml
user-properties:
  my-app-prop:
    model: int32
    range: 0-100
```

#### user-properties.model\*

> `enum` [ `avro`, `boolean`, `double`, `float`, `int32`, `int64`, `json`, `string` ]

A schema or type to validate the user-properties content. Refer to the individual [model](../../models/) docs for type specific implementation.

<!-- @include: ./.partials/routes.md -->
<!-- @include: ../.partials/exit.md -->
<!-- @include: ../.partials/telemetry.md -->
