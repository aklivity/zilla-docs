---
shortTitle: Model
---

# Model

## Overview

When Zilla interacts with the data inside of a message, it only parses the necessary metadata with standard formats. The processing of messages is simple and uses fewer resources to proxy data streams. A `model` adds the type syntax or structure definitions that Zilla needs to deserialize the remaining message parts.

### Primitive Models

Primitive models will have additional properties based on the type used.

```yaml
model: string
encoding: utf_8
```

> [Validating message keys](#validating-message-keys)

### Schema Models

Schema-based models will reference a [catalog](../catalog/README.md#catalog) to supply the binding with the configured model definition. Schemas referenced by their subject will fetch the latest version of that schema.

- Fetch the latest schema by `subject`.

    ```yaml
    model: avro
    catalog:
      my_catalog:
        - subject: my_schema_subject
    ```

- Fetch the latest schema by the schema definition on a Kafka `topic`.

    ```yaml
    model: avro
    catalog:
      my_catalog:
        - strategy: topic
    ```

- Fetch a specific schema by its schema ID.

    ```yaml
    model: avro
    catalog:
      my_catalog:
        - id: 42
    ```

> [Validating a new message](#validating-a-new-message) | [Expose a different model format](#expose-a-different-model-format)

## Structured Message data

Adding structured types to the message data streams in Zilla.

### Adding models structure to Kafka messages

The `kafka` `cache_client` and `cache_server` bindings are responsible for interacting with the messages stored on Kafka topics. This is where Zilla can implement any structured type definitions. The schema for the message can come from the Kafka topic's schema definition using the topic `strategy` or be a reference to a schema's `subject` or `id`. The [catalog](../catalog/README.md#catalog) definition will determine which methods are available when referencing schemas.

#### Validating message keys

The message key for a topic can be set to any primitive model type and Zilla will validate the key when a message is Produced on a topic.

```yaml
north_kafka_cache_client:
  type: kafka
  kind: cache_client
  options:
    topics:
    - name: my-kafka-topic
      key:
        model: string
```

#### Validating a new message

The `kafka cache_client` binding can parse the message value, or body of the message, that is Produced on a topic.

```yaml
north_kafka_cache_client:
  type: kafka
  kind: cache_client
  options:
    topics:
      - name: my-kafka-topic
        value:
          model: avro
          catalog:
            my_catalog:
              - strategy: topic
```

#### Enforcing a schema on Fetch

The `kafka cache_server` can enforce a schema on messages Fetched from a topic. This will prevent any messages that are produced on a Kafka topic from getting consumed by a client if that messages doesn't match to the specified schema.

```yaml
south_kafka_cache_server:
  type: kafka
  kind: cache_server
  options:
    bootstrap:
      - my-kafka-topic
    topics:
      - name: my-kafka-topic
        value:
          model: avro
          catalog:
            my_catalog:
              - strategy: topic
```

#### Expose a different model format

The `kafka cache_client` can read the `view` model and translate it into the specified `model` for when a message is produced on the Kafka topic. Then the `kafka cache_server` can read the model from the topic and translate it into the `view` model.

In this case the `view` model that clients interact with needs to be a JSON object but the topic `model` is a serialize Avro object.

```yaml
north_kafka_cache_client:
  type: kafka
  kind: cache_client
  options:
    topics:
    - name: my-kafka-topic
      value:
        model: avro
        view: json
        catalog:
          my_catalog:
            - strategy: topic
  exit: south_kafka_cache_server
south_kafka_cache_server:
  type: kafka
  kind: cache_server
  options:
    bootstrap:
      - my-kafka-topic
    topics:
      - name: my-kafka-topic
        value:
          model: avro
          view: json
          catalog:
            my_catalog:
              - strategy: topic
```
