---
shortTitle: filesystem
description: Zilla runtime filesystem binding
category:
  - Binding
tag:
  - Server
---

# filesystem Binding

Zilla runtime filesystem binding.

```yaml {2}
filesystem_server:
  type: filesystem
  kind: server
  options:
    location: web/
    simlinks: follow
```

## Configuration (\* required)

### type: filesystem\*

The `server` kind `filesystem` binding provides access to files and directories on the local filesystem, optionally following symbolic links.

Behaves as a web server when combined with `tcp,` `tls`, `http` and `http-filesystem` bindings.

### kind: server\*

Behave as a `filesystem` `server`.

### options

> `object`

`filesystem`-specific options for `filesystem` access.

```yaml
options:
  location: web/
  simlinks: follow
```

#### options.location

> `string`

File system URI or directory name with trailing slash.

#### options.symlinks

> `enum` [ "follow", "ignore" ] | Default: `"ignore"`

How to treat symbolic links.

### telemetry

> `object`

Defines the desired telemetry for the binding.

#### telemetry.metrics

> `enum` [ "stream" ]

Telemetry metrics to track

```yaml
telemetry:
  metrics:
    - stream.*
```

---

::: right
\* required
:::
