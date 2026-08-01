The `mcp_kafka` client exposes a fixed set of intrinsic tools — there is no `options.tools` to author, and no upstream server or spec to derive them from. Each tool's `inputSchema` validates `tools/call` `arguments` before Zilla dispatches the matching Kafka request; a tool with no declared `outputSchema` still returns a result, either as `structuredContent` or as `content` text only.

### produce

> Not read-only, not idempotent

Appends one record to a topic.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `topic` | `string` | Yes | Topic to write to. |
| `value` | `string` | Yes | Record value. |
| `key` | `string` | No | Record key. |
| `partition` | `integer` | No | Explicit partition, chosen automatically when omitted. |

No `outputSchema` is declared; the result is a `content` text summary only.

### consume

> Read-only, idempotent

Reads records from a topic starting at an offset, streaming each record to the reply as it arrives.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `topic` | `string` | Yes | Topic to read from. |
| `partition` | `integer` | No | Specific partition to read, every partition when omitted. |
| `offset` | `integer` | No | Starting offset, the earliest available record when omitted. |
| `limit` | `integer` | No | Maximum records to return (1-100, default 10). |

No `outputSchema` is declared, though the result's `structuredContent` follows this shape:

```json
{
  "topic": "orders",
  "messages": [
    { "key": null, "headers": [], "value": "hello from mcp-kafka" }
  ],
  "count": 1
}
```

### create_topics

> Not destructive

Creates one or more topics.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `topics` | `array` of `object` | Yes | Topics to create. |
| `topics[].name` | `string` | Yes | Topic name. |
| `topics[].partitions` | `integer` | Yes | Partition count. |
| `topics[].replicas` | `integer` | Yes | Replication factor. |
| `topics[].assignments` | `array` | No | Explicit partition-to-broker placement. |
| `topics[].configs` | `object` | No | Per-topic config overrides. |
| `timeout` | `integer` | No | Request timeout, in milliseconds. |
| `validate_only` | `boolean` | No | Validate the request without creating any topic. |

`outputSchema`:

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| `topics` | `array` of `object` | Yes | One entry per requested topic. |
| `topics[].name` | `string` | Yes | Topic name. |
| `topics[].error` | `integer` | Yes | Kafka error code, `0` on success. |
| `topics[].error_message` | `string` | No | Kafka error message, present only on failure. |

### delete_topics

> Not read-only, not idempotent

Deletes one or more topics by name.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `topics` | `array` of `string` | Yes | Topic names to delete. |
| `timeout` | `integer` | No | Request timeout, in milliseconds. |

