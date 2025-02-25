### routes\*

> `array` of `object`

| Property                        | Type                            | Description                                                                                                                         |
| ------------------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| routes[].guarded                | `Map<string, string[]>`         | Roles required by named guard.                                                                                                      |
| routes[].when                   | `object[]`                      | List of conditions (any match) to match this route when adapting `grpc` request-response streams to `kafka` topic streams. Read more: [When a route matches](../../../protocol.md#when-a-route-matches) |
| routes[].when[].method          | `string` with pattern `^(?<Service>[^/]+)/(?<Method>[^/]+)`                       | Pattern matching the fully qualified name of a `grpc` service method, in the format `<service>/<method>` allowing wildcard `*` for the method to indicate any method.       |
| routes[].when[].metadata        | `Map<string, string \| object>` | Metadata header name value pairs (all match). Each metadata header value can be `string` or `object` with `base64` property.        |
| routes[].when[].metadata.base64 | `string`                        | Base64 encoded value for binary metadata header.                                                                                    |
| routes[].exit                   | `string`                        | Routed exit binding when conditional route matches.                                                                                 |
| routes[].with\* | | `object` | Define the route. |
| routes[].with.capability\* | | `enum` [`fetch`, `produce`] | Define the route with the `fetch` or `produce` capability |
| routes[].with.topic\* | `string` | The name of a Kafka topic. |
| routes[].with.filters | `object[]` | List of criteria (any match) to this filter. Kafka filters for matched route when adapting `grpc` request-response streams to `kafka` topic fetch streams. All specified headers and key must match for the combined criteria to match. |
| routes[].with.filters[].key | `string` | The filter criteria for the Kafka message key. |
| routes[].with.filters[].headers | `Map<string, string>` | The filter criteria for the Kafka message headers. |
| routes[].with.topic\* | `string` | The name of a Kafka topic for requests. |
| routes[].with.acks | `enum` [ `none`, `leader_only`, `in_sync_replicas` ] | Kafka acknowledgment mode (default `in_sync_replicas`) |
| routes[].with.key | `string` | The Kafka message key to include with each message. |
| routes[].with.overrides | `Map<string, string>` | The Kafka message headers to inject with each message. |
| routes[].with.reply-to\* | `string` | The name of the Kafka topic for correlated responses. |

#### with.capability: fetch

Kafka parameters for matched route when adapting `grpc` request-response streams to `kafka` topic fetch streams.

Routes with `fetch` capability map `grpc` `Empty` requests to a `kafka` topic, supporting filtered retrieval of messages with a specific key or headers, or unfiltered retrieval of all messages in the topic merged into a unified response.

Filtering can be performed by `kafka` message key, message headers, or a combination of both message key and headers.

Reliable message delivery is achieved by capturing the value of the `reliability` `field` injected into each response stream message at the `grpc` client, and replaying the value via the `reliability` `metadata` header when reestablishing the stream with a new `grpc` request.

```yaml
with:
  capability: fetch
  topic: messages
  filters:
    key: custom-key
    headers:
      custom-text: custom-value
```

#### with.capability: produce

Kafka parameters for matched route when adapting `grpc` request-response streams to `kafka` topic produce streams.

Routes with `produce` capability map any `grpc` request-response to a correlated stream of `kafka` messages. The `grpc` request message(s) are sent to a `requests` topic, with a `zilla:correlation-id` header. When the request message(s) are received and processed by the `kafka` `requests` topic consumer, it produces response message(s) to the `responses` topic, with the same `zilla:correlation-id` header to correlate the response.

Requests including an `idempotency-key` `grpc` metadata header can be replayed and safely receive the same response. This requires the `kafka` consumer to detect and ignore the duplicate request with the same `idempotency-key` and `zilla:correlation-id`.

```yaml
with:
  capability: produce
  topic: requests
  acks: leader_only
  key: custom-key
  overrides:
    custom-text: custom-value
  reply-to: responses
```

#### Example

Conditional `grpc-kafka` specific routes.

```yaml
routes:
  - guarded:
      my_guard:
        - read:messages
    when:
      - service: example.FanoutService
        metadata:
          custom-text: custom value
          custom-binary:
            base64: Y3VzdG9tIHZhbHVl
    exit: kafka_cache_client
    with:
      capability: fetch
      topic: messages
      filters:
        key: custom-key
        headers:
          custom-text: custom-value
  - guarded:
      my_guard:
        - echo:messages
    when:
      - method: example.EchoService/*
        metadata:
          custom-text: custom value
          custom-binary:
            base64: Y3VzdG9tIHZhbHVl
    exit: kafka_cache_client
    with:
      capability: produce
      topic: requests
      acks: leader_only
      key: custom-key
      overrides:
        custom-text: custom-value
      reply-to: responses
```
