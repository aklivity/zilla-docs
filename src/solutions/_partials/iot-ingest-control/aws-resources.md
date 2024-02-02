We need to create the AWS resources necessary to allow access to the IoT Ingest and Control MQTT Broker from the internet, the <ZillaPlus/> proxy instances access to Secrets Manager secrets, and SSH access to the instances for troubleshooting.

### Create the VPC

> This creates your <ZillaPlus/> proxy VPC in preparation for access from an MQTT client.

[Create a VPC plus other VPC resources](https://docs.aws.amazon.com/vpc/latest/userguide/create-vpc.html#create-vpc-and-other-resources) with the below resource names.

- Name tag auto-generation: `my-zilla-iot-proxy`
- VPC endpoints: `none`
- Create the VPC

### Create the security group

> This creates your <ZillaPlus/> proxy security group to allow MQTT clients and SSH access.

A VPC security group is needed for the <ZillaPlus/> proxies when they are launched.

Follow the [Create Security Group](https://console.aws.amazon.com/vpcconsole/home#CreateSecurityGroup:) wizard with the following parameters and defaults. This creates your <ZillaPlus/> proxy security group to allow MQTT clients and SSH access.

::: note Check your selected region
Make sure you have selected the desired region, such as `US East (N. Virginia) us-east-1`.
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

Navigate to the VPC Management Console [Security Groups](https://console.aws.amazon.com/vpc/home#securityGroups:) table. Select the `my-zilla-iot-proxy-sg` security group you just created. You will create an inbound rule to allow all traffic inside itself.

- Add Inbound Rule
  - Type: `All Traffic`
  - Source type: `Custom`
  - Source: `my-zilla-iot-proxy-sg`

Add the `my-zilla-iot-proxy-sg` security group to your VPC Endpoint by finding your `my-zilla-iot-proxy-vpce` from the [Endpoints table](https://console.aws.amazon.com/vpcconsole/home#Endpoints:).

- Select your VPC endpoint
- `Actions` menu > select `Manage Security Groups`
- Select both security groups:
  - `default`
  - `my-zilla-iot-proxy-sg`
- Save the changes

### Create the IAM security role

> This creates an IAM security role to enable the required AWS services for the <ZillaPlus/> proxies.

Follow the [Create IAM Role](./../aws-services/create-iam-role.md) guide to create an IAM security role with the following parameters:

::: code-tabs

@tab Name

```text:no-line-numbers
my-zilla-iot-role
```

@tab Policies

```text:no-line-numbers
AWSCertificateManagerReadOnly
```

:::

- IAM role Inline Policies:

::: code-tabs

@tab Name

```text:no-line-numbers
MyZillaIotProxySecretsManagerRead
```

@tab JSON Summary

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
        "arn:aws:secretsmanager:*:*:secret:<TLS certificate private key secret name>-*",
        "arn:aws:secretsmanager:*:*:secret:my-zilla-iot-access-secret-*"
      ]
    }
  ]
}
```

:::

::: info If you used a different secret name.

The IAM role Inline policy uses the Secrets Manager ARN regex pattern `arn:aws:secretsmanager:*:*:secret:<Secret Name>-*`. Make sure you replace the resources listed with the appropriate patterns.

:::
