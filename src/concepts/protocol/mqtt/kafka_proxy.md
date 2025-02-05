---
shortTitle: Kafka Proxy
---

# MQTT-Kafka Proxy

The MQTT-Kafka proxy binding for adapting MQTT topic streams to Kafka topic streams. By configuring the Kafka topics that the proxy will use to route mqtt messages and session states an `mqtt` `server` binding can allow clients to connect and proxy MQTT messages onto Kafka topics.

```yaml {3}
<!-- @include: ./.partials/proxy.yaml -->
```

## Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/proxy-options.md -->

@tab routes

<!-- @include: ./.partials/proxy-routes.md -->

@tab exit

<!-- @include: ../.partials/exit.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry.md -->

:::