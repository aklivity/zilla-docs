---
shortTitle: Avro
---

# Avro

Defines a model to utilize schema from catalog to enforce validation, ensuring adherence to predefined data structures.

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

