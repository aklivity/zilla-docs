---
shortTitle: proxy
---

# asyncapi proxy

The asyncapi proxy binding creates composite of `http-kafka`, `sse-kafka`, or `mqtt-kafka` bindings with proxy kind mapping HTTP/SSE/MQTT streams to Kafka streams.

```yaml
<!-- @include: ./.partials/proxy.yaml -->
```

## Configuration (\* required)

<!-- @include: ../.partials/vault.md -->

### options

> `object`

The `proxy` specific options.

```yaml
specs:
  http_api:
    servers:
      - http://localhost:8080
    catalog:
      my_catalog:
        subject: petstore
        version: latest
```

<!-- @include: ./.partials/options.md -->

For the `mqtt-kafka` mapping, the Kafka topic role of each `mqtt-kafka` channel (`sessions`, `messages`, `retained`) is declared directly in the AsyncAPI spec document via that channel's `x-zilla-mqtt-kafka` binding, rather than as a `zilla.yaml` option:

```yaml
channels:
  mqttSessions:
    address: mqtt-sessions
    x-zilla-mqtt-kafka:
      role: sessions
```

<!-- @include: ./.partials/routes.md -->
#### routes[].exit

> `string`

Next binding when following this route.

```yaml
routes:
  - when:
    ...
    exit: asyncapi_client
```
<!-- @include: ../.partials/exit.md -->
<!-- @include: ../.partials/telemetry.md -->
