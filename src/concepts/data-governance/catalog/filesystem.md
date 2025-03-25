---
shortTitle: Filesystem
---

# Filesystem

## Overview

A Filesystem Catalog is a method for storing and retrieving schemas, API definitions, and configuration files directly from a local filesystem. In Zilla, the Filesystem Catalog enables direct schema resolution from local files, eliminating the need for external dependencies. This simplifies configuration management and improves performance by reducing network overhead while enforcing strict schema validation. Key benefits include:

- **Local Schema Storage**: Retrieve schemas and API definitions directly from the filesystem for faster access.
- **Enforced Schema Validation**: Ensures all messages conform to predefined schemas, preventing format mismatches.

```yaml {3}
<!-- @include: ./.partials/filesystem.yaml -->
```

## Usage Example

### Validating API Traffic with an HTTP Proxy

The [`http.kafka.proto.json`](https://github.com/aklivity/zilla/tree/develop/examples/http.kafka.proto.json) example showcases how Zilla enables sending a protobuf object as JSON to a REST endpoint, where it is validated and converted to protobuf before being produced onto Kafka.

## Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/filesystem-options.md -->

:::
