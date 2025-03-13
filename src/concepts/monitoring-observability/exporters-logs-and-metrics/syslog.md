---
shortTitle: syslog – Zilla Plus
---

# syslog

The Syslog exporter in Zilla sends logs to a Syslog server, allowing integration with centralized logging systems. It supports configurable parameters such as the target host, port, and protocol to ensure compatibility with various Syslog implementations.

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

```yaml {3}
<!-- @include: ./.partials/syslog.yaml -->
```

## Configuration (\* required)

::: tabs

@tab vault

<!-- @include: ./.partials/syslog-vault.md -->

@tab options

<!-- @include: ./.partials/syslog-options.md -->

:::
