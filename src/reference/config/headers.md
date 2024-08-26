# Zilla Headers

Zilla uses specific headers to capture and reference metadata for streams. Zilla headers can be submitted or read by the client. In some cases they are created by Zilla.

## Headers

Zilla headers are identified with the `zilla:` prefix. Headers can be repeated to set an array of header values.

### zilla:command

> `string`

Captures the command for a request.

### zilla:content-type

> `string`

Captures the content-type for a request.

### zilla:correlation-id

> `string`

Captures the correlation-id for a request.

### zilla:expiry

> `string`

Captures the expiry for a request.

### zilla:filter

> `array` of `string`

Captures the filter for a request.

### zilla:format

> `string`

Captures the format for a request.

### zilla:identity

> `string`

Captures the identity for a request.

### zilla:local

> `string`

Captures the local for a request.

### zilla:method

> `string`

Captures the service method used for a request.

### zilla:qos

> `string`

Captures the QOS level for an MQTT request.

### zilla:reply-filter

> `string`

Captures the reply-filter for a request.

### zilla:reply-key

> `string`

Captures the reply-key for a request.

### zilla:reply-to

> `string`

Captures the reply-to for a request.

### zilla:service

> `string`

Captures the service for a request.

### zilla:status

> `string`

Captures the status for a request.

### zilla:timeout-ms

> `string`

Captures the timeout in milliseconds for a request.
