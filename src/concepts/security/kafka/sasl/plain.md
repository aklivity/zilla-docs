---
shortTitle: plain
---

# SASL/PLAIN Mechanism

SASL/PLAIN is a straightforward authentication method that uses a username and password for client authentication. It is widely supported and easy to configure, making it a common choice for securing Kafka clusters. However, since credentials are sent in plaintext, SASL/PLAIN must always be paired with TLS/SSL encryption to ensure secure communication.

## Configuring the Connection

To connect to a Kafka client using the SASL/PLAIN mechanism, add a `sasl` object to the `options` property of the Kafka client binding in the `zilla.yml` file. The `sasl` object must include the `mechanism` property set to `plain`, along with `username` and `password` properties.

```yaml zilla.yml
bindings:
...
  south_kafka_client:
    type: kafka
    kind: client
    options:
      servers:
        - ${{env.KAFKA_BOOTSTRAP_SERVER}}
      sasl:
        mechanism: plain
        username: ${{env.SASL_USERNAME}}
        password: ${{env.SASL_PASSWORD}}
    exit: south_tls_client
  south_tls_client:
    type: tls
    kind: client
    exit: south_tcp_client
  south_tcp_client:
    type: tcp
    kind: client
```
