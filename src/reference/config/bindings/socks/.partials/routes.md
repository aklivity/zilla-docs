### routes

> `array`

Conditional `socks` specific routes.

#### routes[].guarded

> `object` as map of named `array` of `string`

List of roles required by each named guard to authorize this route.

#### routes[].when

> `array`

List of conditions (any match) to match this route.
Read more: [When a route matches](/concepts/protocol/README.md#route-matches)

#### when[].connect

> `string`

Target address to connect to via the SOCKS5 proxy.

#### routes[].with

> `object`

Route with override configuration.

#### routes[].exit

> `string`

Next binding when following this route.
