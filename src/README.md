---
title: Zilla Gateway
description: Zilla is a multi-protocol edge and service proxy that helps streamline, secure, and manage event-driven architectures.
breadcrumb: false
pageClass: landing
---

<p class="lp-eyebrow">Documentation</p>
<h1 class="lp-title">Multi-Protocol Edge &amp; Service Proxy<br>for Event-Driven Architectures</h1>
<p class="lp-subtitle">Zilla replaces custom code, Kafka Connect, and MQTT brokers with a stateless, cloud-native gateway that handles protocol mediation, auth, schema validation, and TLS all in one place.</p>
<div class="lp-actions">
  <a href="./getting-started/quickstart/" class="lp-btn-primary"><span>▸</span> Get Started</a>
  <a href="./concepts/protocol/" class="lp-btn-secondary"><span>⟨⟩</span> Explore Concepts</a>
</div>

## Key Concepts

<div class="lp-concept-grid">
  <a class="lp-concept-card" href="./concepts/protocol/" style="--c-accent:#0d9b76;--c-bg:rgba(13,155,118,0.1);--c-text:#34d399;">
    <div class="lp-ci"><i class="fa-solid fa-right-left"></i></div>
    <h3>Protocol</h3>
    <p>HTTP, Kafka, MQTT, gRPC, SSE, and WebSocket all in one proxy.</p>
    <span class="lp-arrow">→</span>
  </a>
  <a class="lp-concept-card" href="./concepts/proxy/" style="--c-accent:#22d3ee;--c-bg:rgba(34,211,238,0.1);--c-text:#22d3ee;">
    <div class="lp-ci"><i class="fa-solid fa-arrows-left-right"></i></div>
    <h3>Proxy</h3>
    <p>Mediate between protocols at the edge without custom middleware.</p>
    <span class="lp-arrow">→</span>
  </a>
  <a class="lp-concept-card" href="./concepts/data-governance/catalog/" style="--c-accent:#34d399;--c-bg:rgba(52,211,153,0.1);--c-text:#34d399;">
    <div class="lp-ci"><i class="fa-solid fa-scale-balanced"></i></div>
    <h3>Data Governance</h3>
    <p>Schema catalogs and models that enforce contracts at runtime.</p>
    <span class="lp-arrow">→</span>
  </a>
  <a class="lp-concept-card" href="./concepts/monitoring-observability/" style="--c-accent:#fbbf24;--c-bg:rgba(251,191,36,0.1);--c-text:#fbbf24;">
    <div class="lp-ci"><i class="fa-solid fa-chart-line"></i></div>
    <h3>Observability</h3>
    <p>Logs, metrics, and exporters for full visibility into every stream.</p>
    <span class="lp-arrow">→</span>
  </a>
  <a class="lp-concept-card" href="./concepts/security/kafka/" style="--c-accent:#fb7185;--c-bg:rgba(251,113,133,0.1);--c-text:#fb7185;">
    <div class="lp-ci"><i class="fa-solid fa-shield-halved"></i></div>
    <h3>Security</h3>
    <p>JWT guards, TLS termination, vaults, and Kafka SASL built in.</p>
    <span class="lp-arrow">→</span>
  </a>
  <a class="lp-concept-card" href="./concepts/api-specifications/asyncapi/" style="--c-accent:#a78bfa;--c-bg:rgba(167,139,250,0.1);--c-text:#a78bfa;">
    <div class="lp-ci"><i class="fa-solid fa-code"></i></div>
    <h3>API Specifications</h3>
    <p>AsyncAPI and OpenAPI specs drive configuration and enforcement.</p>
    <span class="lp-arrow">→</span>
  </a>
  <a class="lp-concept-card" href="./concepts/scalability/autoscaling/" style="--c-accent:#2dd4bf;--c-bg:rgba(45,212,191,0.1);--c-text:#2dd4bf;">
    <div class="lp-ci"><i class="fa-solid fa-expand"></i></div>
    <h3>Scalability</h3>
    <p>Stateless and cloud-native scale to millions of concurrent clients.</p>
    <span class="lp-arrow">→</span>
  </a>
  <a class="lp-concept-card" href="./concepts/performance/benchmarks/" style="--c-accent:#0d9b76;--c-bg:rgba(13,155,118,0.07);--c-text:#34d399;">
    <div class="lp-ci"><i class="fa-solid fa-gauge-high"></i></div>
    <h3>Performance</h3>
    <p>Low-latency, high-throughput benchmarks on commodity hardware.</p>
    <span class="lp-arrow">→</span>
  </a>
