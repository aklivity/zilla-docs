### routes

> `array` of `object`

Conditional `mcp_openapi` specific routes, compiling a matched OpenAPI operation into the generated `mcp_http` proxy as an MCP tool or resource.

```yaml
routes:
  - when:
      - tool: create_pr
    with:
      spec: github
      operation: create_pr
  - with:
      spec: github
      operation: read_order
```

#### routes[].when

> `array` of `object`

List of conditions (any match) to name the tool or resource generated for the matched route. When omitted, the routed [`operation`](#with-operation) id is used as the tool name.
Read more: [When a route matches](/concepts/protocol/README.md#route-matches)

```yaml
routes:
  - when:
      - tool: create_pr
      - resource: read_order
```

#### when[].tool

> `string`

Tool name surfaced to MCP clients by `tools/list` and matched by `tools/call`, generated from the routed OpenAPI operation.

#### when[].resource

> `string`

Resource name surfaced to MCP clients by `resources/list` and matched by `resources/read`, generated from the routed OpenAPI operation.

#### routes[].with\*

> `object`

Resolves the OpenAPI operation compiled into the generated `mcp_http` proxy for this route.

```yaml
with:
  spec: github
  operation: create_pr
```

#### with.spec\*

> `string`

Spec label to route to, referencing an entry in [`options.specs`](#options-specs).

#### with.operation\*

> `string`

OpenAPI `operationId` to route to, within the named [`spec`](#with-spec).
