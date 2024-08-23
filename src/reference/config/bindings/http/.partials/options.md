
#### options.requests

> `array` of `object`

#### requests[].content

> `object`

Enforce validation for the request content.

#### content.model

> `model` [ [`avro`](../../models/model-avro.md), [`json`](../../models/model-avro.md), [`protobuf`](../../models/model-protobuf.md), [`string`](../../models/model-string.md), [`integer`](../../models/model-integer.md) ]

A schema or type to validate the request content.

#### requests[].content-type

> `string`



#### requests[].headers

> `string`



#### requests[].method

>  `enum` [ "GET", "PUT", "POST", "DELETE", "OPTIONS", "HEAD", "PATCH", "TRACE" ]



#### requests[].params

> `string`


#### params.path

> `object` of a named [`model`](../models/)

Enforce validation for path

#### params.query

> `object` of a named [`model`](../models/)

Enforce validation for query

#### requests[].path

> `string`



#### requests[].responses

> `array` of `object`


#### responses[].content

> `string`



#### responses[].content-type

> `array` of `string`



#### responses[].headers

> `map` of "name: [model](../models/)" properties

Enforce validation for response headers.

```yaml
headers:
  my-header:
    type: string
    maxLength: 100
```

#### responses[].status

> `string`


#### options.versions

Supported protocol versions.


#### options.overrides

> `map` of `name: value` properties

Request header overrides.
