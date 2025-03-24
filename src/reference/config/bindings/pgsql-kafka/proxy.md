---
shortTitle: proxy
---

# pgsql-kafka proxy

The pgsql-kafka proxy binding for adapting `pgsql` request-response streams to `kafka` topic streams.

```yaml {3}
<!-- @include: ./.partials/proxy.yaml -->
```

## Configuration (\* required)

<!-- @include: ./.partials/cataloged.md -->

### exit

> `string`

```yaml
exit: pgsql_tcp_client
```
