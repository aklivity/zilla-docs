---
shortTitle: HTTP
---

# HTTP With JWT Guard

In HTTP, JWTs are commonly used for authentication and authorization by including them in request headers, allowing APIs to verify user identity without maintaining session state. The following guide walks you through setting up an HTTP proxy with JWT authentication in Zilla, ensuring only requests with valid tokens are forwarded to the backend service. You can see the full example and guide in the [repository](https://github.com/aklivity/zilla-examples/tree/main/http.proxy.jwt).

## Prerequisites

- [Docker Compose](https://docs.docker.com/compose/)
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
cd zilla-examples/http.proxy.jwt
```

## Step 2: Start the Zilla Proxy

Run Zilla to start the proxy service:

```bash
docker-compose up -d
```

This launches the Zilla proxy along with the required services.

## Step 3: Test the JWT Authentication

First, we test the JWT authentication using a **token that lacks the required `echo:stream` scope**.

1. Generate a JWT token without `echo:stream` scope.

    ```bash
    export JWT_TOKEN=$(jwt encode \
    --alg "RS256" \
    --kid "example" \
    --iss "https://auth.example.com" \
    --aud "https://api.example.com" \
    --exp=+1d \
    --no-iat \
    --secret @private.pem)
    ```

2. Print the generated token.

    ```bash
    echo $JWT_TOKEN
    ```

3. Attempt a request with the invalid JWT token.

    ```bash
    curl -v http://localhost:7114/ \
    -H "Authorization: Bearer $JWT_TOKEN" \
    -H "Content-Type: text/plain" \
    -d "Hello, world"
    ```

4. The request should be rejected as expected, and without leaking any information about failed security checks.

    ```text
    < HTTP/1.1 404 Not Found
    < Connection: close
    <
    ```

Next, let's test JWT authentication using a **token that includes the required `echo:stream` scope**.

1. Generate a valid JWT token with `echo:stream` scope.

    ```bash
    export JWT_TOKEN=$(jwt encode \
    --alg "RS256" \
    --kid "example" \
    --iss "https://auth.example.com" \
    --aud "https://api.example.com" \
    --exp=+1d \
    --no-iat \
    --payload "scope=echo:stream" \
    --secret @private.pem)
    ```

2. Print the generated token.

    ```bash
    echo $JWT_TOKEN
    ```

3. Attempt a request with the valid JWT token.

    ```bash
    curl "http://localhost:7114/" \
    -H "Authorization: Bearer $JWT_TOKEN" \
    -H "Content-Type: text/plain" \
    -d "Hello, world"
    ```

4. The request should be authorized and processed as expected.

    ```text
    Hello, world
    ```

Now, let's test the valid JWT token over HTTPS using different protocols.

1. An authorized request via HTTP/2.

    ```bash
    curl --cacert test-ca.crt "https://localhost:7143/" \
    -H "Authorization: Bearer $JWT_TOKEN" \
    -H "Content-Type: text/plain" \
    -d "Hello, world" \
    --http2-prior-knowledge
    ```

2. An authorized request via HTTP/1.1 over TLS.

    ```bash
    curl --cacert test-ca.crt "https://localhost:7143/" \
    -H "Authorization: Bearer $JWT_TOKEN" \
    -H "Content-Type: text/plain" \
    -d "Hello, world" \
    --http1.1
    ```

3. An authorized request via HTTP/2 over TLS.

    ```bash
    curl --cacert test-ca.crt "https://localhost:7143/" \
    -H "Authorization: Bearer $JWT_TOKEN" \
    -H "Content-Type: text/plain" \
    -d "Hello, world" \
    --http2
    ```

## Step 4: Teardown

To remove any resources created by the Docker Compose stack, use:

```bash
docker compose down
```
