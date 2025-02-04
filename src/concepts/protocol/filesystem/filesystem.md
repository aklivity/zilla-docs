---
shortTitle: Server
---

# Filesystem Server Binding

The filesystem `server` binding provides access to files and directories on the local filesystem, optionally following symbolic links. It behaves as a web server when combined with `tcp,` `tls`, `http` and `http-filesystem` bindings.

## Usage

```yaml {3}
<!-- @include: ./.partials/server.yaml -->
```

## Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/options.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry.md -->

:::
