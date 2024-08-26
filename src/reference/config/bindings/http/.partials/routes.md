### routes

> `array` of `object`

Conditional `http`-specific routes.

```yaml
routes:
  - when:
      - headers:
          ":scheme": https
          ":authority": example.com:443
    exit: echo_server
```

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

```yaml
routes:
  - when:
      - headers:
          ":scheme": https
          ":authority": example.com:443
```

#### when[].headers

> `map` of `name: value` properties

Header name value pairs (all match).

#### routes[].exit\*

> `string`

Next binding when following this route.

```yaml
routes:
  - when:
    ...
    exit: echo_server
```
