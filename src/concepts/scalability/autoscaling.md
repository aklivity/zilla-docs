# Auto Scaling

Zilla will start workers that default to the CPU cores it is allowed to use. This makes horizontal scaling easy with a 1:1 ratio of instances to workers. Any of the default scaling metrics based on server CPU usage will enable Zilla to handle traffic spikes.

Additionally, Zilla [Telemetry](/reference/config/overview.md#telemetry) configuration provides more data when determining how to scale.

The [Autoscaling on K8s](/how-tos/deploy-operate/autoscale-k8s.md) guide demonstrates using metrics from the [Prometheus exporter](/reference/config/telemetry/exporters/prometheus.md) to horizontally scale Zilla on k8s.
