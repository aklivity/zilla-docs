#### options

> `object`

We define `TypeEnum` as `enum` [ `double`, `float`, `int32`, `int64`, `json`, `string` ]

| Property         | Type       | Description                                                |
| ---------------- | ---------- | ---------------------------------------------------------- |
| options.requests | `object[]` | Options to configure typed validations for request fields. |
| options.requests[].content |  `TypeEnum` or `object` | Enforce validation for the request content. |
| options.requests[].content.model\* | `TypeEnum` | A schema or type to validate the request content. Refer to the individual [model](../../../../reference/config/models/) docs for type specific implementation. |
| options.requests[].content-type | `string[]` | Content type of the HTTP request. |
| options.requests[].headers | `Map<string, enum>` with `TypeEnum`, `object` or `Map<string, object> | Enforce validation for request headers. |
| options.requests[].method | `enum` [ `GET`, `PUT`, `POST`, `DELETE`, `OPTIONS`, `HEAD`, `PATCH`, `TRACE` ] | HTTP request method. |
| options.requests[].params | `object` | Query parameters of the HTTP request. |
| options.requests[].params.path | `Map<string, enum>` with `TypeEnum` or `Map<string, Object>` | Enforce validation for path |
| options.requests[].params.path.model\* | `TypeEnum` | A schema or type to validate the path content. Refer to the individual [model](../../../../reference/config/models/) docs for type specific implementation. |
| options.requests[].params.query | `Map<string, TypeEnum>` or `Map<string, object>` | Enforce validation for query |
| options.requests[].params.query.model\* | `TypeEnum` | A schema or type to validate the query content. Refer to the individual [model](../../../../reference/config/models/) docs for type specific implementation. |
| options.requests[].path | `string` | URL path of the HTTP request. |
| options.requests[].responses | `object[]` | Options to configure typed validations for response fields. |
| options.requests[].responses[].content | `TypeEnum` or `object` | Enforce validation for the response content. |
| options.requests[].responses[].content.model\* | `TypeEnum` | A schema or type to validate the response content. Refer to the individual [model](../../../../reference/config/models/) docs for type specific implementation. |
| options.requests[].responses[].content-type | `string[]` | Content type of the HTTP response. |
| options.requests[].responses[].headers | `Map<string, TypeEnum>` or `Map<string, object>` | Enforce validation for response headers. |
| options.requests[].responses[].headers.model\* | `TypeEnum` | A schema or type to validate the headers content. Refer to the individual [model](../../../../reference/config/models/) docs for type specific implementation. |
| options.requests[].responses[].status | `integer` or `integer[]` | HTTP status code or codes for the response |
| options.versions | `array` of `enum` [ `http/1.1`, `h2` ] | Supported protocol versions (default `http/1.1,h2`).|
| options.overrides | `Map<string, string>` | Request header overrides. |

#### Example

The `client` specific options.

```yaml
options:
  overrides:
    custom-text: custom-value
```
