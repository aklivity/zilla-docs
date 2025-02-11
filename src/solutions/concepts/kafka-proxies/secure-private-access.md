---
redirectFrom: /solutions/how-tos/amazon-msk/secure-private-access/overview.html
icon: aky-zilla-plus
description: Securely access your Kafka cluster via the intranet.
---

# Secure Private Access

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

The [<ZillaPlus/> Secure Private Access for Amazon MSK](https://aws.amazon.com/marketplace/pp/prodview-jshnzslazfm44) enables authorized Kafka clients deployed across **various VPCs and regions** to securely connect, publish messages, and subscribe to topics in your Amazon MSK Serverless cluster.

This setup establishes a fully private, secure, and scalable communication channel between Kafka clients and the Amazon MSK cluster by leveraging **<ZillaPlus/>** proxy.

**<ZillaPlus/>:** An auto-scaling, stateless proxy layer deployed in a private VPC that handles authentication and routing of Kafka requests.

![Secure Private Access Overview](/secure_private_access.png)

## Key Features

- Seamless MSK Serverless Connectivity across **multiple VPCs and regions**.
- **Custom Wildcard DNS** & Route 53 Hosted Zone Integration.
- **Unified Domain Name** for Kafka clients, streamlining configuration.
- **Eliminates** the need to **manually whitelist** each bootstrap endpoint to enable access.
- Seamless end-to-end **TLS** handshake.
- **Auto-Scaling** <ZillaPlus/> Instances

You will need to choose a wildcard DNS pattern to use for intranet access to the brokers in your Kafka cluster. These wildcard DNS names must resolve to the IP address(es) where the <ZillaPlus/> proxy is deployed. The <ZillaPlus/> proxy must also be configured with a TLS server certificate representing the same wildcard DNS pattern.

::: info
Aklivity recommend using the format `*.<region>.<custom-domain>` for your custom wildcard DNS domain. This removes the need for additional client configuration, as the MSK Serverless cluster region can be directly inferred from the custom domain itself.
:::

## Deploy with Terraform

Follow the [Secure Private Access with Terraform](https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdktf/secure-private-access) guide to generated or deploy a custom Terraform template using [CDKTF](https://developer.hashicorp.com/terraform/cdktf). This Terraform script can be configured to deploy `SASL/SCRAM authentication`, `Mutual TLS (mTLS) authentication` or `Unauthorized access` to setup connectivity to your MSK Serverless cluster with a wildcard DNS pattern.
