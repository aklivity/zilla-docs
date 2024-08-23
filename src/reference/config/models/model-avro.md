---
shortTitle: avro
description: Zilla runtime avro model
category:
  - Models
---

# avro model

Zilla runtime avro model

```yaml {1}
model: avro
view: json
catalog:
  items-catalog:
    - strategy: topic
      version: latest
    - subject: items-snapshots
      version: latest
    - id: 1
```

## Configuration (\* required)

### model: avro\*

Defines a model to utilize schema from catalog to enforce validation, ensuring adherence to predefined data structures.

### view

> `enum` [ "json" ]

Transforms the model from this data type to the Avro schema on produce and to this data type from the Avro schema on consume.

<!-- @include: ./.partials/cataloged.md -->
