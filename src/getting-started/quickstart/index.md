---
shortTitle: quickstart
description: Get started with Zilla by trying out some of the key features for yourself.
---

# Quickstart

Get started with Zilla by trying some of its Kafka proxying and API gateway features.

In this guide, you will see how Zilla operates as HTTP Kafka Proxy that exposes Kafka topics via REST endpoints.

## Prerequisites

- docker compose

## Running Zilla Locally

Download and run the Zilla `http.kafka.crud` example using these steps.

```bash
git clone https://github.com/aklivity/zilla.git
```

::: note
Alternatively, download [zilla](https://github.com/aklivity/zilla/archive/refs/heads/develop.zip) and unzip the compressed file.
:::

```bash
cd zilla/examples
```

To `start` the Docker Compose stack defined in the [compose.yaml](https://github.com/aklivity/zilla/blob/develop/examples/http.kafka.crud/compose.yaml) file, use:

```bash
docker compose --project-directory http.kafka.crud up -d
```

It will start with Zilla and everything you need for this guide.

The key components this script will set:

- Configured Zilla instance
- Kafka Cluster and topics
- Kafka UI at `http://localhost:8080/ui/clusters/local/all-topics` for browsing topics & messages

![](demo.gif)

## HTTP Kafka Proxy

The Zilla HTTP Kafka Proxy lets you configure application-centric REST APIs that unlock Kafka event-driven architectures.

1. Open the live [`items-snapshots`](http://localhost:8080/ui/clusters/local/all-topics/items-snapshots/messages?limit=100&mode=TAILING) Kafka topic, which will have all the JSON messages you create. You can switch the filter from `live` to `newest` to see all the latest messages on the topic.
2. Refer to the exposed [`HTTP Endpoints`](https://github.com/aklivity/zilla/blob/develop/examples/http.kafka.crud/README.md#endpoints).
3. Use the [`POST`](https://github.com/aklivity/zilla/blob/develop/examples/http.kafka.crud/README.md#verify-behavior) request to create an event. The new object will appear in the Kafka topic.
4. View your Kafka message key from the [`items-snapshots`](http://localhost:8080/ui/clusters/local/all-topics/items-snapshots/messages) topic.
5. Triggered `GET`, `PUT` & `DELETE` requests to experience the application-centric REST APIs.

You can easily configure many common Restful actions with the added benefit of built-in streaming with an SSE endpoint. The zilla.yaml config has simple and clear syntax for defining each HTTP endpoint.

::: tabs#yaml

@tab Create

Create a new message.

```yaml{6,7,10,11}
  north_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: zilla.yaml#rest_create -->
```

@tab Read:all

Fetch all messages on the topic.

```yaml{6,7,10,11}
  north_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: zilla.yaml#rest_retrieve_all -->
```

@tab Read:key

Fetch one message by its key.

```yaml{6,7,10,11,13}
  north_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: zilla.yaml#rest_retrieve_id -->
```

@tab Update

Update a message based on its key.

```yaml{6,7,10-12}
  north_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: zilla.yaml#rest_update -->
```

@tab Delete

Produce a blank message for a key.

```yaml{6,7,10-12}
  north_rest_api_http_kafka_mapping:
    type: http-kafka
    kind: proxy
    routes:
      <!-- @include: zilla.yaml#rest_delete -->
```

:::

::: details Full HTTP Proxy zilla.yaml Config
```yaml
<!-- @include: zilla.yaml -->
```
:::

To `stop` the Docker Compose stack, use:

```bash
docker compose --project-directory http.kafka.crud down
```

::: info
Explore all examples in the [zilla-examples](https://github.com/aklivity/zilla-examples/tree/main) repository.
:::
