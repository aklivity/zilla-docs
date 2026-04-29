### telemetry

> `object`

Defines the desired telemetry for the binding.

#### telemetry.metrics

> `array`

Telemetry metrics to track

```yaml
telemetry:
  metrics:
    - stream.*
    - http.*
```

#### telemetry.attributes

> `object` as map of named `string` properties

Telemetry attributes to add to the binding metrics.
