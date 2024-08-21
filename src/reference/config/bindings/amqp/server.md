---
shortTitle: amqp server
category:
  - Binding
tag:
  - Server
---

# amqp server Binding

The `server` kind `amqp` binding decodes the AMQP protocol on the inbound network stream, producing higher level application streams for each send or receive link. Defines a binding with [AMQP 1.0](https://docs.oasis-open.org/amqp/core/v1.0/os/amqp-core-overview-v1.0-os.html) protocol support, with `server` behavior. Conditional routes based on the link address are used to route these application streams to an `exit` binding.

```yaml {2}
amqp_server:
  type: amqp
  kind: server
  routes:
    - when:
        - address: echo
          capabilities: send_and_receive
    exit: echo_server
```

::: important Feature is in Incubator
Read how to [enable incubator features](../../../how-tos/deploy-operate.md#enable-incubator-features). Star and watch the [Zilla repo](https://github.com/aklivity/zilla/releases) for new releases!
:::

### exit

> `string`

Default exit binding when no conditional routes are viable.

```yaml
exit: echo_server
```

### routes

> `array` of `object`

Conditional `amqp`-specific routes for adapting HTTP request-response streams to Kafka topic streams.

```yaml
routes:
  - when:
      - address: echo
        capabilities: send_and_receive
    exit: echo_server
```

#### routes[].guarded

> `object` as named map of `string:string` `array`

List of roles required by each named guard to authorize this route.

```yaml
routes:
  - guarded:
      my_guard:
        - read:items
```

#### routes[].when

> `array` of `object`

List of conditions (any match) to match this route.
Read more: [When a route matches](../../../concepts/bindings.md#when-a-route-matches)

```yaml
routes:
  - when:
      - address: echo
        capabilities: send_and_receive
```

##### when[].address

> `string`

Link address.

##### when[].capabilities

> `enum` [ "send_only", "receive_only", "send_and_receive" ] | Default: `"send_and_receive"`

Send or receive, or both.

#### routes[].exit\*

> `string`

Next binding when following this route.

```yaml
routes:
  - when:
    ...
    exit: echo_server
```

<!-- @include: ../.partials/telemetry-grpc.md -->
