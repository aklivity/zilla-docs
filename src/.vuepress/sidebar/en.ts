import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
"/reference/": [
    {
      text: "Config Overview",
      icon: "fa-solid fa-file-lines",
      link: "config/overview.md",
    },
    {
      text: "CLI",
      icon: "fa-solid fa-terminal",
      link: "config/zilla-cli.md",
    },
    {
      text: "Bindings",
      icon: "fa-solid fa-plug",
      prefix: "config/bindings/",
      collapsible: true,
      children: [
        {
          text: "AMQP",
          icon: "fa-solid fa-envelope",
          prefix: "amqp",
          collapsible: true,
          children: "structure",
        },
        {
          text: "AsyncAPI",
          icon: "fa-solid fa-right-left",
          prefix: "asyncapi",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Echo",
          icon: "fa-solid fa-rotate",
          prefix: "echo",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Fan",
          icon: "fa-solid fa-fan",
          prefix: "fan",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Filesystem",
          icon: "fa-solid fa-folder-open",
          prefix: "filesystem",
          collapsible: true,
          children: "structure",
        },
        {
          text: "gRPC",
          icon: "fa-solid fa-bolt",
          prefix: "grpc",
          collapsible: true,
          children: "structure",
        },
        {
          text: "gRPC-Kafka",
          icon: "fa-solid fa-bolt",
          prefix: "grpc-kafka",
          collapsible: true,
          children: "structure",
        },
        {
          text: "HTTP",
          icon: "fa-solid fa-globe",
          prefix: "http",
          collapsible: true,
          children: "structure",
        },
        {
          text: "HTTP-Filesystem",
          icon: "fa-solid fa-globe",
          prefix: "http-filesystem",
          collapsible: true,
          children: "structure",
        },
        {
          text: "HTTP-Kafka",
          icon: "fa-solid fa-globe",
          prefix: "http-kafka",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Kafka",
          icon: "fa-solid fa-database",
          prefix: "kafka",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Kafka-gRPC",
          icon: "fa-solid fa-database",
          prefix: "kafka-grpc",
          collapsible: true,
          children: "structure",
        },

        {
          text: "Kafka-Proxy",
          icon: "fa-solid fa-database",
          prefix: "kafka-proxy",
          collapsible: true,
          children: "structure",
        },
        {
          text: "MCP",
          icon: "fa-solid fa-robot",
          prefix: "mcp",
          collapsible: true,
          children: "structure",
        },
        {
          text: "MCP-HTTP",
          icon: "fa-solid fa-robot",
          prefix: "mcp-http",
          collapsible: true,
          children: "structure",
        },
        {
          text: "MCP-Kafka",
          icon: "fa-solid fa-robot",
          prefix: "mcp-kafka",
          collapsible: true,
          children: "structure",
        },
        {
          text: "MCP-Kafka-Connect",
          icon: "fa-solid fa-robot",
          prefix: "mcp-kafka-connect",
          collapsible: true,
          children: "structure",
        },
        {
          text: "MCP-OpenAPI",
          icon: "fa-solid fa-robot",
          prefix: "mcp-openapi",
          collapsible: true,
          children: "structure",
        },
        {
          text: "MCP-Schema-Registry",
          icon: "fa-solid fa-robot",
          prefix: "mcp-schema-registry",
          collapsible: true,
          children: "structure",
        },
        {
          text: "MQTT",
          icon: "fa-solid fa-wifi",
          prefix: "mqtt",
          collapsible: true,
          children: "structure",
        },
        {
          text: "MQTT-Kafka",
          icon: "fa-solid fa-wifi",
          prefix: "mqtt-kafka",
          collapsible: true,
          children: "structure",
        },
        {
          text: "OpenAPI",
          icon: "fa-solid fa-code",
          prefix: "openapi",
          collapsible: true,
          children: "structure",
        },

        {
          text: "OpenAPI-AsyncAPI",
          icon: "fa-solid fa-code",
          prefix: "openapi-asyncapi",
          collapsible: true,
          children: "structure",
        },
        {
          text: "PgSQL",
          icon: "fa-solid fa-table",
          prefix: "pgsql",
          collapsible: true,
          children: "structure",
        },
        {
          text: "PgSQL-Kafka",
          icon: "fa-solid fa-table",
          prefix: "pgsql-kafka",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Proxy",
          icon: "fa-solid fa-arrows-left-right",
          prefix: "proxy",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Risingwave",
          icon: "fa-solid fa-wave-square",
          prefix: "risingwave",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Schema-Registry",
          icon: "fa-solid fa-layer-group",
          prefix: "schema-registry",
          collapsible: true,
          children: "structure",
        },
        {
          text: "SSE",
          icon: "fa-solid fa-tower-broadcast",
          prefix: "sse",
          collapsible: true,
          children: "structure",
        },
        {
          text: "SSE-Kafka",
          icon: "fa-solid fa-tower-broadcast",
          prefix: "sse-kafka",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Smux",
          icon: "fa-solid fa-shuffle",
          prefix: "smux",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Socks",
          icon: "fa-solid fa-socks",
          prefix: "socks",
          collapsible: true,
          children: "structure",
        },
        {
          text: "TCP",
          icon: "fa-solid fa-network-wired",
          prefix: "tcp",
          collapsible: true,
          children: "structure",
        },
        {
          text: "TLS",
          icon: "fa-solid fa-certificate",
          prefix: "tls",
          collapsible: true,
          children: "structure",
        },
        {
          text: "WS",
          icon: "fa-solid fa-plug",
          prefix: "ws",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    {
      text: "Catalogs",
      icon: "fa-solid fa-book-open",
      prefix: "config/catalogs/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Guards",
      icon: "fa-solid fa-shield-halved",
      prefix: "config/guards/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Models",
      icon: "fa-solid fa-shapes",
      prefix: "config/models/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Resolvers",
      icon: "fa-solid fa-wand-magic-sparkles",
      link: "config/resolvers.md",
    },
    {
      text: "Telemetry",
      icon: "fa-solid fa-chart-line",
      prefix: "config/telemetry/",
      collapsible: true,
      children: [
        {
          text: "Events",
          icon: "fa-solid fa-bell",
          link: "events.md",
        },
        {
          text: "Metrics",
          icon: "fa-solid fa-gauge",
          prefix: "metrics/",
          children: "structure",
        },
        {
          text: "Exporters",
          icon: "fa-solid fa-arrow-up-from-bracket",
          prefix: "exporters/",
          children: "structure",
        },
      ],
    },
    {
      text: "Stores",
      icon: "fa-solid fa-database",
      prefix: "config/stores/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Vaults",
      icon: "fa-solid fa-vault",
      prefix: "config/vaults/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Manager",
      icon: "fa-solid fa-toolbox",
      prefix: "manager/",
      collapsible: true,
      children: [
        {
          text: "CLI (zpm)",
          icon: "fa-solid fa-terminal",
          link: "zpm-cli.md",

        },
        {
          text: "zpm Config Overview",
          icon: "fa-solid fa-file-lines",
          link: "overview.md",

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
          icon: "fa-solid fa-circle-dot",
          link: "README.md",
        },
        {
          text: "Architecture",
          icon: "fa-solid fa-diagram-project",
          link: "concepts/architecture/README.md",
        },
      ],
    },
    {
      text: "Getting Started",
      children: [
        {
          text: "Quickstart",
          icon: "fa-solid fa-rocket",
          link: "getting-started/quickstart/index.md",

        },
        {
          text: "Use Cases",
          icon: "fa-solid fa-lightbulb",
          link: "getting-started/use-cases.md",

        },
        {
          text: "Build and Visualize",
          icon: "fa-solid fa-wand-magic-sparkles",
          link: "getting-started/vscode/README.md",

        },
      ],
    },
    {
      text: "Key Concepts",
      children: [
        {
          text: "Protocol",
          icon: "fa-solid fa-right-left",
          link: "concepts/protocol/README.md",
          prefix: "concepts/protocol/",
          collapsible: true,
          children: [
            {
              text: "HTTP",
              icon: "fa-solid fa-globe",
              link: "http.md",
              prefix: "concepts/protocol/",
            },
            {
              text: "gRPC",
              icon: "fa-solid fa-bolt",
              link: "grpc.md",
              prefix: "concepts/protocol/",
            },
            {
              text: "Kafka",
              icon: "fa-solid fa-database",
              link: "kafka.md",
              prefix: "concepts/protocol/",
            },
            {
              text: "MQTT",
              icon: "fa-solid fa-wifi",
              link: "mqtt.md",
              prefix: "concepts/protocol/",
            },
            {
              text: "SSE",
              icon: "fa-solid fa-tower-broadcast",
              link: "sse.md",
              prefix: "concepts/protocol/",
            },
          ],
        },
        {
          text: "Proxy",
          icon: "fa-solid fa-arrows-left-right",
          link: "concepts/proxy/README.md",
          prefix: "concepts/proxy/",
          collapsible: true,
          children: [
            {
              text: "HTTP",
              icon: "fa-solid fa-globe",
              link: "http/README.md",
              prefix: "http/",
              collapsible: true,
              children: ["http.md", "kafka.md", "filesystem.md"],
            },
            {
              text: "gRPC",
              icon: "fa-solid fa-bolt",
              link: "grpc/README.md",
              prefix: "grpc/",
              collapsible: true,
              children: ["grpc.md", "kafka.md"],
            },
            {
              text: "Kafka",
              icon: "fa-solid fa-database",
              link: "kafka/README.md",
              prefix: "kafka/",
              collapsible: true,
              children: ["kafka.md", "grpc.md"],
            },
            {
              text: "MQTT",
              icon: "fa-solid fa-wifi",
              link: "mqtt/README.md",
              prefix: "mqtt/",
              collapsible: true,
              children: ["mqtt.md", "kafka.md"],
            },
            {
              text: "SSE",
              icon: "fa-solid fa-tower-broadcast",
              link: "sse/README.md",
              prefix: "sse/",
              collapsible: true,
              children: ["sse.md", "kafka.md"],
            },
          ],
        },
        {
          text: "Data Governance",
          icon: "fa-solid fa-scale-balanced",
          prefix: "concepts/data-governance",
          collapsible: true,
          children: [
            {
              text: "Catalog",
              icon: "fa-solid fa-book-open",
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
              icon: "fa-solid fa-shapes",
              link: "model/README.md",
              prefix: "model/",
              collapsible: true,
              children: [
                "avro.md",
                "boolean.md",
                "double.md",
                "float.md",
                "int32.md",
                "int64.md",
                "json.md",
                "protobuf.md",
                "string.md",
              ],
            },
          ],
        },
        {
          text: "Monitoring & Observability",
          icon: "fa-solid fa-chart-line",
          prefix: "concepts/monitoring-observability",
          link: "concepts/monitoring-observability/README.md",
          collapsible: true,
          children: [
            {
              text: "Logs",
              icon: "fa-solid fa-scroll",
              link: "logs/README.md",
              prefix: "logs/",
              collapsible: true,
              children: ["binding.md", "catalog.md", "guard.md", "model.md", "vault.md"],
            },
            {
              text: "Metrics",
              icon: "fa-solid fa-gauge",
              link: "metrics/README.md",
              prefix: "metrics/",
              collapsible: true,
              children: ["grpc.md", "http.md", "stream.md"],
            },
            {
              text: "Exporters Logs and Metrics",
              icon: "fa-solid fa-arrow-up-from-bracket",
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
          icon: "fa-solid fa-expand",
          prefix: "concepts/scalability",
          collapsible: true,
          children: [
            "autoscaling/README.md"
          ],
        },
        {
          text: "Security",
          icon: "fa-solid fa-shield-halved",
          prefix: "concepts/security",
          collapsible: true,
          children: [
            {
              text: "Kafka",
              icon: "fa-solid fa-database",
              link: "kafka/README.md",
              prefix: "kafka/",
              collapsible: true,
              children: [
                {
                  text: "SASL",
                  icon: "fa-solid fa-key",
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
              icon: "fa-solid fa-lock",
              link: "guard/README.md",
              prefix: "guard/",
              collapsible: true,
              children: [
                {
                  text: "JWT",
                  icon: "fa-solid fa-id-badge",
                  link: "jwt/README.md",
                  prefix: "jwt/",
                  collapsible: true,
                  children: [
                    {
                      text: "HTTP",
                      icon: "fa-solid fa-globe",
                      link: "https://github.com/aklivity/zilla/tree/develop/examples/http.proxy.jwt",
                    },
                    {
                      text: "SSE",
                      icon: "fa-solid fa-tower-broadcast",
                      link: "https://github.com/aklivity/zilla/tree/develop/examples/sse.proxy.jwt ",
                    },
                    {
                      text: "MQTT",
                      icon: "fa-solid fa-wifi",
                      link: "https://github.com/aklivity/zilla/tree/develop/examples/mqtt.proxy.jwt",
                    },
                  ],
                },
                {
                  text: "Azure AD",
                  icon: "fa-brands fa-microsoft",
                  link: "azure-ad/README.md"
                },
                {
                  text: "AWS Lambda",
                  icon: "fa-brands fa-aws",
                  link: "aws-lambda/README.md"
                },
                {
                  text: "AWS Cognito",
                  icon: "fa-brands fa-aws",
                  link: "aws-cognito/README.md"
                },
              ],
            },
            {
              text: "Vault",
              icon: "fa-solid fa-vault",
              link: "vault/README.md",
              prefix: "vault/",
              collapsible: true,
              children: ["filesystem.md", "aws-acm.md", "aws-secrets.md"],
            },
            {
              text: "Resolvers",
              icon: "fa-solid fa-wand-magic-sparkles",
              link: "resolvers/README.md",
              prefix: "resolvers/",
              collapsible: true,
              children: ["environment-variables.md", "aws-secrets-manager.md"],
            },
          ],
        },
        {
          text: "API Specifications",
          icon: "fa-solid fa-code",
          prefix: "concepts/api-specifications",
          collapsible: true,
          children: ["asyncapi/README.md", "openapi.md", "openapi-asyncapi.md", "protobuf.md"],
        },
        {
          text: "Performance",
          icon: "fa-solid fa-gauge-high",
          prefix: "concepts/performance",
          collapsible: true,
          children: [
            {
              text:"Benchmarks",
              icon: "fa-solid fa-stopwatch",
              link: "benchmarks/README.md",
              prefix: "benchmarks/",
              collapsible: true,
              children: [
                {
                  text: "Kafka Proxy",
                  icon: "fa-solid fa-database",
                  prefix: "kafka/",
                  link: "kafka/README.md",
                }
              ]
            }
          ],
        }
      ],
    },
    {
      text: "Deployment",
      children: [
        {
          text: "Install Zilla",
          icon: "fa-solid fa-download",
          prefix: "deployment/install-zilla",
          collapsible: true,
          children: ["homebrew.md", "docker.md", "helm/README.md"],
        },
        {
          text: "Configure Zilla",
          icon: "fa-solid fa-gear",
          prefix: "deployment/configure-zilla",
          collapsible: true,
          children: [
            {
              text:"Auto Reconfigure",
              icon: "fa-solid fa-rotate",
              link: "auto-reconfigure.md",
    
            },
            {
              text:"Incubator Features",
              icon: "fa-solid fa-flask",
              prefix: "incubator-features/",
              link: "incubator-features/README.md",
    
            },
            {
              text: "Connecting to Kafka",
              icon: "fa-solid fa-plug",
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
          icon: "fa-solid fa-arrow-up",
          prefix: "deployment/zilla-to-zilla-plus-upgrade",
          link: "deployment/zilla-to-zilla-plus-upgrade/README.md",

        },
        {
          text: "Zilla Plus in Production",
          icon: "fa-solid fa-server",
          prefix: "deployment/zilla-plus-in-production",
          collapsible: true,
          children: [
            {
              text: "Secure Public Access",
              icon: "fa-solid fa-lock-open",
              prefix: "secure-public-access/",
              collapsible: true,
              children: [
                {
                  text: "Deployment Options",
                  link: "README.md",
    
                },
                {
                  text: "Amazon MSK",
                  icon: "fa-brands fa-aws",
                  prefix: "amazon-msk/",
                  collapsible: true,
                  children: [
                    {
                      text: "CDK",
                      link: "https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdk/README.SecurePublicAccess.md",
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
                {
                  text: "Confluent Cloud",
                  collapsible: true,
                  children: [
                    {
                      text: "CDK",
                      link: "https://github.com/aklivity/zilla-plus-aws-templates/tree/main/confluent-cloud/cdk/README.SecurePublicAccess.md",
                    },
                    {
                      text: "CloudFormation",
                      link: "confluent-cloud.md",
                    },
                  ],
                },
              ],
            },
            {
              text: "Secure Private Access",
              icon: "fa-solid fa-lock",
              prefix: "secure-private-access/",
              collapsible: true,
              children: [
                {
                  text: "Deployment Options",
                  link: "README.md",
    
                },
                {
                  text: "Amazon MSK",
                  icon: "fa-brands fa-aws",
                  collapsible: true,
                  children: [
                    {
                      text: "CDK",
                      link: "https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdk/README.SecurePrivateAccess.md",
                    },
                  ],
                },
              ],
            },
            {
              text: "IoT Ingest and Control",
              icon: "fa-solid fa-microchip",
              prefix: "iot-ingest-and-control/",
              collapsible: true,
              children: [
                {
                  text: "Deployment Options",
                  link: "README.md",
    
                },
                {
                  text: "Amazon MSK",
                  icon: "fa-brands fa-aws",
                  collapsible: true,
                  children: [
                    {
                      text: "CDK",
                      link: "https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdk/README.IotIngestAndControl.md",
                    },
                    {
                      text: "CloudFormation",
                      link: "amazon-msk.md",
                    },
                  ],
                },
                {
                  text: "Confluent Cloud",
                  collapsible: true,
                  children: [
                    {
                      text: "CDK",
                      link: "https://github.com/aklivity/zilla-plus-aws-templates/tree/main/confluent-cloud/cdk/README.IotIngestAndControl.md",
                    },
                    {
                      text: "CloudFormation",
                      link: "confluent-cloud.md",
                    },
                  ],
                },
                "redpanda.md",
              ],
            },
            {
              text: "Web Streaming",
              icon: "fa-solid fa-signal",
              prefix: "web-streaming/",
              collapsible: true,
              children: [
                {
                  text: "Deployment Options",
                  link: "README.md",
    
                },
                {
                  text: "Amazon MSK",
                  icon: "fa-brands fa-aws",
                  prefix: "amazon-msk/",
                  collapsible: true,
                  children: [
                    {
                      text: "CDK",
                      link: "https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdk/README.WebStreaming.md",
                    },
                    {
                      text: "Terraform",
                      link: "https://github.com/aklivity/zilla-plus-aws-templates/tree/main/amazon-msk/cdktf/web-streaming",
                    },
                  ],
                },
                {
                  text: "Confluent Cloud",
                  prefix: "confluent-cloud/",
                  collapsible: true,
                  children: [
                    {
                      text: "CDK",
                      link: "https://github.com/aklivity/zilla-plus-aws-templates/tree/main/confluent-cloud/cdk/README.WebStreaming.md",
                    },
                  ],
                },
              ],
            },
            {
              text: "Virtual Clusters",
              icon: "fa-solid fa-object-group",
              prefix: "virtual-clusters/",
              link: "virtual-clusters/README.md",

            },
            {
              text: "Dynamic Topic Aliases",
              icon: "fa-solid fa-diagram-project",
              prefix: "kafka-proxy-aws-cognito/",
              link: "kafka-proxy-aws-cognito/README.md",

            },
            {
              text: "AWS ECS Fargate",
              icon: "fa-brands fa-aws",
              link: "zilla-plus-on-aws-ecs-fargate.md",

            },
            {
              text: "AWS EKS",
              icon: "fa-brands fa-aws",
              link: "zilla-plus-on-aws-eks.md",

            },
            {
              text: "AWS AMI",
              icon: "fa-brands fa-aws",
              prefix: "zilla-plus-via-aws-ami/",
              link: "zilla-plus-via-aws-ami/README.md",

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
          icon: "fa-solid fa-triangle-exclamation",
          link: "troubleshooting-guides.md",
          collapsible: true,
          children:
            [
              {
                text:"Collect Diagnostic",
                icon: "fa-solid fa-stethoscope",
                link:"collect-diagnostic.md",
      
              }
            ],
        },
        {
          text: "Community Support",
          icon: "fa-solid fa-people-group",
          link: "community-support.md",

        },
        {
          text: "Enterprise Support",
          icon: "fa-solid fa-building",
          link: "enterprise-support.md",

        },
      ],
    },
    {
      text: "Releases",
      prefix: "/releases/",
      link: "/releases/README.md",
      children: [
        {
          text: "1.x",
          icon: "fa-solid fa-code-branch",
          link: "1.x/README.md",
        },
      ],
    },
    {
      text: "Others",
      children: [
        {
          text: "Resources",
          icon: "fa-solid fa-box-archive",
          prefix: "resources/",
          collapsible: true,
          children: [
            {
              text: "AWS",
              icon: "fa-brands fa-aws",
              link: "aws/index.md",
              prefix: "aws/",

            },
          ],
        },
        {
          text: "Tutorials",
          icon: "fa-solid fa-graduation-cap",
          prefix: "tutorials",
          collapsible: true,
          children: [ "how-to-guides.md" ],
        },
        {
          text: "Reference",
          icon: "fa-solid fa-book",
          prefix: "reference/",
          collapsible: true,
          children: [
            {
              text: "Config Overview",
              icon: "fa-solid fa-file-lines",
              link: "config/overview.md",

            },
            {
              text: "Bindings",
              icon: "fa-solid fa-plug",
              link: "config/bindings/",

            },
            {
              text: "Catalogs",
              icon: "fa-solid fa-book-open",
              link: "config/catalogs/",

            },
            {
              text: "Models",
              icon: "fa-solid fa-shapes",
              link: "config/models/",

            },
            {
              text: "Guards",
              icon: "fa-solid fa-shield-halved",
              link: "config/guards/",

            },
            {
              text: "Stores",
              icon: "fa-solid fa-database",
              link: "config/stores/",

            },
            {
              text: "Vaults",
              icon: "fa-solid fa-vault",
              link: "config/vaults/",

            },
            {
              text: "Telemetry",
              icon: "fa-solid fa-chart-line",
              link: "config/telemetry/",

            },
          ],
        },
      ],
    },
  ],
});
