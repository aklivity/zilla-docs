---
shortTitle: server
---

# asyncapi server

The asyncapi server binding creates composite of `tcp`, `tls`, and `mqtt` or `http` or `sse` bindings with server kind and adapts MQTT/HTTP/SSE streams to AsyncAPI streams.

```yaml
<!-- @include: ./.partials/server.yaml -->
```

## Configuration (\* required)

<!-- @include: ../.partials/vault.md -->

### options

> `object`

The `server` specific options.

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

For each `https`/`mqtts` server, a `tls` binding is generated automatically, with keys, trust, signers, and SNI resolved from `vault` and ALPN computed automatically — no separate TLS options are configured on this binding.

<!-- @include: ./.partials/routes.md -->
<!-- @include: ../.partials/exit.md -->
#### routes[].exit

> `string`

Next binding when following this route.

```yaml
routes:
  - when:
    ...
    exit: asyncapi_client
```
<!-- @include: ../.partials/telemetry.md -->
