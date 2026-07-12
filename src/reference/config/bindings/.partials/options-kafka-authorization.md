<!-- markdownlint-disable MD024 -->
#### authorization.credentials\*

> `object`

SASL or OAuth bearer credentials used to authenticate the connection to `kafka` brokers. At most one named entry may be configured.

#### credentials.mechanism\*

> `enum` [ `plain`, `scram-sha-1`, `scram-sha-256`, `scram-sha-512`, `oauthbearer` ]

Mechanism used to authenticate the connection.

#### credentials.username\*

> `string`

Username. Required for every mechanism except `oauthbearer`.

#### credentials.password\*

> `string`

Password. Required for every mechanism except `oauthbearer`.

#### credentials.token\*

> `string`

OAuth bearer token. Required when `mechanism` is `oauthbearer`, and not used otherwise.
