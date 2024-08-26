#### authorization.credentials

> `object`

Defines how to extract credentials from the HTTP request.

#### credentials.cookies

> `map` of `name: value` properties

Named cookie value pattern with `{credentials}`.

#### credentials.headers

> `map` of `name: value` properties

Named header value pattern with `{credentials}`, e.g. `"Bearer` `{credentials}"`.

#### credentials.query

> `map` of `name: value` properties

Named query parameter value pattern with `{credentials}`.
