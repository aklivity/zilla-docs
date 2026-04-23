### routes

> `array`

Conditional `risingwave` specific routes.

Correlated Request-Response route:

```yaml
routes:
  - exit: south_pgsql_client
    when:
    - commands:
        - "CREATE TOPIC"
        - "ALTER TOPIC"
        - "DROP TOPIC"
```

#### routes[].when

> `array`

List of conditions (any match) to match this route when adapting `risingwave` request-response streams.
Read more: [When a route matches](/concepts/protocol/README.md#route-matches)

```yaml
routes:
  - when:
      - commands:
          - "CREATE TOPIC"
```

#### when[].commands

> `array` of `enum` [ `CREATE TOPIC`, `ALTER TOPIC`, `DROP TOPIC` ]

#### routes[].guarded

> `object` as map of named `array` of `string`

List of roles required by each named guard to authorize this route.

#### routes[].exit

> `string`

Next binding when following this route.

```yaml
routes:
  - when:
    ...
    exit: south_pgsql_client
```
