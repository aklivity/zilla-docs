### routes

> `array` of `object`

Conditional `proxy`-specific routes.

```yaml
routes:
  - when:
      - transport: stream
        family: inet4
        destination:
          port: 443
    exit: tls_server
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
Read more: [When a route matches](../../../../concepts/bindings.md#when-a-route-matches)

##### when[].transport

> `enum` [ "stream", "datagram" ]

Transport type.

##### when[].family

> `enum` [ "inet", "inet4", "inet6", "unix" ]

Address family.

##### when[].source

> `object`

Source address.

##### source.host

> `string`

Hostname or IP address.

##### source.port

> `integer`

Port number.

##### when[].destination

> `object`

Destination address.

##### destination.host

> `string`

Hostname or IP address.

##### destination.port

> `integer`

Port number.

#### routes[].exit\*

> `string`

Next binding when following this route.

```yaml
routes:
  - when:
    ...
    exit: echo_server
```
