### options

> `object`

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

#### options.specs

> `object`

OpenAPI and AsyncAPI specs definition.

#### specs.openapi\*

> `object` as map of named `object` properties

Options for each configured OpenAPI spec.

#### openapi.catalog

> `object` as map of named `object` properties

The Catalog specific options.

#### catalog.subject\*

> `string`

Subject name used when storing the catalog artifact.

#### catalog.version

> `string` | Default: `latest`

Catalog artifact version to use.

#### openapi.security

> `object` as map of named `string` properties

Maps each OpenAPI `securitySchemes` name declared in the spec document to a guard defined elsewhere in the configuration. Used to automatically derive `guarded:` on the routes generated for the composite.

```yaml
specs:
  openapi:
    my-openapi-spec:
      security:
        bearerAuth: my_jwt_guard
```

#### openapi.overlay

> `object` as map of named `object` properties

Applies an [OpenAPI Overlay Specification](https://github.com/OAI/Overlay-Specification) document, stored as a catalog artifact, to the base OpenAPI spec document before it is used. A single overlay may be configured per spec.

```yaml
specs:
  openapi:
    my-openapi-spec:
      overlay:
        my_catalog:
          subject: petstore-overlay
          version: latest
```

<!-- markdownlint-disable MD024 -->
#### overlay.subject\*

> `string`

Subject name used when storing the overlay artifact.

#### overlay.version

> `string` | Default: `latest`

Overlay artifact version to use.
<!-- markdownlint-enable MD024 -->

#### specs.asyncapi\*

> `object` as map of named `object` properties

Options for each configured AsyncAPI spec.

#### asyncapi.catalog

> `object` as map of named `object` properties

The `catalog` catalog specific options.

<!-- markdownlint-disable MD024 -->
#### catalog.subject\*

> `string`

Subject name used when storing the catalog artifact.

#### catalog.version

> `string` | Default: `latest`

Catalog artifact version to use.
<!-- markdownlint-enable MD024 -->

#### asyncapi.security

> `object` as map of named `string` properties

Maps each AsyncAPI `securitySchemes` name declared in the spec document to a guard defined elsewhere in the configuration. Used to automatically derive `guarded:` on the routes generated for the composite.

```yaml
specs:
  asyncapi:
    my-asyncapi-spec:
      security:
        bearerAuth: my_jwt_guard
```

#### asyncapi.overlay

> `object` as map of named `object` properties

Applies an [OpenAPI Overlay Specification](https://github.com/OAI/Overlay-Specification) document, stored as a catalog artifact, to the base AsyncAPI spec document before it is used. A single overlay may be configured per spec.

```yaml
specs:
  asyncapi:
    my-asyncapi-spec:
      overlay:
        my_catalog:
          subject: petstore-overlay
          version: latest
```

<!-- markdownlint-disable MD024 -->
#### overlay.subject\*

> `string`

Subject name used when storing the overlay artifact.

#### overlay.version

> `string` | Default: `latest`

Overlay artifact version to use.
<!-- markdownlint-enable MD024 -->
