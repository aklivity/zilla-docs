### routes

> `array` of `object`

Conditional `openapi-asyncapi` specific routes.

```yaml
routes:
  - when:
      - spec: my-openapi-spec
        operation: createPets
    exit: asyncapi_client
    with:
      spec: my-asyncapi-spec
      operation: addPet
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

List of conditions to match this route when adapting `openapi` request-response streams to `asyncapi` streams.
Read more: [When a route matches](/concepts/protocol/README.md#route-matches)

#### when[].spec

> `string`

OpenAPI spec label that matches the resolved specification for the `openapi` binding request stream.

#### when[].operation

> `string`

OpenAPI operationId that matches from the `openapi` binding request stream.

#### routes[].exit

> `string`

Next binding when following this route.

```yaml
routes:
  - when:
      ...
    exit: asyncapi_client
```

#### routes[].with\*

> `object`

Defines the target AsyncAPI spec and operation to proxy this route into. Required on every route.

```yaml
with:
  spec: my-asyncapi-spec
```

#### with.spec\*

> `string`

AsyncAPI spec label that the route exits with to the next binding.

#### with.operation

> `string`

AsyncAPI operationId that the route exits with to the next binding, either exactly or as a glob pattern, e.g. `list*`. Mutually exclusive with `with.tag`.

#### with.tag

> `string`

Bulk-selects every AsyncAPI operation declaring this tag as the target of the route. Mutually exclusive with `with.operation`.

```yaml
with:
  spec: my-asyncapi-spec
  tag: pets
```
