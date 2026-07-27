---
shortTitle: AWS EKS
---

# Deploying Zilla Plus on AWS EKS

[Available in Zilla Plus](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

## Overview

The [Zilla Plus](https://aws.amazon.com/marketplace/pp/prodview-lqfqftufwpttm) is an enterprise-ready, Kafka-native edge, and service proxy. It is a flexible, secure, and reliable way of creating stateless, multi-protocol API entry points into your Kafka cluster for both native and non-native Kafka clients.

Zilla Plus deploys to Amazon EKS on EC2-backed or Fargate-backed node groups alike.

## Prerequisites

- An Amazon EKS cluster
- A Subscription to the Zilla Plus [product on Amazon Marketplace](https://aws.amazon.com/marketplace/pp/prodview-lqfqftufwpttm)

## IRSA for AWS Marketplace Metering

The pod's service account needs an IAM role (IRSA) granting `aws-marketplace:RegisterUsage` and `aws-marketplace:MeterUsage`, associated via the standard EKS service account annotation.

## AWS Marketplace vCPU-Based Metering

Zilla Plus reports AWS Marketplace usage based on the vCPUs available to the running pod, and the same rule applies whether the pod runs on an EC2-backed or a Fargate-backed node:

- Setting `resources.limits.cpu` on the pod determines the vCPU count used for metering, rounded up to the nearest whole vCPU.
- Leaving it unset makes the vCPU count the real ceiling on what the pod can consume, the underlying node's core count.

Either way, no additional configuration is needed. On startup, Zilla Plus logs the vCPU count it detected:

```text:no-line-numbers
Detected vCPUs: 1
```

::: note Fargate-Backed Clusters Without EC2 Nodes

If the cluster has no EC2 nodes at all, give CoreDNS its own Fargate profile for `kube-system`, and restart the CoreDNS deployment after that profile is created:

```bash:no-line-numbers
kubectl rollout restart deployment coredns -n kube-system
```

Otherwise, cluster DNS, and with it the metering calls, can get stuck failing to resolve.

:::
