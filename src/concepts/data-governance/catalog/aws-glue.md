---
shortTitle: AWS Glue – Zilla Plus
---

# AWS Glue

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

## Overview

[AWS Glue](https://aws.amazon.com/glue/) is a fully managed data catalog and schema registry that simplifies data discovery, preparation, and integration. By leveraging AWS Glue, Zilla can dynamically resolve schemas, ensuring real-time validation of Kafka messages and other structured data formats. Key benefits include:

- **Dynamic Schema Resolution**: Fetch schemas in real-time to validate messages and maintain consistency.
- **Scalable and Secure**: Leverage AWS’s managed services for high availability and security.

```yaml {2}
<!-- @include: ./.partials/aws-glue.yaml -->
```

## Configuration (\* required)

::: tabs

@tab options

<!-- @include: ./.partials/aws-glue-options.md -->

:::
