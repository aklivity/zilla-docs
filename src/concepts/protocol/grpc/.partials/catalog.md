### catalog

> `object` as map of named `array`

| Property            | Type     | Description                                                                  | Default Value |
| ------------------- | -------- | ---------------------------------------------------------------------------- | ------------- |
| catalog[].subject\* | `string` | Unique identifier for schema categorization in the catalog.                  |               |
| catalog[].version   | `string` | Specific iteration or version of a registered schema in the defined catalog. | `latest       |

#### Example

To map defined catalog for schema retrieval based on catalog specific parameters.

```yaml
catalog:
  my_catalog:
    - subject: http
```
