---
shortTitle: Int32
---

# Int32

The `int32` model in Zilla is a type definition used to represent 32-bit integers in configurations. It allows input in textual and binary format and constraints such as value range in regex. It restricts the number to be a multiple of a value. This ensures that 32-bit integer values have the expected formats.

```yaml {1}
model: int32
```

## Configuration (\* required)

::: tabs

@tab model

### model: int32

> `const`

Specifies the model is a `int32`.

<!-- @include: ./.partials/integer.md -->

:::
