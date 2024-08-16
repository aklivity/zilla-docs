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

### catalog\*

> `object`

To map defined catalog for schema retrieval based on catalog specific parameters. Any of the possible combination can be configured.

> `id`
-----
> `strategy`
> `version`
-----
> `subject`
> `version`

#### catalog.strategy

> `enum` [ "topic" ]

To determine the subject based on the specified strategy

#### catalog.subject

> `string`

Unique identifier for schema categorization in the catalog.

#### catalog.version

> `string` | Default: `"latest"`

Specific iteration or version of a registered schema in the defined catalog.

#### catalog.id

> `integer`

Define specific schema id to refer from catalog.
