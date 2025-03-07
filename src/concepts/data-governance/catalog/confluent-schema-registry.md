---
shortTitle: Confluent Schema Registry
icon: aky-zilla-plus
---

# Confluent Schema Registry

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

## Overview

[Confluent Schema Registry](https://docs.confluent.io/platform/current/schema-registry/index.html) is a centralized schema management service that enables the storage, retrieval, and evolution of schemas for Kafka data streams. In Zilla, the Confluent Schema Registry serves as a schema catalog, allowing dynamic schema resolution and validation for messages processed within Zilla’s event-driven framework. Key benefits include:

- **Dynamic Schema Resolution**: Zilla fetches schemas from Confluent Schema Registry at runtime, reducing manual configuration and ensuring schema consistency.
- **Enhanced Data Validation**: Messages are validated against predefined schemas, improving data integrity and preventing format mismatches.

```yaml {2}
<!-- @include: ./.partials/confluent-schema-registry.yaml -->
```

## Configuration (\* required)

::: tabs

@tab vault

<!-- @include: ./.partials/vault.md -->

@tab options

<!-- @include: ./.partials/schema-registry-options.md -->

:::
