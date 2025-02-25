---
shortTitle: Protobuf
---

# Protobuf

Defines a model to utilize schema from catalog to enforce validation, ensuring adherence to predefined data structures.

```yaml {1}
<!-- @include: ./.partials/protobuf.yaml -->
```

## Configuration (\* required)

::: tabs

@tab model

### model: protobuf

> `const`

Specifies the model is a `protobuf`.

@tab view

### view

> `enum` [ `json` ]

Transforms the model from this data type to the Protobuf schema on produce and to this data type from the Protobuf schema on consume.

@tab catalog

<!-- @include: ./.partials/catalog-protobuf.md -->

:::

