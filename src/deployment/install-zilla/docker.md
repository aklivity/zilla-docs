---
shortTitle: Docker
---

# Running Zilla via Docker

You can run your `zilla.yaml` config inside a container. If you want to deploy on Kubernetes, use our [helm chart](./helm.md#deploying-zilla-via-helm).

## Prerequisite

- [Docker](https://docs.docker.com/compose/gettingstarted/)

## Instructions

### Step 1: Creating a `zilla.yaml` configuration file

Zilla requires a zilla.yaml configuration file.

- Create a zilla.yaml file in your working directory.
- Define your desired configuration inside the file.

See the [aklivity/zilla-examples](https://github.com/aklivity/zilla-examples) repository for examples.

### Step 2: Running Zilla in a Docker container

Use the following command to start Zilla with your custom configuration:

```sh
docker run -v ./zilla.yaml:/etc/zilla/zilla.yaml ghcr.io/aklivity/zilla:latest start -ve
```

Explanation of the command:

- `docker run`: Runs a new container.
- `-v ./zilla.yaml:/etc/zilla/zilla.yaml`: Mounts your local zilla.yaml file inside the container at `/etc/zilla/zilla.yaml`.
- `ghcr.io/aklivity/zilla:latest`: Uses the latest Zilla image from GitHub Container Registry.
- `start -ve`: Starts Zilla with verbose logging and error reporting.

### Step 3: Verifying that Zilla is running

Checking running containers:

```bash
docker ps
```

Viewing logs to confirm Zilla started successfully:

```sh
docker logs [CONTAINER_ID]
```

Replace [CONTAINER_ID] with the actual container ID.

### Additional Instructions

#### Stopping the Zilla container

```bash
docker stop [CONTAINER_ID]
```

Replace `[CONTAINER_ID]` with the actual container ID.

#### Removing the Zilla container

```bash
docker rm [CONTAINER_ID]
```

Replace `[CONTAINER_ID]` with the actual container ID.
