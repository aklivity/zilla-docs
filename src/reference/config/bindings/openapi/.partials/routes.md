### routes

> `array` of `object`

Conditional `openapi` specific routes, available for `kind: server` only.

```yaml
routes:
  - when:
      - tag: pets
    exit: pets_backend
```

#### routes[].guarded

> `object` as map of named `array` of `string`

List of roles required by each named guard to authorize this route.

```yaml
routes:
  - guarded:
      my_guard:
        - read:items
```

#### routes[].when

> `array` of `object`

List of conditions to match this route.
Read more: [When a route matches](/concepts/protocol/README.md#route-matches)

#### when[].spec

> `string`

OpenAPI spec label that matches the resolved specification for the request.

#### when[].operation

> `string`

OpenAPI operationId to match, either exactly or as a glob pattern, e.g. `list*`.

#### when[].tag

> `string`

Matches when the resolved operation declares this tag.

#### when[].servers

> `array` of `object`

Matches when the resolved server for the request is one of these servers.

#### servers[].url

> `string`

Server url to match.

#### routes[].exit

> `string`

Next binding when following this route.

```yaml
routes:
  - when:
      ...
    exit: openapi_client
```
