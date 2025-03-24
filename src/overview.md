---
shortTitle: Overview
description: Zilla is a multi-protocol edge and service proxy that helps streamline, secure, and manage event-driven architectures. This article highlights the core concepts of Zilla and give overall overview of Zilla documentation.
breadcrumb: false
---

# Overview

Zilla is a multi-protocol edge and service proxy designed to streamline, secure, and manage event-driven architectures (EDAs). It addresses the challenge of EDAs, where services are decoupled and communicated via multiple protocols. It also simplifies EDAs by replacing custom code, Kafka Connect®, MQTT brokers, and other middleware reducing the DevOps burden and architectural complexity. It acts as an AsyncAPI Kafka gateway, offering advanced protocol mediation, particularly for Kafka.

<div class="dark-only">
  <img src="/assets/zilla-overview-new.gif" data-duration="2000" alt="Zilla Overview" class="freeze-after-play"/>
</div>

<div class="light-only">
  <img src="/assets/zilla-overview-new-light.gif" data-duration="2000" alt="Zilla Overview" class="freeze-after-play"/>
</div>

As a middleware, Zilla enforces authentication, validates schemas, gathers metrics, and terminates TLS. Additionally, Zilla is stateless, cloud-native, highly memory efficient, and supports various network and application protocols, including HTTP, Kafka, SSE, MQTT, gRPC, and WebSocket (additional protocols are on the way). When deployed as an edge proxy, it scales horizontally to support millions of concurrently connected clients.

## Key Concepts

<div class="overview_cards">
  <VPCard
    title="Protocol"
    logo="/assets/icons/protocol.svg"
    link="./concepts/protocol/README.md"
  />

  <VPCard
    title="Proxy"
    logo="/assets/icons/proxy.svg"
    link="./concepts/proxy/http/README.md"
  />

  <VPCard
    title="Data Governance"
    logo="/assets/icons/data governance.svg"
    link="./concepts/data-governance/catalog/README.md"
  />

  <VPCard
    title="Monitoring & Observability"
    logo="/assets/icons/monitoring.svg"
    link="./concepts/monitoring-observability/metrics/README.md"
  />

  <VPCard
    title="Scalability"
    logo="/assets/icons/scalability.svg"
    link="/concepts/scalability/autoscaling.md"
  />

  <VPCard
    title="Security"
    logo="/assets/icons/security.svg"
    link="./concepts/security/kafka/README.md"
  />

  <VPCard
    title="API Specifications"
    logo="/assets/icons/bring your own.svg"
    link="./concepts/api-specifications/asyncapi.md"
  />
</div>

## Who Zilla is for?

- **Data platform/ Kafka engineers** who want to share Kafka cluster with other teams or who want to simplify event-streaming integration between various protocols.
- **Application developers** who want to build applications on top of real-time data streams but do not have Kafka expertise.
- **API architects** who want to build functionality via AsyncAPI schemas.

::: info Just want to build?
Jump to the [quickstart](./getting-started/quickstart/index.md) guide.
:::

## Zilla Community Edition vs Zilla Plus Enterprise Edition

**Zilla CE** is under the Aklivity Community License. This open-source license gives the freedom to deploy, modify, and run Zilla as needed, as long as it is not turned into a standalone commercialized “Zilla-as-a-service” offering. A commercial version of Zilla (“**Zilla Plus EE**”) is available, which includes additional enterprise integrations and support. For more information, please visit the [Zilla Plus EE](https://www.aklivity.io/products/zilla-plus) product page.
