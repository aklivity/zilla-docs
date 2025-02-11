---
shortTitle: Confluent Schema Registry
icon: aky-zilla-plus
---

# Confluent Schema Registry

Defines a catalog with a schema pulled from a remote schema registry to enforce validation.

Zilla runtime confluent-schema-registry catalog supports the official [Confluent](https://docs.confluent.io/platform/current/schema-registry/index.html) schema registry.

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

```yaml {2}
<!-- @include: ./.partials/confluent-schema-registry.yaml -->
```

## Configuration (\* required)

::: tabs

@tab vault

<!-- @include: ../../protocol/.partials/vault.md -->

@tab options

<!-- @include: ./.partials/schema-registry-options.md -->

:::