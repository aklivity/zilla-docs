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

> `model` [ [`avro`](../../../models/avro.md), [`json`](../../../models/avro.md), [`protobuf`](../../../models/protobuf.md), [`string`](../../../models/string.md), [`double`](../../../models/double.md), [`float`](../../../models/float.md), [`int32`](../../../models/int32.md), [`int64`](../../../models/int64.md) ]

A schema or type to validate the request content.
