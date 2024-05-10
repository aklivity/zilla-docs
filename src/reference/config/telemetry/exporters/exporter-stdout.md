---
shortTitle: stdout
description: Zilla runtime stdout exporter
category:
  - Telemetry
tag:
  - Exporters
---

# Stdout Exporter

The Zilla runtime stdout exporter logs telemetry events to the application standard out.

```yaml
exporters:
  stdout:
    type: stdout
```

## Log Format

> <zilla namespace>:<component name> [dd/MMM/yyyy:HH:mm:ss Z] <event name> - <event body>

```output
zilla-example:north_http_server [08/May/2024:11:28:41 +0000] REQUEST_ACCEPTED - http GET example.io:80 /items
```
