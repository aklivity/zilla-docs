---
shortTitle: confluent-schema-registry
description: Zilla runtime confluent-schema-registry catalog
icon: aky-zilla-plus
category:
  - Catalog
---

# confluent-schema-registry Catalog

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

Zilla runtime confluent-schema-registry catalog supports the official [Confluent](https://docs.confluent.io/platform/current/schema-registry/index.html) schema registry.

```yaml {2}
catalog:
  type: confluent-schema-registry
  options:
    url: http://reg.example.com:8081
    context: default
```

## Configuration (\* required)

### type: confluent-schema-registry\*

Defines a catalog with a schema pulled from a remote schema registry to enforce validation.

### options

> `object`

#### options.url\*

> `string`

Schema Registry URL to access schemas via API calls.

#### options.context

> `string` | Default: `"default"`

Schema context represents an independent scope in the Schema Registry.

---

::: right
\* required
:::
