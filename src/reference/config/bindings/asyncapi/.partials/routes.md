### routes

> `array` of `object`

Conditional `asyncapi` specific routes.

```yaml
routes:
  - when:
      - spec: my-mqtt-api-spec
        operation: sendEvents
    exit: asyncapi_client
    with:
      spec: my-kafka-api-spec
      operation: toSensorData
  - when:
      - spec: my-mqtt-api-spec
        operation: receiveEvents
    exit: asyncapi_client
    with:
      spec: my-kafka-api-spec
      operation: onSensorData
```

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

List of conditions to match this route when adapting `asyncapi` streams.
Read more: [When a route matches](/concepts/protocol/README.md#route-matches)

#### when[].spec

> `string`

AsyncAPI spec label that matches the resolved specification for the request.

#### when[].operation

> `string`

AsyncAPI operationId to match, either exactly or as a glob pattern, e.g. `send*`.

#### when[].tag

> `string`

Matches when the resolved operation declares this tag.

#### when[].servers

> `array` of `object`

Matches when the resolved server for the request is one of these servers.

#### servers[].name

> `string`

Server name to match, as declared in the spec document.

#### servers[].url

> `string`

Server url to match.

#### routes[].with

> `object`

Defines the target AsyncAPI spec and operation to proxy this route into. Available for `kind: proxy` only, where it is required on every route.

```yaml
with:
  spec: my-kafka-api-spec
  operation: toSensorData
```

#### with.spec\*

> `string`

AsyncAPI spec label that the route exits with to the next binding.

#### with.operation

> `string`

AsyncAPI operationId that the route exits with to the next binding, either exactly or as a glob pattern. When omitted, falls back to the operation matched on the `when` side.
