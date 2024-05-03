# Telemetry

Zilla captures telemetry data in [metrics](#metrics) and [events](#events). The data can then be accessed by configuring [exporters](#exporters) to chose how and where to put the telemetry data.

In the `zilla.yaml` telemetry is configured at the top level to apply to the entire zilla namespace.

```yaml
telemetry:
  metrics:
    ...
  exporters:
    ...
```

## Metrics

[Metrics](../reference/config/overview.md#metrics) are separated by protocol where the `stream` metrics relate to Zilla's internal message handler. The other protocols have common metrics you would expect to find. You can try out the different metrics with the [Prometheus Intro](../tutorials/metrics/prometheus-intro.md) example.

## Events

[Events](../reference/config/telemetry/events.md) are purposely designed markers in Zilla to signal important actions and collect relevant information along with them. Primarily they are useful when troubleshooting common issues like model validation or failed secure access, but they provide more observability with the HTTP access information. The easiest way to see events in Zilla is to add the [stdout](../reference/config/telemetry/exporters/exporter-stdout.md) exporter to your `zilla.yaml` config.

## Exporters

[Exporters](../reference/config/overview.md#exporters) will determine how the collected telemetry data is exposed. The [Prometheus](../reference/config/telemetry/exporters/exporter-prometheus.md) exporter Zilla will expose any configured [metrics](../reference/config/overview.md#metrics) via the standard `/metrics` endpoint that is by prometheus to collect metrics. The [stdout](../reference/config/telemetry/exporters/exporter-stdout.md) exporter will simply log all [Events](#events) to the host `stdout` and can be collected by any log aggregator. The [Open Telemetry](../reference/config/telemetry/exporters/exporter-otlp.md) exporter can push both logs and metrics telemetry data to the specified.
