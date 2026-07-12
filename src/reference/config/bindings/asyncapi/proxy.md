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
    server: http://localhost:8080
    catalog:
      my_catalog:
        subject: petstore
        version: latest
```

<!-- @include: ./.partials/options.md -->

### options.kafka

> `object`

The `kafka` binding specific options.

#### kafka.topics

> `array` of `object`

Topic configuration.

<!-- @include: ../.partials/options-kafka-topics.md -->

#### topics[].defaultOffset

> `enum` [ `live`, `historical` ]

Fetch offset to use for new consumers

<!-- @include: ../.partials/options-kafka-topics-transforms.md -->

#### kafka.sasl

> `object`

SASL credentials to use when connecting to `kafka` brokers. Deprecated in favor of `kafka.authorization`.

<!-- @include: ../.partials/options-kafka-sasl.md -->

#### kafka.authorization

> `object` as map of named `object` properties

Credentials to use when connecting to `kafka` brokers, keyed by an arbitrary name. At most one named entry may be configured.

```yaml
authorization:
  broker0:
    credentials:
      mechanism: scram-sha-256
      username: my-username
      password: my-password
```

<!-- @include: ../.partials/options-kafka-authorization.md -->

For the `mqtt-kafka` mapping, the Kafka topic role of each `mqtt-kafka` channel (`sessions`, `messages`, `retained`) is declared directly in the AsyncAPI spec document via that channel's `x-zilla-mqtt-kafka` binding, rather than as a `zilla.yaml` option:

```yaml
channels:
  mqttSessions:
    address: mqtt-sessions
    x-zilla-mqtt-kafka:
      role: sessions
```

### options.http

> `object`

The HTTP specific options.

#### http.authorization

> `object` as map of named `object` properties

Authorization by guard for the `HTTP/1.1` and `HTTP/2` protocols.

```yaml
authorization:
  my_jwt_guard:
    credentials:
      headers:
        authorization: Bearer {credentials}
```

<!-- @include: ../.partials/options-http-auth.md -->

### options.mqtt

> `object`

The MQTT specific options.

#### mqtt.authorization

> `object` as map of named `object` properties

Authorization by guard for the `HTTP/1.1` and `HTTP/2` protocols.

```yaml
authorization:
  my_jwt_guard:
    credentials:
      headers:
        authorization: Bearer {credentials}
```

<!-- @include: ../.partials/options-mqtt-auth.md -->

#### options.tls

> `object`

The TLS specific options.

<!-- @include: ../.partials/options-tls.md -->

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
