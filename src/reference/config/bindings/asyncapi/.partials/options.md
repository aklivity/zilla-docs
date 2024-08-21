### options

> `object`

`asyncapi`-specific options.

```yaml
specs:
  http_api:
    servers:
      - name: plain
    catalog:
      my_catalog:
        subject: petstore
        version: latest
```

#### options.specs

> `object` as map of named properties

specs specific options

##### specs.catalog

> `object` as map of named properties

catalog specific options.

###### catalog.subject

> `string`

Subject name used when storing the catalog artifact.

###### catalog.version

> `string`

Catalog artifact version to use.

##### specs.servers

> `object`

###### servers.url

> `string`

The server to match based on the server's `url` in an asyncapi `2.x` spec only.

###### servers.host

> `string`

The server to match based on the server's `host` in an asyncapi `3.x` spec only.

###### servers.pathname

> `string`

The server pathname to match based on the server's `pathname` in an asyncapi `3.x` spec only.

#### options.tcp

> `object`

`client` specific `tcp` options.

##### tcp.host

> `string`

Hostname or IP address.

##### tcp.port

> `integer` | `string` | `array` of `integer` | `array` of `string`

Port number(s), including port number ranges.

#### options.http

> `object`

http specific options.

##### http.authorization

> `object` as map of named properties

Authorization by guard for the `HTTP/1.1` and `HTTP/2` protocols.

```yaml
authorization:
  jwt:
    credentials:
      headers:
        authorization: Bearer {credentials}
```

##### authorization.credentials

> `object`

Defines how to extract credentials from the HTTP request.

##### credentials.cookies

> `map` of `name: value` properties

Named cookie value pattern with `{credentials}`.

##### credentials.headers

> `map` of `name: value` properties

Named header value pattern with `{credentials}`, e.g. `"Bearer` `{credentials}"`.

##### credentials.query

> `map` of `name: value` properties

Named query parameter value pattern with `{credentials}`.

#### options.tls

> `object`

`tls` specific options.

##### tls.version

> `string`

Protocol version.

##### tls.keys

> `array` of `string`

A list of reference names for the Vault key.

##### tls.trust

> `array` of `string`

A list of reference names for the Vault certificate.

##### tls.signers

> `array` of `string`

A list of reference names for the Vault signer certificate.

##### tls.trustcacerts

> `boolean` | Default: `true` when trust is `null`

Trust CA certificates.

##### tls.sni\*

> `array` of `string`

A list of the Server Name Indications.

##### tls.alpn

> `array` of `string`

Application protocols.

##### tls.mutual

> `enum` [ "required", "requested", "none" ] | Default: `"none"`

Mutual authentication.
