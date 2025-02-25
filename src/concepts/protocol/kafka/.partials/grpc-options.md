### options

> `object`

| Property                                   | Type                                                 | Description                                                    | Default Value          |
| ------------------------------------------ | ---------------------------------------------------- | -------------------------------------------------------------- | ---------------------- |
| options.acks                               | `enum` [ `none`, `leader_only`, `in_sync_replicas` ] | The `kafka` acknowledgment mode.                               | `in_sync_replicas`     |
| options.idempotency                        | `object`                                             | Metadata header used to specify the idempotency key.           |                        |
| options.idempotency.metadata               | `string`                                             | The `grpc` metadata header name for idempotency key.           | `idempotency-key`      |
| options.correlation                        | `object`                                             | Kafka request message headers injected.                        |                        |
| options.correlation.headers                | `object`                                             | Kafka request message correlation header names used.           |                        |
| options.correlation.headers.service        | `string`                                             | Kafka header name for `grpc` service.                          | `zilla:service`        |
| options.correlation.headers.method         | `string`                                             | Kafka header name for `grpc` method.                           | `zilla:method`         |
| options.correlation.headers.correlation-id | `string`                                             | Kafka header name for request-response correlation identifier. | `zilla:correlation-id` |
| options.correlation.headers.reply-to       | `string`                                             | Kafka header name for reply-to topic.                          | `zilla:reply-to`       |

#### Example

The `kafka-grpc` specific options.

```yaml
options:
  acks: leader_only
  idempotency:
    metadata: idempotency-key
  correlation:
    headers:
      service: zilla:service
      method: zilla:method
      correlation-id: zilla:correlation-id
      reply-to: zilla:reply-to
```
