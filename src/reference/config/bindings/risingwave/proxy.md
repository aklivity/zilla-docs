---
shortTitle: proxy
---

# risingwave proxy

The risingwave proxy binding for adapting `risingwave` request-response streams.

```yaml {3}
<!-- @include: ./.partials/proxy.yaml -->
```

## Configuration (\* required)

<!-- @include: ./.partials/options.md -->
<!-- @include: ./.partials/routes.md -->

### exit\*

> `string`

Default exit binding when no conditional routes are viable.

```yaml
exit: server
```

<!-- @include: ../.partials/telemetry.md -->
