---
shortTitle: client
---

# kafka client

The kafka client binding

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```

## Configuration (\* required)

### options

> `object`

`client`-specific options.

```yaml
options:
  servers:
    - kafka:9092
  sasl:
    mechanism: plain
    username: my_username
    password: my_password
```

#### options.servers

> `array` of `string`

Bootstrap servers to use when connecting to `kafka` cluster.

#### options.sasl

> `object`

SASL credentials to use when connecting to `kafka` brokers.

<!-- @include: ../.partials/options-kafka-sasl.md -->

<!-- @include: ./.partials/routes.md -->
<!-- @include: ../.partials/exit.md -->
<!-- @include: ../.partials/telemetry.md -->