---
shortTitle: Redpanda
description: Set up an IoT Ingest and Control MQTT Broker that lets clients publish messages and subscribe to topics proxied to Kafka topics in your Redpanda cluster.
---

# Redpanda IoT Ingest and Control

[Available in Zilla Plus](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

## Overview

The [Zilla Plus for Redpanda](https://aws.amazon.com/marketplace/pp/prodview-sj4kquyndubiu) IoT Ingest and Control MQTT Broker lets clients publish messages and subscribe to topics that are proxied to Kafka topics in your Redpanda cluster.

## Prerequisites

Before creating an IoT Ingest and Control MQTT Broker to your Kafka cluster, you will need the following:

- a Kafka cluster configured for SASL/SCRAM authentication
- a custom DNS wildcard domain, for this guide we will use `*.example.aklivity.io`
- a TLS Server Certificate stored in Secrets Manager for your custom DNS wildcard domain
- a Zilla Plus for Amazon MSK subscription, if you don't have one, visit the Proxy's Marketplace [Product Page](https://aws.amazon.com/marketplace/pp/prodview-jshnzslazfm44) and `Subscribe` to the offering

::: info
Note the server certificate secret ARN as we will need to reference it from the IoT Ingest and Control CloudFormation template.

Make sure you have selected the desired region, ex: `US East (N. Virginia) us-east-1`.

<<<<<<< HEAD
If you need help creating a TLS Server Certificate you can follow the [Create Server Certificate with LetsEncrypt](../../../solutions/how-tos/aws-services/create-server-certificate-letsencrypt.md) guide. Use your own custom DNS wildcard domain in place of the example domain `*.example.aklivity.io`.
=======
If you need help creating a TLS Server Certificate you can follow the [Create Server Certificate with LetsEncrypt](/solutions/how-tos/aws-services/create-server-certificate-letsencrypt.md) guide. Use your own custom DNS wildcard domain in place of the example domain `*.example.aklivity.io`.
>>>>>>> 30905bb (fix broken links)
:::

### AWS services used

| Service                     | Required                                                                       | Usage        | Quota                                                                                        |
| --------------------------- | ------------------------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------------------------- |
| Secrets Manager             | Yes                                                                            | Startup only | [Not reached](https://docs.aws.amazon.com/general/latest/gr/asm.html#limits_secrets-manager) |
| Certificate Manager         | No<br><br>Private key and certificate can be inline in Secrets Manager instead | Startup only | [Not reached](https://docs.aws.amazon.com/general/latest/gr/acm.html#limits_acm)             |
| Private Certificate Manager | No<br><br>Private key and certificate can be inline in Secrets Manager instead | Startup only | [Not reached](https://docs.aws.amazon.com/general/latest/gr/acm-pca.html#limits_acm-pca)     |

Default [AWS Service Quotas](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) are recommended.

::: tip
<<<<<<< HEAD
Check out the [Troubleshooting](../../../solutions/how-tos/aws-services/troubleshooting.md) guide if you run into any issues.
=======
Check out the [Troubleshooting](/solutions/how-tos/aws-services/troubleshooting.md) guide if you run into any issues.
>>>>>>> 30905bb (fix broken links)
:::

## Step 1: Create the Redpanda cluster

> This creates your Redpanda cluster.

The [Redpanda Cloud Quickstart](https://docs.redpanda.com/current/get-started/quick-start-cloud/) will walk you through creating one. You can skip this step if you have already created a Redpanda cluster with an equivalent configuration.

- Cluster Name: `my-zilla-iot-rp-cluster`
- Cluster Type: any
- Create Topics:

  - With cleanup policy "delete" to store MQTT messages:

  ```text:no-line-numbers
  mqtt-messages
  ```

  - With cleanup policy "compact" to store MQTT retained messages:

  ```text:no-line-numbers
  mqtt-retained
  ```

  - With cleanup policy "compact" to store MQTT sessions:

  ```text:no-line-numbers
  mqtt-sessions
  ```

### Create an API key

Follow the Configure Authentication documentation to set up [SASL/SCRAM in Redpanda](https://docs.redpanda.com/current/manage/security/authentication/#scram). Save the username and password for use later.

### Create a Secret with SASL/SCRAM authentication params

> This creates a Secrets Manager secret with the necessary properties to access the Redpanda cluster.

Follow the [Store a new secret](https://console.aws.amazon.com/secretsmanager/newsecret) wizard with the following parameters and defaults.

- Secret Type: `Other type of secret`
- Value:

  - Plaintext JSON object:

    ```json:no-line-numbers
    {
      "sasl_username": "<rp-username>",
      "sasl_password": "<rp-password>",
      "bootstrap_server": "<rp-bootstrap-server>"
    }
    ```

- Secret Name: `my-zilla-iot-access-secret`
- Review and store the secret

## Step 2: Set Up AWS Resources for Zilla Proxy

We need to create the AWS resources necessary to allow access to the IoT Ingest and Control MQTT Broker from the internet, the Zilla Plus proxy instances access to Secrets Manager secrets, and SSH access to the instances for troubleshooting.

### Create the VPC

> This creates your Zilla Plus proxy VPC in preparation for access from an MQTT client.

[Create a VPC plus other VPC resources](https://docs.aws.amazon.com/vpc/latest/userguide/create-vpc.html#create-vpc-and-other-resources) with the below resource names.

- Name tag auto-generation: `my-zilla-iot-proxy`
- VPC endpoints: `none`
- Create the VPC

### Create the security group

> This creates your Zilla Plus proxy security group to allow MQTT clients and SSH access.

A VPC security group is needed for the Zilla Plus proxies when they are launched.

Follow the [Create Security Group](https://console.aws.amazon.com/vpcconsole/home#CreateSecurityGroup:) wizard with the following parameters and defaults. This creates your Zilla Plus proxy security group to allow MQTT clients and SSH access.

::: note Check your selected region
Make sure you have selected the desired region, ex: `US East (N. Virginia) us-east-1`.
:::

- Name: `my-zilla-iot-proxy-sg`
- VPC: `my-zilla-iot-proxy-vpc`
- Description: `MQTT clients and SSH access`
- Add Inbound Rule
  - Type: `CUSTOM TCP`
  - Port Range: `8883`
  - Source type: `Anywhere-IPv4`
- Add Inbound Rule
  - Type: `SSH`
  - Source type: `My IP`
- Add Outbound Rule (if not exists)
  - Type: `All traffic`
  - Destination: `Anywhere-IPv4`
- Create the Security Group

::: warning Check your network settings
Your IP may be different when you SSH into the EC2 instance. VPNs and other networking infrastructure may cause the `My IP` inbound rule to fail. Instead, you can use one of the other ways AWS provides to execute commands in an EC2 instance.
:::

### Create the IAM security role

> This creates an IAM security role to enable the required AWS services for the Zilla Plus proxies.

Navigate to the [Create role](https://console.aws.amazon.com/iamv2/home#/roles/create) form and fill out the form with the following details:

- Region: `Global`
- Trusted Entity Type: `AWS Service`
- Choose a use case: `EC2`
- Add Permissions policies

  ```text:no-line-numbers
  AWSCertificateManagerReadOnly
  AmazonSSMManagedInstanceCore
  ```

- Role Name:

  ```text:no-line-numbers
  my-zilla-iot-role
  ```

Click `Create role`

Open the newly created role

- Use the `Add permissions` > `Create Inline Policy` action from the dropdown
- JSON Summary

  ```json:no-line-numbers
  {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "VisualEditor0",
        "Effect": "Allow",
        "Action": [
          "secretsmanager:GetSecretValue",
          "secretsmanager:DescribeSecret"
        ],
        "Resource": [
          "arn:aws:secretsmanager:*:*:secret:<TLS certificate private key secret name>*",
          "arn:aws:secretsmanager:*:*:secret:<SASL/SCRAM auth secret name>*"
        ]
      }
    ]
  }
  ```

::: info If you used a different secret name.

The IAM role Inline policy uses the Secrets Manager ARN regex pattern `arn:aws:secretsmanager:*:*:secret:<Secret Name>*`. Make sure you replace the resources listed with the appropriate patterns.

:::

- Name

  ```text:no-line-numbers
  MyZillaIotProxySecretsManagerRead
  ```

## Step 3: Deploy the IoT Ingest and Control MQTT Broker

> This initiates deployment of the Zilla Plus for Redpanda stack via CloudFormation.

Navigate to your [AWS Marketplace](https://console.aws.amazon.com/marketplace) subscriptions and select `Zilla Plus for Redpanda` to show the manage subscription page.

- From the `Agreement` section > `Actions` menu > select `Launch CloudFormation stack`
- Select the `CloudFormation Template` > `IoT Ingest and Control` fulfillment option
- Make sure you have selected the desired region selected, such as `us-east-1`
- Click `Continue to Launch`
  - Choose the action `Launch CloudFormation`

Click `Launch` to complete the `Create stack` wizard with the following details:

1. Create Stack with details as follows:

    - Prepare template: `Template is ready`
    - Specify template: `Amazon S3 URL`
      - Amazon S3 URL: `(auto-filled)`

2. Specify stack details with parameters as follows:

    ::: code-tabs

    @tab Stack name

    ```text:no-line-numbers
    my-zilla-iot-proxy
    ```

    :::

    Parameters:

    - Network Configuration
      - VPC: `my-zilla-iot-proxy-vpc`
      - Subnets: `my-zilla-iot-proxy-subnet-public-1a` `my-zilla-iot-proxy-subnet-public-1b`
    - Redpanda Configuration
      - Access Credentials and Bootstrap Server Secret ARN: `<my-zilla-iot-access-secret secret ARN>` \*1
      - Kafka Topics:
        - messages: `mqtt-messages`
        - retained: `mqtt-retained`
        - sessions: `mqtt-sessions`
    - Zilla Plus Configuration
      - Instance count: `2`
      - Instance type: `t3.small` \*2
      - Role: `my-zilla-iot-role`
      - Security Groups: `my-zilla-iot-proxy-sg`
      - Public Port: `8883`
      - Public Wildcard DNS: `*.example.aklivity.io` \*3
      - Public TLS Certificate Key: `<TLS certificate private key secret ARN>` \*4
      - Key pair for SSH access: `my-key-pair` \*5
    - Configuration Reference
      1. This is the ARN for the secret created in the [Create a Secret with SASL/SCRAM authentication params](#create-a-secret-with-sasl-scram-authentication-params) step of this guide.
      2. Consider the network throughput characteristics of the AWS instance type as that will impact the upper bound on network performance.
      3. Replace with your own custom wildcard DNS pattern mentioned in the [Prerequisites](#prerequisites) of this guide.
      4. This is the ARN of the created secret for the signed certificate's private key mentioned in the [Prerequisites](#prerequisites) of this guide.
<<<<<<< HEAD
      5. Follow the [Create Key Pair](../../../solutions/how-tos/aws-services/create-key-pair.md) guide to create a new key pair to access EC2 instances via SSH.
=======
      5. Follow the [Create Key Pair](/solutions/how-tos/aws-services/create-key-pair.md) guide to create a new key pair to access EC2 instances via SSH.
>>>>>>> 30905bb (fix broken links)

3. Use the default configuration for the stack options.

4. Confirm the stack details are correct and `Submit` to start the CloudFormation deploy.

    ::: info
    When your Zilla Plus proxy is ready, the [CloudFormation console](https://console.aws.amazon.com/cloudformation) will show `CREATE_COMPLETE` for the newly created stack.
    :::

### Configure Global DNS

> This ensures that any new Kafka brokers added to the cluster can still be reached via the Zilla Plus proxy.

When using a wildcard DNS name for your own domain, such as `*.example.aklivity.io` then the DNS entries are setup in your DNS provider.

Navigate to the [CloudFormation console](https://console.aws.amazon.com/cloudformation). Then select the `my-zilla-proxy` stack to show the details.

In the stack `Outputs` tab, find the public DNS name of the `NetworkLoadBalancer`. You need to create a `CNAME` record mapping your public DNS wildcard pattern to the public DNS name of the Network Load Balancer.

::: info
You might prefer to use an Elastic IP address for each NLB public subnet, providing DNS targets for your `CNAME` record that can remain stable even after restarting the stack.

For testing purposes you can edit your local `/etc/hosts` file instead of updating your DNS provider.
:::

## Step 4: Verify MQTT Client Connectivity

We need to verify that an MQTT client can publish and subscribe to topics and ensure the messages get routed through your Kafka cluster.

### Connect with an MQTT Client

> This verifies MQTT client connectivity to your Kafka cluster via the IoT Ingest and Control MQTT Broker.

We can now verify that the MQTT client can successfully communicate with your Kafka cluster.

::: warning
Replace these TLS server names accordingly for your own custom wildcard DNS pattern.
:::

### Subscribe to a topic

Using [eclipse-mosquitto](https://hub.docker.com/_/eclipse-mosquitto) subscribe to the `zilla` topic.

```bash
docker run -it --rm eclipse-mosquitto \
mosquitto_sub --url mqtts://mqtt.example.aklivity.io/zilla
```

### Publish to a topic

In a separate session, publish a message on the `zilla` topic.

```bash
docker run -it --rm eclipse-mosquitto \
mosquitto_pub --url mqtts://mqtt.example.aklivity.io/zilla --message 'Hello, world'
```

You should see the `Hello, world` message printed by the subscriber.

## Step 5: Verify the Zilla proxy Service

> This checks that the services and networking were properly configured. These checks aren't necessary if the service is running as expected.

Navigate to the [EC2 running instances dashboard.](https://console.aws.amazon.com/ec2/home#Instances:instanceState=running)

::: note Check your selected region
Make sure you have selected the desired region, ex: `US East (N. Virginia) us-east-1`.
:::

Select either of the Zilla Plus proxies launched by the CloudFormation template to show the details.

::: info
They each have an IAM Role name starting with `my-zilla-iot-role`.
:::

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

@tab Check ports

Check for the active ports with `netstat`.

```bash
netstat -ntlp
```

```output:no-line-numbers
tcp6    0    0 :::9092    :::*    LISTEN    1726/.zpm/image/bin
```

@tab Check Zilla logs

You can get an stdout dump of the `zilla-plus.service` using `journalctl`.

```bash
journalctl -e -u zilla-plus.service | tee -a /tmp/zilla.log
```

```output:no-line-numbers
systemd[1]: Started zilla-plus.service - Zilla Plus.
...
```

@tab Check Cloud init logs

All output from cloud-init is captured by default to `/var/log/cloud-init-output.log`. There shouldn't be any errors in this log.

```bash
cat /var/log/cloud-init-output.log
```

```output:no-line-numbers
Cloud-init v. 22.2.2 running 'init'...
```

:::

## Conclusion

You have successfully deployed the [Zilla Plus for Redpanda](https://aws.amazon.com/marketplace/pp/prodview-sj4kquyndubiu) IoT Ingest and Control MQTT Broker. Instructions on how to Monitor and Upgrade your Zilla Plus proxy can be found in the [managing a cloudformation stack](/solutions/how-tos/aws-services/manage-cloudformation-stack.md) section.

