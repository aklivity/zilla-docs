---
description: In this guide, you enable logs and metrics in Zilla to be exported to an OpenTelemetry Collector.
---

# Logs and Metrics via the OpenTelemetry Protocol

In this guide, you run the [aklivity/opentelemetry-demo](https://github.com/aklivity/opentelemetry-demo) and use Zilla to expose the Kafka topics as rest endpoints.

Specifically, you will:

[Verify prerequisites](#prerequisites) to run this guide.
[Install and run](#install-and-run) Zilla with the other OpenTelemetry demo components.
[Verify the web store and Telemetry Demo](#verify-the-web-store-and-telemetry-demo) is working.
[Fetch Kafka Messages](#fetch-kafka-messages) using Zilla.
[Browse the Observability data](#browse-the-observability-data) created and sent by Zilla.

## Prerequisites

Before proceeding, you should have [Compose](https://docs.docker.com/compose/gettingstarted/).

::: details Detailed prerequisites

- A connection to the internet
- Docker version 1.13.0+ or later is installed and running
- Docker Compose v2.0.0+
- Container host resources: 2 CPU, 6GB memory

:::

## Install and run

Download the [opentelemetry-demo](https://github.com/aklivity/opentelemetry-demo) repo. It will start Zilla and everything you need for this guide.

Run the Demo using Docker Compose from inside the demo directory:

```bash:no-line-numbers
docker compose up --force-recreate --remove-orphans --detach
```

## Verify the web store and Telemetry Demo

Once the images are built and containers are started you can access:

- Web store: <http://localhost:8080/>
- Grafana: <http://localhost:8080/grafana/>

## Fetch Kafka Messages

The running `zillaproxy` is configured to expose kafka topics passed in through the path

- Zilla Proxy: <http://localhost:7114/{kafka_topic_name}>

You can fetch all of the messages on the Kafka topic from a `curl` command.

```bash:no-line-numbers
curl http://localhost:7114/orders
```

```output:no-line-numbers
[
$ea598bca-0ed4-11ef-91e2-0242c0a80014$adb1a413-2ac6-4c8d-9aff-bd8955273889
USD�    �ʵ�"4
United States*98109*leWA"


LS4PSXUNUM
USD9����* 


2ZYFJ3GM2N

USD�����* 


66VCHSJNUP
USD�����,
$ebed6139-0ed4-11ef-91e2-0242c0a80014$91b1d717-5aa8-4ee3-b401-c5942d7f9be5
USD����_"9
United States*95014*    CupertinoCA"


L9ECAV7KIM
USD����* 


66VCHSJNUP
USD�����]
```

## Browse the Observability data

You can see the `zillaproxy` service logs and metrics in the OpenTelemetry Demo's [Grafana dashboard](http://localhost:8080/grafana/d/W2gX2zHVk/demo-dashboard?orgId=1&var-service=zillaproxy).
