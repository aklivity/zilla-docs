---
shortTitle: proxy
---

# schema-registry proxy

The schema-registry proxy binding receives inbound Schema Registry API requests on the external endpoint and forwards them to the internal schema registry endpoint, optionally filtering by cluster ID.

```yaml {3}
<!-- @include: ./.partials/proxy.yaml -->
```

## Configuration (\* required)

### catalog

> `object` as map of named `array`

To map defined catalog for schema retrieval based on catalog specific parameters.

```yaml
catalog:
  my_catalog:
    - subject: http
```

#### catalog[].id\*

> `integer`

Define specific schema id to refer from catalog.

#### catalog[].strategy\*

> `enum` [ `topic` ]

To determine the subject based on the specified strategy.

#### catalog[].subject\*

> `string`

Unique identifier for schema categorization in the catalog.

#### catalog[].version

> `string` | Default: `latest`

Specific iteration or version of a registered schema in the defined catalog.

### options\*

> `object`

The `schema-registry` proxy specific options.

| Property              | Type     | Required | Description                                                                          |
|-----------------------|----------|----------|--------------------------------------------------------------------------------------|
| `cluster-id`          | `string` | no       | Cluster ID used to filter schema registry requests to a specific cluster's schemas.  |
| `external.endpoint`   | `string` | yes      | URL of the external-facing schema registry endpoint.                                 |
| `internal.endpoint`   | `string` | yes      | URL of the internal schema registry endpoint.                                        |

```yaml
options:
  cluster-id: development
  external:
    endpoint: https://schema-registry.external.net:8082
  internal:
    endpoint: http://schema-registry.internal.net:8081
```

### routes

> `array` of `object`

Conditional `schema-registry` specific routes. At most one route is allowed.

#### routes[].guarded

> `object` as map of named `array` of `string`

List of roles required by each named guard to authorize this route.

```yaml
routes:
  - guarded:
      my_guard:
        - read:items
```

#### routes[].exit\*

> `string`

Next binding when following this route.

```yaml
routes:
  - exit: tcp_client
```

<!-- @include: ../.partials/exit.md -->
<!-- @include: ../.partials/telemetry.md -->
