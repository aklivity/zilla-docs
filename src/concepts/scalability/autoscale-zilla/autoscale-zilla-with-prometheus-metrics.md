---
shortTitle: Autoscale Zilla with Prometheus Metrics
---

# Autoscale Zilla with Prometheus Metrics

In this guide, run zilla in kubernetes and autoscale the number of pods based on prometheus metrics. The Kubernetes horizontal pod autoscaler is set up to enable the zilla deployment to scale from 1 to 5 pods with the goal of an average load of 10 active connections per pod.

## Prerequisites

- Download and run the Zilla `kubernetes.prometheus.autoscale` cookbook

    ```bash
    wget -qO- https://raw.githubusercontent.com/aklivity/zilla-examples/main/startup.sh | sh -s -- kubernetes.prometheus.autoscale
    ```

    :::note
    Alternatively, download [kubernetes.prometheus.autoscale](https://github.com/aklivity/zilla-docs/releases/latest/download/kubernetes.prometheus.autoscale.tar.gz) and follow the `README` yourself.
    :::

- Install [jq](https://jqlang.github.io/jq/) and [netcat](https://netcat.sourceforge.net/)
- [Kubernetes](https://kubernetes.io/) (e.g. Docker Desktop with Kubernetes enabled)
- Install [kubectl](https://kubernetes.io/docs/reference/kubectl/)
- Install [helm](https://helm.sh/docs/intro/install/#helm) 3.0+

## Step 1: Verify Initial Setup

1. Run the commands from this guide from a shell in the `kubernetes.prometheus.autoscale` directory that you downloaded.

    ```bash
    curl -d "Hello, world" -X "POST" http://localhost:7114
    ```

    Output:

    ```text
    Hello, world
    ```

    > If the kubernetes custom metrics API response does not appear correctly please wait a few seconds and try again before proceeding further.

2. Check the current metrics:

    ```bash
    ./check_metric.sh
    ```

    Output:

    ```text
    The value of stream_active_received metric
    ------------------------------------------

    Prometheus API:
    {
    ...
            "metric": {
            "__name__": "stream_active_received",
            },
            "value": [
            1683013504.619, # timestamp
            "0" # value
    ...
    }

    Kubernetes custom metrics API:
    {
    ...
        "metricName": "stream_active_received",
        "value": "0",
    ...
    }
    ```

    This script retrieves the value of the `stream_active_received` metric. Initially, **it should be 0**.

3. Verify the Horizontal Pod Autoscaler (HPA) status:

    ```bash
    ./check_hpa.sh
    ```

    Output:

    ```text
    The status of horizontal pod autoscaling
    ----------------------------------------

    HorizontalPodAutoscaler:
    NAME    REFERENCE          TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
    zilla   Deployment/zilla   0/10      1         5         1          4m24s

    Deployment:
    NAME    READY   UP-TO-DATE   AVAILABLE   AGE
    zilla   1/1     1            1           4m25s

    Pods:
    NAME                     READY   STATUS    RESTARTS   AGE
    zilla-6db8d879f5-2wxgw   1/1     Running   0          4m25s
    ```

    The output should indicate that there is **1 Zilla pod running**.

## Step 2: Trigger Autoscaling

1. Open 21 connections to zilla as instances of netcat in the background.

    ```bash
    for i in `seq 1 21`; do nc localhost 7114 &; done
    ```

    Output:

    ```text
    [42] 88886
    [43] 88887
    [44] 88888
    ...
    ```

2. Confirm the number of open connections.

    ```bash
    ps auxw | grep "nc localhost 7114" | grep -v grep | wc -l
    ```

    Output:

    ```text
    21
    ```

    The output indicate that **there are 21 active connections**.

3. Wait for a few seconds so the metrics get updated. The value of `stream_active_received` metric should be 21 for one of the pods.

    ```bash
    ./check_metric.sh
    ```

    Output:

    ```text
    The value of stream_active_received metric
    ------------------------------------------

    Prometheus API:
    {
    ...
            "metric": {
            "__name__": "stream_active_received",
            },
            "value": [
            1683013504.619, # timestamp
            "21" # value
    ...
    }

    Kubernetes custom metrics API:
    {
    ...
        "metricName": "stream_active_received",
        "value": "21",
    ...
    }
    ```

    The `stream_active_received` metric should now **reflect `21` active streams**.

4. Wait for a minute so the autoscaler can catch up. The zilla deployment should be soon scaled up to 3 pods.

    ```bash
    ./check_hpa.sh
    ```

    Output:

    ```text
    The status of horizontal pod autoscaling
    ----------------------------------------

    HorizontalPodAutoscaler:
    NAME    REFERENCE          TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
    zilla   Deployment/zilla   7/10      1         5         3          7m14s

    Deployment:
    NAME    READY   UP-TO-DATE   AVAILABLE   AGE
    zilla   3/3     3            3           7m15s

    Pods:
    NAME                     READY   STATUS    RESTARTS   AGE
    zilla-6db8d879f5-2wxgw   1/1     Running   0          7m15s
    zilla-6db8d879f5-9bnkh   1/1     Running   0          75s
    zilla-6db8d879f5-fmgqx   1/1     Running   0          75s
    ```

    The output should show an **increase in the number of Zilla pods**, scaling up to handle the increased load.

## Step 3: Clean Up

After testing, you can remove the resources created during this setup:

```bash
./teardown.sh
```

The script will delete the namespace and all associated resources.
