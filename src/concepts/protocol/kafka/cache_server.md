---
shortTitle: Cache Server
---

# Kafka Cache Server

The kafka cache_server binding supports proactive `fetch` of messages to keep the cache fresh in preparation for new consumers. This is enabled by configuring a list of `bootstrap` topics for the binding.

```yaml {3}
<!-- @include: ./.partials/cache_server.yaml -->
```

## Cache Behavior

The `cache_server` kinds combine to provide a persistent cache of `kafka` messages per `topic` `partition` honoring the `kafka` `topic` configuration for message expiration and compaction. Messages ordering is guaranteed per `partition` and messages are merged into a unified stream for the `topic` spanning all `partitions`.

The `cache_server` kind supports proactive `fetch` of messages to keep the cache fresh in preparation for new consumers. This is enabled by configuring a list of `bootstrap` topics for the binding.

Message conflation occurs implicitly for `compacted` `kafka` topics, where a slower consumer that is not keeping up with the latest messages can safely skip over each older message that has effectively been replaced by a newer message with the same key.

When a new consumer arrives, the latest messages in the compacted topic are immediately delivered to that consumer, followed by any additional messages as they are produced to the `kafka` `topic`.

When the `kafka` `topic` is not compacted, then the binding can be configured to either replay historical messages first, or start with upcoming live messages instead.

The `cache_server` also combine to provide a staging area when producing new messages as `kafka` requires exact message length up front when producing new messages and `kafka` does not support producing multiple messages in parallel over the same network connection.

## Usage Example

![Pipeline with Kafka Cache Server Example](../images/http-part2.png)

::: details Full HTTP Proxy zilla.yaml Config

```yaml
<!-- @include: ../../../cookbooks/quickstart/http-zilla.yaml -->
```

:::

In the above example, the Kafka Cache Server proactively `fetches` messages from Kafka and stores `cacheable` messages from Kafka. This caching mechanism can be used to reduce the load on the Kafka server.

1. Kafka Cache Server connects to Kafka Client binding and proactively `fetch` messages from Kafka.
2. When an inbound request stream is received from the Kafka Cache Client, it serves the requested messages.

## Configuration (\* required)

::: tabs

@tab Ootions

<!-- @include: ./.partials/cache-server-options.md -->

@tab routes\*

<!-- @include: ./.partials/routes.md -->

@tab exit

<!-- @include: ../.partials/exit.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry.md -->

:::
