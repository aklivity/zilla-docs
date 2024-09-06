### options

> `object`

`openapi`-specific options.

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

> `object` as map of named:`object`

`specs` specific options

#### specs.catalog

> `object` as map of named:`object`

catalog specific options.

#### catalog.subject\*

> `string`

Subject name used when storing the catalog artifact.

#### catalog.version

> `string` | Default: `latest`

Catalog artifact version to use.

#### specs.servers

> `array` of `object`

#### servers[].url

> `string` | Pattern: `^([a-zA-Z0-9\\\\.-]+)(:(\\\\{[a-zA-Z_]+\\\\}|[0-9]+))?$`

The server url to match in openapi spec

#### options.http

> `object`

http specific options.

#### http.authorization

> `object` as map of named:`object`

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

> `object` as map of named: `string` properties

Named cookie value pattern with `{credentials}`.

#### credentials.headers

> `object` as map of named: `string` properties

Named header value pattern with `{credentials}`, e.g. `"Bearer` `{credentials}"`.

#### credentials.query\*

> `object` as map of named: `string` properties

Named query parameter value pattern with `{credentials}`.

#### options.tcp

> `object`

`client` specific `tcp` options.

#### tcp.host

> `string`

Hostname or IP address.

#### tcp.port

> `integer`, `string`, `array`

Port number(s), including port number ranges.
