---
shortTitle: Proxy
---

# HTTP Proxy

## Overview

Zilla’s HTTP proxy provides a secure and efficient solution for managing API requests. It offers advanced capabilities, including fine-grained CORS control, authorization enforcement through guards, dynamic request routing, and strict request validation. By implementing CORS policies, Zilla allows controlled access from different origins while maintaining strict security measures. Its authorization guards ensure that only authenticated users can interact with protected resources. The proxy's dynamic routing functionality enables intelligent traffic management by evaluating HTTP headers to determine the appropriate destination.

## Key Capabilities

### Cross-Origin Resource Sharing (CORS)

Zilla supports granular control over Cross-Origin Resource Sharing (CORS) by specifying an access control policy of `cross-origin`, allowing APIs to be accessed securely from different origins while preventing unauthorized `cross-origin` requests. Further configuration allows for finer-grained access control including specific request origins, methods and headers allowed, and specific response headers exposed.

### Authorization Through Guard Enforcement

Zilla implements a [guard](../../../reference/config/overview.html#guards) mechanism to enforce authorization rules before processing requests and the credentials can be extracted from a cookie, header or query parameter. This ensures that only authenticated and authorized users can access protected resources.

### Dynamic Routing Based on HTTP Requests

Zilla enables dynamic routing by evaluating HTTP request headers, directing application streams to the appropriate `exit` binding based on predefined conditions.

### Request Validation Enforcement

Zilla ensures that incoming requests comply with predefined schemas, enhancing security and data integrity by rejecting malformed or invalid data.

By utilizing these capabilities, Zilla’s HTTP proxy strengthens security, enhances flexibility, and ensures compliance in API management.

## Use Cases

### API Gateway

Organizations using a microservices architecture can leverage Zilla’s HTTP proxy to manage API traffic efficiently. It ensures secure communication between services by enforcing authentication, routing requests dynamically, and validating incoming data before passing it to backend services.

### Load Balancing and Traffic Routing

Zilla’s ability to route requests based on HTTP attributes allows it to function as a smart load balancer. Incoming requests can be directed to different backend services based on headers, query parameters, or user authentication status, optimizing performance and scalability.

## Examples

Try out HTTP proxy examples:

- [http.proxy](https://github.com/aklivity/zilla-examples/tree/main/http.proxy)
- [http.proxy.schema.inline](https://github.com/aklivity/zilla-examples/tree/main/http.proxy.schema.inline)