### options

> `object`

We define `TypeEnum` as `enum` [ `avro`, `double`, `float`, `int32`, `int64`, `json`, `protobuf`, `string` ]

| Property | Type | Description |
| -- | -- | -- |
| options.specs |  `Map<string, object>` |  The `specs` specific options. | 
| options.specs.catalog |  `Map<string, object>` |  To map defined catalog for schema retrieval based on catalog specific parameters. | 
| options.specs.catalog.subject\* |  `string` |  Subject name used when storing the catalog artifact. | 
| options.specs.catalog.version |  `string` | Default: `latest` |  Specific iteration or version of a registered schema in the defined catalog. | 
| options.specs.servers |  `object[]` |  The servers to match from the schema that are used when defining endpoints. | 
| options.specs.servers[].url |  `string` | Pattern: `^([a-zA-Z0-9\\\\.-]+)(:(\\\\{[a-zA-Z_]+\\\\}|[0-9]+))?$` |  The server to match based on the server's `url` in an asyncapi `2.x` spec only. | 
| options.specs.servers[].host |  `string` | Pattern: `^([a-zA-Z0-9\\\\.-]+)(:(\\\\{[a-zA-Z_]+\\\\}|[0-9]+))?$` |  The server to match based on the server's `host` in an asyncapi `3.x` spec only. | 
| options.specs.servers[].pathname |  `string` |  The server pathname to match based on the server's `pathname` in an asyncapi `3.x` spec only. | 
| options.tcp |  `object` |  TCP options to connect to an external client. | 
| options.tcp.host |  `string` |  Hostname or IP address. | 
| options.tcp.port |  `integer`, `string`, `array` |  Port number(s), including port number ranges. | 
| options.http |  `object` |  The http specific options. | 
| options.http.authorization |  `Map<string, object>` |  Authorization by guard for the `HTTP/1.1` and `HTTP/2` protocols. | 
| options.http.authorization.credentials\* |  `object` |  Defines how to extract credentials from the HTTP request. | 
| options.http.authorization.credentials.cookies |  `Map<string, string>` |  Named cookie value pattern with `{credentials}`. | 
| options.http.authorization.credentials.headers |  `Map<string, string>` |  Named header value pattern with `{credentials}`, e.g. `"Bearer` `{credentials}"`. | 
| options.http.authorization.credentials.query\* |  `Map<string, string>` |  Named query parameter value pattern with `{credentials}`. | 
| options.kafka |  `object` |  The `kafka` binding specific options. | 
| options.kafka.topics |  `object[]` |  Topic configuration. | 
| options.kafka.topics[].name |  `string` |  Topic name. | 
| options.kafka.topics[].key |  `TypeEnum`, `object` |  Enforce validation for key | 
| options.kafka.topics[].key.model\* |  `TypeEnum` |  A schema or type to validate the topic's key. Refer to the individual `model` docs for type specific implementation. | 
| options.kafka.topics[].value |  `TypeEnum`, `object` |  Enforce validation for value | 
| options.kafka.topics[].value.model\* |  `TypeEnum` |  A schema or type to validate the topic's value. Refer to the individual `model` docs for type specific implementation. | 
| options.kafka.topics[].defaultOffset |  `enum` [ `live`, `historical` ] |  Fetch offset to use for new consumers | 
| options.kafka.topics[].transforms |  `array` |  Extract key or value attributes from the typed Kafka message to apply to the Kafka message id or Kafka headers. The `extract-key` property must come before the `extract-headers` property if they both exist. | 
| options.kafka.topics[].transforms[].extract-key |  `string` | Pattern: `^\\$\\{message\\.(key|value)\\.([A-Za-z_][A-Za-z0-9_]*)\\}$` |  Use a part of the Kafka message as the Kafka message key. | 
| options.kafka.topics[].transforms[].extract-headers |   `Map<string, string>` | Pattern: `^\\$\\{message\\.(key|value)\\.([A-Za-z_][A-Za-z0-9_]*)\\}$` |  Use a part of the Kafka message as a Kafka message header. | 
| options.kafka.sasl |  `object` |  SASL credentials to use when connecting to `kafka` brokers. | 
| options.kafka.sasl.mechanism |  `enum` [ `plain`, `scram-sha-1`, `scram-sha-256`, `scram-sha-512` ] |  Supports `plain` and `scram` mechanisms. | 
| options.kafka.sasl.mechanism: plain |  `const` |  Configure credentials for the `plain` sasl mechanism. | 
| options.kafka.sasl.mechanism: scram-sha-1 |  `const` |  Configure credentials for the `scram-sha-1` sasl mechanism. | 
| options.kafka.sasl.mechanism: scram-sha-256 |  `const` |  Configure credentials for the `scram-sha-256` sasl mechanism. | 
| options.kafka.sasl.mechanism: scram-sha-512 |  `const` |  Configure credentials for the `scram-sha-512` sasl mechanism. | 
| options.kafka.sasl.username\* |  `string` |  SASL username. | 
| options.kafka.sasl.password\* |  `string` |  SASL password. | 
| options.mqtt-kafka |  `object` |  The `mqtt-kafka` binding specific options. | 
| options.mqtt-kafka.channels |  `object` |  AsyncAPI Kafka channels describing the necessary topics for the MQTT-Kafka mapping. | 
| options.mqtt-kafka.channels.sessions |  `string` |  AsyncAPI Kafka sessions channel. | 
| options.mqtt-kafka.channels.retained |  `string` |  AsyncAPI Kafka retained channel. | 
| options.mqtt-kafka.channels.messages |  `string` |  AsyncAPI Kafka messages channel. | 
| options.http |  `object` |  The HTTP specific options. | 
| options.http.authorization |  `Map<string, object>` |  Authorization by guard for the `HTTP/1.1` and `HTTP/2` protocols. | 
| options.http.authorization.credentials\* |  `object` |  Defines how to extract credentials from the HTTP request. | 
| options.http.authorization.credentials.cookies |  `Map<string, string>` |  Named cookie value pattern with `{credentials}`. | 
| options.http.authorization.credentials.headers |  `Map<string, string>` |  Named header value pattern with `{credentials}`, e.g. `"Bearer` `{credentials}"`. | 
| options.http.authorization.credentials.query\* |  `Map<string, string>` |  Named query parameter value pattern with `{credentials}`. | 
| options.mqtt |  `object` |  The MQTT specific options. | 
| options.mqtt.authorization |  `Map<string, object>` |  Authorization by guard for the `HTTP/1.1` and `HTTP/2` protocols. | 
| options.mqtt.authorization.credentials\* |  `object` |  Defines how to extract credentials from the MQTT connect packet. | 
| options.mqtt.authorization.credentials.connect\* |  `object` |  MQTT connect packet properties | 
| options.mqtt.authorization.credentials.connect.username |  `string` |  Extract credentials from the MQTT connect packet username property with `{credentials}`, e.g. `"Bearer` `{credentials}"`. | 
| options.mqtt.authorization.credentials.connect.password |  `string` |  Extract credentials from the MQTT connect packet password property with `{credentials}`, e.g. `"Bearer` `{credentials}"`. | 
| options.tls |  `object` |  The TLS specific options. | 
| options.tls.version |  `string` |  Protocol version. | 
| options.tls.keys |  `string[]` |  A list of reference names for the Vault key. | 
| options.tls.trust |  `string[]` |  A list of reference names for the Vault certificate. | 
| options.tls.signers |  `string[]` |  A list of reference names for the Vault signer certificate. | 
| options.tls.trustcacerts |  `boolean` |  Trust CA certificates. When the this property is not explicitly set it will be automatically set to `true` if `tls.trust` is `null`. | 
| options.tls.sni |  `string[]` |  A list of the Server Name Indications. | 
| options.tls.alpn |  `string[]` |  Application protocols. | 
| options.tls.mutual |  `enum` [ `required`, `requested`, `none` ] |  Mutual authentication. When the this property is not explicitly set it will be automatically set to `none` if `tls.trust` is `null`, otherwise it will be set to `required`. | 


#### Examples

AsyncApi options.

```yaml
specs:
  http_api:
    servers:
      - name: plain
    catalog:
      my_catalog:
        subject: petstore
        version: latest
```
