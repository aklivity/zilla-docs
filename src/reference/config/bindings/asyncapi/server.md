---
shortTitle: server
---

# asyncapi server

The asyncapi server binding creates composite of `tcp`, `tls`, and `mqtt` or `http` bindings with server kind and adapts MQTT/HTTP streams to AsyncAPI streams.

```yaml
<!-- @include: .partials/server.yaml -->
```

## Configuration (\* required)

<!-- @include: .partials/options.md -->

### mqtt-kafka

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

##### channels.sessions

> `string`

AsyncAPI Kafka sessions channel.

```yaml
sessions: mqttSessions
```

##### channels.retained

> `string`

AsyncAPI Kafka retained channel.

```yaml
retained: mqttRetained
```

##### channels.messages

> `string`

AsyncAPI Kafka messages channel.

```yaml
messages: mqttMessages
```

<!-- @include: .partials/routes.md -->
<!-- @include: ../.partials/exit.md -->
<!-- @include: ../.partials/telemetry.md -->
