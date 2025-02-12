### options\*

> `object`

| Property | Type | Description |
| -- | -- | -- |
| options.interval |  `number` | Default: `30` |  Interval in seconds to push data to the collector. | 
| options.signals |  `array` of `enum` [ `metrics`, `logs` ] |  Specifies what signals should be exported. The default behavior is to export all supported signals. | 
| options.endpoint\* |  `object` |  Contains details for the OpenTelemetry Protocol collector endpoint. | 
| options.endpoint.protocol |  `enum` [ `http` ] | Default: `http` |  Specifies the protocol to use for exporting data for exporting data to the [OTEL Collector](https://opentelemetry.io/docs/collector/). | 
| options.endpoint.location\* |  `string` |  The URI for the collector endpoint. | 
| options.endpoint.overrides |  `object` |  The options for overriding the endpoint for each signal type. | 
| options.endpoint.overrides.logs |  `string` | Default: `/v1/logs` |  The `logs` signal endpoint URI. | 
| options.endpoint.overrides.metrics |  `string` | Default: `/v1/metrics` |  The `metrics` signal endpoint URI. | 

#### Examples

The `otlp` specific options.

```yaml
options:
  interval: 30
  signals:
    - logs
    - metrics
  endpoint:
    protocol: http
    location: http://otlp-collector:4318
```

