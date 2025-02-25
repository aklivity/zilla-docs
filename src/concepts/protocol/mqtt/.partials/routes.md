### routes\*

> `object[]`

| Property | Type | Description |
| -- | -- | -- |
| routes[].guarded |  ``Map<string, string[]>`` |  List of roles required by each named guard to authorize this route. | 
| routes[].when |  `object[]` |  List of conditions (any match) to match this route. Read more: [When a route matches](../../../protocol.md#when-a-route-matches) | 
| routes[].when[].session |  `object[]` |  Array of mqtt session properties | 
| routes[].when.session[].client-id |  `string` |  An MQTT client identifier, allowing the usage of wildcards. | 
| routes[].when[].publish |  `object[]` |  Array of MQTT topic names for publish capability. | 
| routes[].when[].publish[].topic |  `string` |  The MQTT topic to match on that supports standard MQTT wildcards `/+/`, `/#`. | 
| routes[].when[].subscribe |  `object[]` |  Array of MQTT topic names for subscribe capability. | 
| routes[].when[].subscribe[].topic |  `string` |  The MQTT topic to match on that supports standard MQTT wildcards `/+/`, `/#`. | 
| routes[].exit |  `string` |  Next binding when following this route. | 

#### Example

Conditional `mqtt` specific routes.

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