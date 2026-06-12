### options

> `object`

The `mcp_http` specific options.

```yaml
options:
  authorization:
    my_guard:
      credentials:
        headers:
          authorization: Bearer {credentials}
  tools:
    create_pr:
      description: Create a pull request to merge one branch into another.
      summary: "Created pull request #${result.number}"
      schemas:
        input:
          model: json
          catalog:
            my_catalog:
              - subject: create_pr_params
                version: latest
        output:
          model: json
          catalog:
            my_catalog:
              - subject: create_pr_result
                version: latest
  resources:
    order:
      uri: "order://{orderId}"
      description: Customer order by identifier
      mimeType: application/json
      schemas:
        output:
          model: json
          catalog:
            my_catalog:
              - subject: order_result
                version: latest
```

#### options.authorization

> `object` as map of named `object`

Guard credentials to inject into the upstream `http` request. The named key references a [guard](../../guards/README.md) defined elsewhere in the configuration. At most one guard may be referenced.

#### authorization.credentials

> `object`

Credentials derived from the named guard.

#### credentials.headers

> `object` as map of named `string`

HTTP request headers added to the upstream request, with values resolved from the guarded session.

- `{credentials}` Replaced with the raw credentials presented to the named guard.
- `{identity}` Replaced with the authorized identity resolved by the named guard.

#### options.tools

> `object` as map of named `object`

MCP tools terminated by this binding and expanded into `http` requests. The named key is the tool name surfaced to MCP clients by `tools/list` and matched by `tools/call`.

#### tools.description

> `string`

Tool description surfaced to MCP clients by `tools/list`.

#### tools.summary

> `string`

Result summary template surfaced as the tool-call text result. Supports `${result.x}` interpolation, where `x` references a property of the upstream JSON response.

#### tools.schemas\*

> `object`

JSON schema converters for the tool.

#### schemas.input\*

> `object`

Converter validating the `tools/call` `arguments` before the upstream `http` request is dispatched. A converter binds a `model` to a registered `catalog` subject.

#### input.model\*

> `string`

Model name used to convert and validate the value, such as `json`.

#### input.catalog\*

> `object` as map of named `array`

Catalog subjects resolving the schema used for validation.

#### catalog[].subject\*

> `string`

Subject name identifying the schema in the named catalog.

#### catalog[].version

> `string` | Default: `latest`

Specific version of the registered schema.

#### schemas.output

> `object`

Converter validating and projecting the upstream `http` response, surfaced as the tool-call `structuredContent`. Uses the same shape as [`schemas.input`](#schemas-input).

#### options.resources

> `object` as map of named `object`

MCP resources terminated by this binding and expanded into `http` requests. The named key is the resource name surfaced to MCP clients by `resources/list` and matched by `resources/read`.

#### resources.uri\*

> `string`

Resource URI template surfaced by `resources/list`, with optional embedded capture names, such as `order://{orderId}`. Captured values are referenced from a route as `${params.x}`.

#### resources.description

> `string`

Resource description surfaced to MCP clients by `resources/list`.

#### resources.mimeType

> `string`

MIME type of the resource contents surfaced to MCP clients.

#### resources.schemas

> `object`

JSON schema converter for the resource.

<!-- markdownlint-disable MD024 -->
#### schemas.output

> `object`

Converter validating and projecting the upstream `http` response, surfaced as the resource `contents`. Uses the same shape as [`schemas.input`](#schemas-input).
<!-- markdownlint-enable MD024 -->
