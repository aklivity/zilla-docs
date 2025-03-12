---
shortTitle: SSE
---

# SSE With JWT Guard

In SSE, JWTs are commonly used for authentication and authorization by including them in the HTTP `Authorization` header, allowing the server to verify client identity without maintaining session state. The following guide walks you through setting up an SSE proxy with JWT authentication in Zilla, ensuring only clients with valid tokens can establish and receive event streams. You can see the full example and guide in the repository.

## Prerequisites

- Netcat (nc)
- [Docker Compose](https://docs.docker.com/compose/)
- `jwt-cli`

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
cd zilla-examples/sse.jwt
```

## Step 2: Start the Zilla Proxy

Run Zilla to start the proxy service:

```bash
docker-compose up -d
```

This launches the Zilla proxy along with the required services.

## Step 3: Test the JWT Authentication

1. Generate JWT token valid for `30 seconds` and signed by local private key.

    ```bash
    export JWT_TOKEN=$(jwt encode \
    --alg "RS256" \
    --kid "example" \
    --iss "https://auth.example.com" \
    --aud "https://api.example.com" \
    --sub "example" \
    --exp=+30s \
    --no-iat \
    --payload "scope=proxy:stream" \
    --secret @private.pem)
    ```

2. Use `curl` to connect to the SSE endpoint and listen for events.

    ```bash
    curl -v --cacert test-ca.crt "https://localhost:7143/events?access_token=${JWT_TOKEN}"
    ```

3. The output should look something like this.

    ```text
    *   Trying 127.0.0.1:7143...
    * Connected to localhost (127.0.0.1) port 7143 (#0)
    * ALPN, offering h2
    * ALPN, offering http/1.1
    * successfully set certificate verify locations:
    *  CAfile: test-ca.crt
    *  CApath: none
    * (304) (OUT), TLS handshake, Client hello (1):
    * (304) (IN), TLS handshake, Server hello (2):
    * (304) (IN), TLS handshake, Unknown (8):
    * (304) (IN), TLS handshake, Certificate (11):
    * (304) (IN), TLS handshake, CERT verify (15):
    * (304) (IN), TLS handshake, Finished (20):
    * (304) (OUT), TLS handshake, Finished (20):
    * SSL connection using TLSv1.3 / AEAD-AES256-GCM-SHA384
    * ALPN, server accepted to use h2
    * Server certificate:
    *  subject: C=US; ST=California; L=Palo Alto; O=Aklivity; OU=Development; CN=localhost
    *  start date: Dec 21 23:04:14 2021 GMT
    *  expire date: Dec 19 23:04:14 2031 GMT
    *  common name: localhost (matched)
    *  issuer: C=US; ST=California; L=Palo Alto; O=Aklivity; OU=Development; CN=Test CA
    *  SSL certificate verify ok.
    * Using HTTP2, server supports multiplexing
    * Connection state changed (HTTP/2 confirmed)
    * Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0
    * Using Stream ID: 1 (easy handle 0x7fe6bc011e00)
    > GET /events HTTP/2
    > Host: localhost:7143
    > user-agent: curl/7.79.1
    > accept: */*
    > authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImV4YW1wbGUifQ.eyJhdWQiOiJodHRwczovL2FwaS5leGFtcGxlLmNvbSIsImV4cCI6MTY2MTc5MDM1MCwiaXNzIjoiaHR0cHM6Ly9hdXRoLmV4YW1wbGUuY29tIiwic2NvcGUiOiJwcm94eTpzdHJlYW0iLCJzdWIiOiJleGFtcGxlIn0.XAugWfUFa-oU4Hx7Nn00zq9K9oTEkSknQvmiiAtJCRouIRXyl4qCAlQmOeI35JhN_RLj4p9EgoyCVtlZNWXKVcTeAxaAQrNeKywQ58wsn0VFdKHB2LXR0oxHXOtJIkl9oJWaM4IvUenKAfs2g-yHQtKNryhu9q8TgOPEW7JeqfCaV3J_xjn7WjMILggLde6lu8haGNa1ePDMxJwZ2Z9AQd-5Gcfyx9lQj_G7VQBHR5j8c5LrXx4U8E5f4KOYFUI7xs2wSuTApZyQdmetIRpFkIfsqVcH_rtdqs6ZuCTwmaKwXt-9KNvvg3n0joN1jqdtE7XhnW19-LQK62RgrEV6ZA
    >
    * Connection state changed (MAX_CONCURRENT_STREAMS == 2147483647)!
    < HTTP/2 200
    < content-type: text/event-stream
    < access-control-allow-origin: *
    <
    data:Hello, world Wed Aug 29 9:05:52 PDT 2022
    ```

4. Now, you can send a message using `nc` to trigger an event.

    ```bash
    echo '{ "data": "Hello, world '`date`'" }' | nc -c localhost 7001
    ```

5. About 20 seconds after the JWT is generated (10 seconds before expiration), a challenge event is sent. The event will look like this:

    ```yaml
    event: challenge
    data: {"method":"POST","headers":{"content-type":"application/x-challenge-response"}}
    ```

    The client must respond with a refreshed JWT in an HTTP request, or the SSE connection will be terminated.

## Step 4: Browser Interaction

1. Open a browser and go to `https://localhost:7143/index.html`.
2. Accept and trust the `localhost` certificate.
3. Click the `Go` button to start the SSE connection via Zilla.
4. Open Developer Tools → Network tab → Watch the EventStream request.
5. When the `challenge` event occurs, the browser sends a new request with a refreshed JWT.

    ::: note
    If the `reauthorize` checkbox is unchecked, the client won't respond to the `challenge` event, and the SSE stream will end when the JWT expires.
    :::

## Step 5: Teardown

To remove any resources created by the Docker Compose stack, use:

```bash
docker compose down
```
