### telemetry

> `object`

Defines the desired telemetry for the binding.

#### telemetry.metrics

> `enum` [ "stream", "grpc" ]

Telemetry metrics to track

```yaml
telemetry:
  metrics:
    - stream.*
    - grpc.*
```
