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
      schemas:
        output:
          model: json
          catalog:
            my_catalog:
              - subject: create_pr_result
                version: latest
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

Overrides for MCP tools generated from routed OpenAPI operations. The named key is the tool name, matching either a route's [`when[].tool`](#whentool) or, when a route declares no `when`, the routed [`operation`](#with-operation) id.

#### tools.description

> `string`

Tool description surfaced to MCP clients by `tools/list`, overriding the OpenAPI operation summary.

#### tools.schemas

> `object`

JSON schema converter override for the tool.

#### schemas.output

> `object`

Converter validating and projecting the upstream `http` response, surfaced as the tool-call `structuredContent`, overriding the schema generated from the OpenAPI operation's success response. A converter binds a `model` to a registered `catalog` subject.

#### output.model\*

> `string`

Model name used to convert and validate the value, such as `json`.

#### output.catalog

> `object` as map of named `array`

Catalog subjects resolving the schema used for validation.

#### catalog[].subject\*

> `string`

Subject name identifying the schema in the named catalog.

#### catalog[].version

> `string` | Default: `latest`

Specific version of the registered schema.
