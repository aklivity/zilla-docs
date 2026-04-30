---
shortTitle: proxy
---

# schema-registry proxy

The schema-registry proxy binding receives inbound Schema Registry API requests on the external endpoint and forwards them to the internal schema registry endpoint. When a `cluster-id` is configured, it is used as a namespace prefix on subject names to isolate schemas per cluster.

```yaml {3}
<!-- @include: ./.partials/proxy.yaml -->
```

## Configuration (\* required)

### options\*

> `object`

The `schema-registry` proxy specific options.

| Property            | Type     | Required | Description                                                                                                                                                                                   |
|---------------------|----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `cluster-id`        | `string` | no       | Namespace prefix applied to subject names when forwarding to the internal registry. External subject `foo` is resolved as `{cluster-id}.foo` internally; the prefix is stripped on responses. |
| `external.endpoint` | `string` | yes      | URL of the external-facing schema registry endpoint.                                                                                                                                          |
| `internal.endpoint` | `string` | yes      | URL of the internal schema registry endpoint.                                                                                                                                                 |

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
