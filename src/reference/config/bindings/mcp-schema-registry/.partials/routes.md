### routes\*

> `array` of `object`

Conditional `mcp-schema-registry` specific routes, matching by tool name or glob pattern. At least one route is required. Routes are evaluated in order; the first matching route wins.

```yaml
routes:
  - when:
      - tool: register_schema
    guarded:
      my_guard:
        - kafka-sr:write
  - when:
      - tool: "*"
```

#### routes[].when\*

> `array` of `object`

List of conditions (any match) restricting this route to particular tools. Required.

```yaml
routes:
  - when:
      - tool: register_schema
      - tool: set_compatibility
```

#### when[].tool\*

> `string` or `array` of `string`

Tool name matched by `tools/call`, or a `*` glob pattern matching many tool names in bulk (such as `list_*`). Required.

#### routes[].guarded

> `object` as map of named `array` of `string`

Roles required by the named guard for a `tools/call` against this route. Roles for the same guard are unioned into one entry; roles naming a different guard add a separate entry that must also authorize.

```yaml
routes:
  - when:
      - tool: register_schema
    guarded:
      my_guard:
        - kafka-sr:write
```
