### options

> `object`

The `mcp` specific options.

```yaml
options:
  prompts:
    - name: my_prompt
      description: A helpful prompt.
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
