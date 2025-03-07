---
shortTitle: Apicurio Registry
---

# Apicurio Registry

## Overview

Apicurio Registry is an open-source schema registry that provides a centralized repository for managing and versioning API schemas and event definitions. In Zilla, Apicurio Registry serves as a schema catalog that enables dynamic schema resolution and validation for messages processed by Zilla’s event-driven framework. Its integration with Zilla provides several benefits:

- **Dynamic Schema Resolution:** Zilla retrieves schemas from Apicurio Registry instead of embedding them in its configuration, ensuring up-to-date definitions.  
- **Enhanced Data Validation:** Messages are validated against predefined schemas, improving data integrity and preventing format mismatches.  
- **Improved Interoperability:** Enables structured data exchange using standardized formats, including **AsyncAPI and OpenAPI definitions** for API governance.  

```yaml {2}
<!-- @include: ./.partials/apicurio-registry.yaml -->
```

## Usage Example

### API Gateway Schema Validation

As an API Gateway, Zilla can use Apicurio Registry to validate API requests and responses against JSON Schemas, ensuring data consistency and reducing errors. For example, our [Petstore demo](https://github.com/aklivity/zilla-demos/tree/main/petstore) showcases how Zilla enforces schema validation in an API environment. Schema updates are automatically fetched from Apicurio Registry, eliminating the need for manual reconfiguration and enabling smooth API evolution.

## Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/apicurio-registry-options.md -->

:::
