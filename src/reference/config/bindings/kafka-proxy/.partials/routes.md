### routes

> `array` of `object`

Conditional `kafka-proxy` specific routes.

#### routes[].when

> `array` of `object`

List of conditions (any match) to match this route.

#### when[].topic

> `string`

Topic name to match.

#### when[].api

> `array` of `enum` [ `produce`, `fetch`, `metadata`, `offset_commit`, `offset_fetch`, `find_coordinator`, `list_offsets`, `sasl_handshake`, `api_versions`, `join_group`, `heartbeat`, `leave_group`, `sync_group`, `init_producer_id`, `add_partitions_to_transaction`, `add_offsets_to_transaction`, `end_transaction`, `write_transaction_markers`, `transaction_offset_commit`, `sasl_authenticate`, `create_topics`, `alter_configs`, `incremental_alter_configs`, `create_partitions`, `delete_topics` ]

Kafka API keys to match.

#### routes[].with

> `object`

Properties applied when following this route.

#### routes[].guarded

> `object` as map of named `array` of `string`

List of roles required by each named guard to authorize this route.

#### routes[].exit

> `string`

Next binding when following this route.
