---
redirectFrom: /reference/config/telemetry/exporters/exporter-otlp.html
shortTitle: otlp

category:
  - Telemetry
tag:
  - Exporters
---

# otlp Exporter

The Zilla runtime [OpenTelemetry Protocol](https://github.com/open-telemetry/oteps/blob/main/text/0035-opentelemetry-protocol.md) exporter publishes data to a [Collector](https://opentelemetry.io/docs/collector/).

```yaml {3}
exporters:
  otlp:
    type: otlp
    options:
      interval: 30
      signals:
        - metrics
      endpoint:
        protocol: http
        location: http://otlp-collector:4318
```

## Configuration (\* required)

### options

> `object`

`otlp`-specific options.

```yaml
options:
  interval: 30
  signals:
    - logs
    - metrics
  endpoint:
    protocol: http
    location: http://otlp-collector:4318
```

#### options.interval

> `integer` | Default: `30`

Interval in seconds to push data to the collector.

#### options.signals

> `array` of `enum` [ "logs", "metrics" ]

Specifies what signals should be exported. The default behavior is to export all supported signals.

#### options.endpoint

> `object`

Contains details for the OpenTelemetry Protocol collector endpoint.

#### endpoint.protocol

> `enum` [ "http" ] | Default: `"http"`

Specifies the protocol to use for exporting data for exporting data to the [OTEL Collector](https://opentelemetry.io/docs/collector/).

#### endpoint.location\*

> `string`

#### endpoint.overrides

> `object`

#### overrides.logs

> `string`

#### overrides.metrics

> `string`
