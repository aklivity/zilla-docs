---
shortTitle: String
---

# String

## Overview

The string model in Zilla is a schema definition used to represent textual data in configurations. It allows specifying constraints such as `pattern` (a regular expression for validation), `minLength`, and `maxLength` to control the allowed input format and size that ensures that string values conform to expected formats.

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
