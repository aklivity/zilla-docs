---
shortTitle: OLTP
---

# OLTP

The [OpenTelemetry Protocol (OTLP)](https://github.com/open-telemetry/oteps/blob/main/text/0035-opentelemetry-protocol.md) exporter in Zilla publishes logs and metrics to an [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/), enabling integration with observability platforms. It allows configuration of the data publishing interval, signal type, and endpoint for flexible telemetry management.

```yaml {3}
<!-- @include: ./.partials/oltp.yaml -->
```

## Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/oltp-options.md -->

:::
