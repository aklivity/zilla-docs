---
shortTitle: Server
---

# SSE Server

The sse server binding converts inbound `http` request-response streams into `sse` request-response streams.

```yaml {3}
<!-- @include: ./.partials/server.yaml -->
```

## Usage Example

![Pipeline with SSE Server Example](../images/http-part1.png)

::: details Full HTTP Proxy zilla.yaml Config

```yaml
<!-- @include: ../../../cookbooks/quickstart/http-zilla.yaml -->
```

:::

In the above example, the SSE Server receives inbound HTTP streams from the HTTP Server binding. The SSE Server binding converts regular HTTP request-response stream into HTTP SSE request-response stream. Some routing, transformation, validation, etc can be done here before the stream is continued into the next pipeline. The SSE stream can be passed into Kafka stream with SSE Kafka proxy, acting as an adaptor from SSE into Kafka stream.

::: info Note
Server-Sent Event (SSE) is a specific response stream type in HTTP. Because of this, it still requires a data stream from an HTTP Server instead of directly from a TCP Server. The HTTP Server still needs data stream from a TCP server as well.
:::

## Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/options.md -->

@tab routes

<!-- @include: ./.partials/routes.md -->

@tab exit

<!-- @include: ../.partials/exit.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry.md -->

:::
