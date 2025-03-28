---
shortTitle: Catalog
---

# Catalog

Each configured `catalog` represents a resource for referencing versioned assets. Catalogs make configuring Zilla more agnostic to specific API and Model design.

A catalog provides Zilla bindings with schemas, specs, and other files needed to implement the binding. For example, schema models are used to validate messages proxied by Zilla.

```yaml
name: zilla-namespace

catalogs:
  host_filesystem:
    type: filesystem
    options:
      subjects:
        petstore:
          path: petstore.yaml
```

## Registering a Catalog

A registered catalog is a namespace scoped item in a zilla config that can be reused throughout the config.

### Local Catalogs

Local catalogs are used to quickly bootstrap a Zilla config or package a standard schema that doesn't change often with a Zilla install.

A simple way to reference a file in Zilla is from the local filesystem. Adding files to Zilla's runtime environment relative to the Zilla install directory.

```yaml
catalogs:
  my_host_filesystem_catalog:
    type: filesystem
    options:
      subjects:
        local_file:
          path: relative/path/to/local.file
```

In some environments the local filesystem isn't accessible. Schema subjects can be defined inside of the Zilla config to keep all of the relevant model information in one place.

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

### Remote Catalogs

Remote catalogs allow Zilla to fetch existing schemas stored in an external service. Zilla will pull and maintain an up to date version of the specified schema meaning the running Zilla doesn't need to be redeployed when new data models are pushed. Zilla can also reference specific versions.

Registering remote catalogs is simple. Zilla needs to know the address for the registry and any relevant information about where the resources in the registry will be found. Once a remote catalog is registered the [model configs](../model/README.md#structured-message-data) will specify which resources and versions to fetch and use.

```yaml
catalogs:
  my_schema_registry_catalog:
    type: schema-registry
    options:
      url: ${{env.SCHEMA_REGISTRY_URL}}
      context: default
  my_apicurio_registry_catalog:
    type: apicurio-registry
    options:
      url: ${{env.APICURIO_URL}}
      group-id: my_group_id
```

> [Apicurio in the Petstore REST Demo](https://github.com/aklivity/zilla-demos/tree/main/petstore)
