### routes

> `object[]`

| Property | Type | Description |
| -- | -- | -- |
| routes[].guarded |  `Map<string, string[]>` |  List of roles required by each named guard to authorize this route. | 
| routes[].when |  `object[]` |  List of conditions (any match) to match this route. Read more: [When a route matches](../../../protocol.md#when-a-route-matches) | 
| routes[].when[].path |  `string` |  Path with optional embedded parameter names, such as `/{topic}`. | 
| routes[].exit |  `string` |  Next binding when following this route. | 
| routes[].with |  `object` |  Kafka parameters used when adapting `sse` data streams to `kafka` data streams. | 
| routes[].with.topic\* |  `string` |  Topic name, optionally referencing path parameter such as `${params.topic}`. | 
| routes[].with.filters |  `object[]` |  Kafka filters for matched route when adapting `sse` data streams to `kafka` data streams. List of criteria (any match). All specified headers and key must match for the combined criteria to match. | 
| routes[].with.filters[].key |  `string` |  Message key, optionally referencing path parameter such as `${params.key}`. | 
| routes[].with.filters[].headers |  `Map<string, string>` |  Message headers, with value optionally referencing path parameter such as `${params.headerX}`. | 
| routes[].with.event |  `object` |  Defines the SSE event syntax used when delivering Kafka messages to SSE clients. | 
| routes[].with.event.id |  `enum` [ `${etag}`, `["${base64(key)}","${etag}"]` ] | Default: `${etag}` |  Format of `id` field in `sse` `event` | 

#### Examples

Conditional `sse-kafka` specific routes.

```yaml
routes:
  - when:
      - path: /items
    exit: kafka_cache_client
    with:
      topic: items-snapshots
      event:
        id: '["${base64(key)}","${etag}"]'
```