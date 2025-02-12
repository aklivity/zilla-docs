### options

> `object`

| Property | Type | Description |
| -- | -- | -- |
| options.endpoints |  `array` of `object` |  Contains `prometheus` endpoints. | 
| options.endpoints[].scheme\* |  `enum` [ `http` ] |  URL scheme to accept for endpoint. | 
| options.endpoints[].port\* |  `integer` |  URL port to accept for endpoint. | 
| options.endpoints[].path |  `string` |  URL path to accept for endpoint. | 

#### Examples

The `prometheus` specific options.

```yaml
options:
  endpoints:
    - scheme: http
      port: 7190
      path: /metrics
```