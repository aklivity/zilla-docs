### options

> `object`

The `mcp` specific options.

```yaml
options:
  prompts:
    - name: my_prompt
      description: A helpful prompt.
  elicitation:
    callback: auth/callback
  timeout: 30s
```

#### options.prompts

> `array` of `object`

List of locally defined MCP prompts served by this binding.

#### prompts[].name\*

> `string`

Prompt name.

#### prompts[].description

> `string`

Prompt description.

#### options.elicitation

> `object`

Elicitation configuration for the OAuth authorization flow.

#### elicitation.callback

> `string` | Default: `auth/callback`

Path on which the binding receives the authorization callback during elicitation.

#### options.timeout

> `string` | Default: `PT0S`

Maximum time to wait for the client to complete elicitation before the request fails.
