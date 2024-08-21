---
shortTitle: grpc server
description: Zilla runtime grpc server binding
category:
  - Binding
tag:
  - Server
---

# grpc server Binding

The grpc server binding adapts `http` request-response streams to `grpc` request-response streams, with support for both `application/grpc+proto` and `application/grpc-web+proto` content types.

The `type:grpc kind:server` binding adapts `http` request-response streams to `grpc` request-response streams, with support for both `application/grpc+proto` and `application/grpc-web+proto` content types.

```yaml {4-6,9-13}
<!-- @include: .partials/server.yaml -->
```

## Configuration (\* required)

<!-- @include: ../.partials/cataloged.md -->
<!-- @include: .partials/options.md -->
<!-- @include: ../.partials/exit.md -->
<!-- @include: .partials/routes.md -->
<!-- @include: ../.partials/telemetry-grpc.md -->

---

::: right
\* required
:::
