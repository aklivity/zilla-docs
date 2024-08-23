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

#### content.model

> `model` [ [`avro`](../../models/model-avro.md), [`json`](../../models/model-avro.md), [`protobuf`](../../models/model-protobuf.md), [`string`](../../models/model-string.md), [`integer`](../../models/model-integer.md) ]

A schema or type to validate the request content.
