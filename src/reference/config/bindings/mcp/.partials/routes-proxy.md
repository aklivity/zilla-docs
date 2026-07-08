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

#### when[].tools

> `array` of `string`

Glob patterns of tool names to expose, where `*` matches any sequence of characters. Only tools whose name matches a pattern are routed. When omitted, all tools are admitted.

#### when[].prompts

> `array` of `string`

Glob patterns of prompt names to expose, where `*` matches any sequence of characters. Only prompts whose name matches a pattern are routed. When omitted, all prompts are admitted.

#### when[].resources

> `array` of `string`

Glob patterns of resource URIs to expose, where `*` matches any sequence of characters. Only resources whose URI matches a pattern are routed. When omitted, all resources are admitted. Applies to both `resources/list` and `resources/templates/list`.

#### routes[].with

> `object`

Route with override configuration.

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
        tools:
          - post_*
    guarded:
      my_jwt_guard:
        - read
  - exit: app2
    when:
      - toolkit: quartz
```
