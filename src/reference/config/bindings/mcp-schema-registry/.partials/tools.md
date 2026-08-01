The `mcp-schema-registry` client exposes a fixed set of intrinsic tools, derived from a bundled schema registry API specification — there is no `options.tools` to author, and no upstream server or spec to select. Each tool's `inputSchema` validates `tools/call` `arguments` before Zilla dispatches the matching request to `options.server`. None of these tools declare a fixed `outputSchema`; each returns a `content` text summary, though the summary may interpolate fields of the raw upstream JSON response, such as `${result.id}`.

### list_subjects

Lists every subject registered in the schema registry.

No arguments.

### describe_subject

Lists the schema version numbers registered for a subject.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | Yes | Subject to list versions for. |

### register_schema

Registers a new schema version under a subject.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | Yes | Subject to register the schema under. |
| `schema` | `string` | Yes | Schema document to register. |
| `schemaType` | `string` | No | Schema format, such as `AVRO`, `JSON`, or `PROTOBUF`. Defaults to `AVRO` when omitted. |

### get_schema

Retrieves a specific registered schema version for a subject.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | Yes | Subject to read from. |
| `version` | `string` | Yes | Schema version number, or `latest`. |

### delete_schema_version

Deletes a specific registered schema version for a subject.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | Yes | Subject to delete from. |
| `version` | `string` | Yes | Schema version number, or `latest`. |

### delete_subject

Deletes a subject and every schema version registered under it.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | Yes | Subject to delete. |

### check_compatibility

Checks whether a schema is compatible with a specific already-registered version of a subject.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | Yes | Subject to check compatibility against. |
| `version` | `string` | Yes | Schema version number, or `latest`, to check compatibility against. |
| `schema` | `string` | Yes | Schema document to check. |
| `schemaType` | `string` | No | Schema format, such as `AVRO`, `JSON`, or `PROTOBUF`. Defaults to `AVRO` when omitted. |

### get_compatibility

Reads the compatibility level configured for a subject.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | Yes | Subject to read the compatibility level of. |

### set_compatibility

Sets the compatibility level for a subject.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | Yes | Subject to set the compatibility level of. |
| `compatibility` | `string` | Yes | Compatibility level, such as `BACKWARD`, `FORWARD`, `FULL`, or `NONE`. |
