### options

> `object`

`sse`-specific options.

```yaml
options:
  retry: 2000
```

#### options.retry

> `integer` | Default: `2000`

Retry delay (ms)

#### options.requests

> `array` of `object`

the `requests`-specific options.

#### requests[].path

> `string`

The path selector.

#### requests[].content

> `object`

Enforce validation for the request content.

#### content.model\*

> `enum` [ `avro`, `double`, `float`, `int32`, `int64`, `json`, `protobuf`, `string` ]

A schema or type to validate the request content. Refer to the individual [model](../../models) docs for type specific implementation.
