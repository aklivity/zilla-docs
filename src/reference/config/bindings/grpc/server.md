---
shortTitle: server

category:
  - Binding
tag:
  - Server
---

# grpc server

The grpc server binding adapts `http` request-response streams to `grpc` request-response streams, with support for both `application/grpc+proto` and `application/grpc-web+proto` content types.

```yaml {4-6,9-13}
<!-- @include: ./.partials/server.yaml -->
```

## Configuration (\* required)

### catalog

> `object` as map of named: `array` of `object`

To map defined catalog for schema retrieval based on catalog specific parameters.

#### catalog[].subject\*

> `string`

Subject name used when storing the catalog artifact.

#### catalog[].version

> `string` | Default: `latest`

Specific iteration or version of a registered schema in the defined catalog.

<!-- @include: ./.partials/options.md -->
<!-- @include: ../.partials/exit.md -->
<!-- @include: ./.partials/routes.md -->
<!-- @include: ../.partials/telemetry-grpc.md -->
