
#### options.requests

> `array` of `object`

#### requests[].content

> `object`

Enforce validation for the request content.

#### content.model

> `model` [ [`avro`](../../../models/avro.md), [`json`](../../../models/avro.md), [`protobuf`](../../../models/protobuf.md), [`string`](../../../models/string.md), [`double`](../../../models/double.md), [`float`](../../../models/float.md), [`int32`](../../../models/int32.md), [`int64`](../../../models/int64.md) ]

A schema or type to validate the request content.

#### requests[].content-type

> `string`

#### requests[].headers

> `string`

#### requests[].method

> `enum` [ "GET", "PUT", "POST", "DELETE", "OPTIONS", "HEAD", "PATCH", "TRACE" ]

#### requests[].params

> `string`

#### params.path

> `object` of a named [`model`](../../../models/)

Enforce validation for path

#### path.model

> `model` [ [`avro`](../../../models/avro.md), [`json`](../../../models/avro.md), [`protobuf`](../../../models/protobuf.md), [`string`](../../../models/string.md), [`double`](../../../models/double.md), [`float`](../../../models/float.md), [`int32`](../../../models/int32.md), [`int64`](../../../models/int64.md) ]

#### params.query

> `object` of a named [`model`](../../../models/)

Enforce validation for query

#### query.model

> `model` [ [`avro`](../../../models/avro.md), [`json`](../../../models/avro.md), [`protobuf`](../../../models/protobuf.md), [`string`](../../../models/string.md), [`double`](../../../models/double.md), [`float`](../../../models/float.md), [`int32`](../../../models/int32.md), [`int64`](../../../models/int64.md) ]

#### requests[].path

> `string`

#### requests[].responses

> `array` of `object`

#### responses[].content

> `string`

#### responses[].content-type

> `array` of `string`

#### responses[].headers

> `map` of "name: [model](../../../models/)" properties

Enforce validation for response headers.

```yaml
headers:
  my-header:
    model: string
    maxLength: 100
```

#### headers.model

> `model` [ [`avro`](../../../models/avro.md), [`json`](../../../models/avro.md), [`protobuf`](../../../models/protobuf.md), [`string`](../../../models/string.md), [`double`](../../../models/double.md), [`float`](../../../models/float.md), [`int32`](../../../models/int32.md), [`int64`](../../../models/int64.md) ]

#### responses[].status

> `string`

#### options.versions

Supported protocol versions.

#### options.overrides

> `map` of `name: value` properties

Request header overrides.
