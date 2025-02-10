### routes

> `object[]`

| Property | Type | Description |
| -- | -- | -- |
| routes[].guarded |  `Map<string, string[]>` |  List of roles required by each named guard to authorize this route. | 
| routes[].when |  `object[]` |  List of conditions (any match) to match this route. Read more: [When a route matches](../../../protocol.md#when-a-route-matches) | 
| routes[].when[].authority |  `string` |  Associated authority. | 
| routes[].when[].cidr |  `string` | Pattern: `^[0-9a-fA-F:.]+/(\\d{1,3})$` |  CIDR mask. | 
| routes[].when[].port |  `integer`, `string`, `array` |  Port number(s), including port number ranges. | 