---
shortTitle: Overview
description: Zilla is a multi-protocol edge and service proxy that helps streamline, secure, and manage event-driven architectures. This article highlights the core concepts of Zilla and give overall overview of Zilla documentation.
breadcrumb: false
---

# Overview

## Zilla: The Multi-Protocol Maestro

Zilla is a multi-protocol edge and service proxy that helps streamline, secure, and manage event-driven architectures. It is meant to be deployed alongside event-driven applications and services to enforce authentication, validate schemas, gather metrics, and terminate TLS. Additionally, Zilla has advanced protocol meditation capabilities, particularly to and from Kafka.

Zilla is stateless, cloud-native, highly memory efficient, and supports various network and application protocols, including HTTP, Kafka, SSE, MQTT, gRPC, and WebSocket (additional protocols are on the way). When deployed as an edge proxy, it scales horizontally to support millions of concurrently connected clients.

![Zilla Overview](/zilla-overview.png)

::: info Just want to build?
Jump to the [quickstart](../how-tos/quickstart/index.md) guide.
:::

### Why Zilla?

Some of the hardest operational challenges inside distributed architectures relate to networking and observability. As a result, edge and service proxies are required to achieve resilient, transparent, and properly routed connectivity among distributed services.

While solutions such as Envoy, HAProxy, NGINX, etc. can help unify a distributed data plane, they are designed for “mesh” deployments in which services are directly interconnected and communicate almost exclusively over HTTP. Inside event-driven architectures (EDAs) though, services are separated by an event/message broker, and multiple protocols are present. This decoupled and multi-protocol nature of EDAs presents a new class of networking, observability, and security challenges that the Zilla proxy is designed to address.

### Zilla Benefits

Zilla helps streamline, secure, and manage event-driven architectures. As an AnsycAPI Kafka gateway, it replaces custom code, Kafka Connect®, MQTT brokers, and other integration middleware. With Zilla, teams save time, reduce DevOps burden, and remove complexity from their architectures.

#### Who Zilla is for?

- **Data platform/Kafka integration engineers** who are tasked with reliably, securely, and accessibly exposing a Kafka cluster to internal and/or external teams.
- **Application developers** who do not have Kafka expertise but want/need to build applications on top of real-time data streams.
- **API architects** who want to drive business functionality via their AsyncAPI schemas.

![With and Without Zilla](/before-after-zilla.svg)

## Learn the Key Concepts

### Protocol Support

Zilla provides vast protocol support, including filesystem, gRPC, HTTP, Kafka, MQTT, SSE, TCP, TLS, dan Websocket (WS).

### Proxy

Inside Zilla, every protocol, whether it is TCP, TLS, HTTP, Kafka, gRPC, etc., is treated as a stream, so mapping between protocols simplifies to mapping protocol-specific metadata. Currently, we support proxying from and to Kafka, HTTP/2, SSE, MQTT, dan gRPC.

### Data Governance

For data governance, such as message schema and validation, Zilla utilize the concept of Catalog and Model.

