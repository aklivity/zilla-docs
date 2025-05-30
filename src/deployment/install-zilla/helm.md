---
shortTitle: Helm
---

# Deploying Zilla via Helm

Go to the [Zilla artifacthub](https://artifacthub.io/packages/helm/zilla/zilla) page to learn more about installing Zilla using Helm.

## Prerequisite

- [Kubernetes](https://kubernetes.io/): Version `1.23.x` or higher
- [Helm](https://helm.sh/): Version `3.8.x` or higher

## Instructions

### Step 1: Installing the Zilla Helm Chart

Use the following command to install Zilla on your Kubernetes cluster:

```bash
helm install [RELEASE_NAME] oci://ghcr.io/aklivity/charts/zilla
```

Replace [RELEASE_NAME] with your preferred release name.

This will deploy Zilla with its default configuration.

### Step 2: Verifying Installation

Check if the Zilla pods are running by executing:

```bash
kubectl get pods
```

You should see a running Zilla pod in the list.

### Additional Instructions

#### Uninstalling Zilla

If you need to remove Zilla, run the following command:

```bash
helm uninstall [RELEASE_NAME]
```

This will remove all Kubernetes components associated with the Zilla chart.

#### Deploying with custom configuration

Zilla specific configuration is in the `zilla.yaml` file which can be included in the helm install by adding `--set-file zilla\\.yaml=zilla.yaml` to your command.

```bash
helm install [RELEASE_NAME] oci://ghcr.io/aklivity/charts/zilla --set-file zilla\\.yaml=zilla.yaml
```

Additional files can be deployed to configmaps and secrets by adding e.g. `--set-file configMaps.proto.data.echo\\.proto=proto/echo.proto` and `--set-file secrets.tls.data.localhost\\.p12=tls/localhost.p12` to your command.

```bash
helm install [RELEASE_NAME] oci://ghcr.io/aklivity/charts/zilla \
  --set-file configMaps.proto.data.echo\\.proto=proto/echo.proto \
  --set-file secrets.tls.data.localhost\\.p12=tls/localhost.p12
```

See the [aklivity/zilla/examples](https://github.com/aklivity/zilla/tree/develop/examples) repository for examples.

#### Mapping TCP ports through the official `ingress-nginx` ingress controller

You can define your TCP ports to services mapping in a `tcp-services` ConfigMap. Official documentation on this method can be found in the [Exposing TCP and UDP services](https://kubernetes.github.io/ingress-nginx/user-guide/exposing-tcp-udp-services/) guide.

```bash
kubectl create configmap tcp-services \
  --from-literal=7183="$NAMESPACE/$SERVICE_NAME:7183" \
  --from-literal=7151="$NAMESPACE/$SERVICE_NAME:7151" \
  -n ingress-nginx -o yaml --dry-run=client | kubectl apply -f -
```

You will need to download the YAML manifest for the ingress controller. You can find an example on the [Ingress Nginx Quickstart guide](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start)

```bash
curl https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.10.1/deploy/static/provider/cloud/deploy.yaml > ingress-deploy.yaml
```

Once you have the Ingress Nginx YAML manifest, you must add the TCP port proxies for the ingress controller to allow your ports to pass through.

Here is how to add ports `7183` and `7151` to the `service/ingress-nginx-controller`.

```yaml{10-17}
kind: Service
metadata:
...
  name: ingress-nginx-controller
  namespace: ingress-nginx
spec:
...
  ports:
...
 - name: proxied-tcp-7183
    port: 7183
    targetPort: 7183
    protocol: TCP
 - name: proxied-tcp-7151
    port: 7151
    targetPort: 7151
    protocol: TCP
...
```

Finally, we need to configure the Ingress Nginx controller to look for port mappings in the `tcp-services` by adding the `--tcp-services-configmap=$(POD_NAMESPACE)/tcp-services` argument to the Deployment container args.

```yaml{9}
kind: Deployment
spec:
  template:
    spec:
      containers:
 - args:
  - /nginx-ingress-controller
...
  - --tcp-services-configmap=$(POD_NAMESPACE)/tcp-services
```

Create the ingress controller:

```bash
kubectl apply -f ingress-deploy.yaml
```

The ingress controller will allow your ports to pass through, and you can configure which services should receive the requests made at those ports.

#### Adding files to the Zilla pod

All local files referenced in a `zilla.yaml` config should be found in a location relative to the Zilla install location `/etc/zilla`. The best way to get your files into a pod is by using configmaps. Below you will find one option using configmaps and volume mounts to add your files into the Zilla pod.

- From a single file.

  ```bash
  kubectl create configmap my-files-configmap --from-file=my-file.txt -n $NAMESPACE -o yaml --dry-run=client | kubectl apply -f -
  ```

- All files in a folder. This does not add folders recursively and each folder needs to be individually mapped

  ```bash
  kubectl create configmap my-folder-configmap --from-file=path/to/my-folder/ -n $NAMESPACE -o yaml --dry-run=client | kubectl apply -f -
  ```

Once you have the files you need stored in a configmap you can mount them as volumes into the Zilla pod at the install location `/etc/zilla`.

::: code-tabs#bash

@tab values.yaml

```yaml
...
volumeMounts:
  - name: my-files-volume
    mountPath: /etc/zilla/files
  - name: my-folder-volume
    mountPath: /etc/zilla/folder

volumes:
  - name: my-files-volume
    configMap:
      name: my-files-configmap
  - name: my-folder-volume
    configMap:
      name: my-folder-configmap
```

:::

#### Get diagnostics from Zilla pods

For every running Zilla pod you will need to first copy the `/var/run/zilla` directory to make sure no additional files are written while it is compressed then compress the full directory to make it easier to copy.

```bash
kubectl get pod \
-l "app.kubernetes.io/name=zilla" \
-n $NAMESPACE \
--field-selector=status.phase=Running \
-o custom-columns=name:metadata.name --no-headers \
| xargs -I{} kubectl exec {} -n $NAMESPACE -c zilla -- sh -c "cp -r /var/run/zilla /tmp/zilla && tar czf /tmp/zilla.tar.gz /tmp/zilla && rm -rf /tmp/zilla"
```

Copy the compressed `/var/run/zilla` directory off of the pod into your local directory using the pod name.

```bash
kubectl get pod \
-l "app.kubernetes.io/name=zilla" \
-n $NAMESPACE \
--field-selector=status.phase=Running \
-o custom-columns=name:metadata.name --no-headers \
| xargs -I{} kubectl cp  -n $NAMESPACE {}:/tmp/zilla.tar.gz ./{}.tar.gz
```

Now you have a copy of the Zilla runtime directory for each running pod. This information can be used to diagnose all of the traffic zilla has managed.
