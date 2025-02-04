### routes\*

> `array` of `object`

Conditional `kafka` specific routes.

| Property              | Type                                         | Description                                                                                                                         |
| --------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| routes[].guarded      | `object` as map of named `array` of `string` | List of roles required by each named guard to authorize this route.                                                                 |
| routes[].when         | `array` of `object`                          | List of conditions (any match) to match this route. Read more: [When a route matches](/concepts/protocol.html#when-a-route-matches) |
| routes[].when[].topic | `string`                                     | Topic name pattern.                                                                                                                 |
| routes[].exit         | `string`                                     | Next binding when following this route.                                                                                             |

#### Example

```yaml
routes:
  - exit: echo_server
    guarded:
      my_guard:
        - read:items
```
