# Registering a Catalog

- catalog inline

```yaml
catalogs:
  my_inline_catalog:
    type: inline
    options:
      subjects:
        my_avro_subject:
          schema: |
            {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "status": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "status"
              ]
            }
```

- catalog registry

```yaml
catalogs:
  my_registry_catalog:
    type: karapace
    options:
      url: http://karapace-reg:8081
      context: default
```
