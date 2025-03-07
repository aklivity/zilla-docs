---
shortTitle: Inline
---

# Inline Catalog

## Overview

An Inline Catalog is a method for defining and storing schemas, API definitions, and configurations directly within Zilla's configuration file. This approach ensures fast access to schemas without relying on external registries.

```yaml {2}
<!-- @include: ./.partials/inline.yaml -->
```

## Usage Example

### Validating API Traffic with an HTTP Proxy

The [http.proxy.schema.inline](https://github.com/aklivity/zilla-examples/blob/main/http.proxy.schema.inline/zilla.yaml) example demonstrates how Zilla can act as an HTTP proxy that validates incoming API requests and outgoing responses against predefined JSON schemas. By embedding schemas inline, this configuration ensures strict validation without relying on external schema registries, improving API reliability and security.

## Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/inline-options.md -->

:::
