---
shortTitle: scram
---

# SASL/SCRAM Mechanism

SASL/SCRAM (Salted Challenge Response Authentication Mechanism) is a more secure authentication method compared to SASL/PLAIN. It avoids transmitting plaintext passwords by using a challenge-response mechanism and incorporates salting to protect against replay attacks. SCRAM is ideal for environments requiring stronger security without relying on external systems like Kerberos.

## Configuring the Connection

To connect to a Kafka client using the SASL/SCRAM mechanism, add a `sasl` object to the `options` property of the Kafka client binding in the `zilla.yml` file. The `sasl` object must include the `mechanism` property set to `scram-sha-256`, along with `username` and `password` properties.

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
        mechanism: scram-sha-256
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
