### telemetry

> `object`

Defines the desired telemetry for the binding.

| Property | Type       | Description                 |
| -------- | ---------- | --------------------------- |
| metrics  | `string[]` | Telemetry metrics to track. |

#### Example

```yaml
telemetry:
  metrics:
    - stream.*
    - http.*
```
