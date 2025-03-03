---
shortTitle: Proxy
---

# MQTT Proxy

Zilla’s MQTT proxy provides a robust and scalable solution for managing MQTT message flows. It enables efficient publish-subscribe communication while enforcing secure authentication, advanced message routing, and schema validation. With support for JWT-based authentication, Zilla ensures that only authorized clients can connect and interact with the broker. Its dynamic topic-based routing optimizes message distribution, enhancing performance and scalability. Schema validation guarantees data integrity by ensuring that all messages conform to predefined structures. Additionally, Zilla integrates seamlessly with AsyncAPI specifications, allowing for standardized and declarative configuration of MQTT interactions in event-driven architectures.

## Key Capabilities

### Publish-Subscribe Model

Zilla's MQTT Proxy facilitates a publish-subscribe (Pub/Sub) messaging architecture, enabling clients to publish messages to topics and receive updates from subscribed topics. This ensures efficient, event-driven communication across distributed systems.

### Advanced Message Routing

Zilla supports topic-based routing, dynamically directing MQTT messages to appropriate destinations based on predefined rules. This enables optimized message distribution, ensuring scalability and efficient resource utilization.

### Secure Authentication Enforcement

Zilla implements authentication validation using JWT-based security mechanisms, ensuring only authorized clients can connect to the MQTT broker. By leveraging [JWT guard](../../../reference/config/guards/jwt.md), organizations can enforce secure access control and prevent unauthorized interactions.

### Schema Validation for Data Integrity

With schema validation, Zilla ensures that MQTT messages conform to predefined data structures before processing, preventing malformed payloads and enhancing data integrity. This is achieved through Zilla’s configurable [catalog-based schema validation](../../../reference/config/catalogs/), providing a reliable mechanism for structured message exchanges.

### Seamless AsyncAPI Integration

Zilla supports loading configurations from AsyncAPI specifications, enabling a declarative approach to defining MQTT topics, message formats, and interactions. By utilizing [Zilla’s AsyncAPI bindings](../../../reference/config/bindings/asyncapi/README.md), organizations can standardize API definitions and streamline integration with event-driven architectures.

## Use Cases

### Routing IoT Traffic Across Multiple MQTT Brokers

A smart factory deploys thousands of IoT devices that need to communicate with different MQTT brokers based on location or function. Zilla’s MQTT proxy enables dynamic traffic routing, ensuring each device connects to the appropriate broker without manual configuration. Authentication enforcement prevents unauthorized access, while schema validation ensures data integrity before messages are processed.

### Multi-Tenant MQTT Proxy for SaaS Platforms

A cloud-based IoT platform serves multiple enterprises, each requiring isolated MQTT communication. Zilla’s MQTT proxy enables multi-tenant routing, directing MQTT connections to dedicated brokers based on tenant identity. JWT authentication secures access, while AsyncAPI integration ensures standardized message formats, enabling seamless communication across different tenant environments.
