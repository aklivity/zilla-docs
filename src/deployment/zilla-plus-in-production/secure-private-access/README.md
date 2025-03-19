---
sidebarTitle: Deployment Options – Zilla Plus
description: Securely access your Kafka cluster via the intranet.
---

# Secure Private Access

[Available in Zilla Plus](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

The [Zilla Plus for Amazon MSK](https://aws.amazon.com/marketplace/pp/prodview-jshnzslazfm44) Secure Private Access proxy enables authorized Kafka clients deployed across **cross-account VPCs** to securely connect, publish messages, and subscribe to topics in your Amazon MSK Serverless cluster.

This setup establishes a fully private, secure, and scalable communication channel between Kafka clients and the Amazon MSK cluster by leveraging **Zilla Plus** proxy.

**Zilla Plus:** An auto-scaling, stateless proxy layer deployed in a private VPC that handles authentication and routing of Kafka requests.

![Secure Private Access Overview](/secure_private_access.png)

## Key Features

- Seamless MSK Serverless Connectivity across **Cross-Account VPCs**.
- **No configuration** changes required to the MSK cluster.
- **Custom Wildcard DNS** & Route 53 Hosted Zone Integration.
- **Unified Domain Name** for Kafka clients, streamlining configuration.
- **Eliminates** the need to **manually whitelist** each bootstrap endpoint to enable access.
- Seamless end-to-end **TLS** handshake.
- **Auto-Scaling** Zilla Plus Instances.
- Deployed behind a **Network Load Balancer** for high availability and efficient request routing.
- Integrates with **AWS Nitro Enclaves**, enabling automated certificate renewal.

### Many-to-One Private Access

Multiple Kafka clients from different cross-account VPCs securely connect to a single Amazon MSK Serverless cluster. This approach simplifies multi-tenant access and ensures a unified, private connectivity model.

![Many to One Private Access Overview](/many_to_one.png)

### One-to-Many Private Access

Enables Kafka clients to securely access multiple Amazon MSK Serverless clusters deployed across different VPCs.

![One to Many Private Access Overview](/one_to_many.png)

You will need to choose a wildcard DNS pattern to use for intranet access to the brokers in your Kafka cluster. These wildcard DNS names must resolve to the IP address of the VPC Endpoint in the client VPC, which then routes traffic via the VPC Endpoint Service to the ZillaPlus Network Load Balancer (NLB).

Additionally, the Zilla Plus proxy must also be configured with a TLS server certificate representing the same wildcard DNS pattern.

## Deploy with CDK

Follow the [Secure Private Access with CDK](https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdk/secure-private-access) guide to generate or deploy a custom AWS CDK stack.
