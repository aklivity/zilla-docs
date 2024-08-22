### routes

> `array` of `object`

Conditional `tcp`-specific routes.

#### routes[].guarded

> `object` as named map of `string:string` `array`

List of roles required by each named guard to authorize this route.

#### routes[].when

> `array` of `object`

List of conditions (any match) to match this route.
Read more: [When a route matches](../../../../concepts/bindings.md#when-a-route-matches)

##### when[].authority

> `string`

Associated authority.

##### when[].cidr

> `string`

CIDR mask.

##### when[].port

> `integer` | `string` | `array` of  `integer` | `array` of `string`

Port number(s), including port number ranges.

#### routes[].exit\*

> `string`

Next binding when following this route, for kind `server` only.

```yaml
routes:
  - when:
    ...
    exit: echo_server
```
