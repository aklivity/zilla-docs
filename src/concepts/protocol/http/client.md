---
shortTitle: Client
---

# Client Binding

The http client binding receives inbound application streams and encodes each request as a network stream via `HTTP/1.1` protocol. Note that the same network stream can be reused to encode multiple `HTTP/1.1` requests.

Conditional routes based on `http` request headers are used to route these network streams to an `exit` binding.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```

## Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/client-options.md -->

@tab routes

<!-- @include: ./.partials/http-routes.md -->

@tab exit

<!-- @include: ../.partials/exit.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry-http.md -->

:::
