### routes

> `array` of `object`

Conditional `kafka`-specific routes.

#### routes[].guarded

> `object` as named map of `string:string` `array`

List of roles required by each named guard to authorize this route.

```yaml
routes:
  - guarded:
      my_guard:
        - read:items
```

#### routes[].when

> `array` of `object`

List of conditions (any match) to match this route.
Read more: [When a route matches](../../../../../concepts/bindings.md#when-a-route-matches)

#### when[].topic

> `string`

Topic name pattern.

#### routes[].exit

> `string`

Next binding when following this route.

```yaml
exit: echo_server
```
