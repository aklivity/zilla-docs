---
shortTitle: client
---

# smux client

The smux client binding receives multiple inbound application streams and encodes them as multiplexed sessions over a single `smux`-framed network connection.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```

## Configuration (\* required)

### routes

> `array`

Conditional `smux` specific routes.

#### routes[].guarded

> `object` as map of named `array` of `string`

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
Read more: [When a route matches](/concepts/protocol/README.md#route-matches)

#### routes[].with

> `object`

Route with override configuration.

#### routes[].exit

> `string`

Next binding when following this route.

```yaml
routes:
  - exit: net_client
```

<!-- @include: ../.partials/exit.md -->
<!-- @include: ../.partials/telemetry.md -->
