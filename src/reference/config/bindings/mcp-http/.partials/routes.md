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

Roles required by the named guard. When a route with [`with`](#routes-with) matches, the MCP session must be authorized for the listed roles on every applicable route, otherwise the stream is rejected.

A route may omit both [`when`](#routes-when) and `with` to act as a guard-only layer, applying its `guarded` roles globally across every tool and resource rather than mapping to an upstream request. Combine a global guard-only layer with a route-specific one by giving the guard-only layer a single `when` condition instead of omitting `when`. Roles from every applicable layer — the matched mapping route plus any global or scoped guard-only layers — must all authorize.

```yaml
routes:
  - guarded:
      my_guard:
        - read
  - when:
      - tool: create_pr
    exit: http_client
    guarded:
      my_guard:
        - pr:write
    with:
      headers:
        ":method": POST
        ":scheme": https
        ":authority": api.github.com
        ":path": /repos/${args.owner}/${args.repo}/pulls
```

#### routes[].when

> `array` of `object`

At most one condition to match this route. A route with [`with`](#routes-with) requires exactly one `when` condition, mapping one tool or resource to an upstream request; a route without `with` may omit `when` entirely to guard every tool and resource, or give exactly one condition to scope the guard to a single tool or resource.
Read more: [When a route matches](/concepts/protocol/README.md#route-matches)

```yaml
routes:
  - when:
      - tool: create_pr
```

Each condition specifies exactly one of `tool` or `resource`, never both.

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

- `${args.x}` Replaced with property `x` of the `tools/call` arguments. `x` may be dotted to reference a nested property, such as `${args.repository.owner}`.
- `${params.x}` Replaced with capture `x` from the matched resource [`uri`](#resources-uri).

Every header other than `:path` is omitted from the upstream request entirely when a referenced property or capture is absent, rather than being sent with an empty value.

The `:path` pseudo-header resolves differently: a referenced property or capture that is absent resolves to an empty string rather than omitting the header, since `:path` is always required. To omit an individual query parameter instead, mark its fragment as optional with `${?args.x=name}` (or `${?params.x=name}`) in place of a literal `name=${args.x}` pair — the whole `name=value` fragment, including its separator, is dropped when `x` is absent.

```yaml
with:
  headers:
    ":method": GET
    ":scheme": https
    ":authority": api.github.com
    ":path": /items?q=${args.q}&${?args.limit=limit}
```

#### with.cookies

> `object` as map of named `string`

Cookie name/value pairs aggregated into a single `Cookie` header on the upstream request. Values support the same `${args.x}` and `${params.x}` interpolation as [`with.headers`](#with-headers). A cookie whose referenced property or capture is absent is dropped from the aggregate on its own; the `Cookie` header itself is omitted only when every configured cookie is absent.

```yaml
with:
  cookies:
    session: ${args.sessionId}
    locale: ${params.locale}
```

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

Explicit request body, mapping each body property to an interpolated value. Supports `${args.x}` interpolation, where `x` references a property of the `tools/call` arguments; `x` may be dotted to reference a nested property, such as `${args.pr.branch}`. Use a template to rename or restructure arguments, including flattening nested arguments, before dispatch.

```yaml
with:
  body:
    template:
      title: ${args.title}
      head: ${args.branch}
      base: ${args.target}
```
