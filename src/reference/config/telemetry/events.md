---
shortTitle: Events
description: Zilla runtime telemetry events
category:
  - Telemetry
tag:
  - Events
---

# Telemetry Events

Named events from Zilla that can be exported and logged.

:::: note Properties

- [Catalog Errors](#catalog-errors)
- [Guard Errors](#guard-errors)
- [HTTP Access](#http-access)
- [Kafka Errors](#kafka-errors)
- [Model Errors](#model-errors)
- [TCP Errors](#tcp-errors)
- [TLS Errors](#tls-errors)

::::

## Logging Event Types

### Catalog Errors

> FILE_NOT_FOUND :location

No file was found at the specified location.

> REMOTE_ACCESS_REJECTED :method :url :status

A remote access error happened in the schema registry catalog.

### Guard Errors

> AUTHORIZATION_FAILED :identity

A client failed authorization for a Guarded route.

### HTTP Access

> REQUEST_ACCEPTED :identity :scheme :method :authority :path

A successful HTTP request.

### Kafka Errors

> AUTHORIZATION_FAILED :identity

An authorization failure happened in the http, mqtt or the kafka binding.

> API_VERSION_REJECTED :apiKey :apiVersion

An API version mismatch occurred in the kafka binding.

### Model Errors

> VALIDATION_FAILED :error

A payload did not have the required model schema.

### TCP Errors

> DNS_FAILED :address

A DNS resolution failure.

### TLS Errors

> TLS_FAILED

A general `SSLException` occurred.

> PROTOCOL_REJECTED

A `SSLProtocolException` occurred.

> KEY_REJECTED

A `SSLKeyException` occurred.

> PEER_NOT_VERIFIED

A `SSLPeerUnverifiedException` occurred.

> HANDSHAKE_FAILED

A `SSLHandshakeException` occurred.
