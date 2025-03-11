# Kafka

Zilla supports encryption and authentication mechanisms for connecting to Kafka instances.

## Authentication Mechanisms

Zilla provides two authentication methods for Kafka:

1. **TLS/SSL with Client Certificates**: Authenticate using client certificates.
2. **SASL**: Supports PLAIN or SCRAM mechanisms for authentication.

## Data Encryption in Transport

Zilla offers the following options for encrypting data in transit when connecting to Kafka:

1. **PLAINTEXT**: No encryption.
2. **TLS/SSL**: Standard encryption using TLS/SSL.
3. **mTLS**: Mutual TLS, commonly used in Amazon MSK for two-way authentication.