</div>

## What Zilla Enables

<div class="lp-solution-grid">
  <a class="lp-solution-card" href="./concepts/proxy/http/">
    <div class="lp-solution-header">
      <div class="lp-si" style="background:rgba(34,211,238,0.1);color:#22d3ee;"><i class="fa-solid fa-globe"></i></div>
      <h3>HTTP ↔ Kafka Gateway</h3>
    </div>
    <p>Expose Kafka topics as REST or SSE endpoints. Producers and consumers talk HTTP while Zilla handles the Kafka protocol.</p>
    <div class="lp-tags">
      <span class="lp-tag">HTTP</span>
      <span class="lp-tag">Kafka</span>
      <span class="lp-tag">SSE</span>
    </div>
  </a>
  <a class="lp-solution-card" href="./concepts/proxy/mqtt/">
    <div class="lp-solution-header">
      <div class="lp-si" style="background:rgba(13,155,118,0.12);color:#34d399;"><i class="fa-solid fa-wifi"></i></div>
      <h3>MQTT ↔ Kafka IoT Bridge</h3>
    </div>
    <p>Connect IoT devices over MQTT directly to Kafka. No separate broker required Zilla mediates the protocol natively.</p>
    <div class="lp-tags">
      <span class="lp-tag">MQTT</span>
      <span class="lp-tag">IoT</span>
      <span class="lp-tag">Kafka</span>
    </div>
  </a>
  <a class="lp-solution-card" href="./concepts/proxy/grpc/">
    <div class="lp-solution-header">
      <div class="lp-si" style="background:rgba(167,139,250,0.1);color:#a78bfa;"><i class="fa-solid fa-bolt"></i></div>
      <h3>gRPC ↔ Kafka Bridge</h3>
    </div>
    <p>Route gRPC service calls to and from Kafka topics, enabling event-driven microservices without custom glue code.</p>
    <div class="lp-tags">
      <span class="lp-tag">gRPC</span>
      <span class="lp-tag">Kafka</span>
      <span class="lp-tag">Protobuf</span>
    </div>
  </a>
  <a class="lp-solution-card" href="./deployment/zilla-plus-in-production/secure-public-access/">
    <div class="lp-solution-header">
      <div class="lp-si" style="background:rgba(251,113,133,0.1);color:#fb7185;"><i class="fa-solid fa-lock"></i></div>
      <h3>Secure Public Access</h3>
    </div>
    <p>Expose private Kafka clusters securely over the public internet with TLS, JWT auth, and schema validation enforced at the edge.</p>
    <div class="lp-tags">
      <span class="lp-tag">SASL/SCRAM</span>
      <span class="lp-tag">JWT</span>
      <span class="lp-tag">mTLS</span>
    </div>
  </a>
  <a class="lp-solution-card" href="./deployment/zilla-plus-in-production/secure-private-access/">
    <div class="lp-solution-header">
      <div class="lp-si" style="background:rgba(52,211,153,0.1);color:#34d399;"><i class="fa-solid fa-shield-halved"></i></div>
      <h3>Secure Private Access</h3>
    </div>
    <p>Give internal services private, authenticated access to Kafka clusters across VPCs and accounts without exposing brokers to the public internet.</p>
    <div class="lp-tags">
      <span class="lp-tag">Private</span>
      <span class="lp-tag">VPC</span>
      <span class="lp-tag">mTLS</span>
    </div>
  </a>
  <a class="lp-solution-card" href="./deployment/zilla-plus-in-production/virtual-clusters/">
    <div class="lp-solution-header">
      <div class="lp-si" style="background:rgba(251,191,36,0.1);color:#fbbf24;"><i class="fa-solid fa-object-group"></i></div>
      <h3>Virtual Clusters</h3>
    </div>
    <p>Partition a single Kafka cluster into isolated virtual clusters each with its own namespace, access controls, and topic routing.</p>
    <div class="lp-tags">
      <span class="lp-tag">Kafka</span>
      <span class="lp-tag">Multi-tenant</span>
      <span class="lp-tag">Isolation</span>
    </div>
  </a>
