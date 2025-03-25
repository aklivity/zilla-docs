---
shortTitle: Prometheus
---

# Prometheus

The Prometheus exporter in Zilla exposes configured metrics through the standard `/metrics` endpoint, allowing Prometheus to collect and store time-series data. This enables real-time monitoring, visualization, and alerting based on the application's performance metrics.

```yaml {3}
<!-- @include: ./.partials/prometheus.yaml -->
```

## Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/prometheus-options.md -->

:::
