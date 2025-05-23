### routes

> `array` of `object`

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

#### routes[].guarded

> `object` as map of named `array` of `string`

List of roles required by each named guard to authorize this route.

```yaml
routes:
  - guarded:
      my_guard:
        - read:items
```

##### Dynamic guarded routes

Dynamic guarded routes allow roles to be evaluated at runtime based on the incoming request.

```yaml
routes:
  - guarded:
      my_guard:
        - ${method}${path}
```

> `${method}` Replaced with the request method (_e.g.,_ `GET`)

> `${path}` Replaced with the request path (_e.g.,_ `/items`, `/users/123`)

A combination of both static and dynamic guarded routes is supported.

#### routes[].when

> `array` of `object`

List of conditions (any match) to match this route.
Read more: [When a route matches](/concepts/protocol/README.md#route-matches)

```yaml
routes:
  - when:
      - path: /items
```

#### when[].path

> `string`

Path pattern.

#### routes[].exit

> `string`

Next binding when following this route.

```yaml
routes:
  - when:
    ...
    exit: sse_kafka_proxy
```
