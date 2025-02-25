### options\*

> `object`

| Property           | Type      | Description                                                                |
| ------------------ | --------- | -------------------------------------------------------------------------- |
| options.external\* | `object`  | Kafka proxy endpoint used by external clients.                             |
| external.host\*    | `string`  | Hostname pattern for external Kafka broker names, where `#` is an integer. |
| external.port\*    | `integer` | Port number for external Kafka broker.                                     |
| options.internal\* | `object`  | Internal Kafka broker endpoint.                                            |
| internal.host\*    | `string`  | Hostname pattern for internal Kafka broker names, where `#` is an integer. |
| internal.port\*    | `integer` | Port number for internal Kafka broker.                                     |

#### Example

The `kafka-proxy` specific options.

```yaml
options:
  external:
    host: kafka-#.external.net
    port: 9093
  internal:
    host: b-#.kafka.internal.net
    port: 9094
```
