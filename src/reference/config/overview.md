---
description: Defines the Zilla runtime engine configuration in a zilla.yaml
---

# Zilla Runtime Configuration

The Zilla runtime configuration defines the [`bindings`](#bindings), [`guards`](#guards), [`vaults`](#vaults), [`catalogs`](#catalogs), [`stores`](#stores), and [`telemetry`](#telemetry) used by the Zilla runtime engine. The values of properties in the configuration can be literals or expression [resolvers](./resolvers.md).

> **Key:** `[Plus]` = requires Zilla Plus license. `[Incubator]` = experimental, opt-in via `ZILLA_INCUBATOR_ENABLED=true`.

```yaml {2}
---
name: zilla-namespace

bindings:
  ...

guards:
  ...

vaults:
  ...

catalogs:
  ...

stores:
  ...

telemetry:
  ...
```

## Configuration (\* required)

### name\*

> `string`

Namespace name.

### bindings

> `object` as map of named [`binding`](/concepts/protocol/README.md#bindings) properties

Each configured `binding` represents a step in the pipeline as data streams are decoded, translated, or encoded according to a specific protocol `type`.

A `binding` also has a `kind`, indicating how it should behave, such as `server`, `proxy`, or `client`.

As each incoming data stream arrives, the binding follows its configured `routes` to reach an `exit` binding, or rejects the stream if no routes are viable. Route matching conditions are defined in terms specific to each `binding` type.

#### routes.exit

> `string`

Unconditional `exit` binding acting as a default if none of the conditional routes are viable.

#### Typical Pipeline Order

Bindings are chained from outermost to innermost. A typical HTTP-Kafka stack looks like:

```text
tcp server → tls server → http server → http-kafka proxy → kafka cache_client → kafka cache_server → kafka client
```

#### Protocol Bindings

Encode or decode a single protocol.

| Type                                  | Kinds                       | Purpose                                                                               |
|---------------------------------------|-----------------------------|---------------------------------------------------------------------------------------|
| [`tcp`](./bindings/tcp/README.md)     | `server`, `client`          | Raw TCP connections. Entry point for all network traffic.                             |
| [`tls`](./bindings/tls/README.md)     | `server`, `client`, `proxy` | TLS encryption and decryption. `proxy` kind routes on SNI without terminating.        |
| [`http`](./bindings/http/README.md)   | `server`, `client`          | HTTP/1.1 and HTTP/2. `server` supports CORS and guard-enforced authorization.         |
| [`grpc`](./bindings/grpc/README.md)   | `server`, `client`          | gRPC over HTTP/2. Supports `application/grpc+proto` and `application/grpc-web+proto`. |
| [`mqtt`](./bindings/mqtt/README.md)   | `server`, `client`          | MQTT publish/subscribe. `server` produces per-topic application streams.              |
| [`sse`](./bindings/sse/README.md)     | `server`, `client`          | Server-Sent Events. Converts HTTP streams to SSE event streams.                       |
| [`ws`](./bindings/ws/README.md)       | `server`, `client`          | WebSocket. Converts HTTP upgrade requests to full-duplex streams.                     |
| [`amqp`](./bindings/amqp/README.md)   | `server`                    | AMQP 1.0. Routes on link address. `[Incubator]`                                       |
| [`pgsql`](./bindings/pgsql/README.md) | `server`, `client`          | PostgreSQL wire protocol.                                                             |

#### Bridge Bindings

Translate between two protocols, adapting streams from one side to the semantics of the other.

| Type                                                        | Kinds           | Purpose                                                                                              |
|-------------------------------------------------------------|-----------------|------------------------------------------------------------------------------------------------------|
| [`http-kafka`](./bindings/http-kafka/README.md)             | `proxy`         | Maps HTTP CRUD operations (GET, POST, PUT, DELETE) to Kafka produce and fetch.                       |
| [`grpc-kafka`](./bindings/grpc-kafka/README.md)             | `proxy`         | Adapts gRPC request-response streams to Kafka topic streams.                                         |
| [`mqtt-kafka`](./bindings/mqtt-kafka/README.md)             | `proxy`         | Adapts MQTT publish/subscribe topic streams to Kafka topic streams.                                  |
| [`sse-kafka`](./bindings/sse-kafka/README.md)               | `proxy`         | Adapts SSE data streams to Kafka data streams for server push.                                       |
| [`kafka-grpc`](./bindings/kafka-grpc/README.md)             | `remote_server` | Consumes Kafka topic streams and dispatches each message as a gRPC request.                          |
| [`http-filesystem`](./bindings/http-filesystem/README.md)   | `proxy`         | Maps HTTP GET path to a local filesystem path. Used with `filesystem` binding to serve static files. |
| [`pgsql-kafka`](./bindings/pgsql-kafka/README.md)           | `proxy`         | Adapts PostgreSQL request-response streams to Kafka topic streams.                                   |
| [`openapi-asyncapi`](./bindings/openapi-asyncapi/README.md) | `proxy`         | Adapts OpenAPI operations to AsyncAPI operations.                                                    |

#### Spec-Driven Bindings

Configured from an API specification file; internally compose multiple protocol bindings.

| Type                                        | Kinds                       | Purpose                                                                         |
|---------------------------------------------|-----------------------------|---------------------------------------------------------------------------------|
| [`openapi`](./bindings/openapi/README.md)   | `server`, `client`          | Spec-driven HTTP binding. Composes `tcp` + `tls` + `http` from an OpenAPI spec. |
| [`asyncapi`](./bindings/asyncapi/README.md) | `server`, `client`, `proxy` | Spec-driven Kafka/MQTT/HTTP binding. Composes bindings from an AsyncAPI spec.   |

#### Kafka Bindings

| Type                                              | Kinds                                    | Purpose                                                                                                                                                             |
|---------------------------------------------------|------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`kafka`](./bindings/kafka/README.md)             | `cache_client`, `cache_server`, `client` | Kafka protocol with built-in caching. `cache_client` + `cache_server` maintain a per-partition message cache; `client` encodes the Kafka request-response protocol. |
| [`kafka-proxy`](./bindings/kafka-proxy/README.md) | `proxy`                                  | Routes and fans out Kafka topic streams to Kafka topic streams. `[Plus]`                                                                                            |

#### Infrastructure Bindings

Handle transport, multiplexing, routing, and utility concerns.

| Type                                                      | Kinds                                                | Purpose                                                                                            |
|-----------------------------------------------------------|------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`filesystem`](./bindings/filesystem/README.md)           | `server`                                             | Serves files from the local filesystem. Used with `http-filesystem` proxy.                         |
| [`proxy`](./bindings/proxy/README.md)                     | `server`, `client`                                   | HAProxy PROXY v2 protocol. Preserves client IP through proxy hops.                                 |
| [`socks`](./bindings/socks/README.md)                     | `server`, `client`, `remote_server`, `remote_client` | SOCKS5 tunneling and remote port forwarding.                                                       |
| [`smux`](./bindings/smux/README.md)                       | `server`, `client`                                   | Stream multiplexing. Combines multiple application streams over a single connection.               |
| [`fan`](./bindings/fan/README.md)                         | `server`                                             | Fan-in from multiple inbound streams and fan-out to all streams in the group.                      |
| [`echo`](./bindings/echo/README.md)                       | `server`                                             | Echoes received data back to the sender. Useful for testing.                                       |
| [`schema-registry`](./bindings/schema-registry/README.md) | `proxy`                                              | Forwards Schema Registry API requests to an internal registry, namespacing subjects by cluster ID. |
| [`risingwave`](./bindings/risingwave/README.md)           | `proxy`                                              | Adapts RisingWave streaming SQL request-response streams. `[Incubator]`                            |
| [`mcp`](./bindings/mcp/README.md)                         | `server`, `client`, `proxy`                          | Model Context Protocol for AI tooling. Routes MCP client connections to upstream MCP servers.      |

