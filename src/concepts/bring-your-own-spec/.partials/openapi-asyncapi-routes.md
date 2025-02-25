### routes

> `object[]`

| Property | Type | Description |
| -- | -- | -- |
| routes[].guarded |  `Map<string, string[]>` |  List of roles required by each named guard to authorize this route. | 
| routes[].when |  `object[]` |  List of conditions to match this route when adapting `openapi` request-response streams to `asyncapi` streams. Read more: [When a route matches](../../protocol.md#when-a-route-matches) | 
| routes[].when[].api-id |  `string` |  OpenAPI spec identifier that matches from the `openapi` binding request stream. | 
| routes[].when[].operation-id |  `string` |  OpenAPI OperationId that can be mapped between OpenAPI and AsyncAPI spec | 
| routes[].exit |  `string` |  Next binding when following this route. | 
| routes[].with\* |  `object` |  Defines the route with the AsyncAPI spec identifier and OperationId. | 
| routes[].with.api-id |  `string` |  AsyncAPI spec identifier that the route exits with to the next binding. | 
| routes[].with.operation-id |  `string` |  AsyncAPI OperationId that the route exits with to the next binding. | 

#### Examples

Conditional `openapi-asyncapi` specific routes.

```yaml
routes:
  - guarded:
      my_guard:
        - read:items
    with:
      api-id: my-asyncapi-spec
```
