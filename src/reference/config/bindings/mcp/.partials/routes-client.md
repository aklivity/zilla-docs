### routes

> `array` of `object`

Conditional `mcp` specific routes, resolved per matched tool, prompt, or resource, used to authorize individual `tools/call`, `prompts/get`, and `resources/read` requests against the upstream MCP server.

```yaml
routes:
  - exit: net_client
    when:
      - tools:
          - get_weather
  - exit: net_client
    when:
      - tools:
          - get_status
    guarded:
      my_jwt_guard:
        - read
```

#### routes[].guarded

> `object` as map of named `array` of `string`

Roles required by the named guard. When a guarded route matches a requested tool, prompt, or resource, the session must be authorized for the listed roles, otherwise the request is rejected. Also drives which entries are stamped with `securitySchemes` in `tools/list` responses.

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

#### when[].tools

> `array` of `string`

Glob patterns of tool names to match, where `*` matches any sequence of characters. When omitted, all tools are admitted.

#### when[].prompts

> `array` of `string`

Glob patterns of prompt names to match, where `*` matches any sequence of characters. When omitted, all prompts are admitted.

#### when[].resources

> `array` of `string`

Glob patterns of resource URIs to match, where `*` matches any sequence of characters. When omitted, all resources are admitted.

#### routes[].exit

> `string`

Next binding when following this route.
