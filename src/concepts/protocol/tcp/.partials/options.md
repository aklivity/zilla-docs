### options

> `object`

| Property | Type | Description |
| -- | -- | -- |
| options.host |  `string` |  Hostname or IP address. | 
| options.port |  `integer`, `string`, `array` |  Port number(s), including port number ranges with the pattern: `^\\d+(-\\d+)?$`. | 

#### Examples

The `tcp` specific options.

```yaml
options:
  host: 0.0.0.0
  port: 12345
```