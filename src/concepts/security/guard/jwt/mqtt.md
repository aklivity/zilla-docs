---
shortTitle: MQTT
---

# MQTT With JWT Guard

In MQTT, JWTs are commonly used for authentication and authorization by embedding them in the username field of the `CONNECT` packet, allowing brokers to verify client identity without maintaining session state. The following guide walks you through setting up an MQTT proxy with JWT authentication in Zilla, ensuring only clients with valid tokens can publish or subscribe to topics. You can see the full example and guide in the [repository](https://github.com/aklivity/zilla-examples/tree/main/mqtt.proxy.jwt).

## Prerequisites

- [jq](https://jqlang.org/)
- Netcat (nc)
- [Docker Compose](https://docs.docker.com/compose/)
- [Mosquitto](https://mosquitto.org/documentation/)
- `jwt-cli` version `2.0.0` or higher.

    ::: note
    You can install the `jwt-cli` by using this command:

    ```bash
    brew install mike-engel/jwt-cli/jwt-cli
    ```

    :::

## Step 1: Clone the Repository

Clone the example project from the Zilla GitHub repository.

```bash
git clone https://github.com/aklivity/zilla-examples.git
cd zilla-examples/mqtt.proxy.jwt
```

## Step 2: Start the Zilla Proxy

Run Zilla to start the proxy service:

```bash
docker-compose up -d
```

This launches the Zilla proxy along with the required services.

## Step 3: Test the JWT Authentication

First, we test the JWT authentication using a **token that lacks the required `mqtt:stream` scope**.

1. Generate a JWT token without `mqtt:stream` scope.

    ```bash
    export JWT_TOKEN=$(jwt encode \
    --alg "RS256" \
    --kid "example" \
    --iss "https://auth.example.com" \
    --aud "https://mqtt.example.com" \
    --exp=+1d \
    --no-iat \
    --secret @private.pem)
    ```

2. See the signed JWT token, without `mqtt:stream` scope, print the `MQTT_USERNAME` var.

    ```bash
    $ jwt encode \
    echo $MQTT_USERNAME
    ```

3. Use the signed JWT token, without `mqtt:stream` scope, to attempt an authorized request. Provide the JWT token in the `MQTT_USERNAME` field.

    ```bash
    docker compose -p zilla-mqtt-proxy-jwt exec mosquitto-cli \
    mosquitto_sub --url mqtt://zilla.examples.dev:7183/zilla --debug -u $MQTT_USERNAME
    ```

4. The request should be rejected, and without leaking any information about failed security checks.

    ```text
    Client null sending CONNECT
    Client null sending CONNECT
    Client null sending CONNECT
    ```

Next, let's test JWT authentication using a **token that includes the required `mqtt:stream` scope**.

1. Generate a valid JWT token with `mqtt:stream` scope.

    ```bash
    export JWT_TOKEN=$(jwt encode \
    --alg "RS256" \
    --kid "example" \
    --iss "https://auth.example.com" \
    --aud "https://mqtt.example.com" \
    --exp=+1d \
    --no-iat \
    --payload "scope=mqtt:stream" \
    --secret @private.pem)
    ```

2. See the signed JWT token with `mqtt:stream` scope print the `MQTT_USERNAME` var.

    ```bash
    echo $MQTT_USERNAME
    ```

3. Use the signed JWT token, with `mqtt:stream` scope, to attempt an authorized request.

    ```bash
    docker compose -p zilla-mqtt-proxy-jwt exec mosquitto-cli \
    mosquitto_sub --url mqtt://zilla.examples.dev:7183/zilla --debug -u $MQTT_USERNAME
    ```

4. The connection is authorized.

    ```text
    Client null sending CONNECT
    Client a0b72aaa-3d12-4d1d-8fc3-4971d1973763 received CONNACK (0)
    Client a0b72aaa-3d12-4d1d-8fc3-4971d1973763 sending SUBSCRIBE (Mid: 1, Topic: zilla, QoS: 0, Options: 0x00)
    Client a0b72aaa-3d12-4d1d-8fc3-4971d1973763 received SUBACK
    Subscribed (mid: 1): 0
    Client 2b77314a-163f-4f18-908c-2913645e4f56 received PUBLISH (d0, q0, r0, m0, 'zilla', ... (12 bytes))
    Hello, world
    ```

Now, lets try to publish a message.

1. Use the signed JWT token, with `mqtt:stream` scope, publish a message.

    ```bash
    docker compose -p zilla-mqtt-proxy-jwt exec mosquitto-cli \
    mosquitto_pub --url mqtt://zilla.examples.dev:7183/zilla --message 'Hello, world' --debug -u $MQTT_USERNAME
    ```

2. The output should look something like this:

    ```text
    Client null sending CONNECT
    Client 44181407-f1bc-4a6b-b94d-9f37d37ea395 received CONNACK (0)
    Client 44181407-f1bc-4a6b-b94d-9f37d37ea395 sending PUBLISH (d0, q0, r0, m1, 'zilla', ... (12 bytes))
    Client 44181407-f1bc-4a6b-b94d-9f37d37ea395 sending DISCONNECT
    ```

## Step 4: Teardown

To remove any resources created by the Docker Compose stack, use:

```bash
docker compose down
```
