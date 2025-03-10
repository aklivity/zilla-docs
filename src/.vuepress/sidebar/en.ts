import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
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
          link: "how-tos/amazon-msk/iot-ingest-control.md",
          children: [],
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
          children: [
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
          text: "Zilla Use Cases",
          link: "getting-started/use-cases.md",
          children: [],
        },
        {
          text: "VS Code Extension",
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
              text: "TCP",
              link: "tcp.md",
              prefix: "concepts/protocol/",
            },
            {
              text: "Kafka",
              link: "kafka.md",
              prefix: "concepts/protocol/",
            },
            {
              text: "gRPC",
              link: "grpc.md",
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
            {
              text: "Filesystem",
              link: "filesystem.md",
              prefix: "concepts/protocol/",
            },
            {
              text: "TLS",
              link: "tls.md",
              prefix: "concepts/protocol/",
            },
            {
              text: "WS",
              link: "ws.md",
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
              text: "SSE",
              link: "sse/README.md",
              prefix: "sse/",
              collapsible: true,
              children: ["sse.md", "kafka.md"],
            },
            {
              text: "gRPC",
              link: "grpc/README.md",
              prefix: "grpc/",
              collapsible: true,
              children: ["grpc.md", "kafka.md"],
            },
            {
              text: "MQTT",
              link: "mqtt/README.md",
              prefix: "mqtt/",
              collapsible: true,
              children: ["mqtt.md", "kafka.md"],
            },
            {
              text: "Kafka",
              link: "kafka/README.md",
              prefix: "kafka/",
              collapsible: true,
              children: ["kafka.md", "grpc.md"],
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
          collapsible: true,
          children: [
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
            "autoscale-zilla/autoscale-zilla-with-prometheus-metrics.md",
            "autoscale-zilla/autoscale-zilla-with-aws-cloudwatch-metrics.md",
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
                  children: ["http.md", "sse.md", "mqtt.md"],
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
              text: "Threat Protection",
              link: "threat-protection/README.md",
              prefix: "threat-protection/",
              collapsible: true,
              children: ["aws-shield.md"],
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
          children: [
            "homebrew.md",
            "docker.md",
            "helm.md",
            "dynamic-loading-of-zilla-configuration.md",
            {
              text: "Connecting to Kafka",
              link: "connecting-to-kafka.md",
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
          text: "Zilla+ in Production",
          prefix: "deployment/zilla-plus-in-production",
          collapsible: true,
          children: [
            "zilla-plus-on-aws-ecs-fargate.md",
            "disaster-recovery.md",
            "migration.md",
            {
              text: "Secure Public Access",
              link: "secure-public-access.md",
              prefix: "secure-public-access/",
              collapsible: true,
              children: [
                {
                  text: "Amazon MSK",
                  prefix: "amazon-msk/",
                  collapsible: true,
                  children: ["terraform.md", "cloudformation.md"],
                },
                "confluent-cloud.md",
              ],
            },
            {
              text: "IOT Ingest and Control",
              link: "iot-ingest-and-control.md",
              prefix: "iot-ingest-and-control/",
              collapsible: true,
              children: ["amazon-msk.md", "confluent-cloud.md", "redpanda.md"],
            },
            {
              text: "Web Streaming",
              link: "web-streaming.md",
              prefix: "web-streaming/",
              collapsible: true,
              children: [
                {
                  text: "Amazon MSK",
                  prefix: "amazon-msk/",
                  collapsible: true,
                  children: ["terraform.md"],
                },
              ],
            },
            {
              text: "Other Resources",
              prefix: "other-resources/",
              collapsible: true,
              children: [
                {
                  text: "AWS Services",
                  link: "aws.md",
                  prefix: "aws/",
                  collapsible: true,
                  children: [],
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
        "troubleshooting-guides.md",
        "community-support.md",
        "enterprise-support.md",
      ],
    },
    {
      text: "Others",
      children: [
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
          link: "/reference/config/overview.md",
          children: [],
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
