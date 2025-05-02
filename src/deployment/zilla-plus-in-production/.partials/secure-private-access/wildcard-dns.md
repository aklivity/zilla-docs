- Choose a wildcard DNS pattern to use for intranet access to the Kafka brokers. These wildcard DNS names must resolve to the IP address of the VPC Endpoint in the client VPC, which then routes traffic via the VPC Endpoint Service to the **Zilla Plus Network Load Balancer** (NLB).

- The Zilla Plus proxy must also be configured with a TLS server certificate representing the same wildcard DNS pattern.
