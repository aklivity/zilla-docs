### routes

> `array` of `object`

Conditional `mcp_http` specific routes, resolving the upstream `http` request for a matched `tools/call` or `resources/read`.

```yaml
routes:
  - when:
      - tool: create_pr
    exit: http_client
    with:
      headers:
        ":method": POST
        ":scheme": https
        ":authority": api.github.com
        ":path": /repos/${args.owner}/${args.repo}/pulls
      body:
        model: json
        catalog:
          my_catalog:
            - subject: create_pr_body
              version: latest
  - when:
      - resource: order
    exit: http_client
    with:
      headers:
        ":method": GET
        ":scheme": https
        ":authority": api.orders.internal
        ":path": /orders/${params.orderId}
```

#### routes[].guarded

> `object` as map of named `array` of `string`

Roles required by the named guard. When a guarded route matches, the MCP session must be authorized for the listed roles, otherwise the stream is rejected.

```yaml
routes:
  - guarded:
      my_guard:
        - pr:write
```

#### routes[].when

> `array` of `object`

List of conditions (any match) to match this route.
Read more: [When a route matches](/concepts/protocol/README.md#route-matches)

```yaml
routes:
  - when:
      - tool: create_pr
      - resource: order
```

#### when[].tool

> `string`

Tool name to match, referencing an entry in [`options.tools`](#options-tools).

#### when[].resource

> `string`

Resource name to match, referencing an entry in [`options.resources`](#options-resources).

#### routes[].with

> `object`

Resolves the upstream `http` request for the matched route.

```yaml
with:
  headers:
    ":method": POST
    ":scheme": https
    ":authority": api.github.com
    ":path": /repos/${args.owner}/${args.repo}/pulls
  body:
    model: json
    catalog:
      my_catalog:
        - subject: create_pr_body
          version: latest
```

#### with.headers\*

> `object` as map of named `string`

HTTP request headers for the upstream request, including the pseudo-headers `:method`, `:scheme`, `:authority`, and `:path`. Values support interpolation.

- `${args.x}` Replaced with property `x` of the `tools/call` arguments.
- `${params.x}` Replaced with capture `x` from the matched resource [`uri`](#resources-uri).

#### with.query

> `object`

Converter projecting the `tools/call` arguments onto the upstream request query string. A converter binds a `model` to a registered `catalog` subject. Properties present in the resolved schema are emitted as query parameters; absent optionals are omitted.

#### with.body

> `object`

Upstream `http` request body, defined either as a converter projection or as an explicit template.

A converter projects the `tools/call` arguments onto the request body, pruned to the properties in the resolved schema, with absent optionals omitted.

```yaml
with:
  body:
    model: json
    catalog:
      my_catalog:
        - subject: create_pr_body
          version: latest
```

#### body.template

> `object` as map of named `string`

Explicit request body, mapping each body property to an interpolated value. Supports `${args.x}` interpolation, where `x` references a property of the `tools/call` arguments. Use a template to rename or restructure arguments before dispatch.

```yaml
with:
  body:
    template:
      title: ${args.title}
      head: ${args.branch}
      base: ${args.target}
```
