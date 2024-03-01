---
shortTitle: openapi-asyncapi
description: Zilla runtime openapi-asyncapi binding
category:
  - Binding
tag:
  - Proxy
---

# openapi-asyncapi Binding

Zilla runtime openapi-asyncapi binding.

```yaml {2}
openapi_asyncapi_proxy:
  type: openapi-asyncapi
  kind: proxy
  options:
    specs:
      openapi:
        openapi-id: spec/openapi.yaml
      asyncapi:
        asyncapi-id: spec/asyncapi.yaml
  routes:
    - when:
        - api-id: openapi-id
      exit: asyncapi_client
      with:
        api-id: asyncapi-id
```

## Summary

The `proxy` kind `openapi-asyncapi` binding adapts `opanapi` request-response streams to `asyncapi` streams.

## Configuration

:::: note Properties

- [kind\*](#kind)
- [options](#options)
  - [options.specs](#options-specs)
    - [specs.openapi](#specs-openapi)
    - [specs.asyncapi](#specs-asyncapi)
- [routes](#routes)
  - [routes\[\].when](#routes-when)
    - [when\[\].api-id](#when-api-id)
    - [when\[\].operation-id](#when-operation-id)
  - [routes\[\].exit\*](#routes-exit)
  - [routes\[\].with](#routes-with)
    - [with.api-id](#with-api-id)
    - [with.operation-id](#with-operation-id)

::: right
\* required
:::

::::

### kind\*

> `enum` [ "proxy" ]

Behave as an `openapi-asyncapi` `proxy`.

```yaml
kind: proxy
```

### options

> `object`

`openapi-asyncapi` - specific options.

```yaml
options:
  specs:
    openapi:
      openapi-id: spec/openapi.yaml
    asyncapi:
      asyncapi-id: spec/asyncapi.yaml
```

#### options.spec

> `object`

OpenAPI and AsyncAPI spec definition filenames and its unique ids.

### specs.openapi

> `object`

OpenAPI spec definition filenames and its unique id.

### specs.asyncapi

> `object`

OpenAPI spec definition filenames and its unique id.

### routes[].when

> `array` of `object`

List of conditions (any match) to match this route when adapting `openapi` request-response streams to `asyncapi` streams.
Read more: [When a route matches](../../../concepts/config-intro.md#when-a-route-matches)

#### when[].api-id

> `object`

OpenAPI ApiId that matches from options

#### when[].operation-id

> `object`

OpenAPI operation-id that can be mapped between openapi and AsyncAPI spec

### routes[].exit\*

> `string`

Default exit binding when no conditional routes are viable.

```yaml
routes:
  - when:
    ...
    exit: asyncapi_client
```

### routes[].with

> `object`

Defines the route with the Asyncapi Apid and OperationId.

```yaml
with:
  api-id: asyncapi-id
```

### with.api-id

> `object`

Asyncapi ApiId that route exits with to the next binding

### with.operation-id

> `object`

Asyncapi OperationID that route exits with to the next binding

---
::: right
\* required
:::
