### options*

> `object`

| Property | Type | Description |
| -- | -- | -- |
| options.host* |  `string` |  The hostname of the syslog server. | 
| options.port* |  `integer` |  The port of the syslog server. | 
| options.protocol* |  `enum` [ `tcp`, `udp`, `tls` ] | Default: `tcp` |  The protocol to use to communicate with the syslog server. Valid values are: `tcp`, `udp`, `tls`. | 
| options.trust |  `string[]` |  Keys in the vault referenced on the binding (e.g. a filesystem vault for a local pkcs12 keystore or an AWS vault for remote pem format certificates stored in AWS secrets manager). Only valid if the protocol is `tls`. | 
| options.trustcacerts |  `boolean` |  Specifies if the CA certs should be trusted. Only valid if the protocol is `tls`. | 

#### Examples

The `syslog` specific options.

```yaml {4}
options:
  host: syslog-server
  port: 6514
  protocol: tls
  trust:
    - syslog
```