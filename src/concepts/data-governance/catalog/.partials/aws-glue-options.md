### options

> `object`

The `aws-glue` specific options.

| Property | Type | Description |
| -- | -- | -- |
| options.registry\* |  `string` |  The AWS Glue Registry name to access schemas. | 
| options.max-age |  `integer` | Default: `300` |  Configures the time to live in `seconds` for the schema information retrieved against the latest version. The default is 300 seconds or 5 minutes. | 
| options.compression |  `enum` [ `none`, `zlib` ] | Default: `none` |  Configures the compression level for the message payloads that are serialized by the models configured in this catalog. | 
