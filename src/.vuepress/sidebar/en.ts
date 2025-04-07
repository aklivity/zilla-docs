import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
"/reference/": [
    {
      text: "Config Overview",
      link: "config/overview.md",
      children: [],
    },
    {
      text: "CLI",
      link: "config/zilla-cli.md",
      children: [],
    },
    {
      text: "Bindings",
      prefix: "config/bindings/",
      collapsible: true,
      children: [
        {
          text: "AMQP",
          prefix: "amqp",
          collapsible: true,
          children: "structure",
        },
        {
          text: "AsyncAPI",
          prefix: "asyncapi",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Echo",
          prefix: "echo",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Fan",
          prefix: "fan",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Filesystem",
          prefix: "filesystem",
          collapsible: true,
          children: "structure",
        },
        {
          text: "gRPC",
          prefix: "grpc",
          collapsible: true,
          children: "structure",
        },
        {
          text: "gRPC-Kafka",
          prefix: "grpc-kafka",
          collapsible: true,
          children: "structure",
        },
        {
          text: "HTTP",
          prefix: "http",
          collapsible: true,
          children: "structure",
        },
        {
          text: "HTTP-Filesystem",
          prefix: "http-filesystem",
          collapsible: true,
          children: "structure",
        },
        {
          text: "HTTP-Kafka",
          prefix: "http-kafka",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Kafka",
          prefix: "kafka",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Kafka-gRPC",
          prefix: "kafka-grpc",
          collapsible: true,
          children: "structure",
        },

        {
          text: "Kafka-Proxy",
          prefix: "kafka-proxy",
          collapsible: true,
          children: "structure",
        },
        {
          text: "MQTT",
          prefix: "mqtt",
          collapsible: true,
          children: "structure",
        },
        {
          text: "MQTT-Kafka",
          prefix: "mqtt-kafka",
          collapsible: true,
          children: "structure",
        },
        {
          text: "OpenAPI",
          prefix: "openapi",
          collapsible: true,
          children: "structure",
        },

        {
          text: "OpenAPI-AsyncAPI",
          prefix: "openapi-asyncapi",
          collapsible: true,
          children: "structure",
        },
        {
          text: "PgSQL",
          prefix: "pgsql",
          collapsible: true,
          children: "structure",
        },
        {
          text: "PgSQL-Kafka",
          prefix: "pgsql-kafka",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Proxy",
          prefix: "proxy",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Risingwave",
          prefix: "risingwave",
          collapsible: true,
          children: "structure",
        },
        {
          text: "SSE",
          prefix: "sse",
          collapsible: true,
          children: "structure",
        },
        {
          text: "SSE-Kafka",
          prefix: "sse-kafka",
          collapsible: true,
          children: "structure",
        },
        {
          text: "TCP",
          prefix: "tcp",
          collapsible: true,
          children: "structure",
        },
        {
          text: "TLS",
          prefix: "tls",
          collapsible: true,
          children: "structure",
        },
        {
          text: "WS",
          prefix: "ws",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    {
      text: "Catalogs",
      prefix: "config/catalogs/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Guards",
      prefix: "config/guards/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Models",
      prefix: "config/models/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Resolvers",
      link: "config/resolvers.md",
      children: [],
    },
    {
      text: "Telemetry",
      prefix: "config/telemetry/",
      collapsible: true,
      children: [
        {
          text: "Events",
          link: "events.md",
        },
        {
          text: "Metrics",
          prefix: "metrics/",
          children: "structure",
        },
        {
          text: "Exporters",
          prefix: "exporters/",
          children: "structure",
        },
      ],
    },
    {
      text: "Vaults",
      prefix: "config/vaults/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Plugins",
      collapsible: true,
      children: [
        {
          text: "VS Code extension",
          link: "vscode/README.md",
          children: [],
        },
      ],
    },
    {
      text: "Manager",
      prefix: "manager/",
      collapsible: true,
      children: [
        {
          text: "CLI (zpm)",
          link: "zpm-cli.md",
          children: [],
        },
        {
          text: "zpm Config Overview",
          link: "overview.md",
          children: [],
        },
      ],
    },
  ],
  "/": [
    {
      text: "Introduction",
      children: [
        {
          text: "Overview",
          link: "overview.md",
          children: [],
        },
      ],
    },
    {
      text: "Getting Started",
      children: [
        {
          text: "Quickstart",
          link: "getting-started/quickstart/index.md",
          children: [],
        },
        {
          text: "Real-World Use Cases",
          link: "getting-started/use-cases.md",
          children: [],
        },
        {
          text: "Build and Visualize",
          link: "getting-started/vscode/README.md",
          children: [],
        },
      ],
    },
    {
      text: "Key Concepts",
      children: [
        {
          text: "Protocol",
          link: "concepts/protocol/README.md",
          prefix: "concepts/protocol/",
          collapsible: true,
          children: [
            {
              text: "HTTP",
              link: "http.md",
              prefix: "concepts/protocol/",
            },
            {
              text: "gRPC",
              link: "grpc.md",
              prefix: "concepts/protocol/",
            },
            {
              text: "Kafka",
              link: "kafka.md",
              prefix: "concepts/protocol/",
            },
            {
              text: "MQTT",
              link: "mqtt.md",
              prefix: "concepts/protocol/",
            },
            {
              text: "SSE",
              link: "sse.md",
              prefix: "concepts/protocol/",
            },
          ],
        },
        {
          text: "Proxy",
          link: "concepts/proxy/README.md",
          prefix: "concepts/proxy/",
          collapsible: true,
          children: [
            {
              text: "HTTP",
              link: "http/README.md",
              prefix: "http/",
              collapsible: true,
              children: ["http.md", "kafka.md", "filesystem.md"],
            },
            {
              text: "gRPC",
              link: "grpc/README.md",
              prefix: "grpc/",
              collapsible: true,
              children: ["grpc.md", "kafka.md"],
            },
            {
              text: "Kafka",
              link: "kafka/README.md",
              prefix: "kafka/",
              collapsible: true,
              children: ["kafka.md", "grpc.md"],
            },
            {
              text: "MQTT",
              link: "mqtt/README.md",
              prefix: "mqtt/",
              collapsible: true,
              children: ["mqtt.md", "kafka.md"],
            },
            {
              text: "SSE",
              link: "sse/README.md",
              prefix: "sse/",
              collapsible: true,
              children: ["sse.md", "kafka.md"],
            },
          ],
        },
        {
          text: "Data Governance",
          prefix: "concepts/data-governance",
          collapsible: true,
          children: [
            {
              text: "Catalog",
              link: "catalog/README.md",
              prefix: "catalog/",
              collapsible: true,
              children: [
                "apicurio-registry.md",
                "filesystem.md",
                "inline.md",
                "karapace-schema-registry.md",
                "aws-glue.md",
                "confluent-schema-registry.md",
              ],
            },
            {
              text: "Model",
              link: "model/README.md",
              prefix: "model/",
              collapsible: true,
              children: [
                "avro.md",
                "boolean.md",
                "json.md",
                "protobuf.md",
                "boolean.md",
                "string.md",
                "int32.md",
                "int64.md",
                "double.md",
                "float.md",
              ],
            },
          ],
        },
        {
          text: "Monitoring & Observability",
          prefix: "concepts/monitoring-observability",
          link: "concepts/monitoring-observability/README.md",
          collapsible: true,
          children: [
            {
              text: "Logs",
              link: "logs/README.md",
              prefix: "logs/",
              collapsible: true,
              children: ["binding.md", "catalog.md", "guard.md", "model.md", "vault.md"],
            },
            {
              text: "Metrics",
              link: "metrics/README.md",
              prefix: "metrics/",
              collapsible: true,
              children: ["grpc.md", "http.md", "stream.md"],
            },
            {
              text: "Exporters Logs and Metrics",
              link: "exporters-logs-and-metrics/README.md",
              prefix: "exporters-logs-and-metrics/",
              collapsible: true,
              children: [
                "stdout.md",
                "oltp.md",
                "prometheus.md",
                "aws-cloudwatch.md",
                "syslog.md",
              ],
            },
          ],
        },
        {
          text: "Scalability",
          prefix: "concepts/scalability",
          collapsible: true,
          children: [
            "autoscaling.md"
          ],
        },
        {
          text: "Security",
          prefix: "concepts/security",
          collapsible: true,
          children: [
            {
              text: "Kafka",
              link: "kafka/README.md",
              prefix: "kafka/",
              collapsible: true,
              children: [
                {
                  text: "SASL",
                  link: "sasl/README.md",
                  prefix: "sasl/",
                  collapsible: true,
                  children: ["plain.md", "scram.md"],
                },
                "ssl.md",
              ],
            },
            {
              text: "Guard",
              link: "guard/README.md",
              prefix: "guard/",
              collapsible: true,
              children: [
                {
                  text: "JWT",
                  link: "jwt/README.md",
                  prefix: "jwt/",
                  collapsible: true,
                  children: [
                    {
                      text: "HTTP",
                      link: "https://github.com/aklivity/zilla/tree/develop/examples/http.proxy.jwt",
                    },
                    {
                      text: "SSE",
                      link: "https://github.com/aklivity/zilla/tree/develop/examples/sse.proxy.jwt ",
                    },
                    {
                      text: "MQTT",
                      link: "https://github.com/aklivity/zilla/tree/develop/examples/mqtt.proxy.jwt",
                    },
                  ],
                },
                {
                  text: "Azure AD",
                  link: "azure-ad/README.md"
                },
              ],
            },
            {
              text: "Vault",
              link: "vault/README.md",
              prefix: "vault/",
              collapsible: true,
              children: ["filesystem.md", "aws-acm.md", "aws-secrets.md"],
            },
            {
              text: "Resolvers",
              link: "resolvers/README.md",
              prefix: "resolvers/",
              collapsible: true,
              children: ["environment-variables.md", "aws-secrets-manager.md"],
            },
          ],
        },
        {
          text: "API Specifications",
          prefix: "concepts/api-specifications",
          collapsible: true,
          children: ["asyncapi.md", "openapi.md", "openapi-asyncapi.md", "protobuf.md"],
        },
      ],
    },
    {
      text: "Deployment",
      children: [
        {
          text: "Install Zilla",
          prefix: "deployment/install-zilla",
          collapsible: true,
          children: ["homebrew.md", "docker.md", "helm.md"],
        },
        {
          text: "Configure Zilla",
          prefix: "deployment/configure-zilla",
          collapsible: true,
          children: [
            {
              text:"Auto Reconfigure",
              link: "auto-reconfigure.md",
              children: []
            },
            {
              text:"Incubator Features",
              link: "incubator-features/README.md",
              children: []
            },
            {
              text: "Connecting to Kafka",
              link: "connecting-to-kafka/README.md",
              prefix: "connecting-to-kafka/",
              collapsible: true,
              children: [
                "apache-kafka.md",
                "aiven.md",
                "amazon-msk.md",
                "confluent-cloud.md",
                "redpanda.md",
              ],
            },
          ],
        },
        {
          text: "Zilla to Zilla Plus Upgrade",
          prefix: "deployment/zilla-to-zilla-plus-upgrade",
          link: "deployment/zilla-to-zilla-plus-upgrade/README.md",
          children: [],
        },
        {
          text: "Zilla Plus in Production",
          prefix: "deployment/zilla-plus-in-production",
          collapsible: true,
          children: [
            {
              text: "Secure Public Access",
              prefix: "secure-public-access/",
              collapsible: true,
              children: [
                {
                  text: "Deployment Options",
                  link: "README.md",
                  children: [],
                },
                {
                  text: "Amazon MSK",
                  prefix: "amazon-msk/",
                  collapsible: true,
                  children: [
                    {
                      text: "CDK",
                      link: "https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdk/secure-public-access",
                    },
                    {
                      text: "Terraform",
                      link: "https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdktf/secure-public-access",
                    },
                    {
                      text: "CloudFormation",
                      collapsible: true,
                      children: [
                        {
                          text: "SASL/SCRAM",
                          link: "production.md",
                        },
                        {
                          text: "Mutual TLS (mTLS)",
                          link: "production-mutual-tls.md",
                        },
                        {
                          text: "Unauthorized access",
                          link: "development.md",
                        },
                      ],
                    },
                  ],
                },
                "confluent-cloud.md",
              ],
            },
            {
              text: "Secure Private Access",
              collapsible: true,
              children: [
                {
                  text: "Deployment Options",
                  link: "secure-private-access/README.md",
                  children: [],
                },
                {
                  text: "Amazon MSK",
                  collapsible: true,
                  children: [
                    {
                      text: "CDK",
                      link: "https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdk/secure-private-access",
                    },
                  ],
                },
              ],
            },
            {
              text: "IoT Ingest and Control",
              prefix: "iot-ingest-and-control/",
              collapsible: true,
              children: [
                {
                  text: "Deployment Options",
                  link: "README.md",
                  children: [],
                },
                {
                  text: "Amazon MSK",
                  collapsible: true,
                  children: [
                    {
                      text: "CDK",
                      link: "https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdk/iot-ingest-and-control",
                    },
                    {
                      text: "CloudFormation",
                      link: "amazon-msk.md",
                    },
                  ],
                },
                "confluent-cloud.md",
                "redpanda.md",
              ],
            },
            {
              text: "Web Streaming",
              prefix: "web-streaming/",
              collapsible: true,
              children: [
                {
                  text: "Deployment Options",
                  link: "README.md",
                  children: [],
                },
                {
                  text: "Amazon MSK",
                  prefix: "amazon-msk/",
                  collapsible: true,
                  children: [
                    {
                      text: "CDK",
                      link: "https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdk/web-streaming",
                    },
                    {
                      text: "Terraform",
                      link: "https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdktf/web-streaming",
                    },
                  ],
                },
              ],
            },
            {
              text: "Virtual Cluster",
              link: "virtual-cluster/README.md",
              children: [],
            },
            "zilla-plus-on-aws-ecs-fargate.md",
          ],
        },
      ],
    },
    {
      text: "Support",
      prefix: "support",
      children: [
        {
          text: "Troubleshooting Guides",
          link: "troubleshooting-guides.md",
          collapsible: true,
          children:
            [
              {
                text:"Collect Diagnostic",
                link:"collect-diagnostic.md",
                children: []
              }
            ],
        },
        {
          text: "Community Support",
          link: "community-support.md",
          children: [],
        },
        {
          text: "Enterprise Support",
          link: "enterprise-support.md",
          children: [],
        },
      ],
    },
    {
      text: "Others",
      children: [
        {
          text: "Resources",
          prefix: "resources/",
          collapsible: true,
          children: [
            {
              text: "AWS",
              link: "aws/index.md",
              prefix: "aws/",
              children: [],
            },
          ],
        },
        {
          text: "Tutorials",
          prefix: "tutorials",
          collapsible: true,
          children: [ "how-to-guides.md" ],
        },
        {
          text: "Reference",
          prefix: "reference/",
          collapsible: true,
          children: [
            {
              text: "Config Overview",
              link: "config/overview.md",
              children: [],
            },
            {
              text: "Bindings",
              link: "config/bindings/",
              children: [],
            },
            {
              text: "Catalogs",
              link: "config/catalogs/",
              children: [],
            },
            {
              text: "Models",
              link: "config/models/",
              children: [],
            },
            {
              text: "Guards",
              link: "config/guards/",
              children: [],
            },
            {
              text: "Vaults",
              link: "config/vaults/",
              children: [],
            },
            {
              text: "Telemetry",
              link: "config/telemetry/",
              children: [],
            },
          ],
        },
      ],
    },
  ],
});
