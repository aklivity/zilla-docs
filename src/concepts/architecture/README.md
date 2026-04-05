---
title: Zilla Architecture
shortTitle: Architecture
description: An overview of how Zilla works as a multi-protocol edge and service proxy for event-driven architectures.
---

# Architecture

Zilla is a cloud-native gateway that bridges diverse client protocols to Apache Kafka. Clients use familiar protocols — HTTP, MQTT, gRPC, WebSocket — while Zilla handles Kafka translation transparently.

<div class="dark-only">
  <img src="/assets/zilla-overview-new.gif" data-duration="2000" alt="Zilla Overview" class="freeze-after-play"/>
</div>

<div class="light-only">
  <img src="/assets/zilla-overview-new-light.gif" data-duration="2000" alt="Zilla Overview" class="freeze-after-play"/>
</div>

## How It Works

Zilla routes traffic through a declarative graph of **bindings** — pipeline stages that decode, transform, and re-encode protocol frames. Each binding has a network side and an application side, allowing protocol translation without exposing Kafka internals to clients.

Traffic flows as streams with a unified frame shape: a `BEGIN` frame to open, one or more `DATA` frames, and an `END` or `ABORT` frame to close. `WINDOW` frames manage backpressure; protocol-specific metadata attaches as extensions (e.g. `HttpBeginEx`, `MqttBeginEx`, `KafkaBeginEx`).

## Module Types

Zilla is composed of seven extensible module types:

<div class="zp-module-table">

| Module        | Role                                                          | Example                                            |
|---------------|---------------------------------------------------------------|----------------------------------------------------|
| **Bindings**  | Protocol pipeline stages — servers, clients, mappings, caches | `http_server`, `kafka_cache_client`, `mqtt_server` |
| **Guards**    | Identity verification and access control                      | `jwt`                                              |
| **Vaults**    | Cryptographic key and certificate storage                     | `filesystem`, `aws_secrets`                        |
| **Catalogs**  | API spec retrieval for schema-driven message definitions      | `apicurio`, `confluent`, `aws_glue`                |
| **Models**    | Message validation and format conversion                      | `avro`, `json`                                     |
| **Metrics**   | Telemetry collection                                          | `stream`                                           |
| **Exporters** | Integration with Prometheus, OpenTelemetry, and others        | `prometheus`, `otlp`, `stdout`                     |

</div>

## Scaling

**Vertical**: One worker thread per CPU core, each running in isolated single-threaded context. Lock-free data structures minimize cross-core contention. Large messages are fragmented to avoid blocking smaller ones. TLS math offloads to secondary cores.

**Horizontal**: Zilla nodes are stateless. Multiple instances independently hydrate their Kafka caches from the same topics with no coordination overhead, enabling scale-out to millions of concurrent connections.

## Observability

Zilla includes always-on binary tracing through passive work queue observation — no performance impact in production. Metrics and structured log events are exported to Prometheus, OpenTelemetry, AWS CloudWatch, or stdout.

::: tip Ready to deploy?
Jump to the [Quickstart](../../getting-started/quickstart/index.md) guide to get Zilla running in minutes.
:::
