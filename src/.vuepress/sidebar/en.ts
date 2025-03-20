import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/solutions/": [
    {
      text: "Secure Public Access",
      icon: "aky-zilla-plus",
      children: [
        {
          text: "Deployment Options",
          link: "concepts/kafka-proxies/secure-public-access.md",
          children: [],
        },
        {
          text: "Amazon MSK",
          collapsible: true,
          prefix: "how-tos/amazon-msk/secure-public-access/",
          link: "how-tos/amazon-msk/secure-public-access/production.md",
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
              link: "production.md",
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
        {
          text: "Confluent Cloud",
          link: "how-tos/confluent-cloud/secure-public-access.md",
          children: [],
        },
      ],
    },
    {
      text: "Secure Private Access",
      icon: "aky-zilla-plus",
      children: [
        {
          text: "Deployment Options",
          link: "concepts/kafka-proxies/secure-private-access.md",
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
      icon: "aky-zilla-plus",
      children: [
        {
          text: "Deployment Options",
          link: "concepts/kafka-proxies/iot-ingest-control.md",
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
              link: "how-tos/amazon-msk/iot-ingest-control.md",
            },
          ],
        },
        {
          text: "Confluent Cloud",
          link: "how-tos/confluent-cloud/iot-ingest-control.md",
          children: [],
        },
        {
          text: "Redpanda",
          link: "how-tos/redpanda/iot-ingest-control.md",
          children: [],
        },
      ],
    },
    {
      text: "Web Streaming",
      icon: "aky-zilla-plus",
      children: [
        {
          text: "Deployment Options",
          link: "concepts/kafka-proxies/web-streaming.md",
          children: [],
        },
        {
          text: "Amazon MSK",
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
      text: "Other Resources",
      children: [
        {
          text: "AWS",
          prefix: "how-tos/aws-services/",
          children: "structure",
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
            // {
            //   text: "Threat Protection",
            //   link: "threat-protection/README.md",
            //   prefix: "threat-protection/",
            //   collapsible: true,
            //   children: ["aws-shield.md"],
            // },
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
            "auto-reconfigure.md",
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
          text:"Incubator Features",
          link: "deployment/incubator-features/README.md",
          children: []
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
      text: "Troubleshooting & Support",
      prefix: "support",
      children: [
        {
          text: "Troubleshooting Guides",
          link: "troubleshooting-guides.md",
          children: [],
        },
        {
          text:"Collect Diagnostic",
          link:"collect-diagnostic.md",
          children: []
        },
        {
          text: "Community Support",
          link: "community-support.md",
          children: [],
        },
        {
          text: "Enterprise Support - Zilla Plus",
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
              text: "AWS Services",
              link: "aws.md",
              prefix: "aws/",
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
          prefix: "changelog",
          collapsible: true,
          children: ["zilla.md", "zilla-plus.md"],
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
              prefix: "config/",
              collapsible: true,
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
                  text: "gRPC-Kafka",
                  prefix: "grpc-kafka",
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
                  text: "Proxy",
                  prefix: "proxy",
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
              text: "Telemetry",
              prefix: "config/telemetry/",
              collapsible: true,
              children: [
                {
                  text: "Events",
                  link: "events.md",
                  collapsible: true,
                },
                {
                  text: "Metrics",
                  prefix: "metrics/",
                  collapsible: true,
                  children: "structure",
                },
                {
                  text: "Exporters",
                  prefix: "exporters/",
                  collapsible: true,
                  children: "structure",
                },
              ],
            },
            {
              text: "Vaults",
              prefix: "config/vaults/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "Zilla Manager",
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
        },
        {
          text: "Community",
          prefix: "community",
          collapsible: true,
          children: [
            "github.md",
            "slack.md",
            "talk-to-the-experts.md",
            "office-hours.md",
          ],
        },
        {
          text: "Contribute",
          prefix: "contribute",
          collapsible: true,
          children: ["developer-guidelines.md"],
        },
      ],
    },
  ],
});
