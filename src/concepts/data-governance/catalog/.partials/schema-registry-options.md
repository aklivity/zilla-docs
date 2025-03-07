### options

> `object`

The `schema-registry` specific options.

| Property | Type | Description |
| -- | -- | -- |
| options.url |  `string` |  Schema Registry URL to access schemas via API calls. | 
| options.context |  `string` | Default: `default` |  Schema context represents an independent scope in the Schema Registry. | 
| options.max-age |  `integer` | Default: `300` |  The maximum duration in seconds to keep a cached schema before fetching the schema again. | 
| options.tls |  `object` |  TLS configuration for connecting to secure Schema Registry. A configured `vault` is required to manage the keys and certificates necessary for TLS authentication. | 
| options.tls.keys |  `string[]` |  A list of reference names for the Vault key. | 
| options.tls.trust |  `string[]` |  A list of reference names for the Vault certificate. | 
| options.tls.trustcacerts |  `boolean` |  Trust CA certificates. When the this property is not explicitly set it will be automatically set to `true` if `options.tls.trust` is `null`. | 
| options.credentials |  `object` |  Configures the credentials used to authenticate the user. | 
| options.credentials.headers |  `object` |  Authentication headers to be included in requests to the Schema Registry. | 
| options.credentials.headers.authorization |  `string` |  The authorization header for authenticating API requests. For example, use a Basic token or Bearer token format. | 

#### Examples

TLS configuration examples.

```yaml
tls:
  trust:
    - serverca
  keys:
    - client1
```

Credential examples.

```yaml
credentials:
  headers:
    authorization: Basic dXNlcjpzZWNyZXQ=
```