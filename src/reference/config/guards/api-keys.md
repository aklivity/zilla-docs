---
shortTitle: api-keys
category:
  - Guard
tag:
  - api-keys
---

# api-keys Guard

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

Defines a guard with `API Keys` support.

The `api-keys` guard authorizes requests by extracting a key ID and token from the credential string using the `authorization.format` pattern and verifying both against a remotely fetched JSON keys file. The keys file is polled periodically.

```yaml {2}
guards:
  my_api_keys_guard:
    type: api-keys
    options:
      authorization:
        format: "{username}:{password}"
      keys: https://example.com/keys.json
      interval: 300
      credentials:
        headers:
          authorization: "Bearer token-123"
      attributes:
        identity: sub
        plan_id: plan.id
```

## Configuration (\* required)

### options\*

> `object`

The `api-keys` specific options.

```yaml
options:
  authorization:
    format: "{username}:{password}"
  keys: https://example.com/keys.json
  interval: 300
  credentials:
    headers:
      authorization: "Bearer token-123"
  attributes:
    identity: sub
    plan_id: plan.id
```

#### options.authorization

> `object`

Defines how to extract the API key from the incoming credential string.

##### authorization.format

> `string`

Pattern used to parse the credential string.

```yaml
options:
  authorization:
    format: "{username}:{password}"
```

#### options.keys\*

> `string`

URL of the JSON file listing the valid API keys. The file is fetched on startup and re-fetched at the configured `interval`.

```yaml
options:
  keys: https://example.com/keys.json
```

#### options.interval

> `integer` | Default: `300`

Polling interval in seconds for refreshing the API keys from the remote URL.

```yaml
options:
  interval: 60
```

#### options.credentials

> `object`

HTTP request configuration used when fetching the keys file.

##### credentials.headers

> `object` as map of named `string` properties

HTTP headers sent with each request to the keys URL, for example to pass an authorization token.

```yaml
options:
  credentials:
    headers:
      authorization: "Bearer token-123"
```

#### options.attributes

> `object` as map of named `string` properties

Maps attribute names to JSON field paths within the key metadata. Resolved attribute values are available to downstream bindings after authorization.

```yaml
options:
  attributes:
    identity: sub
    plan_id: plan.id
```
