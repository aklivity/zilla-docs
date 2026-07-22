### options

> `object`

The `server` kind `mcp` specific options.

```yaml
options:
  elicitation:
    callback: auth/callback
    timeout: 30s
```

#### options.elicitation

> `object`

Elicitation configuration for the OAuth authorization flow.

#### elicitation.callback

> `string` | Default: `auth/callback`

Path on which the binding receives the authorization callback during elicitation.

#### elicitation.timeout

> `string`

Maximum time to wait for the client to complete elicitation before the request fails. When omitted, no timeout is enforced and the binding waits indefinitely for elicitation to complete.
