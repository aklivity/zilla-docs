---
shortTitle: string
description: Zilla runtime string model
category:
  - Models
---

# string Model

Zilla runtime string model

## Configuration (\* required)

### model: string\*

Defines a model to enforce validation for string data.

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
