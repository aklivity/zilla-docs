---
shortTitle: Exporters Logs and Metrics
---

# Exporters Logs and Metrics

Exporters will determine how the collected telemetry data is exposed. The [Prometheus](./exporters-logs-and-metrics/prometheus.md#prometheus) exporter Zilla will expose any configured metrics via the standard `/metrics` endpoint that is by prometheus to collect metrics. The [stdout](./exporters-logs-and-metrics/stdout.md#stdout) exporter will simply log all Events to the host `stdout` and can be collected by any log aggregator. The [OpenTelemetry Protocol](./exporters-logs-and-metrics/oltp.md#oltp) exporter can push both logs and metrics telemetry data to the specified.