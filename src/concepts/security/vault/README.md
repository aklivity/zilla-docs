# Vault

Zilla [Vault](../../../reference/config/overview.md#vaults) is a configuration object representing a container for digital keys and certificates based on a specific implementation type. Specific protocol bindings, such as [tls](../../../reference/config/bindings/tls/README.md), can use it to negotiate shared encryption keys.

## Usage Example

Using a [filesystem](./filesystem.md) vault, a pkcs12 certificate is configured to be stored securely by the Zilla runtime. This Keystore then is used by [tls](../../../reference/config/bindings/tls/README.md) binding for traffic encryption. The TLS binding will use `keys` as the certificate aliases and use the Server Name Indication (SNI) as the SSL server name.

```yaml
---
name: zilla-namespace

vaults:
  my_servers:
    type: filesystem
    options:
      keys:
        store: tls/localhost.p12
        type: pkcs12
        password: ${{env.KEYSTORE_PASSWORD}}

bindings:
  tcp_server:
    type: tcp
    kind: server
    options:
      host: 0.0.0.0
      port:
        - 80
        - 443
    routes:
        - when:
            - port: 80
          exit: http_server
        - when:
            - port: 443
          exit: tls_server
  tls_server:
    type: tls
    kind: server
    vault: my_servers
    options:
      keys:
        - my_server.com
      sni:
        - my_server.com
    exit: http_server
```
