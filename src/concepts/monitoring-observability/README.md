# Monitoring & Observability

Zilla captures telemetry data in metrics and events. The data can then be accessed outside of Zilla by configuring exporters to chose how and where to see the telemetry data.

```yaml
telemetry:
  metrics:
    - http.duration
  exporters:
    stdout_logs_exporter:
      type: stdout
```

## Telemetry Data Types

### Metrics

[Metrics](./metrics/README.md) are separated by protocol where the `stream` metrics relate to Zilla's internal message handler. The other protocols have common metrics you would expect to find. The [zilla metrics](../../reference/config/zilla-cli.md#zilla-metrics) command can be used to see the raw metrics that Zilla has collected.

### Events

[Events](/concepts/monitoring-observability/logs/README.md) in Zilla signal important activities and collect relevant information along with them. Primarily they are useful when troubleshooting common issues like model validation or failed secure access, but they provide more observability with the HTTP access information. The easiest way to see logged events in Zilla is to add the [stdout](./exporters-logs-and-metrics/stdout.md) exporter to your `zilla.yaml` config.

## Exporters

[Exporters](./exporters-logs-and-metrics/README.md) will determine how the collected telemetry data is exposed. The [Prometheus](./exporters-logs-and-metrics/prometheus.md) exporter Zilla will expose any configured [metrics](./metrics/README.md) via the standard `/metrics` endpoint that is by prometheus to collect metrics. The [stdout](./exporters-logs-and-metrics/stdout.md) exporter will simply log all [Events](#events) to the host `stdout` and can be collected by any log aggregator. The [OpenTelemetry Protocol](./exporters-logs-and-metrics/oltp.md) exporter can push both logs and metrics telemetry data to the specified.
