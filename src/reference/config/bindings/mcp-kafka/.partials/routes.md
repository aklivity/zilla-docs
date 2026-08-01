### routes\*

> `array` of `object`

Conditional `mcp-kafka` specific routes, matching by tool name and, for `produce` and `consume`, by topic. At least one route is required. Routes are evaluated in order; the first matching route wins.

```yaml
routes:
  - when:
      - tool: produce
        topics: [ orders ]
    guarded:
      my_guard:
        - kafka:write
  - when:
      - tool: consume
        topics: [ orders ]
```

#### routes[].when

> `array` of `object`

List of conditions (any match) restricting this route to particular tools.

```yaml
routes:
  - when:
      - tool: create_topics
      - tool: delete_topics
```

#### when[].tool

> `string`

Tool name matched by `tools/call`. Omit to match every tool not already claimed by an earlier route.

#### when[].topics

> `array` of `string`

Topic name allow-list (exact names or `*` glob patterns) restricting this route to matching topics. Only enforced for [`produce`](../client.md#produce) and [`consume`](../client.md#consume), the only two tools that name a single topic as a routing key — every other tool either takes no topic or names one as a `tools/call` argument rather than a route match, so this list has no effect on them.

#### routes[].guarded

> `object` as map of named `array` of `string`

Roles required by the named guard for a `tools/call` against this route. Roles for the same guard are unioned into one entry; roles naming a different guard add a separate entry that must also authorize.

```yaml
routes:
  - when:
      - tool: alter_configs
    guarded:
      my_guard:
        - kafka:admin
```
