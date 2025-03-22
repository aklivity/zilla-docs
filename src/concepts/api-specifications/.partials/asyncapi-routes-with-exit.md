### routes

> `object[]`

| Property | Type | Description |
| -- | -- | -- |
| routes[].guarded |  `Map<string, string[]>` |  List of roles required by each named guard to authorize this route. | 
| routes[].when |  `object[]` |  List of conditions to match this route when adapting `asyncapi` MQTT streams to `asyncapi` Kafka streams. Read more: [When a route matches](../../protocol.md#when-a-route-matches) | 
| routes[].when[].api-id |  `string` |  AsyncAPI spec identifier that matches from `asyncapi` binding MQTT stream. | 
| routes[].when[].operation-id |  `string` |  AsyncAPI OperationId that can be mapped between AsyncAPI MQTT and AsyncAPI Kafka spec | 
| routes[].with |  `object` |  Defines the route with the AsyncAPI spec identifier and OperationId. | 
| routes[].with.api-id |  `string` |  AsyncAPI spec identifier that the route exits with to the next binding. | 
| routes[].with.operation-id |  `string` |  AsyncAPI OperationId that the route exits with to the next binding. | 
| routes[].exit |  `string` |  Next binding when following this route. | 

#### Examples

Conditional `asyncapi` specific routes.

```yaml
    routes:
      - when:
          - api-id: my-mqtt-api-spec
            operation-id: sendEvents
        exit: asyncapi_client
        with:
          api-id: my-kafka-api-spec
          operation-id: toSensorData
      - when:
          - api-id: my-mqtt-api-spec
            operation-id: receiveEvents
        exit: asyncapi_client
        with:
          api-id: my-kafka-api-spec
          operation-id: onSensorData
```
