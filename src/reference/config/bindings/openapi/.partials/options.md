### options

> `object`

The `openapi` specific options.

```yaml
options:
    specs:
      petstore:
        servers:
          - url: http://localhost:9090
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

#### specs.servers

> `array` of `object`

Additional servers to match from the schema that are used when defining endpoints. When omitted, every server declared in the spec document is used.

#### servers[].url

> `string`

The server url to match in openapi spec

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

#### options.tcp

> `object`

TCP options to connect to an external client.

#### tcp.host

> `string`

Hostname or IP address.

#### tcp.port

> `integer`, `string`, `array`

Port number(s), including port number ranges.
