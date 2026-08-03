The `mcp-schema-registry` client exposes a fixed set of intrinsic tools, derived from a bundled schema registry API specification — there is no `options.tools` to author, and no upstream server or spec to select. Each tool's `inputSchema` validates `tools/call` `arguments` before Zilla dispatches the matching request to `options.server`. None of these tools declare a fixed `outputSchema`, so each tool's `structuredContent` mirrors the raw upstream JSON response with no fixed property list, and its `summary` text may interpolate fields out of that same response, such as `${result.id}`.

### list_subjects

> Read-only, idempotent

Lists every subject registered in the schema registry.

No arguments.

The result's `structuredContent` mirrors the raw upstream JSON response — an array of subject names.

### describe_subject

> Read-only, idempotent

Lists the schema version numbers registered for a subject.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | Yes | Subject to list versions for. |

The result's `structuredContent` mirrors the raw upstream JSON response — an array of version numbers.

### register_schema

> Not destructive, not idempotent

Registers a new schema version under a subject.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | Yes | Subject to register the schema under. |
| `schema` | `string` | Yes | Schema document to register. |
| `schemaType` | `string` | No | Schema format, such as `AVRO`, `JSON`, or `PROTOBUF`. Defaults to `AVRO` when omitted. |

The summary interpolates `${result.id}`, such as `Registered schema with id 1`.

### get_schema

> Read-only, idempotent

Retrieves a specific registered schema version for a subject.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | Yes | Subject to read from. |
| `version` | `string` | Yes | Schema version number, or `latest`. |

The summary interpolates `${result.id}` and `${result.version}`, such as `Retrieved schema id 1, version 1`.

### delete_schema_version

> Destructive, idempotent

Deletes a specific registered schema version for a subject.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | Yes | Subject to delete from. |
| `version` | `string` | Yes | Schema version number, or `latest`. |

### delete_subject

> Destructive, idempotent

Deletes a subject and every schema version registered under it.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | Yes | Subject to delete. |

The result's `structuredContent` mirrors the raw upstream JSON response — an array of the deleted subject's version numbers.

### check_compatibility

> Read-only, idempotent

Checks whether a schema is compatible with a specific already-registered version of a subject.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | Yes | Subject to check compatibility against. |
| `version` | `string` | Yes | Schema version number, or `latest`, to check compatibility against. |
| `schema` | `string` | Yes | Schema document to check. |
| `schemaType` | `string` | No | Schema format, such as `AVRO`, `JSON`, or `PROTOBUF`. Defaults to `AVRO` when omitted. |

The summary interpolates `${result.is_compatible}`, such as `Compatibility check result: true`.

### get_compatibility

> Read-only, idempotent

Reads the compatibility level configured for a subject.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | Yes | Subject to read the compatibility level of. |

The summary interpolates `${result.compatibilityLevel}`, such as `Compatibility level is FULL`.

### set_compatibility

> Not destructive, idempotent

Sets the compatibility level for a subject.

| Argument | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | Yes | Subject to set the compatibility level of. |
| `compatibility` | `string` | Yes | Compatibility level, such as `BACKWARD`, `FORWARD`, `FULL`, or `NONE`. |

The summary interpolates `${result.compatibility}`, such as `Compatibility level set to FULL`.
