### routes

> `array` of `object`

Conditional `mcp` specific routes.

#### routes[].when

> `array` of `object`

List of conditions (any match) to match this route.
Read more: [When a route matches](/concepts/protocol/README.md#route-matches)

#### when[].toolkit\*

> `string`

Toolkit name to match.

#### when[].capability

> `array` of `enum` [ `tools`, `prompts`, `resources` ]

MCP capabilities to match.

#### routes[].with

> `object`

Route with override configuration.

#### with.headers

> `object` as map of named `string` properties

HTTP headers to add or override when forwarding requests.

#### with.cache

> `object`

Cache override configuration for this route.

#### cache.credentials

> `string`

Credentials used by the named guard when populating the cache for this route.

#### routes[].exit

> `string`

Next binding when following this route.

```yaml
routes:
  - exit: app1
    when:
      - toolkit: bluesky
  - exit: app2
    when:
      - toolkit: quartz
```
