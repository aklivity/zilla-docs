# Zilla Plus 1.x

Zilla Plus is Aklivity's enterprise product for deploying and operating production API and event streaming gateways. This page summarizes the notable additions, changes, and fixes in each 1.x release. It is not an exhaustive log of every merged pull request.

---

## 1.4.1

**Release Date:** July 21, 2026

### Added

- Kafka Proxy: SASL/OAUTHBEARER support for `internal.authorization`, in addition to the existing `external.authorization` support.

### Fixed

- Kafka Proxy: Fetch responses now resolve the topic model by the external (aliased) topic name instead of the internal one.

---

## 1.4.0

**Release Date:** July 20, 2026

### Added

- New `aws-cognito` guard, validating AWS Cognito JWTs via OIDC discovery.
- Kafka Proxy: SASL/OAUTHBEARER termination for external client connections, usable with any guard, including the new `aws-cognito` guard.
- Kafka Proxy: per-client topic aliasing (`topics[].alias`), rewriting the internal topic name from a guard's established identity or attributes, with coverage across all supported Kafka APIs.
- `zilla logs` command, for checking engine event readiness.

### Fixed

- Kafka client no longer rejects a cache fetch when the partition leader isn't known yet.
- Several Kafka Proxy protocol-framing fixes, including cached response-length adjustment, varint padding for KIP-482 tagged fields, per-binding API version narrowing at decode time, and Fetch v12 framing when all records are rejected.

---

## 1.3.8

**Release Date:** July 9, 2026

### Fixed

- Immediate retry on Kafka client metadata refresh failure.
- Kafka client binding now exports telemetry events.

---

## 1.3.6

**Release Date:** May 15, 2026

### Added

- `guard-oauth`: OAuth guard supporting token-exchange, client-credentials, and JWT-bearer grants.
- Radix option added to `kafka-proxy` address configuration.
- Stream-driven destination routing for the `http` binding, deriving the proxy target from the `:authority` header.
- New `sys:` system namespace with built-in egress bindings (`sys:http_client`, `sys:tls_client`, `sys:tcp_client`).

### Fixed

- `kafka.response.bytes` attribute resolution when both `type` and `error_code` are configured.

---

## 1.3.2

**Release Date:** April 21, 2026

### Added

- `kafka-proxy`-specific metrics delivered with arbitrary attributes.
- Configuration syntax for metrics with arbitrary attributes, with enhanced metric resolution for raw protocol bindings.

---

## 1.2.1

**Release Date:** April 9, 2026

### Added

- `aws-secrets` vault: auto-probe for newly created secrets.

### Fixed

- `PlatformResolver` updated to pick up the current token file name.

---

## 1.2.0

**Release Date:** April 7, 2026

### Changed

- Upgraded to JDK 25 and Agrona 2.4.0.

### Fixed

- OTLP exporter no longer crashes when an event message contains double quotes.

---

## 1.1.5

**Release Date:** April 4, 2026

### Added

- `aws-secrets` vault: support for an environment tag filter during secret discovery.
- Support for `zilla start ... --diagnostics-directory` to capture engine state.

### Fixed

- Gateway ID is now persistent across restarts.
- Kafka cache segment cleanup and event log cleanup.

---

## 1.1.4

**Release Date:** March 27, 2026

### Added

- Logging for authentication errors in the Kafka client binding.

---

## 1.1.1

**Release Date:** March 26, 2026

### Added

- Support for a `platform` config URL expression.

---

## 1.1.0

**Release Date:** March 24, 2026

### Added

- Helm chart for deploying Zilla Plus to Amazon EKS.
- Kafka cluster policies, including the remaining Kafka constraints.
- Support for `BOOTSTRAP_TOKEN_FILE` and `BOOTSTRAP_TOKEN_FILE_ENV_VAR`.

### Fixed

- External authentication no longer unintentionally triggers internal authentication; missing client proxy `beginEx` fixed.
- Connection leak in the HTTP/1.1 client.

---

## 1.0.6

**Release Date:** March 17, 2026

### Fixed

- Kafka produce idle timeout issue.
- HTTP/1.1 keep-alive stall after a 400 error response reset.

---

## 1.0.5

**Release Date:** March 15, 2026

### Added

- Enhanced the `dump` command to support explicit initial offsets and advance beyond padding to reach the last record.

### Fixed

- HTTP/1.1 response reset handling when a request is reset.

---

## 1.0.4

**Release Date:** March 11, 2026

### Added

- Schema Registry proxy support.
- Gateway syntax for Kafka topic policies.

### Fixed

- HTTP/1.1 request flow control sequence issue.
- `NullPointerException` in `KafkaClientDescribeFactory` when a broker returns partial configs.

---

## 1.0.3

**Release Date:** March 10, 2026

### Fixed

- HTTP/1.1 server binding flow control issue affecting `GET` echo.

---

## 1.0.2

**Release Date:** March 6, 2026

### Fixed

- Null binding issue during connection accept.

---

## 1.0.1

**Release Date:** March 6, 2026

### Fixed

- `IllegalStateException` the engine could trigger during shutdown.
- Potential `NullPointerException` for a rejected HTTP/1.1 request with content.
- The engine no longer accepts new TCP connections while shutting down.
