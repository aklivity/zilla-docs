# FAQ

## General

<details>
    <summary><strong>Which Protocols that are Supported by Zilla?</strong></summary>

Currently Zilla supports the following protocols:

- [HTTP](/concepts/protocol/http.md)
- [gRPC](/concepts/protocol/grpc.md)
- [Kafka](/concepts/protocol/kafka.md)
- [MQTT](/concepts/protocol/mqtt.md)
- [Server Sent Events (SSE)](/concepts/protocol/sse.md)

Other than that, Zilla also supports the following bindings: [Filesystem binding](/reference/config/bindings/filesystem/README.md), [Websocket binding](/reference/config/bindings/filesystem/ws.md), [AsyncAPI binding](/concepts/api-spec-integration/asyncapi.md), and [OpenAPI binding](/concepts/api-spec-integration/openapi.md).

</details>

<details>
    <summary><strong>Is Zilla open-source or proprietary?</strong></summary>
    <p>Zilla is under the Aklivity Community License. This open-source license gives the freedom to deploy, modify, and run Zilla as needed, as long as it is not turned into a standalone commercialized “Zilla-as-a-service” offering. A commercial version of Zilla (“Zilla Plus”) is available, which includes additional enterprise integrations and support.</p>
</details>

## Development

<details>
    <summary><strong>How do I validate and visualize my Zilla configuration file?</strong></summary>

Currently we provide Zilla Visual Studio Code Exension for helping Zilla configuration development and visuzliation directly within Visual Studio Code. Read [this article](/getting-started/vscode/README.md) for more information.

</details>

<details>
    <summary><strong>Is Zilla VS Code Extension available on Intellij IDEA?</strong></summary>
    <p>Currently Zilla VS Code Extension is only available as a Visual Studio Code Extension.</p>
</details>

<details>
    <summary><strong>Where can I get Zilla Project Examples?</strong></summary>

Read [Real-World Use Cases](/getting-started/use-cases.md) for project examples separated by its use cases or read [How-To Guides](/tutorials/how-to-guides.md) for a guided articles.

</details>

## Deployment

<details>
    <summary><strong>How do I upgrade from Zilla to Zilla Plus?</strong></summary>

Refer to [this article](/deployment/zilla-to-zilla-plus-upgrade.md) for upgrading from Zilla to Zilla plus.
</details>

<details>
    <summary><strong>How do I install Zilla?</strong></summary>

There are three options to install Zilla:

- [Using Homebrew on MacOS](/deployment/install-zilla/homebrew.md)
- [Using Docker](/deployment/install-zilla/docker.md)
- [Deploy on Kubernetes via Helm](/deployment/install-zilla/helm.md)

Please note that using Zilla on MacOS and Docker are intended for development purposes only. It is advisable to deploy Zilla in production using Kubernetes.

</details>

<details>
    <summary><strong>Which Kafka distributions that are supported?</strong></summary>

Zilla supports the following Kafka distributions:

- Apache Kafka
- Aiven Kafka
- Amazon MSK
- Confluent Cloud
- Redpanda

</details>
