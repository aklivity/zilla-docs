---
shortTitle: Int64
---

# Int64

The string model in Zilla is a type definition used to represent 64-bit integers in configurations. It allows input in textual and binary format and constraints such as value range in regex. It restricts the number to be a multiple of a value. This ensures that 64-bit integer values have the expected formats.

```yaml {1}
model: int64
```

## Configuration (\* required)

::: tabs

@tab model

### model: int64

> `const`

Specifies the model is a `int64`.

<!-- @include: ./.partials/integer.md -->

:::
