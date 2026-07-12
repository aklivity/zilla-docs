#### options.specs

> `object` as map of named `object` properties

The `specs` specific options.

#### specs.catalog

> `object` as map of named `object` properties

To map defined catalog for schema retrieval based on catalog specific parameters.

#### catalog.subject\*

> `string`

Subject name used when storing the catalog artifact.

#### catalog.version

> `string` | Default: `latest`

Specific iteration or version of a registered schema in the defined catalog.

#### specs.server

> `string`

Deployment-target URL override for every server declared in the spec document. Composes as a path-prefix on top of each document-declared server, rather than replacing it outright.

```yaml
specs:
  mqtt_api:
    server: mqtt://broker.internal:1883
```

#### specs.security

> `object` as map of named `string` properties

Maps each AsyncAPI `securitySchemes` name declared in the spec document to a guard defined elsewhere in the configuration. Used to automatically derive `guarded:` on the routes generated for the composite.

```yaml
specs:
  mqtt_api:
    security:
      bearerAuth: my_jwt_guard
```

#### specs.store

> `string`

The name of a configured [store](../../../stores/memory.md) used to coordinate MQTT session ownership for the generated mqtt server. When omitted, a default store is generated for the server; reference an external or cluster-wide store to share session ownership across Zilla instances.

```yaml
specs:
  mqtt_api:
    store: mqtt_sessions
```

#### specs.overlay

> `object` as map of named `object` properties

Applies an [OpenAPI Overlay Specification](https://github.com/OAI/Overlay-Specification) document, stored as a catalog artifact, to the base spec document before it is used. A single overlay may be configured per spec.

```yaml
specs:
  mqtt_api:
    catalog:
      my_catalog:
        subject: smartylighting
        version: latest
    overlay:
      my_catalog:
        subject: smartylighting-overlay
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
  jwt:
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

#### options.mqtt

> `object`

The mqtt specific options applied to the generated [mqtt](../../mqtt/server.md) server, using the same shape as the mqtt binding `options`.
