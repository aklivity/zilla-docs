# Virtual Cluster

[Available in Zilla Plus](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

## Overview
Virtual Clusters allow for the logical segregation of a single physical Kafka cluster into multiple virtual clusters through configuration. This enables multiple segmented groups of clients to operate within the same Kafka environment while maintaining isolation.

This feature is enabled by **Zilla Plus**, which provides advanced Kafka proxy capabilities to define and manage virtual clusters seamlessly. Zilla Plus enables this feature without requiring any changes to the existing Kafka cluster, making it easy to implement virtual clusters with minimal effort.

![Virtual Cluster](/virtual-cluster.png)

## Key Features
- **Multiple Virtual Clusters Over a Single System Cluster**: One or more virtual clusters can be defined over a single system cluster.
- **Virtual Topics**: Topics are created following the pattern `<cluster_name>.<topic_name>`.
- **Virtual Consumer Groups**: Consumer groups follow the same pattern as topics, ensuring segmentation.
- **Virtual Partitions**: Supports mapping virtual topic partitions to system topic partitions.
- **Access Control**: Virtual ACLs are mapped to system ACLs.
- **Backwards Compatibility**: If no pattern is specified, virtual clusters are disabled.

## Virtual Cluster Mechanisms

### Virtual Topics
- A virtual topic is mapped to a system topic (`one-to-one` mapping).
- Virtual partitions can map to system partitions (`one-to-one`).

### Virtual Consumer Groups
- Virtual consumer groups are mapped to system consumer groups (`one-to-one`).

### Virtual Access Control Lists (ACLs)
- Each virtual ACL is mapped directly to a system ACL (`one-to-one`).

## Configuration
A virtual cluster is defined using a configuration structure like the example below:

```yaml
secure-proxy0:
    type: kafka-proxy
    kind: proxy
    options:
      clusters:
      - cluster-*
      external:
        host: kafka-#-{cluster}.external.net
        default: kafka-{cluster}.external.net
        port: 9094
      internal:
        host: kafka-#.internal.net
        port: 9094
    exit: secure-client0
```

## Context Establishment
- Naming prefixes can be configured to establish virtual cluster context.
- Cluster name patterns are used to avoid listing each cluster individually.
- Virtual cluster capability can be selectively enabled:
  - A pattern can be provided to extract virtual cluster names from hostnames (TLS-only).
  - If no pattern is specified, virtual clusters remain disabled (ensuring backward compatibility).

## Deploy with ECS

To deploy [Zilla Plus](https://www.aklivity.io/products/zilla-plus) on AWS ECS with **virtual cluster** support, configure the `kafka-proxy` section of `zilla.yaml` specifying the required parameters under `options`.

::: info

[`zilla.yaml`](https://github.com/aklivity/zilla-plus-aws-templates/blob/main/amazon-msk/cdk/secure-public-access/zilla.yaml.mustache) template for getting started.

:::

- The `clusters` field accepts a list of strings, which can be either explicit names or wildcard patterns.

- The `external.host` field defines the hostname pattern for external Kafka clusters using `{cluster}` as a placeholder.

- The `external.default` field specifies a fallback hostname when `external.host` doesn't match.

```yaml
...
    options:
      clusters:
      - cluster-*
      external:
        host: kafka-#-{cluster}.external.net
        default: kafka-{cluster}.external.net
...
```

### Deployment on AWS ECS Fargate (Docker Image)

For detailed deployment steps, refer to: [Deploy Zilla-Plus on AWS ECS Fargate](/deployment/zilla-plus-in-production/zilla-plus-on-aws-ecs-fargate.md)
