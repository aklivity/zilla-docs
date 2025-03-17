# AWS Secrets Manager

The `aws.secrets` resolver can fetch an AWS Secrets Manager secret by its name (also called secretId) or its ARN. The resolvers follow the following syntax:

```plain
${{ aws.secrets.(Secret_Name) }}
${{ aws.secrets.(Secret_ARN) }}
```

If the secret is a key/value or JSON object this resolver can fetch individual properties by appending a # with the property name.

```plain
${{ aws.secrets.(Secret_Name)#(JSON_Property_Name) }}
${{ aws.secrets.(Secret_ARN)#(JSON_Property_Name) }}
```

## Example

```yaml
name: ${{ aws.secrets.(Service_Name) }}
telemetry:
  attributes:
    service.name: ${{ aws.secrets.(Service_Name) }}
    service.version: ${{ aws.secrets.(Service)#(Version) }}

  # Desired metrics to track
  metrics:
    - http.active.requests
    - http.duration
    - http.request.size
    - http.response.size
```
