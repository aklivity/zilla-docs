---
shortTitle: client
---

# asyncapi client

The asyncapi client binding creates composite of `kafka` or `mqtt` or `http`, and `tls`, `tcp` bindings with client kind and adapts AsyncAPI streams to Kafka/MQTT/HTTP streams.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```

## Configuration (\* required)

<!-- @include: ../.partials/vault.md -->

### options

> `object`

`client`-specific options.

```yaml
specs:
  http_api:
    servers:
      - name: plain
    catalog:
      my_catalog:
        subject: petstore
        version: latest
```

<!-- @include: ./.partials/options.md -->

### options.kafka

> `object`

`kafka` binding specific options.

#### kafka.topics

> `array` of `object`

Topic configuration.

<!-- @include: ../.partials/options-kafka-topics.md -->

#### topics[].defaultOffset

> `enum` [ "live", "historical" ] | Default: `"historical"`

Fetch offset to use for new consumers

#### kafka.sasl

> `object`

SASL credentials to use when connecting to `kafka` brokers.

<!-- @include: ../.partials/options-kafka-sasl.md -->

### options.mqtt-kafka

> `object`

`mqtt-kafka` binding specific options.

#### mqtt-kafka.channels

> `object`

AsyncAPI Kafka channels describing the necessary topics for the MQTT-Kafka mapping.

```yaml
mqtt-kafka:
  channels:
    sessions: mqttSessions
    retained: mqttRetained
    messages: mqttMessages
```

#### channels.sessions

> `string`

AsyncAPI Kafka sessions channel.

```yaml
sessions: mqttSessions
```

#### channels.retained

> `string`

AsyncAPI Kafka retained channel.

```yaml
retained: mqttRetained
```

#### channels.messages

> `string`

AsyncAPI Kafka messages channel.

```yaml
messages: mqttMessages
```

### options.http

#### http.authorization

> `object` as map of named properties

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

#### mqtt.authorization

> `object` as map of named properties

Authorization by guard for the `HTTP/1.1` and `HTTP/2` protocols.

```yaml
authorization:
  my_jwt_guard:
    credentials:
      headers:
        authorization: Bearer {credentials}
```

<!-- @include: ../.partials/options-mqtt-auth.md -->

<!-- @include: ./.partials/routes.md -->
<!-- @include: ../.partials/telemetry.md -->