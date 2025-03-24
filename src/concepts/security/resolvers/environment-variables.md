# Environment Variables

The `env` resolvers read the specified variable from the host machine environment variable. The resolvers follow the following syntax:

```plain
${{ env.(Env_Var_Name) }}
```

## Example

```yaml
name: ${{ env.OTEL_SERVICE_NAME }}
telemetry:
  attributes:
    service.name: ${{ env.OTEL_SERVICE_NAME }}
    service.version: ${{ env.ZILLA_VERSION }}

  # Desired metrics to track
  metrics:
    - http.active.requests
    - http.duration
    - http.request.size
    - http.response.size
```
