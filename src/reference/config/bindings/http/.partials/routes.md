### routes\*

> `array` of `object`

Conditional `http` specific routes.

```yaml
routes:
  - when:
      - headers:
          ":scheme": https
          ":authority": example.com:443
    exit: echo_server
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

Dynamic guarded routes allow roles to be evaluated at runtime based on the incoming HTTP request.

```yaml
routes:
  - guarded:
      my_guard:
        - ${method}${path}
```

> `${method}` Replaced with the request method (_e.g.,_ `GET`, `POST`)

> `${path}` Replaced with the request path (_e.g.,_ `/items`, `/users/123`)

A combination of both static and dynamic guarded routes is supported.

#### routes[].when

> `array` of `object`

List of conditions (any match) to match this route.
Read more: [When a route matches](/concepts/protocol/README.md#route-matches)

```yaml
routes:
  - when:
      - headers:
          ":scheme": https
          ":authority": example.com:443
```

#### when[].headers

> `object` as map of named `string` properties

Header name value pairs (all match).

#### routes[].with

> `object`

HTTP parameters for matched route when `http` streams.

```yaml
routes:
  - with:
      headers:
        overrides:
          ":scheme": https
          ":authority": example.com:443
```

#### with.headers

> `object`

Options for headers when adapting a route.

#### headers.overrides

> `object` as map of named `string` properties

HTTP header name value pairs overrides.

#### routes[].exit

> `string`

Next binding when following this route.

```yaml
routes:
  - when:
    ...
    exit: echo_server
```
