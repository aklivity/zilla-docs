# Glossary

The following terms are used throughout the Zilla documentation and development ecosystem.

| Term                     | Definition                                                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding                  | A binding represents a step in the pipeline as data streams are decoded, translated, or encoded according to a specific protocol type.                  |
| Catalog                  | A catalog represents a resource for referencing versioned assets.                                                                                       |
| Exporters                | Exporters determine how collected telemetry data, such as logs and metrics, is exposed and transmitted to external systems for monitoring and analysis. |
| Guard                    | A guard is a security mechanism that enforces access control by validating requests before they reach a protected resource.                             |
| Model                    | A model utilizes type syntax or structure definitions along with model validation for Zilla message serialization purposes                               |
| Resolvers                | Resolvers are a variable syntax for reading values dynamically outside Zilla.yaml files.                                                                |
| Schema Registry          | A Zilla-integrated service that manages and enforces data schemas for message formats like Avro or JSON Schema, often used with Kafka.                  |
| Vault                    | Zilla Vault is a configuration object representing a container for digital keys and certificates based on a specific implementation type.               |
| Zilla Configuration File | A YAML file that defines the behavior of the Zilla runtime, including routes, protocols, and middleware configurations.                                 |
