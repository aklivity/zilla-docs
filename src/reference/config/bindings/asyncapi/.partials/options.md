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

#### specs.servers\*

> `array` of `string`

Deployment-target URLs for the spec, independent of the servers declared in the spec document itself. At least one is required.

```yaml
specs:
  mqtt_api:
    servers:
      - mqtt://broker.internal:1883
```

#### specs.security

> `object` as map of named `string` properties

Maps AsyncAPI `securitySchemes` names declared in the spec document to guards defined elsewhere in the configuration. Used to automatically derive `guarded:` on the routes generated for the composite, and to synthesize the matching credential-extraction pattern for whichever protocol binding is generated (`http`, `mqtt`, or `kafka`), from each scheme's own declared type — no separate authorization configuration is needed:

- An `http`/`bearer` or `httpApiKey` scheme synthesizes HTTP `Authorization` header, query parameter, or cookie extraction, matching the scheme's declared location.
- A generic `apiKey` scheme with `in: user` or `in: password` synthesizes the MQTT CONNECT username/password extraction — declare one scheme per property, both mapped to the same guard, to supply both.
- A `plain`, `scramSha256`, or `scramSha512` scheme synthesizes Kafka SASL credentials using the matching mechanism.

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
