---
shortTitle: syslog
description: Zilla runtime syslog exporter
category:
  - Telemetry
tag:
  - Exporters
---

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

# Syslog Exporter

Zilla runtime Syslog exporter

```yaml {3}
exporters:
  syslog0:
    type: syslog
    options:
      host: syslog-server
      port: 514
      protocol: tcp
```

## Configuration

:::: note Properties

- [options\*](#options)
  - [options.host\*](#options-host)
  - [options.port\*](#options-port)
  - [options.protocol\*](#options-protocol)
  - [options.trust](#options-trust)
  - [options.trustcacerts](#options-trustcacerts)

::: right
\* required
:::

::::

### options

> `object`

`syslog`-specific options.

```yaml {4}
options:
  host: syslog-server
  port: 514
  protocol: tcp
```

```yaml {4}
options:
  host: syslog-server
  port: 514
  protocol: udp
```

```yaml {4}
options:
  host: syslog-server
  port: 6514
  protocol: tls
  trust:
    - syslog
```

#### options.host

> `string`

Host is the hostname of the syslog server.

#### options.port

> `integer`

Port is the port of the syslog server.

#### options.protocol

> `string`

Protocol is the protocol to use to communicate with the syslog server. Valid values are: `tcp`, `udp`, `tls`.

#### options.trust

> `array` of `strings`

The trust files to use when connecting to the syslog server. Only valid if the protocol is `tls`.

#### options.trustcacerts

> `boolean`

Specifies if the CA certs should be trusted. Only valid if the protocol is `tls`.

---

::: right
\* required
:::
