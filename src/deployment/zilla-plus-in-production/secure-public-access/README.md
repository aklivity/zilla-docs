---
description: Securely access your Kafka cluster via the internet.
---

# Secure Public Access

<!-- markdownlint-disable MD024 -->

[Available in Zilla Plus](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

The [Zilla Plus for Amazon MSK](https://aws.amazon.com/marketplace/pp/prodview-jshnzslazfm44) Secure Public Access proxy lets authorized Kafka clients connect, publish messages and subscribe to topics in your Amazon MSK cluster via the internet.

By automating the configuration of an internet-facing network load balancer and auto-scaling group of stateless Secure Public Access proxies to expose your MSK cluster via the public internet, Kafka clients can connect, publish messages and subscribe to topics in your Amazon MSK cluster from outside AWS.

You will need to choose a wildcard DNS pattern to use for public internet access to the brokers in your Kafka cluster. These wildcard DNS names must resolve to the public IP address(es) where the Zilla Plus proxy is deployed. The Zilla Plus proxy must also be configured with a TLS server certificate representing the same wildcard DNS pattern.

The Zilla Plus proxy can securely expose any Kafka cluster with these deployment options.

## Amazon MSK

The [Zilla Plus for Amazon MSK](https://aws.amazon.com/marketplace/pp/prodview-jshnzslazfm44) Secure Public Access proxy lets authorized Kafka clients connect, publish messages and subscribe to topics in your Amazon MSK cluster via the internet.

![Secure Public Access Overview](/secure_public_access.png)

## Key Features

- No modifications to the MSK cluster are required to enable a **custom bootstrap domain** over the internet.
- Custom **Wildcard** DNS.
- Seamless end-to-end **TLS** handshake.
- Supports `IAM`, `SASL` and `mTLS` authentication via integrations with `AWS Secrets Manager` and `AWS Certificate Manager`.
- **Auto-Scaling** Zilla Plus Instances.
- Deployed behind a **Network Load Balancer** for high availability and efficient request routing.
- Integrates with **AWS Nitro Enclaves**, enabling automated certificate renewal.

### Deploy with CDK

Follow the [Secure Public Access with CDK](https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdk/README.SecurePublicAccess.md) guide to generate or deploy a custom AWS CDK stack, enabling `IAM access control`, `SASL/SCRAM authentication`, `Mutual TLS (mTLS) authentication` or `Unauthorized access` to setup connectivity to your MSK cluster using a wildcard DNS pattern.

### Deploy with Terraform

Follow the [Secure Public Access with Terraform](https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdktf/secure-public-access) guide to generated or deploy a custom Terraform template using [CDKTF](https://developer.hashicorp.com/terraform/cdktf). This Terraform script can be configured to deploy `SASL/SCRAM authentication`, `Mutual TLS (mTLS) authentication` or `Unauthorized access` to setup connectivity to your MSK cluster with a wildcard DNS pattern.

### Deploy with CloudFormation

#### SASL/SCRAM authentication

Follow the [Secure Public Access via SASL/SCRAM authentication](/deployment/zilla-plus-in-production/secure-public-access/amazon-msk/production.md) guide to setup connectivity to your MSK cluster using a globally trusted TLS server certificate with a wildcard DNS pattern `*.example.aklivity.io` to illustrate the steps.

#### Mutual TLS (mTLS) authentication

Follow the [Secure Public Access via mTLS](/deployment/zilla-plus-in-production/secure-public-access/amazon-msk/production-mutual-tls.md) guide to setup connectivity to your MSK cluster using a globally trusted TLS server certificate with a wildcard DNS pattern `*.example.aklivity.io` to illustrate the steps.

#### Unauthorized access

Follow the [Secure Public Access via Unauthorized access](/deployment/zilla-plus-in-production/secure-public-access/amazon-msk/development.md) guide to setup connectivity to your MSK cluster using a locally trusted TLS server certificate with the example wildcard DNS pattern `*.example.aklivity.io`.

## Confluent Cloud

The [Zilla Plus for Confluent Cloud](https://aws.amazon.com/marketplace/pp/prodview-eblxkinsqbaks) Secure Public Access proxy lets authorized Kafka clients connect, publish messages and subscribe to topics in your Confluent Cloud cluster via the internet.

### Deploy with CDK

Follow the [Secure Public Access with CDK](https://github.com/aklivity/zilla-plus-aws-templates/blob/main/confluent-cloud/cdk/README.SecurePublicAccess.md) guide to generate or deploy a custom CDK stack.

### Deploy with CloudFormation

Follow the [Secure Public Access](/deployment/zilla-plus-in-production/secure-public-access/confluent-cloud.md) guide to set up connectivity to your Confluent Cloud using a globally trusted TLS server certificate with a wildcard DNS pattern `*.example.aklivity.io`.
