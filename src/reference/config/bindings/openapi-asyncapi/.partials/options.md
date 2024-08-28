<!-- markdownlint-disable MD024 -->
### options

> `object`

`openapi-asyncapi`-specific options.

```yaml
options:
  specs:
    openapi:
      my-openapi-spec: spec/openapi.yaml
    asyncapi:
      my-asyncapi-spec: spec/asyncapi.yaml
```

#### options.specs

> `object`

OpenAPI and AsyncAPI specs definition.

#### specs.openapi\*

> `object` of `name: value` properties

#### openapi.catalog

> `object` as map of named properties

catalog specific options.

#### catalog.subject\*

> `string`

Subject name used when storing the catalog artifact.

#### catalog.version

> `string`

Catalog artifact version to use.

#### specs.asyncapi\*

> `object` of `name: value` properties

#### asyncapi.catalog

> `object` as map of named properties

`catalog` catalog specific options.

#### catalog.subject\*

> `string`

Subject name used when storing the catalog artifact.

#### catalog.version

> `string`

Catalog artifact version to use.
