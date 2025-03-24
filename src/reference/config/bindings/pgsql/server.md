---
shortTitle: server
---

# pgsql server

The pgsql server binding receives inbound network stream, producing higher level application streams for each request.

```yaml {3}
<!-- @include: ./.partials/server.yaml -->
```

## Configuration (\* required)

### exit

> `string`

```yaml
exit: risingwave_proxy
```
