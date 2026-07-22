### options

> `object`

The `proxy` kind `mcp` specific options.

```yaml
options:
  cache:
    store: my_store
    ttl: 5m
```

#### options.cache

> `object`

Cache configuration for upstream MCP responses, backed by a referenced store binding.

#### cache.store\*

> `string`

Name of the store binding used to persist cached entries.

#### cache.ttl

> `string` | Default: `PT5M`

Time-to-live before a cached entry is refreshed.

#### cache.authorization

> `object` as map of named `object` properties

Authorization by a named guard used when refreshing cached entries.

#### authorization.credentials

> `string`

Credentials used by the named guard when refreshing cached entries.

#### cache.tools

> `object`

Tool-related cache configuration.

#### tools.search

> `object`

Agent-callable tool search over cached tools. Injects three synthetic tools into `tools/list` responses, each answering its `tools/call` requests directly from the cache instead of routing to an upstream MCP server:

- `search_tools` ranks cached tools by relevance to a natural-language `query` argument and returns name and description matches.
- `describe_tool` resolves the full cached definition, including input and output schema, of a tool named exactly as returned by `search_tools`.
- `execute_tool` invokes a tool by name exactly as `tools/call` would, once its schema is known via `describe_tool`.

```yaml
tools:
  search:
    toolkit: zilla
```

#### search.toolkit

> `string`

Optional `toolkit__` prefix applied to the three synthetic tool names (`search_tools`, `describe_tool`, `execute_tool`), matching the naming convention used for proxied tools. When omitted, the tools are exposed unprefixed.

#### search.limit

> `integer` | Default: `5`

Maximum number of matching tools returned, further capped by any `max_results` argument in the request.

#### search.fields

> `array` of `enum` [ `name`, `description`, `output-schema` ] | Default: `[ name, description ]`

Tool fields indexed for ranking.

#### search.weights

> `object` as map of named `number`

Per-field weight multiplier applied to term frequency during ranking. Keys reference entries in [`fields`](#search-fields).

#### search.type

> `enum` [ `keyword` ]

Shorthand for a single ranking backend with no backend-specific fields. Mutually exclusive with [`index`](#search-index).

```yaml
search:
  toolkit: zilla
  type: keyword
```

#### search.index

> `array` of `object`

One or more ranking backends, fused by reciprocal rank when more than one is configured. Mutually exclusive with [`type`](#search-type).

```yaml
search:
  toolkit: zilla
  index:
    - type: keyword
```

#### index[].type\*

> `enum` [ `keyword` ]

Ranking backend. Only `keyword` (BM25 ranking over the configured fields) is available.

#### tools.eager

> `object`

Eager/cold partitioning of cached tools in `tools/list` responses, applied after per-session scope filtering. Cold tools are annotated `defer_loading: true` when no [tool search](#tools-search) is configured, or omitted from `tools/list` entirely — reachable only through search results — when one is.

```yaml
tools:
  eager:
    policy: explicit
    match:
      - github__list_repos
      - "slack__*"
```

#### eager.policy

> `enum` [ `none`, `all`, `explicit` ] | Default: `none`

Which cached tools are eager. `none` marks every tool cold, `all` marks every tool eager, and `explicit` marks only tools matching [`match`](#eager-match) eager.

#### eager.match

> `array` of `string`

Glob patterns of tool names admitted to the eager set, where `*` matches any sequence of characters. Required when `policy` is `explicit`; not allowed for any other policy.

#### options.tools

> `enum` [ `avro`, `boolean`, `double`, `float`, `int32`, `int64`, `json`, `string` ], `object`

Validation model applied to `tools/call` request arguments. Refer to the individual [model](../../../models/) docs for type specific implementation.
