### options

> `object`

| Property                | Type                                                                | Description                                                  |
| ----------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------ |
| options.servers         | `string[]`                                                          | Bootstrap servers to use when connecting to `kafka` cluster. |
| options.sasl            | `object`                                                            | SASL credentials to use when connecting to `kafka` brokers.  |
| options.sasl.mechanism  | `enum` [ `plain`, `scram-sha-1`, `scram-sha-256`, `scram-sha-512` ] | Supports `plain` and `scram` mechanisms.                     |
| options.sasl.username\* | `string`                                                            | SASL username.                                               |
| options.sasl.password\* | `string`                                                            | SASL password.                                               |

#### Example

The `client` specific options.

```yaml
options:
  servers:
    - kafka:9092
  sasl:
    mechanism: plain
    username: my_username
    password: my_password
```
