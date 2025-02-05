---
shortTitle: Cache Client
---

# Kafka Cache Client

The kafka cache_client binding supports filtering by `kafka` message key, headers or a combination of key and headers.

```yaml {3}
<!-- @include: ./.partials/cache_client.yaml -->
```

## Cache Behavior

The `cache_client` kinds combine to provide a persistent cache of `kafka` messages per `topic` `partition` honoring the `kafka` `topic` configuration for message expiration and compaction. Messages ordering is guaranteed per `partition` and messages are merged into a unified stream for the `topic` spanning all `partitions`.

The `cache_client` kind supports filtering by `kafka` message key, headers or a combination of key and headers.

Message conflation occurs implicitly for `compacted` `kafka` topics, where a slower consumer that is not keeping up with the latest messages can safely skip over each older message that has effectively been replaced by a newer message with the same key.

When a new consumer arrives, the latest messages in the compacted topic are immediately delivered to that consumer, followed by any additional messages as they are produced to the `kafka` `topic`.

When the `kafka` `topic` is not compacted, then the binding can be configured to either replay historical messages first, or start with upcoming live messages instead.

The `cache_client` also combine to provide a staging area when producing new messages as `kafka` requires exact message length up front when producing new messages and `kafka` does not support producing multiple messages in parallel over the same network connection.

## Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/cache-client-options.md -->

@tab routes\*

<!-- @include: ./.partials/routes.md -->

@tab exit

<!-- @include: ../.partials/exit.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry.md -->

:::
