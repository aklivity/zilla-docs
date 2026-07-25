---
shortTitle: kafka

category:
  - Telemetry
tag:
  - Metrics
---

# kafka Metrics

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

Zilla runtime telemetry type

```yaml
telemetry:
  metrics:
    - kafka.request.bytes
    - kafka.response.bytes
    - kafka.response.codes
    - kafka.request.duration
```

## Configuration

:::: note Metrics

- [metrics](#metrics)
  - [kafka.request.bytes](#kafka-request-bytes)
  - [kafka.response.bytes](#kafka-response-bytes)
  - [kafka.response.codes](#kafka-response-codes)
  - [kafka.request.duration](#kafka-request-duration)

::: right
\* required
:::

::::

### metrics

> `array` of `string`

The list of metric names available to record and export.

#### kafka.request.bytes

> `histogram`

The `kafka` request content length in `bytes`.

#### kafka.response.bytes

> `histogram`

The `kafka` response content length in `bytes`.

#### kafka.response.codes

> `counter`

The count of `kafka` API response codes.

#### kafka.request.duration

> `histogram`

The duration of `kafka` requests in `nanoseconds`.
