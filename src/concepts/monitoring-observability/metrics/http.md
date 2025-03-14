---
shortTitle: HTTP
---

# HTTP

Zilla collects the following metrics for HTTP protocol:

| Metric               | Type        | Description                                      |
| -------------------- | ----------- | ------------------------------------------------ |
| http.active.requests | `gauge`     | The number of active `http` requests.            |
| http.duration        | `histogram` | The duration of `http` requests in `nanoseconds` |
| http.request.size    | `histogram` | The `http` request content length in `bytes`.    |
| http.response.size   | `histogram` | The `http` response content length in `bytes`.   |

## Configuration

To collect these metrics, include these matrics name in the `telemetry.metrics` property in the zilla configuration file.

```yaml
<!-- @include: ./.partials/http.yaml -->
```