### guards

> `object` as map of named [`guard`](/concepts/security/guard/README.md) properties

Each configured `guard` represents a security checkpoint for one or more bindings based on a specific implementation `type`.

Guards can be used by specific protocol bindings to enforce authorization requirements.

Associated roles can be enforced during routing by only following routes `guarded` by specific role requirements when authorized. This implicitly supports falling through to lower privilege routes when `guarded` higher privilege routes are not authorized.

| Type                                   | Purpose                                                                                 |
|----------------------------------------|-----------------------------------------------------------------------------------------|
| [`jwt`](./guards/jwt.md)               | Validates JWT bearer tokens against JWKS. Extracts roles for route authorization.       |
| [`api-keys`](./guards/api-keys.md)     | Validates API keys against a static list or a store. `[Plus]`                           |
| [`azure-ad`](./guards/azure-ad.md)     | Validates Azure Active Directory OAuth2 tokens. `[Plus]`                                |
| [`aws-lambda`](./guards/aws-lambda.md) | Delegates authorization to an AWS Lambda function. `[Plus]`                             |
| [`identity`](./guards/identity.md)     | Pass-through guard; approves all requests. Used for testing or default routes. `[Plus]` |

### vaults

> `object` as map of named [`vault`](/concepts/security/vault/README.md) properties

