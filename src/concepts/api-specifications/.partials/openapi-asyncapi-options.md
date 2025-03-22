### options

> `object`

| Property | Type | Description |
| -- | -- | -- |
| options.specs |  `object` |  OpenAPI and AsyncAPI specs definition. | 
| options.specs.openapi\* |  `Map<string, object>` |  Options for each configured OpenAPI spec. | 
| openapi.catalog |  `Map<string, object>` |  The Catalog specific options. | 
| options.catalog.subject\* |  `string` |  Subject name used when storing the catalog artifact. | 
| options.catalog.version |  `string` | Default: `latest` |  Catalog artifact version to use. | 
| options.specs.asyncapi\* |  `Map<string, object>` |  Options for each configured AsyncAPI spec. | 
| options.asyncapi.catalog |  `Map<string, object>` |  The `catalog` catalog specific options. | 
| options.catalog.subject\* |  `string` |  Subject name used when storing the catalog artifact. | 
| options.catalog.version |  `string` | Default: `latest` |  Catalog artifact version to use. | 

#### Examples

The `openapi-asyncapi` specific options.

```yaml
options:
  specs:
    openapi:
      my-openapi-spec:
        catalog:
          my_catalog:
            subject: petstore
            version: latest
    asyncapi:
      my-asyncapi-spec:
        catalog:
            my_catalog:
              subject: petstore
              version: latest
```