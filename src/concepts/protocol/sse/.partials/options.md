### options

> `object`

We define `TypeEnum` as `enum` [ `double`, `float`, `int32`, `int64`, `json`, `string` ]

| Property | Type | Description |
| -- | -- | -- |
| options.retry |  `integer` | Default: `2000` |  Retry delay in milliseconds. | 
| options.requests |  `object[]` |  The `requests` specific options. | 
| options.requests[].path |  `string` |  The path selector. | 
| options.requests[].content | `TypeEnum`, `object` |  Enforce validation for the request content. | 
| options.requests[].content.model\* |  `TypeEnum` |  A schema or type to validate the request content. Refer to the individual [model](../../../models) docs for type specific implementation. | 

#### Examples

The `sse` specific options.

```yaml
options:
  retry: 2000
```