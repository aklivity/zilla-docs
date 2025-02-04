---
shortTitle: Client
---

# Kafka Client

The `client` kind `kafka` binding receives inbound application streams and encodes each as a network stream via `kafka` request-response protocol. Note that the same network stream can be reused to encode multiple `kafka` requests, including both `fetch` and `produce` requests.

Conditional routes based on `kafka` `topic` names are used to route these network streams to an `exit` binding that ultimately reaches a `kafka` broker.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```

## Configuration (\* required)

::: tabs

@tab Options

<!-- @include: ./.partials/client-options.md -->

@tab Routes

<!-- @include: ./.partials/routes.md -->

@tab Exit

<!-- @include: ../.partials/exit.md -->

@tab Telemetry

<!-- @include: ../.partials/telemetry.md -->

:::
