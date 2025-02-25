### routes

> `object[]`

| Property | Type | Description |
| -- | -- | -- |
| routes[].guarded |  `Map<string, string[]>` |  List of roles required by each named guard to authorize this route. | 
| routes[].when |  `object[]` |  List of conditions (any match) to match this route. Read more: [When a route matches](../../../protocol.md#when-a-route-matches) | 
| routes[].when[].path |  `string` |  Path pattern. | 
| routes[].exit |  `string` |  Next binding when following this route. | 

#### Examples

Conditional `sse` specific routes.

```yaml
routes:
  - guarded:
      my_guard:
        - read:items
    when:
      - path: /items
    exit: sse_kafka_proxy
```