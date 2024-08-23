### options

> `object`

`grpc`-specific options.

```yaml
grpc_client:
  type: grpc
  kind: client
  exit: http_client
```

#### options.services

::: warning Deprecated
This property will be removed in a future release. To access '.proto' files from the filesystem, use the [filesystem](./../catalogs/catalog-filesystem.md) catalog instead.
:::

> `array` of `string`

Protobuf service definition filenames, typically with `.proto` filename extension.
