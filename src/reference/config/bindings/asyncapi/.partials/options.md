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

#### specs.servers

> `array` of `object`

Additional servers to match from the schema that are used when defining endpoints.

#### servers[].url

> `string` | Pattern: `^([a-zA-Z0-9\\\\.-]+)(:(\\\\{[a-zA-Z_]+\\\\}|[0-9]+))?$`

The server to match based on the server's `url` in an asyncapi `2.x` spec only.

#### servers[].host

> `string` | Pattern: `^([a-zA-Z0-9\\\\.-]+)(:(\\\\{[a-zA-Z_]+\\\\}|[0-9]+))?$`

The server to match based on the server's `host` in an asyncapi `3.x` spec only.

#### servers[].pathname

> `string`

The server pathname to match based on the server's `pathname` in an asyncapi `3.x` spec only.

#### specs.security

> `object` as map of named `string` properties

Maps each AsyncAPI `securitySchemes` name declared in the spec document to a guard defined elsewhere in the configuration. Used to automatically derive `guarded:` on the routes generated for the composite.

```yaml
specs:
  mqtt_api:
    security:
      bearerAuth: my_jwt_guard
```

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

#### mqtt.store

> `string`

The name of a configured [store](../../../stores/memory.md) used to coordinate MQTT session ownership for the generated mqtt server. When omitted, a default store is generated for the server; reference an external or cluster-wide store to share session ownership across Zilla instances.
