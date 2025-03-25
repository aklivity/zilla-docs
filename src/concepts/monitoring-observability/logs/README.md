---
shortTitle: Logs
---

# Logs

Zilla logs provide detailed event tracking for system activities, enabling better monitoring and debugging.

## Format

Each log entry contains a **timestamp**, **namespace**, **binding**, **event name**, and other relevant details.

```text
<namespace>.<binding> <timestamp> <event name> - <other details>
```

## Categories

The metrics are categorized as the following:

- [Binding](binding.md)
- [Catalog](catalog.md)
- [Guard](guard.md)
- [Model](model.md)
- [Vault](vault.md)

The metrics can be collected and exported via [exporters](/concepts/monitoring-observability/exporters-logs-and-metrics/README.md).

## Sample Event

```text
http-kafka-proxy.north_http_server [22/Nov/2024:10:28:11 +0000] BINDING_HTTP_REQUEST_ACCEPTED - POST https://localhost:7143/events
```
