---
shortTitle: gRPC
---

# gRPC

Zilla collects the following metrics for gRPC protocol:

| Metric                 | Type        | Description                                      |
| ---------------------- | ----------- | ------------------------------------------------ |
| grpc.active.requests   | `gauge`     | The number of active `grpc` requests.            |
| grpc.duration          | `histogram` | The duration of `grpc` requests in `nanoseconds` |
| grpc.request.size      | `histogram` | The `grpc` request length in `bytes`.            |
| grpc.response.size     | `histogram` | The `grpc` response length in `bytes`.           |
| grpc.requests.per.rpc  | `histogram` | The number of `grpc` request messages per RPC.   |
| grpc.responses.per.rpc | `histogram` | The number of `grpc` response messages per RPC.  |

## Configuration

To collect these metrics, include these matrics name in the `telemetry.metrics` property in the zilla configuration file.

```yaml
<!-- @include: ./.partials/grpc.yaml -->
```
