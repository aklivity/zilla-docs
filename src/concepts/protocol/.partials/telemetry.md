### telemetry

Defines the desired telemetry for the binding.

| Property | Type       | Description                 | Required | Default Value |
| -------- | ---------- | --------------------------- | -------- | ------------- |
| metrics  | `string[]` | Telemetry metrics to track. | No       |               |

#### Example

```yaml
telemetry:
  metrics:
    - stream.*
```
