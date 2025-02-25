### metrics

> `string[]`

The list of metric names available to record and export.

| Property | Type | Description |
| -- | -- | -- |
| grpc.active.requests |  `gauge` |  The number of active `grpc` requests. | 
| grpc.duration |  `histogram` |  The duration of `grpc` requests in `nanoseconds` | 
| grpc.request.size |  `histogram` |  The `grpc` request length in `bytes`. | 
| grpc.response.size |  `histogram` |  The `grpc` response length in `bytes`. | 
| grpc.requests.per.rpc |  `histogram` |  The number of `grpc` request messages per RPC. | 
| grpc.responses.per.rpc |  `histogram` |  The number of `grpc` response messages per RPC. | 