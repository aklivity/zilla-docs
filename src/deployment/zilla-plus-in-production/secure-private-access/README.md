---
sidebarTitle: Deployment Options
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
- Supports Secure access from on-premises or remote devices via **AWS Client VPN**.

### Many-to-One Private Access

Multiple Kafka clients from different cross-account VPCs securely connect to a single Amazon MSK Serverless cluster. This approach simplifies multi-tenant access and ensures a unified, private connectivity model.

![Many to One Private Access Overview](/many_to_one.png)

<!-- @include: @partials/secure-private-access/wildcard-dns.md  -->

### One-to-Many Private Access

Enables Kafka clients to securely access multiple Amazon MSK Serverless clusters deployed across different VPCs.

![One to Many Private Access Overview](/one_to_many.png)

<!-- @include: @partials/secure-private-access/wildcard-dns.md  -->

### Connecting via AWS Client VPN

Zilla Plus supports secure private access to Amazon MSK Serverless over a custom domain, using AWS Client VPN.

This allows on-premises users to securely connect to MSK Serverless clusters from outside the VPC without exposing the clusters to the public internet.

![Secure Private Access via AWS Client VPN](/private_access_client_vpn.png)

<!-- @include: @partials/secure-private-access/wildcard-dns.md  -->

After deployment, set up an **AWS Client VPN Endpoint** attached to the client VPC so that on-premises clients can connect via AWS Client VPN and access the MSK Serverless clusters.

## Deploy with CDK

Follow the [Secure Private Access with CDK](https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdk/README.SecurePrivateAccess.md) guide to generate or deploy a custom AWS CDK stack.
