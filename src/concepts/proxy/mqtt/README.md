# MQTT

Zilla offers support for the MQTT protocol with the following capabilities: MQTT Proxy and MQTT Kafka Proxy. Each binding serves distinct purposes, enabling seamless integration, routing, and management of MQTT-based interactions. Here's an overview of each binding, its key capabilities, and use cases.

## MQTT Proxy

Zilla's MQTT Proxy acts as an intermediary by managing, routing, and validating traffic between clients and other MQTT brokers. This utilizes MQTT Server binding to receive incoming MQTT connections and MQTT Client binding to forward events to other MQTT brokers, making it act as a proxy.

Key Capabilities:

- Continuous authentication validation.
- Advanced Request Routing.
- Schema validation for requests and responses.
- Support loading specification from AsyncAPI configuration.

Use Cases:

- Manage and route traffic between IoT devices and multiple MQTT brokers.
- Multi-Tenant Systems: Route MQTT connections for different tenants.

## MQTT Kafka Proxy

The MQTT Kafka Proxy enables MQTT APIs to interact with Kafka's event-driven architecture, simplifying the integration between MQTT clients and Kafka systems.

Key Capabilities:

- Routes MQTT requests into appropriate Kafka topic messages.
- Message Filtering: Filters Kafka messages for targeted delivery.
- Caching: Improves performance by caching frequently accessed data.
- Support loading specification from AsyncAPI configuration.

Use Cases:

- Simplifying integration between MQTT and Kafka services.
- Delivering Kafka messages to large-scale consumer groups.
