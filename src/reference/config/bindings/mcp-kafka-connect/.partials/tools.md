The `mcp-kafka-connect` client exposes a fixed set of intrinsic tools, derived from a bundled Kafka Connect REST API specification — there is no `options.tools` to author, and no upstream server or spec to select. Each tool's `inputSchema` validates `tools/call` `arguments` before Zilla dispatches the matching request to `options.server`; a tool with no fixed `outputSchema` still returns a result, either as `structuredContent` mirroring the raw upstream JSON response or as `content` text only.

### list_connectors

> Read-only, idempotent

Lists the names of every connector on the worker.

No arguments.

No `outputSchema` is declared; the result is a `content` text summary only.

### create_connector

> Not destructive, not idempotent

Creates a new connector.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Connector name. |
| `config` | `object` as map of named `string` | Yes | Connector configuration properties. |

No `outputSchema` is declared; the result is a `content` text summary only.

### describe_connector

> Read-only, idempotent

Reads one connector's configuration and task list by name.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `connector` | `string` | Yes | Connector to describe. |

No `outputSchema` is declared; the result is a `content` text summary only.

### delete_connector

> Destructive, idempotent

Deletes a connector.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `connector` | `string` | Yes | Connector to delete. |

No `outputSchema` is declared; the result is a `content` text summary only.

### describe_connector_config

> Read-only, idempotent

Reads the effective configuration of a connector.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `connector` | `string` | Yes | Connector to read the configuration of. |

No fixed `outputSchema` is declared; the result's `structuredContent` mirrors the raw upstream JSON response, with no fixed property list.

### update_connector_config

> Not destructive, idempotent

Creates or updates a connector by setting its full configuration.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `connector` | `string` | Yes | Connector to configure. |
| `connector.class` | `string` | Yes | Connector class to instantiate. |
| `tasks.max` | `string` | Yes | Maximum number of tasks to run. |

No `outputSchema` is declared; the result is a `content` text summary only.

### validate_connector_config

> Read-only, idempotent

Validates a connector configuration against a plugin's configuration definition, without creating or updating any connector.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `pluginName` | `string` | Yes | Connector plugin to validate against. |
| `connector.class` | `string` | Yes | Connector class to validate. |
| `tasks.max` | `string` | Yes | Maximum number of tasks to validate. |

No `outputSchema` is declared; the result is a `content` text summary only, such as `Validated connector config with 0 errors`.

### describe_connector_status

> Read-only, idempotent

Reads a connector's current state and the state of each of its tasks.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `connector` | `string` | Yes | Connector to check the status of. |

No `outputSchema` is declared; the result is a `content` text summary only, such as `Connector my-connector is RUNNING`.

### restart_connector

> Not destructive, not idempotent

Restarts a connector.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `connector` | `string` | Yes | Connector to restart. |

No `outputSchema` is declared; the result is a `content` text summary only.

### pause_connector

> Not destructive, idempotent

Pauses a connector and all of its tasks.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `connector` | `string` | Yes | Connector to pause. |

No `outputSchema` is declared; the result is a `content` text summary only.

### resume_connector

> Not destructive, idempotent

Resumes a paused connector and all of its tasks.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `connector` | `string` | Yes | Connector to resume. |

No `outputSchema` is declared; the result is a `content` text summary only.

### stop_connector

> Not destructive, idempotent

Stops a connector and shuts down all of its tasks, without deleting the connector.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `connector` | `string` | Yes | Connector to stop. |

No `outputSchema` is declared; the result is a `content` text summary only.

### list_connector_tasks

> Read-only, idempotent

Lists every task belonging to a connector.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `connector` | `string` | Yes | Connector whose tasks to list. |

No `outputSchema` is declared; the result is a `content` text summary only.

### restart_connector_task

> Not destructive, not idempotent

Restarts a single task belonging to a connector.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `connector` | `string` | Yes | Connector owning the task. |
| `task` | `integer` | Yes | Task id to restart. |

No fixed `outputSchema` is declared; the result's `structuredContent` mirrors the raw upstream JSON response, with no fixed property list.

### describe_connector_offsets

> Read-only, idempotent

Reads a connector's current source or sink offsets.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `connector` | `string` | Yes | Connector whose offsets to read. |

No fixed `outputSchema` is declared; the result's `structuredContent` mirrors the raw upstream JSON response, with no fixed property list.

### alter_connector_offsets

> Destructive, idempotent

Overwrites a connector's source or sink offsets. The connector must be stopped first.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `connector` | `string` | Yes | Connector whose offsets to alter. |
| `offsets` | `array` of `object` | Yes | Offsets to write. |
| `offsets[].partition` | `object` | Yes | Source partition or sink topic-partition identifying the offset. |
| `offsets[].offset` | `object` | Yes | New offset value for the identified partition. |

No `outputSchema` is declared; the result is a `content` text summary only, interpolated from the upstream response, such as `${result.message}`.

### reset_connector_offsets

> Destructive, idempotent

Resets a connector's source or sink offsets to their initial state. The connector must be stopped first.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `connector` | `string` | Yes | Connector whose offsets to reset. |

No `outputSchema` is declared; the result is a `content` text summary only, interpolated from the upstream response, such as `${result.message}`.

### list_connector_plugins

> Read-only, idempotent

Lists every connector plugin installed on the worker.

No arguments.

No `outputSchema` is declared; the result is a `content` text summary only.
