# TLS

Zilla supports multiple options for securing Kafka connections: **plaintext**, **TLS/SSL**, and **mTLS**.

## Plaintext Kafka

To connect to Kafka using the **PLAINTEXT** protocol, define a Kafka client binding that connects directly to a TCP client:

```yaml zilla.yaml
bindings:
  south_kafka_client:
    type: kafka
    kind: client
    options:
      servers:
        - ${{env.KAFKA_BOOTSTRAP_SERVER}}
    exit: south_tcp_client
  south_tcp_client:
    type: tcp
    kind: client
```

## Kafka Over TLS/SSL

If the Kafka cluster uses a TLS server certificate issued by a **public certificate authority**, configure Zilla with a TLS client binding and set `trustcacerts` to `true`:

```yaml
bindings:
  south_kafka_client:
    type: kafka
    kind: client
    options:
      servers:
        - ${{env.KAFKA_BOOTSTRAP_SERVER}}
    exit: south_tls_client
  south_tls_client:
    type: tls
    kind: client
    exit: south_tcp_client
  south_tcp_client:
    type: tcp
    kind: client
```

For Kafka clusters using a **private certificate authority**, add a `vault` configuration to provide the necessary certificates:

```yaml
vaults:
  client_vault:
    type: filesystem
    options:
      trust:
        store: ${{env.TRUSTORE_PATH}}
        type: ${{env.STORE_TYPE}}
        password: ${{env.TRUSTORE_PASSWORD}}
bindings:
  south_kafka_client:
    type: kafka
    kind: client
    options:
      servers:
        - ${{env.KAFKA_BOOTSTRAP_SERVER}}
    exit: south_tls_client
  south_tls_client:
    type: tls
    kind: client
    vault: client_vault
    options:
      trust:
        - ${{env.CA_CERT_ALIAS}}
    exit: south_tcp_client
  south_tcp_client:
    type: tcp
    kind: client
```

## Kafka Over TLS/SSL with Client Authentication

Prepare the following:

- `truststore.p12`: Contains trusted server certificates or certificate authorities.
- `keystore.p12`: Contains signed client certificates.

Configure a `vault` with `truststore` and `keystore`, then reference it in the `south_tls_client` binding:

```yaml
vaults:
  client_vault:
    type: filesystem
    options:
      trust:
        store: ${{env.TRUSTORE_PATH}}
        type: ${{env.TRUSTORE_TYPE}}
        password: ${{env.TRUSTORE_PASSWORD}}
      keys:
        store: ${{env.KEYSTORE_PATH}}
        type: ${{env.KEYSTORE_TYPE}}
        password: ${{env.KEYSTORE_PASSWORD}}
bindings:
  south_kafka_client:
    type: kafka
    kind: client
    options:
      servers:
        - ${{env.KAFKA_BOOTSTRAP_SERVER}}
    exit: south_tls_client
  south_tls_client:
    type: tls
    kind: client
    vault: client_vault
    options:
      trust:
        - ${{env.CA_CERT_ALIAS}}
      keys:
        - ${{env.SIGNED_CLIENT_CERT_ALIAS}}
    exit: south_tcp_client
  south_tcp_client:
    type: tcp
    kind: client
```

## Amazon MSK Over mTLS

**mTLS** ensures mutual authentication by verifying both parties' private keys and TLS certificates. For detailed steps on authenticating to Amazon MSK with mTLS, refer to [this guide](../../../solutions/how-tos/amazon-msk/secure-public-access/production-mutual-tls.md).
