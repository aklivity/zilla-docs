---
shortTitle: Karapace Schema Registry
---

# Karapace Schema Registry

## Overview

Karapace Schema Registry is an open-source schema registry that enables seamless schema management for Kafka and other data platforms. By integrating with an external Karapace registry, Zilla can dynamically resolve schemas, ensuring compatibility and validation of Kafka messages. Key benefits include:

- **Centralized Schema Management**: Store and access schemas from a dedicated Karapace registry, ensuring consistency across services.
- **Dynamic Schema Resolution**: Automatically fetch and validate schemas at runtime, reducing manual updates.

```yaml {2}
<!-- @include: ./.partials/karaspace-schema-registry.yaml -->
```

## Usage Example

### Validating Kafka Messages with Karapace Schema Registry

The `http.kafka.karapace` example demonstrates how Zilla can integrate with the Karapace schema registry to validate Kafka messages. This setup ensures that all Kafka producers and consumers adhere to predefined schemas, enhancing data reliability and governance.

## Configuration (\* required)

::: tabs

@tab vault

<!-- @include: ./.partials/vault.md -->

@tab options

<!-- @include: ./.partials/schema-registry-options.md -->

:::
