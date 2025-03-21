import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/solutions/how-tos/aws-services/": [
    {
      text: "AWS Resources",
      children: "structure",
    },
  ],
  "/reference/": [
    {
      text: "Zilla Runtime",
      prefix: "config/",
      children: [
        {
          text: "CLI (zilla)",
          link: "zilla-cli.md",
          children: [],
        },
        {
          text: "Zilla Config Overview",
          link: "overview.md",
          children: [],
        },
        {
          text: "Resolvers",
          link: "resolvers.md",
          children: [],
        },
      ],
    },
    {
      text: "Bindings",
      prefix: "config/bindings/",
      children: "structure",
    },
    {
      text: "Catalogs",
      prefix: "config/catalogs/",
      children: "structure",
    },
    {
      text: "Guards",
      prefix: "config/guards/",
      children: "structure",
    },
    {
      text: "Models",
      prefix: "config/models/",
      children: "structure",
    },
    {
      text: "Telemetry",
      prefix: "config/telemetry/",
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
      children: "structure",
    },
    {
      text: "Zilla Manager",
      prefix: "manager/",
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
          text: "-hidden-",
          ariaLabel: "-hidden-",
          link: "/",
          children: [],
        },
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
          text: "-hidden-",
          ariaLabel: "-hidden-",
          link: "/",
          children: [],
        },
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
            "logs/README.md",
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
          children: ["autoscaling.md"],
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
                      link: "https://github.com/aklivity/zilla-examples/tree/main/http.proxy.jwt",
                    },
                    {
                      text: "SSE",
                      link: "https://github.com/aklivity/zilla-examples/tree/main/sse.jwt ",
                    },
                    {
                      text: "MQTT",
                      link: "https://github.com/aklivity/zilla-examples/tree/main/mqtt.proxy.jwt",
                    },
                  ],
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
          text: "API Spec Integration",
          prefix: "concepts/api-spec-integration",
          collapsible: true,
          children: ["asyncapi.md", "openapi.md", "openapi-asyncapi.md"],
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
              text: "Auto Reconfigure",
              link: "auto-reconfigure.md",
              children: [],
            },
            {
              text: "Incubator Features",
              link: "incubator-features/README.md",
              children: [],
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
            "zilla-plus-on-aws-ecs-fargate.md",
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
                          text: "with SASL/SCRAM",
                          link: "production.md",
                        },
                        {
                          text: "with Mutual TLS (mTLS)",
                          link: "production-mutual-tls.md",
                        },
                        {
                          text: "with Unauthorized access",
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
              text: "IOT Ingest and Control",
              prefix: "iot-ingest-and-control/",
              collapsible: true,
              children: [
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
          children: [
            {
              text: "Collect Diagnostic",
              link: "collect-diagnostic.md",
              children: [],
            },
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
          collapsible: true,
          children: [
            {
              text: "AWS Services",
              link: "/solutions/how-tos/aws-services/create-msk-cluster.md",
              children: [],
            },
          ],
        },
        {
          text: "FAQ",
          link: "faq.md",
          children: [],
        },
        {
          text: "Changelog",
          link: "https://github.com/aklivity/zilla/releases",
          children: [],
        },
        {
          text: "Glossary",
          link: "glossary.md",
          children: [],
        },
        {
          text: "Tutorials",
          prefix: "tutorials",
          collapsible: true,
          children: ["technical-support-articles.md", "how-to-guides.md"],
        },
        {
          text: "Reference",
          prefix: "reference/",
          collapsible: true,
          children: [
            {
              text: "Zilla Runtime",
              link: "/reference/config/overview.md",
              children: [],
            },
            {
              text: "Bindings",
              link: "/reference/config/bindings/amqp/README.md",
              children: [],
            },
            {
              text: "Catalogs",
              link: "/reference/config/catalogs/apicurio-registry.md",
              children: [],
            },
            {
              text: "Guards",
              link: "/reference/config/guards/jwt.md",
              children: [],
            },
            {
              text: "Models",
              link: "/reference/config/models/avro.md",
              children: [],
            },
            {
              text: "Telemetry",
              link: "/reference/config/telemetry/events.md",
              children: [],
            },
            {
              text: "Vaults",
              link: "/reference/config/vaults/aws-acm.md",
              children: [],
            },
            {
              text: "Zilla Manager",
              link: "/reference/manager/zpm-cli.md",
              children: [],
            },
          ],
        },
        {
          text: "Community",
          prefix: "community",
          collapsible: true,
          children: [
            {
              text: "Github",
              link: "https://github.com/aklivity/zilla",
            },
            {
              text: "Slack",
              link: "https://www.aklivity.io/slack",
            },
            {
              text: "Talk to the Experts",
              link: "https://www.aklivity.io/support",
            },
            "office-hours.md",
          ],
        },
        {
          text: "Contribute",
          prefix: "contribute",
          collapsible: true,
          children: [
            {
              text: "Developer Guidelines",
              link: "https://github.com/aklivity/zilla/blob/develop/.github/CONTRIBUTING.md",
            },
          ],
        },
      ],
    },
  ],
});
