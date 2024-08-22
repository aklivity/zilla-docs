---
shortTitle: proxy
icon: aky-zilla-plus
---

# kafka-proxy proxy

The kafka-proxy proxy binding

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

```yaml {3}
<!-- @include: ./.partials/proxy.yaml -->
```

## Configuration (\* required)

<!-- @include: ./.partials/options.md -->

### exit\*

> `string`

Default exit binding when no conditional routes are viable.

```yaml
exit: tls_client
```

<!-- @include: ../.partials/telemetry.md -->
