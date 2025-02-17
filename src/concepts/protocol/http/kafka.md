---
shortTitle: Kafka
---

# Kafka Proxy Binding

The http-kafka proxy binding for adapting `http` request-response streams to `kafka` topic streams.

```yaml {3}
<!-- @include: ./.partials/kafka-proxy.yaml -->
```

## Usage Example

![Pipeline with HTTP-Kafka Example](../images/http-part3.png)

::: details Full HTTP Proxy zilla.yaml Config

```yaml
<!-- @include: ../../../cookbooks/quickstart/http-zilla.yaml -->
```

:::

In the above example, the HTTP-Kafka binding is an intermediary between HTTP Server binding and Kafka Client binding. Some routing, transformation, data injection, etc can be done here before the stream is passed into the Kafka client.

1. HTTP Server sends the stream to HTTP-Kafka binding.
2. HTTP Kafka performs the necessary transformation between the HTTP stream and the Kafka stream.
3. The transformed stream is then forwarded to Kafka Client.

## Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/kafka-options.md -->

@tab routes\*

<!-- @include: ./.partials/kafka-routes.md -->

@tab telemetry

<!-- @include: ../.partials/telemetry-http.md -->

:::
