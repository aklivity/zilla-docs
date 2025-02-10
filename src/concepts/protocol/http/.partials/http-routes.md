### routes\*

> `array` of `object`

| Property             | Type                      | Description                                                                                                                                                                                                      |
| -------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| routes[].guarded     | `Map<string, string[]>` | List of roles required by each named guard to authorize this route.                                                                                                                                              |
| routes[].when        | `object[]`       | List of conditions (any match) to match this route. Read more: [When a route matches](../../../../../concepts/bindings.md#when-a-route-matches) |
| routes[].when[].headers | `Map<string, string>` | Header name value pairs (all match). |
| routes[].when[].path | `string`                  | Path with optional embedded parameter names, such as `/{path}`.                                                                                                                                                  |
| routes[].exit        | `string`                  | Next binding when following this route.                                                                                                                                                                          |
| routes[].with        | `object`                  | HTTP parameters for matched route when `http` streams.                                                                                                              |
| routes[].with.path\* | `string`                  | Topic name, optionally referencing path parameter such as `${params.path}`.                                                                                                                                      |
| routes[].with.headers | `object` | Options for headers when adapting a route. |
| routes[].with.headers.overrides | `Map<string, string>` | HTTP header name value pairs overrides. |
| routes[].exit | `string` | Next binding when following this route. |
#### Example

Conditional `http` specific routes.

```yaml
routes:
  - when:
      - headers:
          ":scheme": https
          ":authority": example.com:443
    exit: echo_server
    with:
      headers:
        overrides:
          ":scheme": https
          ":authority": example.com:443
```
