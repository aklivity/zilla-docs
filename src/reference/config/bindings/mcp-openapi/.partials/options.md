### options

> `object`

The `mcp_openapi` specific options.

```yaml
options:
  specs:
    github:
      server: https://api.github.com
      catalog:
        my_catalog:
          subject: github
          version: latest
      security:
        bearerAuth: my_guard
  tools:
    create_pr:
      description: Create a pull request to merge one branch into another.
      summary: "Created pull request #${result.number}"
      input:
        model: json
        catalog:
          my_catalog:
            - subject: create_pr_input
              version: latest
      output:
        model: json
        catalog:
          my_catalog:
            - subject: create_pr_result
              version: latest
  resources:
    read_order:
      description: Read a customer order by id.
```

#### options.specs

> `object` as map of named `object`

OpenAPI specifications available to routed operations. The named key is the spec label referenced by a route's [`with.spec`](#with-spec).

#### specs.server

> `string`

Overrides the server URL declared by the OpenAPI specification, used to resolve the `:scheme`, `:authority`, and base path of the generated upstream `http` request.

#### specs.catalog

> `object` as map of named `object`

Catalog reference resolving the OpenAPI document. The named key references a catalog defined elsewhere in the configuration.

#### catalog.subject\*

> `string`

Subject name identifying the OpenAPI document in the named catalog.

#### catalog.version

> `string` | Default: `latest`

Specific version of the registered OpenAPI document.

#### specs.security

> `object` as map of named `string`

Maps each OpenAPI `securityScheme` name declared by the specification to the named guard that authorizes it. A routed operation whose security requirement has no matching entry is not compiled into the generated `mcp_http` proxy.

#### options.tools

> `object` as map of named `object`

Overrides for MCP tools generated from routed OpenAPI operations. The named key is the tool name — either an explicit route's [`when[].tool`](#when-tool), or the automatic name assigned to a bulk-selected operation (see [`routes`](#routes)).

#### tools.description

> `string`

Tool description surfaced to MCP clients by `tools/list`, overriding the OpenAPI operation's own `description`, which is itself the fallback before the operation id.

#### tools.summary

> `string`

Result summary template surfaced as the tool-call text result, overriding the OpenAPI operation's own `summary`, which is itself the fallback before a generic literal naming the operation. Supports `${result.x}` interpolation, where `x` references a property of the upstream JSON response.

#### tools.input

> `object`

Model overriding the schema generated from the OpenAPI operation's parameters and request body, used to validate the `tools/call` `arguments` before the upstream `http` request is dispatched.

```yaml
input:
  model: json
  catalog:
    my_catalog:
      - subject: create_pr_input
        version: latest
```

#### input.model\*

> `string`

Model name used to convert and validate the value, such as `json`.

#### input.catalog

> `object` as map of named `array`

Catalog subjects resolving the schema used for validation.

#### catalog[].subject\*

> `string`

Subject name identifying the schema in the named catalog.

#### catalog[].version

> `string` | Default: `latest`

Specific version of the registered schema.

#### tools.output

> `object`

Model overriding the schema generated from the OpenAPI operation's success response, surfaced as the tool-call `structuredContent`. Uses the same shape as [`tools.input`](#tools-input).

#### options.resources

> `object` as map of named `object`

Overrides for MCP resources generated from routed OpenAPI operations. The named key is the resource identifier used by a route's [`when[].resource`](#when-resource) — not the URI ultimately surfaced by `resources/list`, which is derived from the OpenAPI path.

#### resources.description

> `string`

Resource description surfaced to MCP clients by `resources/list`, overriding the OpenAPI operation's own `description`, which is itself the fallback before the operation id.

#### resources.output

> `object`

Model overriding the schema generated from the OpenAPI operation's success response, surfaced as the resource `contents`. Uses the same shape as [`tools.input`](#tools-input).
