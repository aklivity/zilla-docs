# SASL

The Simple Authentication and Security Layer (SASL) is a framework for authentication and data security in connection-oriented protocols. It acts as an interface between protocols and replaceable mechanisms.

Apache Kafka supports SASL for client authentication, which can be used alongside TLS/SSL encryption. Kafka supports the following SASL mechanisms:

- **GSSAPI** (Kerberos authentication)
- **OAUTHBEARER**
- **SCRAM**
- **PLAIN**
- **Delegation Tokens**
- **LDAP**

Currently, Zilla supports **SASL/PLAIN** and **SASL/SCRAM** authentication for Kafka.

:::info
For additional SASL mechanism support, share feedback on the [SASL enhancement request](https://github.com/aklivity/zilla/issues/12).
:::
