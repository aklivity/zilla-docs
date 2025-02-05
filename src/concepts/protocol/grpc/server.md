---
shortTitle: Server
---

# gRPC Server Binding

The grpc server binding adapts `http` request-response streams to `grpc` request-response streams, with support for both `application/grpc+proto` and `application/grpc-web+proto` content types.

```yaml {4-6,9-13}
<!-- @include: ./.partials/server.yaml -->
```

## Configuration (\* required)

::: tabs

@tab catalog

<!-- @include: ./.partials/catalog.md -->

@tab routes\*

<!-- @include: ./.partials/routes.md -->

@tab exit

<!-- @include: ../.partials/exit.md -->

@tab telemetry
<!-- @include: ../.partials/telemetry-grpc.md -->

:::
