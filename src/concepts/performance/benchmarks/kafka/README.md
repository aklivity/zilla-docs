---
shortTitle: kafka proxy
---

# Kafka Proxy Benchmark

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

Measure the performance of Zilla Plus proxying Kafka Cluster using the OpenMessaging Benchmark on AWS EC2.

This benchmark can help understand the performance impact of introducing Zilla Plus into the data path using metrics like Publish & End to End latencies.

## OpenMessaging Benchmark

The [Linux Foundation’s OpenMessaging Benchmark](https://openmessaging.cloud/docs/benchmarks/) (OMB) is an open-source, cloud-based benchmark framework that make it easy to benchmark distributed messaging systems.

Aklivity provides a fork of OMB on [Github](https://github.com/aklivity/openmessaging-benchmark) to run these benchmarks.

### Workloads

An OMB workload defines the configuration for a benchmark test, including producers, consumers, topics, message configurations.

For this benchmarking, we use Confluent-style workloads across the following deployment scenarios:

- Zilla Plus + Apache Kafka
- Zilla Plus + Confluent Cloud
- Apache Kafka
- Confluent Cloud

## Run Benchmark

Clone the Aklivity OpenMessaging Benchmark (OMB) repository:

```bash
git clone https://github.com/aklivity/openmessaging-benchmark.git
```

Follow the instructions in [README](https://github.com/aklivity/openmessaging-benchmark/tree/aklivity-deployment/driver-kafka/deploy/aklivity-deployment) to set up and run benchmarks.

## Results

After a run completes, the benchmark generates results as `output.txt` in `results/` directory.

To generate charts from your `results/` directory, you can use `create_charts.py` script.

```bash
python3 ./bin/create_charts.py results/<your-result-folder>/output.txt
```

This script will create publish & end to end latency charts that help you analyze performance across different scenarios.
