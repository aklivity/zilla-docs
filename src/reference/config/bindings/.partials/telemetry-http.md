### telemetry

> `object`

Defines the desired telemetry for the binding.

#### telemetry.metrics

> `enum` [ "stream", "http" ]

Telemetry metrics to track

```yaml
telemetry:
  metrics:
    - stream.*
    - http.*
```
