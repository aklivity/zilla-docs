---
description: Running these Zilla samples will introduce some MQTT features.
---

# MQTT Intro

Get started with Zilla by deploying our Docker Compose stack. Before proceeding, you should have [Docker Compose](https://docs.docker.com/compose/gettingstarted/) installed.

## MQTT Broker onto Kafka event streams

Running this Zilla sample will create a simple API to create and list items. All of the data will be stored on a Kafka topic.

### Setup

Create these files, `zilla.yaml` and `docker-compose.yaml`, in the same directory.

::: code-tabs#yaml

@tab zilla.yaml

```yaml {10,23-25,37,38}
name: MQTT-example
bindings:

# Gateway ingress config
  tcp_server:
    type: tcp
    kind: server
    options:
      host: 0.0.0.0
      port: 1883
    exit: mqtt_server
  mqtt_server:
    type: mqtt
    kind: server
    exit: mqtt_kafka_proxy

# Proxy MQTT messages to Kafka
  mqtt_kafka_proxy:
    type: mqtt-kafka
    kind: proxy
    options:
      topics:
        sessions: mqtt-sessions
        messages: mqtt-messages
        retained: mqtt-retained
    exit: kafka_cache_client

# Kafka caching layer
  kafka_cache_client:
    type: kafka
    kind: cache_client
    exit: kafka_cache_server
  kafka_cache_server:
    type: kafka
    kind: cache_server
    options:
      bootstrap:
        - mqtt-sessions
        - mqtt-retained
    exit: kafka_client

# Connect to local Kafka
  kafka_client:
    type: kafka
    kind: client
    exit: kafka_tcp_client
  kafka_tcp_client:
    type: tcp
    kind: client
    options:
      host: kafka
      port: 9092
    routes:
      - when:
          - cidr: 0.0.0.0/0
```

@tab docker-compose.yaml

```yaml
version: '3'
services:
  kafka:
    image: docker.io/bitnami/kafka:latest
    container_name: kafka
    ports:
      - "9092:9092"
    environment:
      ALLOW_PLAINTEXT_LISTENER: "yes"

  kafka-init:
    image: docker.io/bitnami/kafka:latest
    command: 
      - "/bin/bash"
      - "-c"
      - "/opt/bitnami/kafka/bin/kafka-topics.sh --bootstrap-server kafka:9092 --create --if-not-exists --topic mqtt-sessions"
      - "/opt/bitnami/kafka/bin/kafka-topics.sh --bootstrap-server kafka:9092 --create --if-not-exists --topic mqtt-messages"
      - "/opt/bitnami/kafka/bin/kafka-topics.sh --bootstrap-server kafka:9092 --create --if-not-exists --topic mqtt-retained"
    depends_on:
      - kafka
    init: true

  zilla:
    image: ghcr.io/aklivity/zilla:latest
    container_name: zilla
    depends_on:
      - kafka
    ports:
      - "1883:1883"
    volumes:
      - ./zilla.yaml:/etc/zilla/zilla.yaml
    command: start -v

networks:
  default:
    name: zilla-network
    driver: bridge
```

:::

### Run Zilla and Kafka

```bash:no-line-numbers
docker-compose up -d
```

### Use [mosquitto_pub](https://mosquitto.org/download/) to send a greeting

```bash:no-line-numbers
mosquitto_pub -V 'mqttv5' --topic 'zilla' --message 'Hello, world' --debug --insecure
```

::: note Wait for the services to start
if you get this response `curl: (52) Empty reply from server`, the likely cause is Zilla and Kafka are still starting up.
:::

### Remove the running containers

```bash:no-line-numbers
docker-compose down
```

::: tip See more of what Zilla can do
Go deeper into this concept with the [mqtt.kafka.reflect](https://github.com/aklivity/zilla-examples/tree/main/mqtt.kafka.reflect) example.
:::

## Going Deeper

Try out more HTTP examples:

- [mqtt.kafka.reflect](https://github.com/aklivity/zilla-examples/tree/main/mqtt.kafka.reflect)
- [mqtt.kafka.reflect.jwt](https://github.com/aklivity/zilla-examples/tree/main/mqtt.kafka.reflect.jwt)
