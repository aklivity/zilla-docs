# HTTP

## Client Binding

The http client binding receives inbound application streams and encodes each request as a network stream via `HTTP/1.1` protocol. Note that the same network stream can be reused to encode multiple `HTTP/1.1` requests.

Conditional routes based on `http` request headers are used to route these network streams to an `exit` binding.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```

### Configuration (\* required)

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

## Server Binding

The http server binding decodes `HTTP/1.1` protocol or `HTTP/2` protocol on the inbound network stream, producing higher level application streams for each request.

Cross-Origin Resource Sharing (CORS) is supported by specifying an access control policy of `cross-origin`. Further configuration allows for finer-grained access control including specific request origins, methods and headers allowed, and specific response headers exposed.

Authorization is enforced by a [`guard`](../../../config/overview.md#guards) and the credentials can be extracted from a cookie, header or query parameter.

Conditional routes based on `http` request headers are used to route these application streams to an `exit` binding.

```yaml {3}
<!-- @include: ./.partials/server.yaml -->
```

### Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/server-options.md -->

@tab routes

<!-- @include: ./.partials/http-routes.md -->

@tab exit

<!-- @include: ../.partials/exit.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry-http.md -->

:::

## Filesystem Proxy Binding

The http-filesystem proxy binding adapts `http` data streams into `filesystem` data streams by mapping the path from an inbound `http` `GET` request into a filesystem relative path.

Behaves as a web server when combined with `tcp`, `tls`, `http` and `filesystem` bindings.

```yaml {3}
<!-- @include: ./.partials/proxy.yaml -->
```

### Configuration (\* required)

::: tabs

@tab routes

<!-- @include: ./.partials/routes.md -->

@tab exit

<!-- @include: ../.partials/exit.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry-http.md -->

:::

## Kafka Proxy Binding

The http-kafka proxy binding for adapting `http` request-response streams to `kafka` topic streams.

```yaml {3}
<!-- @include: ./.partials/kafka-proxy.yaml -->
```

### Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/kafka-options.md -->

@tab routes

<!-- @include: ./.partials/kafka-routes.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry-http.md -->

:::
