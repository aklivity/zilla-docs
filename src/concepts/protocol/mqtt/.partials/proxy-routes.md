### routes

> `object[]`

| Property | Type | Description |
| -- | -- | -- |
| routes[].guarded |  `Map<string, string[]>` |  List of roles required by each named guard to authorize this route. | 
| routes[].when |  `object[]` |  List of conditions (any match) to match this route when adapting `mqtt` topic streams to `kafka` topic streams. Read more: [When a route matches](../../../protocol.md#when-a-route-matches) | 
| routes[].when[].publish |  `object[]` |  Array of MQTT topic filters matching topic names for publish. | 
| routes[].when[].publish[].topic |  `string` |  MQTT topic filter pattern. | 
| routes[].when[].subscribe |  `object[]` |  Array of MQTT topic filters matching topic names for subscribe. | 
| routes[].when[].subscribe[].topic |  `string` |  MQTT topic filter pattern. | 
| routes[].exit |  `string` |  Next binding when following this route. | 
| routes[].with\* |  `object` |  Kafka parameters for matched route when adapting `mqtt` topic streams to `kafka` topic streams. | 
| routes[].with.messages |  `string` |  Kafka topic to use for the route. | 

#### Example 

Conditional `mqtt-kafka` specific routes.

```yaml
routes:
  - when:
      - publish:
          - topic: place/+/device/#
      - subscribe:
          - topic: place/+/device/#
    with:
      messages: mqtt-devices
    exit: kafka_cache_client
```