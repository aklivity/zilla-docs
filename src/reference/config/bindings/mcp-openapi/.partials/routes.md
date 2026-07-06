### routes\*

> `array` of `object`

Conditional `mcp_openapi` specific routes, compiling matched OpenAPI operations into the generated `mcp_http` proxy as MCP tools or resources. At least one route is required.

A route either names a single operation explicitly, or bulk-selects many operations at once:

- **Explicit** — [`with.operation`](#with-operation) names one exact `operationId`. May pair with [`when[].tool`](#when-tool) or [`when[].resource`](#when-resource) to name and shape the generated MCP primitive.
- **Bulk** — [`with.spec`](#with-spec) alone selects every operation in the spec, [`with.tag`](#with-tag) selects every operation carrying the named OpenAPI tag, or [`with.operation`](#with-operation) containing a `*` selects every operation whose id matches the glob pattern. Bulk-selected operations always become tools, never resources, and cannot be named with `when[].tool` or `when[].resource` — each is named automatically. [`when[].capability`](#when-capability) can still restrict a bulk route to only `tool` or only `resource`.

```yaml
routes:
  - when:
      - tool: create_pr
    with:
      spec: github
      operation: create_pr
  - with:
      spec: github
      tag: issues
  - with:
      spec: github
      operation: "search_*"
```

::: info Route precedence and default tool naming
Routes are evaluated in order, and the first route to claim an operation removes it from consideration by every later route. A bulk-selected operation not given an explicit name is named after its `operationId` converted to `snake_case`, falling back to a slug of its method and path when the id is absent or already taken, then a numeric suffix on any further collision.
:::

#### routes[].when

> `array` of `object`

List of conditions (any match) to name or filter the tool or resource generated for the matched route.
Read more: [When a route matches](/concepts/protocol/README.md#route-matches)

```yaml
routes:
  - when:
      - tool: create_pr
      - resource: read_order
```

#### when[].tool

> `string`

Tool name surfaced to MCP clients by `tools/list` and matched by `tools/call`, naming the explicit OpenAPI operation routed by [`with.operation`](#with-operation). Not allowed on a bulk route.

#### when[].resource

> `string`

Resource name surfaced to MCP clients by `resources/list` and matched by `resources/read`, naming the explicit OpenAPI operation routed by [`with.operation`](#with-operation). Not allowed on a bulk route.

#### when[].capability

> `array` of `enum` [ `tool`, `resource` ]

Restricts a bulk route to only the listed primitive kinds. An explicit route naming [`when[].tool`](#when-tool) or [`when[].resource`](#when-resource) is filtered accordingly whether or not `capability` is also listed.

```yaml
routes:
  - when:
      - capability: [ tool ]
    with:
      spec: github
      tag: issues
```

#### routes[].with\*

> `object`

Resolves the OpenAPI operation or operations compiled into the generated `mcp_http` proxy for this route.

```yaml
with:
  spec: github
  operation: create_pr
```

#### with.spec\*

> `string`

Spec label to route to, referencing an entry in [`options.specs`](#options-specs).

#### with.operation

> `string`

Exact OpenAPI `operationId` to route, or a `*` glob pattern matching many operation ids in bulk, within the named [`spec`](#with-spec). Cannot be combined with [`tag`](#with-tag).

#### with.tag

> `string`

OpenAPI tag to bulk-select every operation carrying it, within the named [`spec`](#with-spec). Cannot be combined with [`operation`](#with-operation).
