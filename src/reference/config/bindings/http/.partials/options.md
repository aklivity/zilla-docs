### options

> `object`

`http`-specific options.

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

#### options.requests

> `array` of `object`

##### requests[].content

> `object` of a named [`model`](../models/)

Enforce validation for the request content.

##### requests[].content-type

> `string`



##### requests[].headers

> `string`



##### requests[].method

>  `enum` [ "GET", "PUT", "POST", "DELETE", "OPTIONS", "HEAD", "PATCH", "TRACE" ]



##### requests[].params

> `string`


###### params.path

> `object` of a named [`model`](../models/)

Enforce validation for path

###### params.query

> `object` of a named [`model`](../models/)

Enforce validation for query

##### requests[].path

> `string`



##### requests[].responses

> `array` of `object`


###### responses[].content

> `string`



###### responses[].content-type

> `array` of `string`



###### responses[].headers

> `map` of "name: [model](../models/)" properties

Enforce validation for response headers.

```yaml
headers:
  my-header:
    type: string
    maxLength: 100
```

###### responses[].status

> `string`


#### options.versions

Supported protocol versions.

#### options.access-control

> **oneOf**: [same-origin](#access-control-policy-same-origin) | [cross-origin](#access-control-policy-cross-origin)

Access control policy for the `HTTP` protocol.

##### access-control.policy\*

> `enum` [ "same-origin" , "cross-origin" ]

Supported access control policies.

##### access-control.policy: same-origin

> `string`

Extra properties aren't needed when using Same Origin access control for the `HTTP` protocol.

```yaml
options:
  access-control:
    policy: same-origin
```

##### access-control.policy: cross-origin

> `object`

Additional properties that cover Cross Origin Resource Sharing (CORS) access control for the `HTTP` protocol.

```yaml
options:
  access-control:
    policy: cross-origin
```

##### access-control.allow

> `object` | Default: all origins, methods and headers, without credentials

Allowed cross-origin request origins, methods, headers and credentials.
CORS allowed request origins, methods, headers and credentials for the `HTTP` protocol.

###### allow.origins

> `array` of `string`

Allowed request origins.

###### allow.methods

> `array` of `string`

Allowed request methods.

###### allow.headers

> `array` of `string`

Allowed request headers.

###### allow.credentials

> `boolean`

Support `fetch` credentials mode `include`.

##### access-control.max-age

> `integer`

Maximum cache age (in seconds) for allowed headers and methods.

##### access-control.expose

> `object` | Default: all response headers

Exposed cross-origin response headers.

###### expose.headers

> `array` of `string`

Exposed response headers.

#### options.authorization

> `object` as map of named objects

Authorization by a named guard for the `HTTP/1.1` and `HTTP/2` protocols.

```yaml
authorization:
  my_jwt_guard:
    credentials:
      headers:
        authorization: Bearer {credentials}
```

##### authorization.credentials

> `object`

Defines how to extract credentials from the HTTP request.

###### credentials.cookies

> `object` as map of `string`

Named cookie value pattern with `{credentials}`.

###### credentials.headers

> `map` of `name: value` properties

Named header value pattern with `{credentials}`, e.g. `"Bearer` `{credentials}"`.

###### credentials.query

> `object` as map of `string`

Named query parameter value pattern with `{credentials}`.

#### options.overrides

> `map` of `name: value` properties

Request header overrides.
