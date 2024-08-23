---
shortTitle: json
description: Zilla runtime json model
category:
  - Models
---

# json Model

Zilla runtime json model

```yaml {1}
model: json
catalog:
  items-catalog:
    - strategy: topic
      version: latest
    - subject: items-snapshots
      version: latest
    - id: 1
```

## Configuration (\* required)

### model: json\*

Defines a model to utilize schema from catalog to enforce validation, ensuring adherence to predefined data structures.

<!-- @include: ./.partials/cataloged.md -->
