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

> `array` of `enum` [ `produce`, `fetch`, `metadata`, `update_metadata`, `offset_commit`, `offset_fetch`, `offset_delete`, `find_coordinator`, `list_offsets`, `sasl_handshake`, `api_versions`, `join_group`, `heartbeat`, `leave_group`, `sync_group`, `init_producer_id`, `offset_for_leader_epoch`, `add_partitions_to_transaction`, `add_offsets_to_transaction`, `end_transaction`, `write_transaction_markers`, `transaction_offset_commit`, `sasl_authenticate`, `create_topics`, `describe_configs`, `alter_configs`, `incremental_alter_configs`, `create_partitions`, `delete_topics`, `delete_records`, `consumer_group_heartbeat`, `share_group_heartbeat`, `share_group_describe`, `leader_and_isr`, `elect_leaders`, `alter_partition`, `alter_partition_reassignments`, `list_partition_reassignments`, `describe_topic_partitions`, `describe_log_directories`, `alter_replica_log_directories`, `describe_producers` ]

Kafka API keys to match.

#### routes[].guarded

> `object` as map of named `array` of `string`

List of roles required by each named guard to authorize this route.

#### routes[].exit

> `string`

Next binding when following this route.
