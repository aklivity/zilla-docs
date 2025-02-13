---
shortTitle: Docker
---

# Running Zilla via Docker

You can run your `zilla.yaml` config inside a container. If you want to deploy on Kubernetes, use our [helm chart](./helm.md#deploying-zilla-via-helm).

```bash
docker run -v ./zilla.yaml:/etc/zilla/zilla.yaml ghcr.io/aklivity/zilla:latest start -ve
```