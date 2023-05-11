---
shortTitle: telemetry (exporters)
description: Zilla runtime telemetry exporters
category:
  - Telemetry
tag:
  - Exporters
---

# Exporters

Description

## Configuration

:::: note Properties

- [type\*](#type)
  - [prometheus](#prometheus)
    - [prometheus.options](#prometheus-options)


::: right
\* required
:::

::::

## exporters

named objects

### type\*

> `enum` \[\
> ["prometheus"](#prometheus),\
> \]


#### prometheus

```yaml {3}
exporters:
  prometheus0:
    type: prometheus
    options:
      endpoints:
        - scheme: http
          path: /metrics
          port: 9090
```

##### prometheus.options

---

::: right
\* required
:::
