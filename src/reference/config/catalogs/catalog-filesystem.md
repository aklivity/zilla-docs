---
shortTitle: filesystem
description: Zilla runtime filesystem catalog
category:
  - Catalog
---

# filesystem Catalog

::: important Feature is in Incubator
Read how to [enable incubator features](../../../how-tos/install.md#enable-incubator-features). Star and watch the [Zilla repo](https://github.com/aklivity/zilla/releases) for new releases!
:::

Zilla runtime filesystem catalog

```yaml {2}
catalogs:
  catalog0:
    type: filesystem
    options:
      subjects:
        petstore:
          url: schema.yaml
```

## Summary

Defines a catalog with schemas, AsyncAPI/OpenAPI definitions or proto files pulled from the filesystem relative `zilla.yaml` to enforce validation, create APIs or gRPC services.

## Configuration

:::: note Properties

- [options](#options)
  - [options.subjects\*](#options-subjects)
    - [subjects.url\*](#subjects-url)

::: right
\* required
:::

::::

### options

> `object`

#### options.subjects\*

> `object` as map of named objects

Unique identifier for artifact categorization in the catalog.

##### subjects.url\*

> `string`

URL to access artifact from the filesystem. The URLs are relative to `zilla.yaml`.

