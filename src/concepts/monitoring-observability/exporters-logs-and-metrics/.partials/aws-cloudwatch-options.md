### options

> `object`

| Property | Type | Description |
| -- | -- | -- |
| options.metrics |  `object` |  Configuration for transmitting custom metric data points to Amazon CloudWatch. | 
| options.metrics.namespace\* |  `string` |  The namespace for the metric data. To avoid conflicts with Amazon Web Services service namespaces, you should not specify a namespace that begins with `AWS/`. | 
| options.metrics.interval |  `integer` | Default: `30` |  Interval in seconds to push data to the Amazon CloudWatch. | 
| options.logs |  `object` |  Configuration for transmitting log events to Amazon CloudWatch. | 
| options.logs.group\* |  `string` |  The name of the log group. | 
| options.logs.stream\* |  `string` |  The name of the log stream. | 

#### Examples

The `aws` specific options.

```yaml
options:
  metrics:
    namespace: zilla-metrics
    interval: 20
  logs:
    group: zilla-log-group
    stream: zilla-log-stream
```