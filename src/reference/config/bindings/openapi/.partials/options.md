### options

> `object`

The `openapi` specific options.

```yaml
options:
    specs:
      petstore:
        catalog:
          my_catalog:
            subject: petstore
            version: latest
```

#### options.specs

> `object` as map of named `object` properties

The `specs` specific options.

#### specs.server

> `string`

Deployment-target URL override for every server declared in the spec document. Composes as a path-prefix on top of each document-declared server, rather than replacing it outright.

```yaml
specs:
  petstore:
    server: http://backend.internal:9090
```

#### specs.security

> `object` as map of named `string` properties

Maps each OpenAPI `securitySchemes` name declared in the spec document to a guard defined elsewhere in the configuration. Used to automatically derive `guarded:` on the routes generated for the composite.

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

#### options.http

> `object`

The http specific options.

#### http.authorization

> `object` as map of named `object` properties

Authorization by guard for the `HTTP/1.1` and `HTTP/2` protocols.

```yaml
authorization:
  my_jwt_guard:
    credentials:
      headers:
        authorization: Bearer {credentials}
```

#### authorization.credentials\*

> `object`

Defines how to extract credentials from the HTTP request.

#### credentials.cookies

> `object` as map of named `string` properties

Named cookie value pattern with `{credentials}`.

#### credentials.headers

> `object` as map of named `string` properties

Named header value pattern with `{credentials}`, e.g. `"Bearer` `{credentials}"`.

#### credentials.query\*

> `object` as map of named `string` properties

Named query parameter value pattern with `{credentials}`.
