### routes\*

> `array` of `object`

| Property                        | Type                            | Description                                                                                                                         |
| ------------------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| routes[].guarded                | `Map<string, string[]>`         | Roles required by named guard.                                                                                                      |
| routes[].when                   | `object[]`                      | List of conditions (any match) to match this route. Read more: [When a route matches](../../../protocol.md#when-a-route-matches) |
| routes[].when[].method          | `string`                        | gRPC service method name, such as `example.EchoService/EchoUnary`, or service method pattern such as `example.EchoService/*`.       |
| routes[].when[].metadata        | `Map<string, string \| object>` | Metadata header name value pairs (all match). Each metadata header value can be `string` or `object` with `base64` property.        |
| routes[].when[].metadata.base64 | `string`                        | Base64 encoded value for binary metadata header.                                                                                    |
| routes[].exit                   | `string`                        | Routed exit binding when conditional route matches.                                                                                 |

#### Example

Conditional `grpc` specific routes.

```yaml
routes:
  - guarded:
      my_guard:
        - echo:messages
    when:
      - method: example.EchoService/*
        metadata:
          custom-text: custom value
          custom-binary:
            base64: Y3VzdG9tIHZhbHVl
    exit: echo_server
```
