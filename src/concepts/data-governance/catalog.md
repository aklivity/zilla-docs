---
shortTitle: Catalog
---

# Catalog

Each configured `catalog` represents a resource for referencing versioned assets. Catalogs make configuring Zilla more agnostic to specific API and Model design. A catalog provides Zilla bindings with schemas, specs, and other files needed to implement the binding. For example, schema models are used to validate messages brokered by Zilla.

```yaml
<!-- @include: ./.partials/catalog.yaml -->
```

## Registering a Catalog
A registered catalog is a namespace scoped item in a zilla config that can be reused throughout the config.

### Local Catalogs
Local catalogs are used to quickly bootstrap a Zilla config or package a standard schema that doesn't change often with a Zilla install.

A simple way to reference a file in Zilla is from the local filesystem. Adding files to a Zilla pod relative to the Zilla install directory.

```yaml
<!-- @include: ./.partials/local-catalog-1.yaml -->
```

In some environments the local filesystem isn't accessible. Schema subjects can be defined inside of the Zilla config to keep all of the relevant model information in one place.

```yaml
<!-- @include: ./.partials/local-catalog-2.yaml -->
```

> [http.proxy.schema.inline example](https://github.com/aklivity/zilla-examples/tree/main/http.proxy.schema.inline)

### Remote Catalogs
Remote catalogs allow Zilla to fetch existing schemas stored in an external service. Zilla will pull and maintain an up to date version of the specified schema meaning the running Zilla doesn't need to be redeployed when new data models are pushed. Zilla can also reference specific versions.

Registering remote catalogs is simple. Zilla needs to know the address for the registry and any relevant information about where the resources in the registry will be found. Once a remote catalog is registered the [model configs](./model.md#structured-message-data) will specify which resources and versions to fetch and use.

```yaml
<!-- @include: ./.partials/remote-catalog.yaml -->
```

> [Apicurio in the Petstore REST Demo](https://github.com/aklivity/zilla-demos/tree/main/petstore) | [http.kafka.karapace example](https://github.com/aklivity/zilla-examples/tree/main/http.kafka.karapace)