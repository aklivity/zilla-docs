---
shortTitle: Float
---

# Float

The string model in Zilla is a type definition used to represent 32-bit floats in configurations. It allows input in textual and binary format and constraints such as value range in regex. It restricts the number to be a multiple of a value. This ensures that 32-bit floats values have the expected formats.

```yaml {1}
model: float
```

## Configuration (\* required)

::: tabs

@tab model

### model: float

> `const`

Specifies the model is a `float`.

<!-- @include: ./.partials/number.md -->

:::
