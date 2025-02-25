---
shortTitle: String
---

# String

Defines a model to enforce validation for string data.

```yaml {1}
<!-- @include: ./.partials/string.yaml -->
```

## Configuration (\* required)

::: tabs 

@tab model

### model: string

> `const`

Specifies the model is a `string`.

@tab encoding

### encoding

> `enum` [ `utf_8`, `utf_16` ]

Define character encoding for unicode.

@tab minLength

### minLength

> `integer` | Minimum: `1`

Define string minimum length.

@tab maxLength

### maxLength

> `integer` | Minimum: `1`

Define string maximum length.

@tab pattern

### pattern

> `string`

Define string regex pattern.

:::