---
shortTitle: client
---

# pgsql client

The pgsql `client` binding receives inbound application streams and route through `exit`.

```yaml {3}
<!-- @include: ./.partials/client.yaml -->
```

## Configuration (\* required)

### exit

> `string`

```yaml
exit: pgsql_tcp_client
```
