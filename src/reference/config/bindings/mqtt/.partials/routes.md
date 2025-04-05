### routes\*

> `array` of `object`

Conditional `mqtt` specific routes.

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

```yaml
routes:
  - when:
      - session:
          - client-id: "*"
      - publish:
          - topic: command/one
          - topic: command/two
      - subscribe:
          - topic: reply
```

#### when[].session

> `array` of `object`

Array of mqtt session properties

#### session[].client-id

> `string`

An MQTT client identifier, allowing the usage of wildcards.

#### when[].publish

> `array` of `object`

Array of MQTT topic configs for publish capability.

#### publish[].topic

> `string`

The MQTT topic to match on that supports standard MQTT wildcards `/+/`, `/#`.

Also, supports embedded parameters (e.g., `{id}`) for dynamic topic matching.

#### publish[].params

> `object` as map of named `string`

Enforce validation of topic embedded parameters.

```yaml
publish:
  - topic: device/{id}
    params:
      id: ${guarded['jwt'].identity}
```

#### when[].subscribe

> `array` of `object`

Array of MQTT topic configs for subscribe capability.

#### subscribe[].topic

> `string`

The MQTT topic to match on that supports standard MQTT wildcards `/+/`, `/#`.

Also, supports embedded parameters (e.g., `{id}`) for dynamic topic matching.

#### subscribe[].params

> `object` as map of named `string`

Enforce validation of topic embedded parameters.

```yaml
subscribe:
  - topic: device/{id}
    params:
      id: ${guarded['jwt'].identity}
```

#### routes[].exit

> `string`

Next binding when following this route.

```yaml
routes:
  - when:
    ...
    exit: mqtt_kafka_proxy
```
