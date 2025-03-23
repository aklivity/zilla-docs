# Binding

Named events from Binding that can be exported and logged.

:::: note Event Names

- [BINDING\_HTTP\_REQUEST\_ACCEPTED](#binding-http-request-accepted)
- [BINDING\_KAFKA\_API\_VERSION\_REJECTED](#binding-kafka-api-version-rejected)
- [BINDING\_KAFKA\_AUTHORIZATION\_FAILED](#binding-kafka-authorization-failed)
- [BINDING\_KAFKA\_CLUSTER\_AUTHORIZATION\_FAILED](#binding-kafka-cluster-authorization-failed)
- [BINDING\_MQTT\_CLIENT\_CONNECTED](#binding-mqtt-client-connected)
- [BINDING\_MQTT\_KAFKA\_NON\_COMPACT\_SESSIONS\_TOPIC](#binding-mqtt-kafka-non-compact-sessions-topic)
- [BINDING\_TCP\_DNS\_FAILED](#binding-tcp-dns-failed)
- [BINDING\_TLS\_HANDSHAKE\_FAILED](#binding-tls-handshake-failed)
- [BINDING\_TLS\_KEY\_REJECTED](#binding-tls-key-rejected)
- [BINDING\_TLS\_PEER\_NOT\_VERIFIED](#binding-tls-peer-not-verified)
- [BINDING\_TLS\_PROTOCOL\_REJECTED](#binding-tls-protocol-rejected)
- [BINDING\_TLS\_TLS\_FAILED](#binding-tls-tls-failed)

::::

## Logged Events

### BINDING_HTTP_REQUEST_ACCEPTED

The server received a valid HTTP request.

### BINDING_KAFKA_API_VERSION_REJECTED

A Kafka protocol API version mismatch occurred in the kafka binding.

### BINDING_KAFKA_AUTHORIZATION_FAILED

An authorization failure happened in the http, mqtt or the kafka binding.

### BINDING_KAFKA_CLUSTER_AUTHORIZATION_FAILED

A Kafka protocol API cluster authorization failed.

### BINDING_MQTT_CLIENT_CONNECTED

An MQTT session was successfully authorized and connected.

### BINDING_MQTT_KAFKA_NON_COMPACT_SESSIONS_TOPIC

The sessions topic declared in the `mqtt-kafka`is required to be log compacted.

### BINDING_TCP_DNS_FAILED

A DNS resolution failure.

### BINDING_TLS_HANDSHAKE_FAILED

A client could not negotiate the desired level of security with the server.

### BINDING_TLS_KEY_REJECTED

A client or server has a misconfiguration of the server or client SSL certificate and private key.

### BINDING_TLS_PEER_NOT_VERIFIED

A peer's identity could not be verified.

### BINDING_TLS_PROTOCOL_REJECTED

An error in the operation of the SSL protocol.

### BINDING_TLS_TLS_FAILED

A generic error detected by an SSL subsystem.
