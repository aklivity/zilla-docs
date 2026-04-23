---
redirectFrom: /reference/config/telemetry/exporters/exporter-syslog.html
shortTitle: syslog
category:
  - Telemetry
  - Exporters
tag:
  - syslog
---

# syslog Exporter

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

Zilla runtime Syslog exporter

```yaml {3}
exporters:
  syslog:
    type: syslog
    options:
      host: syslog-server
      port: 514
      protocol: tcp
```

with vault:

```yaml {11}
vaults:
  my_syslog_trust:
    type: filesystem
    options:
      trust:
        store: truststore.p12
        type: pkcs12
        password: generated
exporters:
  syslog:
    type: syslog
    vault: my_syslog_trust
    options:
      host: syslog-server
      port: 6514
      protocol: tls
      trust:
        - syslog
```

## Configuration (\* required)

### options

> `object`

The `syslog` specific options.

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

#### options.host\*

> `string`

The hostname of the syslog server.

#### options.port\*

> `integer`

The port of the syslog server.

#### options.protocol\*

> `enum` [ `udp`, `tcp`, `tls` ]

The protocol to use to communicate with the syslog server.
