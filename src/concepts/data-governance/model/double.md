---
shortTitle: Double
---

# Double

The string model in Zilla is a type definition used to represent 64-bit floats in configurations. It allows input in textual and binary format and constraints such as value range in regex. It restricts the number to be a multiple of a value. This ensures that 64-bit floats values have the expected formats.

```yaml {1}
model: double
```

## Configuration (\* required)

::: tabs

@tab model

### model: double

> `const`

Specifies the model is a `double`.

<!-- @include: ./.partials/number.md -->

:::
