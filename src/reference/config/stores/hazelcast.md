---
shortTitle: hazelcast
category:
  - Store
tag:
  - hazelcast
---

# hazelcast Store

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

Defines a store backed by Hazelcast.

The `hazelcast` store connects to a Hazelcast cluster and can be used to persist session state, rate-limit counters, or other shared data across Zilla instances. Members can be discovered via a static address list, AWS EC2 tags, or Kubernetes service names.

```yaml {2}
stores:
  my_hazelcast_store:
    type: hazelcast
    options:
      cluster: dev
      addresses:
        - hazelcast.example.com:5701
      default-ttl: PT10S
```

## Configuration (\* required)

### options\*

> `object`

The `hazelcast` specific options.

```yaml
options:
  cluster: dev
  addresses:
    - hazelcast.example.com:5701
  default-ttl: PT10S
```

#### options.cluster\*

> `string`

Hazelcast cluster name.

```yaml
options:
  cluster: dev
```

#### options.addresses

> `array` of `string`

List of Hazelcast member addresses (e.g. `host:port`). At least one address is required when using static discovery.

```yaml
options:
  addresses:
    - hazelcast.example.com:5701
```

#### options.aws

> `object`

AWS EC2 discovery configuration. When set, Hazelcast members are discovered by querying EC2 instances matching the specified tag.

```yaml
options:
  aws:
    region: us-east-1
    tag-key: hazelcast-cluster
    tag-value: dev
```

##### aws.region

> `string`

AWS region to search for EC2 instances.

##### aws.tag-key

> `string`

EC2 instance tag key used to filter Hazelcast members.

##### aws.tag-value

> `string`

EC2 instance tag value used to filter Hazelcast members.

#### options.kubernetes

> `object`

Kubernetes discovery configuration. When set, Hazelcast members are discovered via the Kubernetes API using the specified service.

```yaml
options:
  kubernetes:
    namespace: default
    service-name: hazelcast
```

##### kubernetes.namespace

> `string`

Kubernetes namespace where the Hazelcast service is deployed.

##### kubernetes.service-name

> `string`

Kubernetes service name used to discover Hazelcast members.

#### options.default-ttl

> `string` | Pattern: `^PT(\\d+H)?(\\d+M)?(\\d+(\\.\\d+)?S)?$`

Default time-to-live for entries written to the store, specified as an ISO 8601 duration (e.g. `PT10S` for 10 seconds, `PT1M30S` for 90 seconds).

```yaml
options:
  default-ttl: PT10S
```
