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

> `object` of a named [`model`](../../models/)

Enforce validation for content

#### content.model

> `model` [ [`avro`](../../models/avro.md), [`json`](../../models/avro.md), [`protobuf`](../../models/protobuf.md), [`string`](../../models/string.md), [`double`](../../models/double.md), [`float`](../../models/float.md), [`int32`](../../models/int32.md), [`int64`](../../models/int64.md) ]

A schema or type to validate the request content.

#### topics[].user-properties

> `map` of "name: [model](../../models/)" properties

Enforce validation for user provided properties.

```yaml
user-properties:
  my-app-prop:
    model: int32
    range: 0-100
```

#### user-properties.model

> `model` [ [`avro`](../../models/avro.md), [`json`](../../models/avro.md), [`protobuf`](../../models/protobuf.md), [`string`](../../models/string.md), [`double`](../../models/double.md), [`float`](../../models/float.md), [`int32`](../../models/int32.md), [`int64`](../../models/int64.md) ]

<!-- @include: ./.partials/routes.md -->
<!-- @include: ../.partials/exit.md -->
<!-- @include: ../.partials/telemetry.md -->
