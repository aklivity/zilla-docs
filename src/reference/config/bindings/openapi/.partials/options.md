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

An [OpenAPI Overlay Specification](https://spec.openapis.org/overlay/v1.0.0.html) document,
resolved the same way as `catalog`, whose actions are applied to the spec document before it
is parsed. Use this to patch a spec that comes from a source you cannot edit directly, such as
a schema registry.

```yaml
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

#### specs.servers

> `array` of `object`

The servers to match from the schema that are used when defining endpoints.

#### servers[].url

> `string` | Pattern: `^([a-zA-Z0-9\\\\.-]+)(:(\\\\{[a-zA-Z_]+\\\\}|[0-9]+))?$`

The server url to match in openapi spec

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
