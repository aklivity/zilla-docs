### options

> `object`

The `openapi` specific options.

```yaml
options:
    specs:
      petstore:
        servers:
          - http://localhost:9090
        catalog:
          my_catalog:
            subject: petstore
            version: latest
```

#### options.specs

> `object` as map of named `object` properties

The `specs` specific options.

#### specs.servers\*

> `array` of `string`

Deployment-target URLs for the spec, independent of the servers declared in the spec document itself. At least one is required.

```yaml
specs:
  petstore:
    servers:
      - http://backend.internal:9090
```

#### specs.security

> `object` as map of named `string` properties, at most one entry

Maps an OpenAPI `securitySchemes` name declared in the spec document to a guard defined elsewhere in the configuration. Used to automatically derive `guarded:` on the routes generated for the composite, and to synthesize the matching credential-extraction pattern for the generated `http` binding from the scheme's own declared type — an `http`/`bearer` scheme extracts an `Authorization: Bearer {credentials}` header; an `apiKey` scheme extracts from whichever `header`, `query`, or `cookie` location and parameter name the scheme declares. No separate authorization configuration is needed.

```yaml
specs:
  petstore:
    security:
      bearerAuth: my_jwt_guard
```

#### specs.catalog

> `object` as map of named `object` properties

The `catalog` specific options.

#### catalog.subject\*

> `string`

Subject name used when storing the catalog artifact.

#### catalog.version

> `string` | Default: `latest`

Catalog artifact version to use.

#### specs.overlay

> `object` as map of named `object` properties

Applies an [OpenAPI Overlay Specification](https://github.com/OAI/Overlay-Specification) document, stored as a catalog artifact, to the base spec document before it is used. A single overlay may be configured per spec.

```yaml
specs:
  petstore:
    catalog:
      my_catalog:
        subject: petstore
        version: latest
    overlay:
      my_catalog:
        subject: petstore-overlay
        version: latest
```

#### overlay.subject\*

> `string`

Subject name used when storing the overlay artifact.

#### overlay.version

> `string` | Default: `latest`

Overlay artifact version to use.
