---
shortTitle: OpenAPI to AsyncAPI
---

# OpenAPI-AsyncAPI

The Zilla config uses many of the same parameters as the public and open-source interface definition languages [OpenAPI](https://www.openapis.org/) and [AsyncAPI](https://www.asyncapi.com/). Services and tools are available to describe your existing APIs and infrastructure using OpenAPI and AsyncAPI definitions. These specs enable more consistent documentation, versioning, and code generation. Using the [openapi](./openapi.md#openapi-client) and [asyncapi](./asyncapi.md#asyncapi-client) bindings enables the use of existing interface specs to configure Zilla.

Zilla leverages the interface definitions in these specs to generate the necessary `zilla.yaml` config to implement the defined services. Zilla doesn't generate code that needs to be maintained. Instead, it generates the underlying configuration necessary to implement a functioning interface. Both standard and complex use cases are implemented easily with Zilla.

You can see a working [Petstore Demo](https://github.com/aklivity/zilla-demos/tree/main/petstore) using OpenAPI/AsyncAPI schemas. Zilla can also define and proxy MQTT endpoints utilizing a pair of AsyncAPI schemas. Check out the [Taxi Demo](https://github.com/aklivity/zilla-demos/tree/main/taxi) to see a Zilla MQTT proxy defined using AsyncAPI, which is deployed [Live](https://taxi.aklivity.io/) using Kubernetes.

## OpenAPI-AsyncAPI proxy

The openapi-asyncapi proxy binding for adapting `openapi` operations to `asyncapi` operations.

```yaml {3}
<!-- @include: ./.partials/openapi-asyncapi-proxy.yaml -->
```

### Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/openapi-asyncapi-options.md -->

@tab routes

<!-- @include: ./.partials/openapi-asyncapi-routes.md -->

@tab exit

<!-- @include: ./.partials/exit.md -->

@tab telemetry

<!-- @include: ./.partials/telemetry.md -->

:::
