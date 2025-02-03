#### options

> `object`

We define `TypeEnum` as `enum` [ `double`, `float`, `int32`, `int64`, `json`, `string` ]

| Property                                       | Type                                                                           | Description                                                                                                                                                     |
| ---------------------------------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| options.requests                               | `object[]`                                                                     | Options to configure typed validations for request fields.                                                                                                      |
| options.requests[].content                     | `TypeEnum` or `object`                                                         | Enforce validation for the request content.                                                                                                                     |
| options.requests[].content.model\*             | `TypeEnum`                                                                     | A schema or type to validate the request content. Refer to the individual [model](../../../../reference/config/models/) docs for type specific implementation.  |
| options.requests[].content-type                | `string[]`                                                                     | Content type of the HTTP request.                                                                                                                               |
| options.requests[].headers                     | `Map<string, enum>` with `TypeEnum`, `object` or `Map<string, object>          | Enforce validation for request headers.                                                                                                                         |
| options.requests[].method                      | `enum` [ `GET`, `PUT`, `POST`, `DELETE`, `OPTIONS`, `HEAD`, `PATCH`, `TRACE` ] | HTTP request method.                                                                                                                                            |
| options.requests[].params                      | `object`                                                                       | Query parameters of the HTTP request.                                                                                                                           |
| options.requests[].params.path                 | `Map<string, enum>` with `TypeEnum` or `Map<string, Object>`                   | Enforce validation for path                                                                                                                                     |
| options.requests[].params.path.model\*         | `TypeEnum`                                                                     | A schema or type to validate the path content. Refer to the individual [model](../../../../reference/config/models/) docs for type specific implementation.     |
| options.requests[].params.query                | `Map<string, TypeEnum>` or `Map<string, object>`                               | Enforce validation for query                                                                                                                                    |
| options.requests[].params.query.model\*        | `TypeEnum`                                                                     | A schema or type to validate the query content. Refer to the individual [model](../../../../reference/config/models/) docs for type specific implementation.    |
| options.requests[].path                        | `string`                                                                       | URL path of the HTTP request.                                                                                                                                   |
| options.requests[].responses                   | `object[]`                                                                     | Options to configure typed validations for response fields.                                                                                                     |
| options.requests[].responses[].content         | `TypeEnum` or `object`                                                         | Enforce validation for the response content.                                                                                                                    |
| options.requests[].responses[].content.model\* | `TypeEnum`                                                                     | A schema or type to validate the response content. Refer to the individual [model](../../../../reference/config/models/) docs for type specific implementation. |
| options.requests[].responses[].content-type    | `string[]`                                                                     | Content type of the HTTP response.                                                                                                                              |
| options.requests[].responses[].headers         | `Map<string, TypeEnum>` or `Map<string, object>`                               | Enforce validation for response headers.                                                                                                                        |
| options.requests[].responses[].headers.model\* | `TypeEnum`                                                                     | A schema or type to validate the headers content. Refer to the individual [model](../../../../reference/config/models/) docs for type specific implementation.  |
| options.requests[].responses[].status          | `integer` or `integer[]`                                                       | HTTP status code or codes for the response                                                                                                                      |
| options.versions                               | `array` of `enum` [ `http/1.1`, `h2` ]                                         | Supported protocol versions (default `http/1.1,h2`).                                                                                                            |
| options.access-control                         | `object`                                                                       | Defines the same-origin or cross-origin access control policy for the `HTTP` protocol.                                                                          |
| options.access-control.policy                  | `enum [same-origin, cross-origin]`                                             | Supported access control policies. Default: `same-origin`.                                                                                                      |
| options.access-control.policy: same-origin     | `const`                                                                        | Extra properties aren't needed when using Same Origin access control.                                                                                           |
| options.access-control.policy: cross-origin    | `const`                                                                        | Additional properties for Cross Origin Resource Sharing (CORS) access control.                                                                                  |
| options.access-control.allow                   | `object`                                                                       | Sets the CORS allowed request origins, methods, headers, and credentials.                                                                                       |
| options.access-control.allow.origins           | `string[]`                                                                     | Allowed request origins. Omission means allow all (`*`).                                                                                                        |
| options.access-control.allow.methods           | `string[]`                                                                     | Allowed request methods. Omission means allow all (`*`).                                                                                                        |
| options.access-control.allow.headers           | `string[]`                                                                     | Allowed request headers. Omission means allow all (`*`).                                                                                                        |
| options.access-control.allow.credentials       | `boolean`                                                                      | Support `fetch` credentials mode `include`.                                                                                                                     |
| options.access-control.max-age                 | `integer`                                                                      | Maximum cache age (in seconds) for allowed headers and methods.                                                                                                 |
| options.access-control.expose                  | `object`                                                                       | Exposed cross-origin response headers. Omission means all headers.                                                                                              |
| options.access-control.expose.headers          | `string[]`                                                                     | Exposed response headers.                                                                                                                                       |
| options.authorization                          | `object`                                                                       | Authorization by a named guard for the `HTTP/1.1` and `HTTP/2` protocols.                                                                                       |
| options.requests                               | `object[]`                                                                     | Options to configure typed validations for request fields.                                                                                                      |
| options.authorization.credentials\*            | `object`                                                                       | Defines how to extract credentials from the HTTP request.                                                                                                       |
| options.authorization.credentials.cookies      | `Map<string, string>`                                                          | Named cookie value pattern with `{credentials}`.                                                                                                                |
| options.authorization.credentials.headers      | `Map<string, string>`                                                          | Named header value pattern with `{credentials}`, e.g. `"Bearer` `{credentials}"`.                                                                               |
| options.authorization.credentials.query\*      | `Map<string, string>`                                                          | Named query parameter value pattern with `{credentials}`.                                                                                                       |

#### Example

The `server` specific options.

```yaml
options:
  access-control:
    policy: cross-origin
  authorization:
    my_jwt_guard:
      credentials:
        headers:
          authorization: Bearer {credentials}
  overrides:
    custom-text: custom-value
```

The `options.authorization` example.

```yaml
authorization:
  my_jwt_guard:
    credentials:
      headers:
        authorization: Bearer {credentials}
```
