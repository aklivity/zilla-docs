---
shortTitle: cache_server
---

# kafka cache_server

The kafka cache_server binding

```yaml {3}
<!-- @include: ./.partials/cache_server.yaml -->
```

## Configuration (\* required)

### options

> `object`

`cache_server`-specific options.

```yaml
options:
  bootstrap:
    - items-requests
    - items-responses
  topics:
    - name: items-requests
      defaultOffset: live
```

#### options.bootstrap

> `array` of `string`

Topics to bootstrap in cache server even when no clients.

#### options.topics

> `array` of `object`

Topic configuration.

<!-- @include: ../.partials/options-kafka-topics.md -->

#### topics[].defaultOffset

> `enum` [ "live", "historical" ] | Default: `"historical"`

Fetch offset to use for new consumers

<!-- @include: ./.partials/routes.md -->
<!-- @include: ../.partials/exit.md -->
<!-- @include: ../.partials/telemetry.md -->
