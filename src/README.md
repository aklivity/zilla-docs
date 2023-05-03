---
home: true
icon: home
title: Home
heroImage: /logo-dark.png
heroImageDark: /logo.png
heroText: Zilla Documentation
tagline: Zilla is an API Gateway for event-driven architectures. It securely interfaces web apps, IoT clients, and microservices to Apache Kafka® via declaratively defined API endpoints.
actions:
  - text: " Zilla in Action"
    link: /examples/todo-app/build.html
    type: primary
    icon: code

  - text: " Install"
    link: /get-started/install/index.html
    icon: download

features:

  - title: Get Started
    icon: arrows-left-right-to-line
    details: Install Zilla, connect it to your Kafka Cluster, and define your first API endpoints.
    link: /get-started/install/

  - title: Todo App Example
    icon: vault
    details: Create a "Todo" application using a CQRS design pattern that's backed by Apache Kafka and Zilla. 
    link: /examples/todo-app/build.html

  - title: Zilla Kafka Proxy: REST
    icon: shield-halved
    details: Transform HTTP requests and responses to Kafka topic streams with control over the topic, message key, message headers, message value and reply-to topic. 
    link: /guides/kafka-proxies/rest-proxy.html

  - title: Zilla Kafka Proxy: SSE
    icon: diagram-project
    details: Transform Kafka topic streams to Server Sent Event (SSE) streams for reliable data streaming/pushing down to web clients.
    link: /guides/kafka-proxies/sse-proxy.html

  - title: Reference
    icon: server
    details: Learn about Zilla command and configuration properties.
    link: /reference/

copyright: false
---
