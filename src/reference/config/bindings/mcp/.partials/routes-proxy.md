### routes

> `array` of `object`

Conditional `mcp` specific routes.

#### routes[].guarded

> `object` as map of named `array` of `string`

Roles required by the named guard. When a guarded route matches, drives scope-based filtering of `tools/list`, `prompts/list`, and `resources/list` responses, admitting only the entries the caller's roles allow.

```yaml
routes:
  - guarded:
      my_jwt_guard:
        - read
```

#### routes[].when

> `array` of `object`

List of conditions (any match) to match this route.
Read more: [When a route matches](/concepts/protocol/README.md#route-matches)

#### when[].toolkit\*

> `string`

Toolkit name to match.

#### when[].tool

> `string` or `array` of `string`

Glob patterns of tool names to expose, where `*` matches any sequence of characters. Only tools whose name matches a pattern are routed. A bare string is shorthand for a single-element array. Presence of `tool` activates the tools capability for this condition; when none of `tool`, `prompt`, or `resource` are given, every capability is admitted.

#### when[].prompt

> `string` or `array` of `string`

Glob patterns of prompt names to expose, where `*` matches any sequence of characters. Only prompts whose name matches a pattern are routed. A bare string is shorthand for a single-element array. Presence of `prompt` activates the prompts capability for this condition.

#### when[].resource

> `string` or `array` of `string`

Glob patterns of resource URIs to expose, where `*` matches any sequence of characters. Only resources whose URI matches a pattern are routed. A bare string is shorthand for a single-element array. Presence of `resource` activates the resources capability for this condition. Applies to both `resources/list` and `resources/templates/list`.

#### routes[].with

> `object`

Route with override configuration.

#### with.cache

> `object`

Cache override configuration for this route.

#### cache.credentials

> `string`

Credentials used by the named guard when populating the cache for this route. When omitted, falls back to [`options.cache.authorization`](#cache-authorization)'s credentials.

#### routes[].exit

> `string`

Next binding when following this route.

```yaml
routes:
  - exit: app1
    when:
      - toolkit: bluesky
        tool:
          - post_*
    guarded:
      my_jwt_guard:
        - read
  - exit: app2
    when:
      - toolkit: quartz
```