A catalog provides Zilla bindings with schemas, specs, and other files needed to implement the binding. For example, schema models are used to validate messages brokered by Zilla. Each configured [`catalog`](./reference/config/overview.md#catalogs) represents a resource for referencing versioned assets. Zilla supports importing catalogs from various sources, such as Apicurio Registry, Filesystem, Inline, Karapace Schema Registry, AWS Glue (<ZillaPlus/>), and Confluent Schema Registry (<ZillaPlus/>). These support make configuring Zilla more agnostic to specific API and Model design.

A [`model`](./reference/config/models/) adds the type syntax or structure definitions that Zilla needs to deserialize the remaining message parts. Zilla supports several data type for data model, including Avro, JSON, Protobuf, `string`, `int32`, `int64`, `double`, and `float`. A model definition can include a reference to catalogs.

### Monitoring & Observability

Zilla captures telemetry data in `metrics`, `events`, and `logs`. The data can be accessed outside of Zilla by configuring `exporters` to chose how and where to see the telemetry data. Zilla exposes Prometheus metrics endpoint that can be collected by Prometheus collector and AWS Cloudwatch (<ZillaPlus/>). Zilla prints logs into the configured location between `stdout`, OpenTelemetry Protocol (OLTP), and `syslog` (<ZillaPlus/>).

### Scalability

Due to Zilla's stateless nature, Zilla instance can be scaled easily by increasing the amount of Zilla instances. Zilla autoscaled configuration can be achieved with K8s setup.

### Security

Zilla ensures security in several forms, such as Kafka connection, Guard, Vault, Threat Protection, and Resolvers.

- For Kafka connection, Zilla support SASL (PLAIN and SCRAM) for authentication and TLS for encryption.
- Zilla Guard represents a security checkpoint for one or more bindings and can be used to enforce authorization. This is implemented with supports for JWT-based authorization for REST, SSE, and MQTT endpoints/ services.
- Zilla Vault represents a container for digital keys and certificates based on a specific implementation `type`, including filesystem, AWS ACM (<ZillaPlus/>), and AWS Secrets (<ZillaPlus/>).
- Zilla provides threat protection support with the integration of AWS Shield Advanced (<ZillaPlus/>).
- Resolvers are a variable syntax for executing Zilla runtime functions that insert dynamic values into the `zilla.yaml`. Zilla supports resolving variables from environment variables and AWS Secrets Manager (<ZillaPlus/>).

### Bring Your Own Spec (Zilla Exclusive)

Zilla can leverage standard API schema specifications to configure the settings that define common API interfaces, including OpenAPI and AsyncAPI specification. Zilla will use the details specified in the API spec with sensible defaults to reuse the existing design and reduce complexity.

## Zilla vs <ZillaPlus />

Zilla is made available under the Aklivity Community License. This open-source license gives the freedom to deploy, modify, and run Zilla as needed, as long as it is not turned into a standalone commercialized “Zilla-as-a-service” offering. Running Zilla in the cloud for any workload, whether production or not, is fine.

A commercial version of Zilla (<ZillaPlus/> “Zilla Plus”) is available, which includes additional enterprise integrations and support. Secure Public Access is a <ZillaPlus/>-only supported use case. For more information, please visit the [<ZillaPlus/>](https://www.aklivity.io/products/zilla-plus) product page.

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

## What's Next?

### Getting Started

<div class="overview_cards">
  <VPCard
    title="Quickstart"
    logo="/assets/icons/quickstart.svg"
    link="./cookbooks/quickstart/README.md"
  />

  <VPCard
    title="Zilla Use Cases"
    logo="/assets/icons/use cases.svg"
    link="./concepts/use-cases.md"
  />

  <VPCard
    title="VS Code Extension"
    logo="/assets/icons/build visualize.svg"
    link="./concepts/vscode/README.md"
  />
</div>

### Core Concepts

<div class="overview_cards">
  <VPCard
    title="Protocol"
    logo="/assets/icons/protocol.svg"
    link="#"
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

### Deployment

<div class="overview_cards">
  <VPCard
    title="Install Zilla"
    logo="/assets/icons/install zilla.svg"
    link="#"
  />

  <VPCard
    title="Dynamic Loading of Zilla Configuration"
    logo="/assets/icons/dynamic loading.svg"
    link="#"
  />

  <VPCard
    title="Connecting to Kafka"
    logo="/assets/icons/connecting kafka.svg"
    link="#"
  />

  <VPCard
    title="Catalogs"
    logo="/assets/icons/catalogs.svg"
    link="#"
  />

  <VPCard
    title="Zilla Plus in Production"
    logo="/assets/icons/zilla in product.svg"
    link="#"
  />
</div>

### Troubleshooting & Support

<div class="overview_cards">
  <VPCard
    title="Troubleshooting Guides"
    logo="/assets/icons/troubleshoot.svg"
    link="#"
  />

  <VPCard
    title="Community Support"
    logo="/assets/icons/community support.svg"
    link="#"
  />

  <VPCard
    title="Enterprise Support (Zilla Plus)"
    logo="/assets/icons/enterprise.svg"
    link="#"
  />
</div>

### Others

<div class="overview_cards">
  <VPCard
    title="FAQ"
    logo="/assets/icons/faq.svg"
    link="#"
  />

  <VPCard
    title="Changelog"
    logo="/assets/icons/changelog.svg"
    link="#"
  />

  <VPCard
    title="Glossary"
    logo="/assets/icons/glossary.svg"
    link="#"
  />

  <VPCard
    title="Reference"
    logo="/assets/icons/reference.svg"
    link="/reference"
  />

  <VPCard
    title="Community"
    logo="/assets/icons/community.svg"
    link="#"
  />

  <VPCard
    title="Contribute"
    logo="/assets/icons/contribute.svg"
    link="#"
  />
</div>
