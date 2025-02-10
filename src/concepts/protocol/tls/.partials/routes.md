### routes\*

> `object[]`

| Property | Type | Description |
| -- | -- | -- |
| routes[].guarded |  `Map<string, string[]>` |  List of roles required by each named guard to authorize this route. | 
| routes[].when |  `object[]` |  List of conditions (any match) to match this route. Read more: [When a route matches](../../../protocol.md#when-a-route-matches) | 
| routes[].when[].authority |  `string` |  Associated authority. | 
| routes[].when[].alpn |  `string` |  Application protocol. | 
| routes[].when[].port |  `integer`, `string`, `array` |  Port number(s), including port number ranges. | 
| routes[].exit |  `string` |  Next binding when following this route. | 

#### Examples

Conditional `tls` specific routes.

```yaml
routes:
  - guarded:
      my_guard:
        - read:items
  - when:
      - alpn: echo
  exit: echo_server
```

