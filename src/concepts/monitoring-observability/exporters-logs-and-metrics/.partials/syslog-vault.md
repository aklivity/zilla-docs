### vault

> `string`

Vault name. Only applicable if the protocol is `tls`.

#### Examples

Example of syslog with vault.

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