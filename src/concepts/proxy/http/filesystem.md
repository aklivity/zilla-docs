---
shortTitle: Filesystem
---

# HTTP Filesystem

## Overview

The HTTP Filesystem binding transforms Zilla into a versatile web server, enabling file serving and management directly from the filesystem. It’s ideal for scenarios requiring lightweight, configurable file hosting. This capability makes Zilla a powerful tool for developers who need to quickly set up a file-serving infrastructure without the overhead of more complex systems.

## Key Capabilities

### Configurable File Routing

Zilla supports file routing, enabling users to define specific paths for serving files and specific binding for specific paths. This routing includes specifying which operations (CREATE, READ, DELETE, UPDATE, etc) are allowed for certain endpoints. This flexibility ensures that files and directories can be organized and accessed in a manner that suits the application's needs. For example, you can only allow GET HTTP method for the endpoints so that the file server is read-only.

### Static File Serving

For simple use cases, Zilla can be used to serve static content across networks, whether it's static websites, images, and much more.

### Filesystem operations support

Zilla supports a wide range of basic filesystem operations, including:

- `CREATE_DIRECTORY`
- `CREATE_FILE`
- `DELETE_DIRECTORY`
- `DELETE_FILE`
- `READ_DIRECTORY`
- `READ_FILE`
- `READ_FILE_CHANGES`
- `READ_METADATA`
- `WRITE_FILE`

Other than that, it's also possible to specify a directory with a symbolic link in Zilla. This allows for more flexible file organization and can simplify the management of complex directory structures.

## Use Cases

### Simple CDN

Zilla can function as a simple Content Delivery Network (CDN), efficiently serving static assets to users. Its lightweight nature and configurable routing make it an excellent choice for small to medium-sized CDN implementations.

### File server

Zilla can be used as a straightforward file server, providing easy access to files stored on the local filesystem and capabilities for manipulating the directories and files. This is particularly useful for internal networks or development environments where quick and easy file-sharing management is needed. For example, it can be used to share project files among team members or to provide a simple interface for uploading and downloading files.

## Examples

Try out HTTP Filesystem examples:

- [http.filesystem](https://github.com/aklivity/zilla-examples/tree/main/http.filesystem)
- [http.filesystem.config.server](https://github.com/aklivity/zilla-examples/tree/main/http.filesystem.config.server)
