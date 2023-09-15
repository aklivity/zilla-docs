---
shortTitle: mqtt-kafka
description: Zilla runtime mqtt-kafka binding
category:
  - Binding
tag:
  - Proxy
---

# mqtt-kafka Binding

Zilla runtime mqtt-kafka binding.

```yaml {2}
mqtt_kafka_proxy:
  type: mqtt-kafka
  kind: proxy
  options:
    topics:
      sessions: mqtt-sessions
      messages: mqtt-messages
      retained: mqtt-retained
  exit: kafka_cache_client
```

## Summary

Defines a binding with `mqtt-kafka`  support, with `proxy` behavior.

## Configuration

:::: note Properties

- [kind\*](#kind)
- [options](#options)
- [exit](#exit)

::: right
\* required
:::

::::

### kind\*

> `enum` [ "proxy" ]

Behave as a `mqtt-kafka` `proxy`.

### options

> `object`

`mqtt-kafka`-specific options for configuring the `kafka` topics that the proxy will use to route mqtt messages and session states

```yaml
options:
  topics:
    sessions: mqtt-sessions
    messages: mqtt-messages
    retained: mqtt-retained
```

#### options.topics.sessions

> `object`

Compacted Kafka topic for storing mqtt session states.

#### options.topics.messages

> `object`

Kafka topic used for routing mqtt messages.

#### options.topics.retained

> `object`

Compacted Kafka topic for storing mqtt retained messages.

### exit

> `string`

Default exit binding when no conditional routes are viable.

```yaml
exit: kafka_cache_client
```

---

::: right
\* required
:::
