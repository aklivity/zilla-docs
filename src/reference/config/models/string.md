---
redirectFrom: /reference/config/models/model-string.html
shortTitle: string

category:
  - Models
---

# string Model

Defines a model to enforce validation for string data.

## Configuration (\* required)

### model: string

Specifies the model is a `string`.

```yaml {1}
model: string
encoding: utf_8
minLength: 1
maxLength: 100
pattern: ^wait=\d+$
```

### encoding

> `enum` [ "utf_8","utf_16" ]

Define character encoding for unicode.

### minLength

> `integer` | minimum: 1

Define string minimum length.

### maxLength

> `integer` | minimum: 1

Define string maximum length.

### pattern

> `string`

Define string regex pattern.
