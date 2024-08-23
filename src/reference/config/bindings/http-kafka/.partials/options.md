### options

> `object`

`http-kafka`-specific options for adapting `http` request-response streams to `kafka` topic streams.

```yaml
options:
  idempotency:
    header: idempotency-key
  correlation:
    headers:
      reply-to: zilla:reply-to
      correlation-id: zilla:correlation-id
```

#### options.idempotency

> `object`

HTTP request header used to specify the idempotency key when adapting `http` request-response streams to `kafka` topic streams.

#### idempotency.header

> `string` | Default: `"idempotency-key"`

HTTP request header name for idempotency key.

#### options.correlation

> `object`

Kafka request message headers injected when adapting `http` request-response streams to `kafka` topic streams.

#### correlation.headers

> `map` of `name: value` properties

Kafka request message reply to and correlation id header names injected when adapting `http` request-response streams to `kafka` topic streams.

#### headers.reply-to

> `string` | Default: `"zilla:reply-to"`

Kafka header name for reply-to topic.

#### headers.correlation-id

> `string` | Default: `"zilla:correlation-id"`

Kafka header name for request-response correlation identifier.
