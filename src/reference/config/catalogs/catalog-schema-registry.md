---
shortTitle: schema-registry
description: Zilla runtime schema-registry catalog
category:
  - Catalog
---

# schema-registry Catalog

Zilla runtime schema-registry catalog.

```yaml {2}
catalog:
  type: schema-registry
  options:
    url: http://reg.example.com:8081
    context: default
```

## Configuration (\* required)

### type: schema-registry\*

Defines a catalog with a schema pulled from a remote schema registry to enforce validation.

### options

> `object`

#### options.url\*

> `string`

Schema Registry URL to access schemas via API calls.

#### options.context

> `string` | Default: `"default"`

Schema context represents an independent scope in the Schema Registry.
