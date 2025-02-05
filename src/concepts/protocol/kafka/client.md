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

@tab options

<!-- @include: ./.partials/client-options.md -->

@tab routes\*

<!-- @include: ./.partials/routes.md -->

@tab exit

<!-- @include: ../.partials/exit.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry.md -->

:::
