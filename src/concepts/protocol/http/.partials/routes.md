### routes

> `array` of `object`

| Property             | Type                      | Description                                                                                                                                                                                                      |
| -------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| routes[].guarded     | `Map<string, string[]>` | List of roles required by each named guard to authorize this route.                                                                                                                                              |
| routes[].when        | `object[]`       | List of conditions (any match) to match this route when adapting `http` data streams into `filesystem` data streams. Read more: [When a route matches](../../../protocol.md#when-a-route-matches) |
| routes[].when[].path | `string`                  | Path with optional embedded parameter names, such as `/{path}`.                                                                                                                                                  |
| routes[].exit        | `string`                  | Next binding when following this route.                                                                                                                                                                          |
| routes[].with        | `object`                  | Filesystem parameters used when adapting `http` data streams into `filesystem` data streams.                                                                                                                     |
| routes[].with.path\* | `string`                  | Topic name, optionally referencing path parameter such as `${params.path}`.                                                                                                                                      |

#### Example

Conditional `http-kafka` specific routes.

```yaml
routes:
  - when:
      - path: /{path}
    exit: filesystem_server
    my_guard:
        - read:items
    with:
      path: ${params.path}
```
