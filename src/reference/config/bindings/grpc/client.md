---
shortTitle: grpc client
description: Zilla runtime grpc client binding
category:
  - Binding
tag:
  - Client
---

# grpc client Binding

The grpc client binding adapts `grpc` request-response streams to `http` request-response streams.

The `type:grpc kind:client` binding adapts `grpc` request-response streams to `http` request-response streams.

```yaml
<!-- @include: .partials/client.yaml -->
```

## Configuration (\* required)

<!-- @include: ../.partials/exit.md -->
<!-- @include: .partials/routes.md -->
<!-- @include: ../.partials/telemetry-grpc.md -->

---

::: right
\* required
:::