`outputSchema` — same shape as [`create_topics`](#create-topics):

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| `topics` | `array` of `object` | Yes | One entry per requested topic. |
| `topics[].name` | `string` | Yes | Topic name. |
| `topics[].error` | `integer` | Yes | Kafka error code, `0` on success. |
| `topics[].error_message` | `string` | No | Kafka error message, present only on failure. |

### describe_configs

> Read-only, idempotent

Reads the effective configuration of a topic or broker, including values Kafka set by default.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `resource_type` | `enum` [ `topic`, `broker` ] | Yes | Resource kind to describe. |
| `resource_name` | `string` | Yes | Resource name — a topic name, or a broker id. |

`outputSchema`:

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| `configs` | `array` of `object` | Yes | Every config Kafka reports for the resource. |
| `configs[].name` | `string` | Yes | Config key. |
| `configs[].value` | `string` | No | Config value. |
| `configs[].is_default` | `boolean` | Yes | Whether the value is a broker default rather than an explicit override. |
| `configs[].is_sensitive` | `boolean` | Yes | Whether Kafka redacted the value. |

### alter_configs

> Not destructive

Sets configs on a topic or broker.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `resource_type` | `enum` [ `topic`, `broker` ] | Yes | Resource kind to alter. |
| `resource_name` | `string` | Yes | Resource name — a topic name, or a broker id. |
| `configs` | `object` as map of named `string` | Yes | Config keys and their new values. |

`outputSchema`:

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| `resource_type` | `enum` [ `topic`, `broker` ] | Yes | Resource kind altered. |
| `resource_name` | `string` | Yes | Resource name altered. |
| `updated` | `boolean` | Yes | Whether the change was applied. |

### list_topics

> Read-only, idempotent

Lists every topic on the broker, with each entry's own partition count and replication factor.

No arguments.

`outputSchema`:

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| `topics` | `array` of `object` | Yes | One entry per topic on the broker. |
| `topics[].name` | `string` | Yes | Topic name. |
| `topics[].partition_count` | `integer` | Yes | Partition count. |
| `topics[].replication_factor` | `integer` | Yes | Replication factor. |

### describe_topic

> Read-only, idempotent

Describes one topic by name, reporting each partition's leader, replica set, and in-sync replica (ISR) set.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `topic` | `string` | Yes | Topic to describe. |

`outputSchema`:

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Topic name. |
| `partitions` | `array` of `object` | Yes | One entry per partition. |
| `partitions[].partition_id` | `integer` | Yes | Partition id. |
| `partitions[].leader` | `integer` | Yes | Broker id of the current leader. |
| `partitions[].replicas` | `array` of `integer` | Yes | Broker ids holding a replica. |
| `partitions[].isr` | `array` of `integer` | Yes | Broker ids currently in sync. |

### cluster_overview

> Read-only, idempotent

Summarizes the whole cluster — broker count, controller broker id, and under-replicated and offline partition counts — as a single health check across every topic at once.

No arguments.

`outputSchema`:

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| `broker_count` | `integer` | Yes | Number of brokers in the cluster. |
| `controller_id` | `integer` | Yes | Broker id of the current controller. |
| `under_replicated_partitions` | `integer` | Yes | Partitions with fewer in-sync replicas than configured. |
| `offline_partitions` | `integer` | Yes | Partitions with no available leader. |
| `topic_count` | `integer` | Yes | Number of topics in the cluster. |

### list_brokers

> Read-only, idempotent

Lists every broker in the cluster.

No arguments.

`outputSchema`:

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| `brokers` | `array` of `object` | Yes | One entry per broker. |
| `brokers[].broker_id` | `integer` | Yes | Broker id. |
| `brokers[].host` | `string` | Yes | Broker host. |
| `brokers[].port` | `integer` | Yes | Broker port. |
| `brokers[].rack` | `string` | No | Broker rack id, when configured. |

### describe_cluster

> Read-only, idempotent

Reports the cluster id and the controller broker's id.

No arguments.

`outputSchema`:

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| `cluster_id` | `string` | No | KRaft-generated cluster identifier. |
| `controller_id` | `integer` | Yes | Broker id of the current controller. |
| `authorized_operations` | `integer` | Yes | Bitfield of operations the connection is authorized to perform on the cluster. |

### list_consumer_groups

> Read-only, idempotent

Lists every consumer group known to the cluster.

No arguments.

`outputSchema`:

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| `groups` | `array` of `object` | Yes | One entry per consumer group. |
| `groups[].group_id` | `string` | Yes | Consumer group id. |
| `groups[].state` | `string` | Yes | Group state, such as `Stable` or `Dead`. |

### describe_consumer_group

> Read-only, idempotent

Describes one consumer group by id, including its current members and their partition assignments. A group id that has never committed an offset reports state `Dead` — Kafka's actual behavior for a group that does not yet exist, not an error.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `group_id` | `string` | Yes | Consumer group to describe. |

`outputSchema`:

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| `group_id` | `string` | Yes | Consumer group id. |
| `state` | `string` | Yes | Group state, such as `Stable` or `Dead`. |
| `members` | `array` of `object` | Yes | One entry per group member. |
| `members[].member_id` | `string` | Yes | Member id. |
| `members[].client_id` | `string` | Yes | Client id reported by the member. |
| `members[].assignments` | `array` of `object` | No | Partitions assigned to this member. |
| `members[].assignments[].topic` | `string` | Yes | Assigned topic. |
| `members[].assignments[].partition` | `integer` | Yes | Assigned partition. |

### reset_offsets

> Not read-only, not idempotent

Commits an explicit offset for a consumer group on one topic-partition, overwriting whatever the group last committed.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `group` | `string` | Yes | Consumer group to commit for. |
| `topic` | `string` | Yes | Topic of the partition to commit. |
| `partition` | `integer` | Yes | Partition to commit. |
| `offset` | `integer` | Yes | Offset to commit. |

No `outputSchema` is declared; the result is a `content` text summary only.
