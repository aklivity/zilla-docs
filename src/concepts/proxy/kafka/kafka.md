---
shortTitle: Proxy – Zilla Plus
---

# Kafka Proxy

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

## Overview

Zilla's [`kafka-proxy`](../../../reference/config/bindings/kafka-proxy/README.md) serves as an intermediary between external clients and internal Kafka brokers, facilitating seamless communication across different network environments. This binding is particularly useful in scenarios where external clients need controlled access to internal Kafka infrastructures, such as in multi-cloud deployments or when integrating with third-party services.

![Architecture Example](../images/Kafka%20Proxy.png)

## Key Capabilities

### Seamless Kafka Traffic Proxying

Zilla's `kafka-proxy` binding enables Kafka traffic to pass through an intermediary proxy without exposing internal Kafka brokers directly. This is particularly useful for securing access to Kafka clusters in multi-cloud environments or when external clients need controlled access to internal brokers.

### Network Boundary Bridging

The `kafka-proxy` binding allows Kafka clusters to communicate across different network boundaries by defining separate external and internal Kafka endpoints. This ensures that external clients interact with a controlled entry point while keeping the internal Kafka infrastructure protected.

### Dynamic Routing

The `kafka-proxy` binding enables dynamic routing by forwarding Kafka messages to the appropriate internal brokers based on predefined rules. This allows organizations to manage Kafka traffic more efficiently, ensuring that messages are routed correctly without requiring manual broker configurations.

### Security and Access Control

To ensure secure communication, `kafka-proxy` can integrate with TLS encryption and authentication. This prevents unauthorized access and ensures data confidentiality.

## Use Cases

### Proxying Kafka Stream Between On-Premise and Cloud-Based Kafka Services

Organizations operating hybrid cloud environments often need to stream Kafka messages between on-premise clusters and cloud-based services like Confluent Cloud or AWS MSK. The `kafka-proxy` binding facilitates seamless communication by acting as an intermediary, ensuring secure and reliable message forwarding without exposing internal brokers directly. This setup enables businesses to migrate workloads to the cloud, implement disaster recovery strategies, or integrate cloud-based analytics platforms while maintaining a consistent Kafka architecture.

### Isolating Sensitive Data Streams via an Intermediary

Enterprises handling sensitive data, such as financial transactions or personal records, must enforce strict security controls when exposing Kafka streams. The `kafka-proxy` binding helps by routing sensitive data through an intermediary, adding an extra layer of protection before messages reach their destination. This isolation ensures that external clients or less-trusted environments only interact with the proxy while internal brokers remain hidden. Additionally, security policies such as encryption, authentication, and access control can be enforced at the proxy level to comply with data protection regulations.
