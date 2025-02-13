---
shortTitle: Cache Client
---

# Kafka Cache Client

The kafka cache_client binding supports filtering by `kafka` message key, headers or a combination of key and headers.

```yaml {3}
<!-- @include: ./.partials/cache_client.yaml -->
```

## Cache Behavior

The `cache_client` kinds provide a persistent cache of `kafka` messages per `topic` `partition` honoring the `kafka` `topic` configuration for message expiration and compaction. The `cache_client` kind supports filtering by `kafka` message key, headers or a combination of key and headers.

The `cache_client` also combine to provide a staging area when producing new messages as `kafka` requires exact message length up front when producing new messages and `kafka` does not support producing multiple messages in parallel over the same network connection.

## Usage Example

![Pipeline with Kafka Cache Client Example](../images/http-part2.png)

::: details Full HTTP Proxy zilla.yaml Config

```yaml
<!-- @include: ../../../cookbooks/quickstart/http-zilla.yaml -->
```

:::

In the above example, the Kafka Cache Client acts as a client and streams message requests from the previous part of the pipeline. It fetches and produces Kafka messages through a Kafka server.

1. Kafka Cache Client receives fetch and produce requests from previous parts in the pipeline, including HTTP Kafka, SSE Kafka, etc.
2. Kafka Cache Client forwards the request stream to Kafka Cache Server.

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
