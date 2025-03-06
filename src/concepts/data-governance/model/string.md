---
shortTitle: String
---

# String

## Overview

The string model in Zilla is a schema definition used to represent textual data in configurations. It allows specifying constraints such as `pattern` (a regular expression for validation), `minLength`, and `maxLength` to control the allowed input format and size. This ensures that string values conform to expected formats, improving data integrity and validation within Zilla's configuration system. The string model is commonly used for defining structured text fields, such as identifiers, names, or messages, within Zilla's declarative API gateway configurations.

```yaml {1}
<!-- @include: ./.partials/string.yaml -->
```

## Use Cases

### Enforcing String Validation in an HTTP Proxy

The [http.proxy.schema.inline](https://github.com/aklivity/zilla-examples/tree/main/http.proxy.schema.inline) example highlights how Zilla applies schema validation to HTTP requests and responses. In this configuration, the status field is explicitly defined as a string, ensuring that only properly formatted string values are accepted. This prevents type mismatches, enhances data integrity, and maintains consistency across API interactions.

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
