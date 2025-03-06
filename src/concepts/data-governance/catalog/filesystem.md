---
shortTitle: Filesystem
---

# Filesystem

## Overview

A Filesystem Catalog is a method for storing and retrieving schemas, API definitions, and configuration files directly from a local filesystem. It provides a simple and efficient way to manage structured data formats like `avro`, `json`, `protobuf`, and OpenAPI without relying on external registries or network-based storage. This approach is particularly useful for environments requiring offline access, fast retrieval, and tight integration with file-based workflows.

## Filesystem Catalog in Zilla

In Zilla, the Filesystem Catalog enables direct schema resolution from local files, eliminating the need for external dependencies. This simplifies configuration management and improves performance by reducing network overhead while enforcing strict schema validation. Key benefits include:

- **Local Schema Storage**: Retrieve schemas and API definitions directly from the filesystem for faster access.
- **Enforced Schema Validation**: Ensures all messages conform to predefined schemas, preventing format mismatches.
- **Simplified Deployment**: Avoids external dependencies, making it easier to manage in containerized or on-premise deployments.

```yaml {3}
<!-- @include: ./.partials/filesystem.yaml -->
```

## Use Cases

### Validating API Traffic with an HTTP Proxy

The [http.proxy.schema.inline](https://github.com/aklivity/zilla-examples/tree/main/http.proxy.schema.inline) example demonstrates how Zilla can act as an HTTP proxy that validates requests and responses against predefined JSON Schemas stored in the filesystem. This ensures that all API traffic conforms to expected formats, preventing invalid data from reaching backend services and improving API reliability.

## Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/filesystem-options.md -->

:::
