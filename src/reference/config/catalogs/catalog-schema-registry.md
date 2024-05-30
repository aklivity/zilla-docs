---
shortTitle: schema-registry
description: Zilla runtime schema-registry catalog
icon: aky-zilla-plus
category:
  - Catalog
---

# schema-registry Catalog

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

Zilla runtime schema-registry catalog

```yaml {2}
catalog:
  type: schema-registry
  options:
    url: http://reg.example.com:8081
    context: default
```

## Summary

Defines a catalog with a schema pulled from a remote schema registry to enforce validation.

## Configuration

:::: note Properties

- [options](#options)
  - [options.url\*](#options-url)
  - [options.context](#options-context)

::: right
\* required
:::

::::

### options

> `object`

#### options.url\*

> `string`

Schema Registry URL to access schemas via API calls.

#### options.context

> `string` | Default: `"default"`

Schema context represents an independent scope in the Schema Registry.
