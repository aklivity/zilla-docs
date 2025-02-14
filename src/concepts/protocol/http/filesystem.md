---
shortTitle: Filesystem
---

# Filesystem Proxy Binding

The http-filesystem proxy binding adapts `http` data streams into `filesystem` data streams by mapping the path from an inbound `http` `GET` request into a filesystem relative path.

Behaves as a web server when combined with `tcp`, `tls`, `http` and `filesystem` bindings.

```yaml {3}
<!-- @include: ./.partials/proxy.yaml -->
```

## Usage Example

![Pipeline with HTTP Filesystem Example](../images/filesystem.png)

::: details Full HTTP Filesystem zilla.yaml Config

```yaml
<!-- @include: ../.partials/filesystem-zilla.yaml -->
```

:::

In the above example, the HTTP-Filesystem binding is an intermediary between HTTP Server binding and Filesystem Server binding. Some routing can be done here before the stream is passed into the Filesystem server.

1. HTTP Server sends the stream to HTTP-Filesystem binding.
2. HTTP Filesystem performs the necessary transformation and routing between the HTTP stream and the Filesystem server.
3. The request stream is then forwarded to the Filesystem server.

## Configuration (\* required)

::: tabs

@tab routes

<!-- @include: ./.partials/routes.md -->

@tab exit

<!-- @include: ../.partials/exit.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry-http.md -->

:::
