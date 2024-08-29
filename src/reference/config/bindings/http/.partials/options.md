
#### options.requests

> `array` of `object`

#### requests[].content

> `object`

Enforce validation for the request content.

#### content.model\*

> `enum` [ `double`, `float`, `int32`, `int64`, `json`, `string` ]

A schema or type to validate the request content. Refer to the individual [model](../../models) docs for type specific implementation.

#### requests[].content-type

> `array` of `string`

#### requests[].headers

> `object` as map of named:`object`

#### requests[].method

> `enum` [ `GET`, `PUT`, `POST`, `DELETE`, `OPTIONS`, `HEAD`, `PATCH`, `TRACE` ]

#### requests[].params

> `object`

#### params.path

> `object` as map of named:`object`

Enforce validation for path

#### path.model\*

> `enum` [ `double`, `float`, `int32`, `int64`, `json`, `string` ]

A schema or type to validate the path content. Refer to the individual [model](../../models) docs for type specific implementation.

#### params.query

> `object` as map of named:`object`

Enforce validation for query

#### query.model\*

> `enum` [ `double`, `float`, `int32`, `int64`, `json`, `string` ]

A schema or type to validate the query content. Refer to the individual [model](../../models) docs for type specific implementation.

#### requests[].path

> `string`

#### requests[].responses

> `array` of `object`

#### responses[].content

> `object`

Enforce validation for the response content.

#### content.model\*

> `enum` [ `double`, `float`, `int32`, `int64`, `json`, `string` ]

A schema or type to validate the response content. Refer to the individual [model](../../models) docs for type specific implementation.

#### responses[].content-type

> `array` of `string`

#### responses[].headers

> `object` as map of named:`object`

Enforce validation for response headers.

```yaml
headers:
  my-header:
    model: string
    maxLength: 100
```

#### headers.model\*

> `enum` [ `double`, `float`, `int32`, `int64`, `json`, `string` ]

A schema or type to validate the headers content. Refer to the individual [model](../../models) docs for type specific implementation.

#### responses[].status

> `integer`, `array` of `integer`

#### options.versions

> `array` of `enum` [ `http/1.1`, `h2` ] | Default: `http/1.1,h2`

Supported protocol versions.

#### options.overrides

> `object` as map of named: `string` properties

Request header overrides.