</div>

## How It Works

Configure Zilla declaratively to mediate protocols, enforce policies, and proxy traffic between clients and Kafka.

<div class="zp-pipeline">
  <div class="zp-step">
    <span class="zp-step-num">1</span>
    <span class="zp-step-title">Define</span>
    <p>Describe bindings, guards, vaults, and telemetry in a YAML config or AsyncAPI spec.</p>
  </div>
  <div class="zp-step">
    <span class="zp-step-num">2</span>
    <span class="zp-step-title">Deploy</span>
    <p>Run Zilla via Docker, Helm, or directly stateless and cloud-native from the start.</p>
  </div>
  <div class="zp-step">
    <span class="zp-step-num">3</span>
    <span class="zp-step-title">Connect</span>
    <p>Clients connect over HTTP, MQTT, gRPC, SSE, or WebSocket Zilla translates to Kafka.</p>
  </div>
  <div class="zp-step">
    <span class="zp-step-num">4</span>
    <span class="zp-step-title">Observe</span>
    <p>Export metrics to Prometheus, OpenTelemetry, or CloudWatch with zero code changes.</p>
  </div>
</div>

## Who It's For

<div class="lp-who-grid">
  <div class="lp-who-card">
    <div class="lp-who-icon"><i class="fa-solid fa-layer-group"></i></div>
    <h3>Platform &amp; Kafka Engineers</h3>
    <p>Share Kafka clusters across teams and protocols without managing multiple middleware stacks.</p>
  </div>
  <div class="lp-who-card">
    <div class="lp-who-icon"><i class="fa-solid fa-code"></i></div>
    <h3>Application Developers</h3>
    <p>Build on real-time data streams using familiar protocols HTTP, MQTT, gRPC no Kafka expertise required.</p>
  </div>
  <div class="lp-who-card">
    <div class="lp-who-icon"><i class="fa-solid fa-file-code"></i></div>
    <h3>API Architects</h3>
    <p>Drive Zilla configuration directly from OpenAPI and AsyncAPI schemas for consistent, spec-first deployments.</p>
  </div>
</div>

## Editions

<div class="lp-editions">
  <div class="lp-edition">
    <div class="lp-edition-label">Open Source</div>
    <h3>Zilla CE</h3>
    <p>Free to deploy, modify, and run under the Aklivity Community License.</p>
    <ul class="lp-features">
      <li><span class="lp-check lp-check-pro">✓</span> HTTP, MQTT, gRPC, SSE, WebSocket</li>
      <li><span class="lp-check lp-check-pro">✓</span> AsyncAPI &amp; OpenAPI spec-driven config</li>
      <li><span class="lp-check lp-check-pro">✓</span> JWT guards, TLS, schema validation</li>
      <li><span class="lp-check lp-check-pro">✓</span> Prometheus, OTLP, CloudWatch exporters</li>
      <li><span class="lp-check lp-check-pro">✓</span> Kubernetes &amp; Helm support</li>
    </ul>
    <a href="./deployment/install-zilla/helm/" class="lp-edition-cta lp-btn-secondary">Get Started →</a>
  </div>
  <div class="lp-edition lp-edition-pro">
    <div class="lp-edition-label lp-edition-label-pro">Enterprise</div>
    <h3>Zilla Plus EE</h3>
    <p>Adds enterprise integrations, production hardening, and dedicated support.</p>
    <ul class="lp-features">
      <li><span class="lp-check lp-check-pro">✓</span> Everything in Zilla CE</li>
      <li><span class="lp-check lp-check-pro">✓</span> Secure Public &amp; Private Kafka Access</li>
      <li><span class="lp-check lp-check-pro">✓</span> Enterprise Integrations</li>
      <li><span class="lp-check lp-check-pro">✓</span> AWS MSK, Confluent Cloud templates</li>
      <li><span class="lp-check lp-check-pro">✓</span> Enterprise support SLAs</li>
    </ul>
    <a href="https://www.aklivity.io/products/zilla-plus" class="lp-edition-cta lp-btn-primary">Learn More →</a>
  </div>
</div>
