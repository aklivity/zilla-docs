### options

> `object`

| Property | Type | Description |
| -- | -- | -- |
| options.specs |  `Map<string, object>` |  The `specs` specific options. | 
| options.specs.catalog |  `Map<string, object>` |  The `catalog` specific options. | 
| options.specs.catalog.subject\* |  `string` |  Subject name used when storing the catalog artifact. | 
| options.specs.catalog.version |  `string` | Default: `latest` |  Catalog artifact version to use. | 
| options.specs.servers |  `object[]` |  The servers to match from the schema that are used when defining endpoints. | 
| options.specs.servers[].url |  `string` | Pattern: `^([a-zA-Z0-9\\\\.-]+)(:(\\\\{[a-zA-Z_]+\\\\}|[0-9]+))?$` |  The server url to match in openapi spec | 
| options.http |  `object` |  The http specific options. | 
| options.http.authorization |  `Map<string, object>` |  Authorization by guard for the `HTTP/1.1` and `HTTP/2` protocols. | 
| options.http.authorization.credentials\* |  `object` |  Defines how to extract credentials from the HTTP request. | 
| options.http.authorization.credentials.cookies |  `Map<string, string>` |  Named cookie value pattern with `{credentials}`. | 
| options.http.authorization.credentials.headers |  `Map<string, string>` |  Named header value pattern with `{credentials}`, e.g. `"Bearer` `{credentials}"`. | 
| options.http.authorization.credentials.query\* |  `Map<string, string>` |  Named query parameter value pattern with `{credentials}`. | 
| options.tcp |  `object` |  TCP options to connect to an external client. | 
| options.tcp.host |  `string` |  Hostname or IP address. | 
| options.tcp.port |  `integer`, `string`, `array` |  Port number(s), including port number ranges. | 
| options.tls |  `object` |  The `tls` specific options. | 
| options.tls.version |  `string` |  Protocol version. | 
| options.tls.keys |  `string[]` |  A list of reference names for the Vault key. | 
| options.tls.trust |  `string[]` |  A list of reference names for the Vault certificate. | 
| options.tls.signers |  `string[]` |  A list of reference names for the Vault signer certificate. | 
| options.tls.trustcacerts |  `boolean` |  Trust CA certificates. When the this property is not explicitly set it will be automatically set to `true` if `tls.trust` is `null`. | 
| options.tls.sni |  `string[]` |  A list of the Server Name Indications. | 
| options.tls.alpn |  `string[]` |  Application protocols. | 
| options.tls.mutual |  `enum` [ `required`, `requested`, `none` ] |  Mutual authentication. When the this property is not explicitly set it will be automatically set to `none` if `tls.trust` is `null`, otherwise it will be set to `required`. | 

#### Examples

The `openapi` specific options.

```yaml
options:
    specs:
      petstore:
        servers:
          - url: http://localhost:9090
        catalog:
          my_catalog:
            subject: petstore
            version: latest
```

