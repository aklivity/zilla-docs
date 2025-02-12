---
shortTitle: Server
---

# Server Binding

The http server binding decodes `HTTP/1.1` protocol or `HTTP/2` protocol on the inbound network stream, producing higher level application streams for each request.

Cross-Origin Resource Sharing (CORS) is supported by specifying an access control policy of `cross-origin`. Further configuration allows for finer-grained access control including specific request origins, methods and headers allowed, and specific response headers exposed.

Authorization is enforced by a `guard` and the credentials can be extracted from a cookie, header or query parameter. Conditional routes based on `http` request headers are used to route these application streams to an `exit` binding.

```yaml {3}
<!-- @include: ./.partials/server.yaml -->
```

## Usage Example

![Pipeline with HTTP Server Example](../images/http-part1.png)

::: details Full HTTP Proxy zilla.yaml Config

```yaml
<!-- @include: ../../../cookbooks/quickstart/http-zilla.yaml -->
```

:::

In the above example, the HTTP Server receives an inbound TCP connection stream from the TCP Server binding. The HTTP Server binding decodes the HTTP request, converting it into a higher-level abstraction in Zilla. Some routing, transformation, validation, etc can be done here before the stream is continued into the next pipeline. After the HTTP request is decoded, it can be continued into different protocols, for example, HTTP Kafka Proxy, HTTP Filesystem Proxy, SSE, etc. HTTP Kafka Proxy and HTTP Filesystem Proxy bindings act as an adaptor from HTTP request into the corresponding protocol.

## Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/server-options.md -->

@tab routes\*

<!-- @include: ./.partials/http-routes.md -->

@tab exit

<!-- @include: ../.partials/exit.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry-http.md -->

:::
