---
shortTitle: AWS AMI
---

# Deploying Zilla Plus via AWS AMI

[Available in Zilla Plus](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

## Overview

The [Zilla Plus](https://aws.amazon.com/marketplace/seller-profile?id=b9df13e8-d3bc-41d1-bf8a-4a07aaa96e62) is an enterprise-ready, Kafka-native edge, and service proxy. It is a flexible, secure, and reliable way of creating stateless, multi-protocol API entry points into your Kafka cluster for both native and non-native Kafka clients.

This Guide will walk you through deploying Zilla Plus service using **AWS AMI**.

## Subscribe via AWS Marketplace

To launch a Zilla Plus instance, a subscription to the [Zilla Plus product on Amazon Marketplace](https://aws.amazon.com/marketplace/seller-profile?id=b9df13e8-d3bc-41d1-bf8a-4a07aaa96e62) is required.

- To get started, visit the AWS Marketplace [Product Page](https://aws.amazon.com/marketplace/seller-profile?id=b9df13e8-d3bc-41d1-bf8a-4a07aaa96e62)
- `Subscribe` to the appropriate **Zilla Plus** edition:
  - [Zilla Plus for Amazon MSK](https://aws.amazon.com/marketplace/pp/prodview-jshnzslazfm44)
  - [Zilla Plus for Confluent Cloud](https://aws.amazon.com/marketplace/pp/prodview-eblxkinsqbaks)
  - [Zilla Plus for Redpanda](https://aws.amazon.com/marketplace/pp/prodview-sj4kquyndubiu)
- You should see `Zilla Plus` listed in your [AWS Marketplace](https://console.aws.amazon.com/marketplace) subscriptions.

You can skip this step if you have already subscribed to Zilla Plus via AWS Marketplace.

## Launch Zilla Plus Instance via AMI

![](zilla-plus-via-ami.gif)

### Prerequisites

- A Subscription to the [Zilla Plus product on Amazon Marketplace](https://aws.amazon.com/marketplace/seller-profile?id=b9df13e8-d3bc-41d1-bf8a-4a07aaa96e62)

### Steps to launch a Zilla Plus instance

1. **Sign in to the AWS Console**
   - Navigate to the [EC2 Dashboard](https://console.aws.amazon.com/ec2/home#Instances:instanceState=running) in your preferred region.

2. **Start a New Instance**
   - Click `Launch Instance` and provide a name (e.g., `zilla-plus-proxy`).

3. **Select the Zilla Plus AMI**
   - Choose the subscribed **Zilla Plus AMI** from your list.

4. **Choose an Instance Type**
   - Select an instance type that fits your workload (e.g., `t3.medium` or `larger`).

5. **Configure Networking**
   - Create or select a `VPC security group` that allows access to the required ports for Zilla Plus.
   - Ensure the instance is launched in a subnet with **Auto-assign public IP** enabled.

6. **Add User Data**
   - Expand `Advanced details` > `User data - optional`
   - Paste [custom cloud-init script](#user-data) to initialize the Zilla Plus service with `zilla.yaml` configuration.
   - You can also use `base64-encoded` input directly by selecting `User data has already been base64 encoded` option.

7. **Launch the Instance**
   - Click `Launch Instance`.

### User Data

::: tabs

@tab Services Init

```yaml:no-line-numbers
<!-- @include: amazon-msk-secure-public-access-mtls-user-data.yaml#services_init  -->
```

@tab Zilla Config Init

```yaml:no-line-numbers
<!-- @include: amazon-msk-secure-public-access-mtls-user-data.yaml#config_init  -->
```

:::

::: details Complete User Data for reference

```yaml
<!-- @include: amazon-msk-secure-public-access-mtls-user-data.yaml -->
```

:::

### Verify Zilla Plus Service

> This checks that the services and networking were properly configured.

Navigate to the [EC2 running instances dashboard.](https://console.aws.amazon.com/ec2/home#Instances:instanceState=running)

::: note Check your selected region
Make sure you have selected the desired region, ex: `US East (N. Virginia) us-east-1`.
:::

Select the Zilla Plus instance launched to show the details.

Find the `Public IPv4 Address` and then SSH into the instance.

```bash
ssh -i ~/.ssh/<key-pair.cer> ec2-user@<instance-public-ip-address>
```

After logging in via SSH, check the status of the `zilla-plus` system service.

::: tabs

@tab Service is running

Verify that the `zilla-plus` service is active and logging output similar to that shown below.

```bash
systemctl status zilla-plus.service
```

```output:no-line-numbers
zilla-plus.service - Zilla Plus
   Loaded: loaded (/etc/systemd/system/zilla-plus.service; enabled; vendor preset: disabled)
   Active: active (running) since...
```

@tab Check Zilla Logs

You can get an stdout dump of the `zilla-plus.service` using `journalctl`.

```bash
journalctl -e -u zilla-plus.service | tee -a /tmp/zilla.log
```

```output:no-line-numbers
systemd[1]: Started zilla-plus.service - Zilla Plus.
...
```

@tab Check Cloud Init Logs

All output from cloud-init is captured by default to `/var/log/cloud-init-output.log`. There shouldn't be any errors in this log.

```bash
cat /var/log/cloud-init-output.log
```

```output:no-line-numbers
Cloud-init v. 22.2.2 running 'init'...
```

:::

## Conclusion

You have successfully deployed the [Zilla Plus](https://aws.amazon.com/marketplace/seller-profile?id=b9df13e8-d3bc-41d1-bf8a-4a07aaa96e62) using AWS AMI.

::: tip
Check out the [Troubleshooting](/support/troubleshooting-guides.md) guide if you run into any issues.
:::
