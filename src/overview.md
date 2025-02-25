---
shortTitle: Overview
description: Zilla is a multi-protocol edge and service proxy that helps streamline, secure, and manage event-driven architectures. This article highlights the core concepts of Zilla and give overall overview of Zilla documentation.
breadcrumb: false
---

# Overview

Zilla is a multi-protocol edge and service proxy designed to streamline, secure, and manage event-driven architectures (EDAs). It addresses the challenge of EDAs, where services are decoupled and communicated via multiple protocols. It also simplifies EDAs by replacing custom code, Kafka Connect®, MQTT brokers, and other middleware reducing the DevOps burden and architectural complexity. It acts as an AsyncAPI Kafka gateway, offering advanced protocol mediation, particularly for Kafka.

![Zilla Overview](/assets/zilla-overview-new.gif)

As a middleware, Zilla enforces authentication, validates schemas, gathers metrics, and terminates TLS. Additionally, Zilla is stateless, cloud-native, highly memory efficient, and supports various network and application protocols, including HTTP, Kafka, SSE, MQTT, gRPC, and WebSocket (additional protocols are on the way). When deployed as an edge proxy, it scales horizontally to support millions of concurrently connected clients.

::: info Just want to build?
Jump to the [quickstart](./how-tos/quickstart/index.md) guide.
:::

## Who Zilla is for?

- **Data platform/Kafka integration engineers** who are tasked with reliably, securely, and accessibly exposing a Kafka cluster to internal and/or external teams.
- **Application developers** who do not have Kafka expertise but want/need to build applications on top of real-time data streams.
- **API architects** who want to drive business functionality via their AsyncAPI schemas.

## Core Concepts

<div class="overview_cards">
  <VPCard
    title="Protocol"
    logo="/assets/icons/protocol.svg"
    link="./concepts/protocol.md"
  />

  <VPCard
    title="Proxy"
    logo="/assets/icons/proxy.svg"
    link="#"
  />

  <VPCard
    title="Data Governance"
    logo="/assets/icons/data governance.svg"
    link="#"
  />

  <VPCard
    title="Monitoring & Observability"
    logo="/assets/icons/monitoring.svg"
    link="#"
  />

  <VPCard
    title="Scalability"
    logo="/assets/icons/scalability.svg"
    link="#"
  />

  <VPCard
    title="Security"
    logo="/assets/icons/security.svg"
    link="#"
  />

  <VPCard
    title="Bring Your Own Spec"
    logo="/assets/icons/bring your own.svg"
    link="#"
  />
</div>

## Zilla vs <ZillaPlus />

Zilla is under the Aklivity Community License. This open-source license gives the freedom to deploy, modify, and run Zilla as needed, as long as it is not turned into a standalone commercialized “Zilla-as-a-service” offering. A commercial version of Zilla (<ZillaPlus/> “Zilla Plus”) is available, which includes additional enterprise integrations and support. For more information, please visit the [<ZillaPlus/>](https://www.aklivity.io/products/zilla-plus) product page.

| Capability                                                             | <ZillaPlus/> for Enterprise          | Zilla Open Source       |
| ---------------------------------------------------------------------- | ------------------------------------- | ----------------------- |
| Web Streaming \| HTTP+SEE to Kafka Proxying                            | ✅                                    | ✅                      |
| IoT Ingest and Control \| MQTT to Kafka Proxying                       | ✅                                    | ✅                      |
| Event Mesh \| gRPC to Kafka Proxying                                   | ✅                                    | ✅                      |
| Secure Public Access \| for Amazon MSK and Confluent Cloud             | ✅                                    | -                       |
| Security \| JWT auth, SSL/TLS via AWS PCA, secrets via Secrets Manager | ✅                                    | JWT client auth only    |
| Logging \| Stdout, Syslog, AWS CloudWatch                              | ✅                                    | Stdout only             |
| Monitoring \| Prometheus exporter                                      | ✅                                    | ✅                      |
| Schema Registry Integrations \| Confluent SR, Karapace, AWS Glue       | ✅                                    | Karapace only           |
| API Registry Support \| Apicurio                                       | ✅                                    | ✅                      |
| AsyncAPI Support \| for validation and configuration                   | ✅                                    | ✅                      |
| OpenAPI Support \| for validation and configuration                    | ✅                                    | ✅                      |
| Deployment                                                             | CloudFormation, Terraform, K8s        | Homebrew, Docker, K8s   |
| Support                                                                | Dedicated Enterprise support with SLA | Community Slack Channel |