Each configured `vault` represents a container for digital keys and certificates based on a specific implementation `type`.

Vaults can be used by specific protocol bindings, such as `tls`, to negotiate shared encryption keys.

| Type                                     | Purpose                                                          |
|------------------------------------------|------------------------------------------------------------------|
| [`filesystem`](./vaults/filesystem.md)   | Loads certificates and keys from local files (PEM, PKCS12, JKS). |
| [`aws-acm`](./vaults/aws-acm.md)         | Loads certificates from AWS Certificate Manager. `[Plus]`        |
| [`aws-secrets`](./vaults/aws-secrets.md) | Loads secrets from AWS Secrets Manager. `[Plus]`                 |

### catalogs

> `object` as map of named [`catalog`](/concepts/data-governance/catalog/README.md) properties

Each configured `catalog` represents a catalog of schemas of various formats based on a specific implementation `type`.

Catalogs can be used by specific protocol bindings to enforce validation.

| Type                                                                   | Purpose                                                           |
|------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`inline`](./catalogs/inline.md)                                       | Schemas defined directly in `zilla.yaml`. No external dependency. |
| [`filesystem`](./catalogs/filesystem.md)                               | Schemas loaded from local files.                                  |
| [`schema-registry`](./catalogs/schema-registry.md)                     | Generic Schema Registry API endpoint.                             |
| [`confluent-schema-registry`](./catalogs/confluent-schema-registry.md) | Confluent Schema Registry. `[Plus]`                               |
| [`apicurio-registry`](./catalogs/apicurio-registry.md)                 | Apicurio Registry.                                                |
| [`karapace-schema-registry`](./catalogs/karapace-schema-registry.md)   | Karapace Schema Registry.                                         |
| [`aws-glue`](./catalogs/aws-glue.md)                                   | AWS Glue Schema Registry. `[Plus]`                                |

### stores

> `object` as map of named `store` properties

Each configured `store` provides persistent session and state storage for guards and bindings that need to track state across requests (for example, API key revocation lists or MQTT session state).

| Type                                 | Purpose                                                              |
|--------------------------------------|----------------------------------------------------------------------|
| [`memory`](./stores/memory.md)       | In-process in-memory store. Resets on restart.                       |
| [`redis`](./stores/redis.md)         | Redis-backed store. Persistent and shared across instances. `[Plus]` |
| [`hazelcast`](./stores/hazelcast.md) | Hazelcast-backed distributed store. `[Plus]`                         |

### telemetry

> `object` of [`telemetry`](/concepts/monitoring-observability/README.md) properties

```yaml
telemetry:
  attributes:
    service.namespace: example
  exporters:
    ...
  metrics:
    ...
```

#### attributes

> `object` | Default: zilla namespace [name](#name)

Default attributes to optionally include when exporting metrics.

#### exporters

> `object` as map of named [`exporter`](/concepts/monitoring-observability/exporters-logs-and-metrics/README.md) properties

Exporters ship collected metrics to an external system.

| Type                                                        | Purpose                                                                         |
|-------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`stdout`](./telemetry/exporters/stdout.md)                 | Prints metrics to standard output. Useful for local debugging.                  |
| [`prometheus`](./telemetry/exporters/prometheus.md)         | Exposes a Prometheus-compatible `/metrics` scrape endpoint.                     |
| [`otlp`](./telemetry/exporters/otlp.md)                     | Exports metrics and traces via OpenTelemetry Protocol (OTLP/gRPC or OTLP/HTTP). |
| [`aws-cloudwatch`](./telemetry/exporters/aws-cloudwatch.md) | Exports metrics to AWS CloudWatch. `[Plus]`                                     |
| [`syslog`](./telemetry/exporters/syslog.md)                 | Exports log events to a Syslog endpoint. `[Plus]`                               |

#### metrics

> `array` of `string` of named [`metrics`](/concepts/monitoring-observability/metrics/README.md)

Array of named metrics to collect at runtime.

| Group      | Reference                                 | Measures                                                  |
|------------|-------------------------------------------|-----------------------------------------------------------|
| `stream.*` | [`stream`](./telemetry/metrics/stream.md) | Opens, closes, bytes read/written per stream.             |
| `http.*`   | [`http`](./telemetry/metrics/http.md)     | Request count, response status codes, active connections. |
| `grpc.*`   | [`grpc`](./telemetry/metrics/grpc.md)     | RPC count, status codes, message rates.                   |
