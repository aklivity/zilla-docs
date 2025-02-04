### Options

| Property                                   | Type     | Description                                                              | Default Value          |
| ------------------------------------------ | -------- | ------------------------------------------------------------------------ | ---------------------- |
| options.idempotency                        | `object` | HTTP request header used to specify the idempotency key.                 |                        |
| options.idempotency.header\*               | `string` | HTTP request header name for idempotency key.                            | `idempotency-key`      |
| options.correlation                        | `object` | Kafka request message headers injected.                                  |                        |
| options.correlation.headers\*              | `object` | Kafka request message reply to and correlation id header names injected. |                        |
| options.correlation.headers.reply-to       | `string` | Kafka header name for reply-to topic.                                    | `zilla:reply-to`       |
| options.correlation.headers.correlation-id | `string` | Kafka header name for request-response correlation identifier.           | `zilla:correlation-id` |

#### Example

`http-kafka` specific options.

```yaml
options:
  idempotency:
    header: idempotency-key
  correlation:
    headers:
      reply-to: zilla:reply-to
      correlation-id: zilla:correlation-id
```
