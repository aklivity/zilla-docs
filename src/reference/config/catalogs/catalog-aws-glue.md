---
shortTitle: aws-glue
description: Zilla runtime aws-glue catalog
icon: aky-zilla-plus
category:
  - Catalog
---

# aws-glue Catalog

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

Zilla runtime aws-glue catalog

```yaml {2}
catalog:
  type: aws-glue
  options:
    registry: zilla
    max-age: 30
    compression: zlib
```

## Summary

Defines a catalog with a schema pulled from aws glue to enforce validation.

## Configuration

:::: note Properties

- [options](#options)
  - [options.registry\*](#options-registry)
  - [options.max-age](#options-max-age)
  - [options.compression](#options-compression)

::: right
\* required
:::

::::

### options

> `object`

#### options.registry\*

> `string`

AWS Glue Registry name to access schemas.

#### options.max-age

> `number` | Default: `"300"`

Configure the Time-To-Live for the schema information retrieved against latest version. Defaults to 5 minutes. 

#### options.compression

> `enum` [ "none", "zlib" ] | Default: `"none"`

Configuration to set compression level.
