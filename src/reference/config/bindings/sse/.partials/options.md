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

##### requests[].path

> `string`

The path selector.

##### requests[].content

> `object` of a named [`model`](../models/)

Enforce validation for the request content.
