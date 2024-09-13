# Structured Message data

- validate inbound traffic (PRODUCE)

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
    exit: south_kafka_cache_server
  south_kafka_cache_server:
    type: kafka
    kind: cache_server
    exit: south_kafka_client
```

- structure outbound messages (FETCH)

```yaml
  north_kafka_cache_client:
    type: kafka
    kind: cache_client
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
            catalog:
              my_catalog:
                - strategy: topic
    exit: south_kafka_client
```

- convert model formats

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
                - subject: my_avro_subject
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
                - subject: my_avro_subject
    exit: south_kafka_client
```
