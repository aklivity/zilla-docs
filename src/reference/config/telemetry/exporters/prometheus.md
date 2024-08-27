---
redirectFrom: /reference/config/telemetry/exporters/exporter-prometheus.html
shortTitle: prometheus

category:
  - Telemetry
tag:
  - Exporters
---

# prometheus Exporter

Zilla runtime prometheus exporter

```yaml {3}
exporters:
  prometheus:
    type: prometheus
    options:
      endpoints:
        - scheme: http
          port: 7190
          path: /metrics
```

## Configuration (\* required)

### options

> `object`

`prometheus`-specific options.

```yaml
options:
  endpoints:
    - scheme: http
      port: 7190
      path: /metrics
```

#### options.endpoints

> `array` of `object`

Contains `prometheus` endpoints.

#### endpoints[].scheme

> `enum` [ "http" ]

URL scheme to accept for endpoint.

#### endpoints[].port

> `int`

URL port to accept for endpoint.

#### endpoints[].path

> `string`

URL path to accept for endpoint.