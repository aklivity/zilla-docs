---
shortTitle: Exporters Logs and Metrics
---

# Exporters Logs and Metrics

Exporters in Zilla determine how collected telemetry data, such as logs and metrics, is exposed and transmitted to external systems for monitoring and analysis. They enable seamless integration with observability tools by formatting and delivering data to specific endpoints.

Examples of Zilla exporters:

- [**Prometheus Exporter**](./prometheus.md#prometheus): Exposes metrics via the `/metrics` endpoint for Prometheus to collect.
- [**Stdout Exporter**](./stdout.md#stdout): Logs all events to standard output (`stdout`) for collection by log aggregators.
- [**OpenTelemetry Protocol (OTLP) Exporter**](./oltp.md#oltp): Pushes logs and metrics telemetry data to OpenTelemetry-compatible backends.
