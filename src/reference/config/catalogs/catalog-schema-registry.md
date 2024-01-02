---
shortTitle: schema-registry
description: Zilla runtime schema-registry catalog
category:
  - Catalog
---

# schema-registry Catalog

::: info Feature Coming Soon <HopeIcon icon="fas fa-circle-right"/>
This is currently on the [Zilla roadmap](https://github.com/orgs/aklivity/projects/4). Star and watch the [Zilla repo](https://github.com/aklivity/zilla/releases) for new releases!
:::

Zilla runtime schema-registry catalog

```yaml {2}
catalog:
  type: schema-registry
  options:
    url: http://reg.example.com:8081
    context: default
```

## Summary

Defines a catalog with Schema Registry support to enforce validation.

## Configuration

:::: note Properties

- [options](#options)
  - [options.url](#options-url)
  - [options.context](#options-context)

::: right
\* required
:::

::::

### options

> `object`

```yaml
options:
```

#### options.url\*

> `string`

Schema Registry URL

#### options.context

> `string` | Default: `"default"`
