---
shortTitle: server
---

# mqtt server

The mqtt server binding

```yaml {3}
<!-- @include: ./.partials/server.yaml -->
```

## Configuration (\* required)


### options

> `object`

`server`-specific options.

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

<!-- @include: ./.partials/options.md -->

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

<!-- @include: ../.partials/options-mqtt-auth.md -->

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

#### content.model

> `model` [ [`avro`](../../models/model-avro.md), [`json`](../../models/model-avro.md), [`protobuf`](../../models/model-protobuf.md), [`string`](../../models/model-string.md), [`integer`](../../models/model-integer.md) ]

A schema or type to validate the request content.

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


<!-- @include: ./.partials/routes.md -->
<!-- @include: ../.partials/exit.md -->
<!-- @include: ../.partials/telemetry.md -->
