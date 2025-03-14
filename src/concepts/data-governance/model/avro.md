---
shortTitle: Avro
---

# Avro

The `avro` model in Zilla defines structured data using [Apache Avro](https://avro.apache.org/) for serialization and deserialization in textual and binary formats. A `view` maps Avro-encoded messages to a structured format, while a `catalog` organizes schemas for consistency and reuse, ensuring proper data processing.

```yaml {1}
<!-- @include: ./.partials/avro.yaml -->
```

## Configuration (\* required)

::: tabs

@tab model

### model: avro

> `const`

Specifies the model is `avro`.

@tab view

### view

> `enum` [ `json` ]

Transforms the model from this data type to the Avro schema on produce and to this data type from the Avro schema on consume.

@tab catalog

<!-- @include: ./.partials/catalog.md -->

:::
