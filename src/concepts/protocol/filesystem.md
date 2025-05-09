---
shortTitle: Filesystem
description: Filesystem Protocol in Zilla
---

# Filesystem Protocol

## Introduction

Zilla implements the Filesystem protocol for providing access to local files and directories on the local filesystem. When combined with HTTP binding, it behaves as a webserver.

## Supported Features

1. Basic Filesystem operations, such as:
   - `CREATE_DIRECTORY`
   - `CREATE_FILE`
   - `DELETE_DIRECTORY`
   - `DELETE_FILE`
   - `READ_DIRECTORY`
   - `READ_FILE`
   - `READ_FILE_CHANGES`
   - `READ_METADATA`
   - `WRITE_FILE`
2. Symbolic Links support.
3. Robust routing capabilities.

## Security

### HTTPS

By utilizing HTTP and [**`TLS` binding**](../../reference/config/bindings/tls/README.md), a TLS encryption can be enforced on the Filesystem bindings. This prevents eavesdropping, tampering, and man-in-the-middle (MITM) attacks.

### Authentication

**Zilla natively supports [JWT-based authentication](../../reference/config/guards/jwt.md)**, using a `guard` implementation that allows seamless validation and access control for protected resources.

During authentication, the client sends the token in the Authorization header with each request. The server then validates the token’s integrity and claims before granting access.

## Zilla: Filesystem Use Cases

Zilla leverages Filesystem Protocol to provide powerful routing and serving files through Zilla.

- **Filesystem Proxy**
  - [http.filesystem](https://github.com/aklivity/zilla/tree/develop/examples/http.filesystem)

## Reference

[Filesystem Binding](../../reference/config/bindings/filesystem/README.md) The `filesystem` support, with `server` behavior.

[http-filesystem Binding](../../reference/config/bindings/http-filesystem/README.md) Binding with `http-filesystem` support, with `proxy` behavior.
