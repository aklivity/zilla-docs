---
shortTitle: protobuf
description: Zilla runtime protobuf model
category:
  - Models
---

# protobuf Model

::: info Feature Coming Soon <HopeIcon icon="fas fa-circle-right"/>
This is currently on the [Zilla roadmap](https://github.com/orgs/aklivity/projects/4). Star and watch the [Zilla repo](https://github.com/aklivity/zilla/releases) for new releases!
:::

Zilla runtime protobuf model

```yaml {1}
model: protobuf
view: json
catalog:
  items-catalog:
    - strategy: topic
      version: latest
      record: example
    - subject: items-snapshots
      version: latest
      record: example
    - id: 1
      record: example
```

## Summary

Defines a model to utilize schema from catalog to enforce validation, ensuring adherence to predefined data structures.

## Configuration

:::: note Properties

- [view](#view)
- [catalog\*](#catalog)
  - [catalog.strategy](#catalog-strategy)
  - [catalog.subject](#catalog-subject)
  - [catalog.version](#catalog-version)
  - [catalog.id](#catalog-id)
  - [catalog.record\*](#catalog-record)

::: right
\* required
:::

::::

### view

> `string`

Facilitates the model to effortlessly handle JSON data, ensuring adherence to Protobuf schema

### catalog\*

> `object`

#### catalog.strategy

> `string`

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

#### catalog.record\*

> `string`

Define specific record to refer from Protobuf schema.
