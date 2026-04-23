---
shortTitle: cache_server
---

# kafka cache_server

The kafka cache_server binding supports proactive `fetch` of messages to keep the cache fresh in preparation for new consumers. This is enabled by configuring a list of `bootstrap` topics for the binding.

```yaml {3}
<!-- @include: ./.partials/cache_server.yaml -->
```

## Configuration (\* required)

### options

> `object`

The `cache_server` specific options.

```yaml
options:
  bootstrap:
    - items-requests
    - items-responses
  topics:
    - name: items-requests
      defaultOffset: live
```

#### options.bootstrap

> `array` of `string`

Topics to bootstrap in cache server even when no clients.

::: info Kafka ACL Requirements
When using `bootstrap`, the Zilla service principal must have the following ACLs on each bootstrapped topic:

| Operation  | Resource Type | Description                                                |
|------------|---------------|------------------------------------------------------------|
| `DESCRIBE` | `Topic`       | Required to fetch topic metadata and partition information |
| `READ`     | `Topic`       | Required to fetch messages from the topic                  |
:::


#### options.topics

> `array` of `object`

Topic configuration.

<!-- @include: ../.partials/options-kafka-topics.md -->

#### topics[].defaultOffset

> `enum` [ `live`, `historical` ]

Fetch offset to use for new consumers

<!-- @include: ../.partials/options-kafka-topics-transforms.md -->

<!-- @include: ./.partials/routes.md -->
<!-- @include: ../.partials/exit.md -->
<!-- @include: ../.partials/entry.md -->
<!-- @include: ../.partials/telemetry.md -->
