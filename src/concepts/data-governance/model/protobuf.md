---
shortTitle: Protobuf
---

# Protobuf

The `protobuf` model in Zilla defines structured data using [Protocol Buffers](https://protobuf.dev/) for efficient serialization and deserialization in textual and binary formats. A `view` maps Protobuf-encoded messages to a structured format, while a `catalog` organizes schemas for consistency and reuse, ensuring proper data processing.

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
