### options

> `object`

| Property                                   | Type                                 | Description                                                                                                                                     | Default Value          |
| ------------------------------------------ | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| options.idempotency                        | `object`                             | Metadata header used to specify the idempotency key when adapting `grpc` request-response streams to `kafka` topic streams.                     |                        |
| options.idempotency.metadata               | `string`                             | The `grpc` metadata header name for idempotency key.                                                                                            | `idempotency-key`      |
| options.reliability                        | `object`                             | Properties used when handling stream recovery.                                                                                                  |                        |
| options.reliability.field                  | `integer` (min `1`, max `536870911`) | The `grpc` unknown field number to send the `message-id`.                                                                                       | `32767`                |
| options.reliability.metadata               | `string`                             | The `grpc` metadata header name for the last `message-id` seen when resuming a stream.                                                          | `last-message-id`      |
| options.correlation                        | `object`                             | Kafka request message headers injected when adapting `grpc` request-response streams to `kafka` topic streams.                                  |                        |
| options.correlation.headers\*              | `object`                             | Kafka request message reply to and correlation id header names injected when adapting `grpc` request-response streams to `kafka` topic streams. |                        |
| options.correlation.headers.service        | `string`                             | Kafka header name for `grpc` service.                                                                                                           | `zilla:service`        |
| options.correlation.headers.method         | `string`                             | Kafka header name for `grpc` method.                                                                                                            | `zilla:method`         |
| options.correlation.headers.correlation-id | `string`                             | Kafka header name for request-response correlation identifier.                                                                                  | `zilla:correlation-id` |
| options.correlation.headers.reply-to       | `string`                             | Kafka header name for reply-to topic.                                                                                                           | `zilla:reply-to`       |

#### Example

The `grpc-kafka` specific options.

```yaml
options:
  idempotency:
    metadata: idempotency-key
  reliability:
    field: 32767
    metadata: last-message-id
  correlation:
    headers:
      service: zilla:service
      method: zilla:method
      correlation-id: zilla:correlation-id
      reply-to: zilla:reply-to
```
