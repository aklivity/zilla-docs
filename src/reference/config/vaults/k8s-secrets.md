---
shortTitle: k8s-secrets
category:
  - Vault
---

# k8s-secrets Vault

A Zilla runtime k8s-secrets vault that resolves private keys and trusted certificate authorities from Kubernetes `Secret` resources, using the pod's own `ServiceAccount` to authenticate to the Kubernetes API server.

This is typically combined with a [tls](../bindings/tls/README.md) binding `vault` property, referencing `kubernetes.io/tls` Secrets by name.

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

The `ServiceAccount` running Zilla must be granted `get` access to the referenced Secrets via a Kubernetes `Role`/`RoleBinding`. Once resolved, keys and trust are refreshed automatically on an interval, so a `Secret` updated in place — for example by [cert-manager](https://cert-manager.io/) — is picked up without restarting Zilla; when a resolved `Secret` carries the `cert-manager.io/certificate-name` annotation, the vault also reads the owning `Certificate`'s `status.renewalTime` to pace that refresh around the actual rotation, falling back to the fixed interval when the annotation, `Certificate`, or `renewalTime` are absent.

```yaml {2}
server:
  type: k8s-secrets
  options:
    keys:
      server: my-tls-secret
    trust:
      client-ca: my-ca-secret
```

## Configuration (\* required)

### options

> `object`

The `k8s-secrets` specific options.

#### options.keys

> `object` as map of named `string` properties

Map of alias name to Kubernetes `Secret` name, exposed as private keys. Each `Secret` must be of type `kubernetes.io/tls`, carrying `tls.crt` and `tls.key` data entries.

```yaml
options:
  keys:
    server: my-tls-secret
```

A `Secret` name may be namespace-qualified as `namespace/name`; when no namespace is given, the pod's own namespace (from its `ServiceAccount`) is used.

#### options.trust

> `object` as map of named `string` properties

Map of alias name to Kubernetes `Secret` name, trusted as certificate authorities. Accepts a `Secret` carrying a `ca.crt` data entry, or a `kubernetes.io/tls` Secret's `tls.crt` entry.

```yaml
options:
  trust:
    client-ca: my-ca-secret
```

A `Secret` name may be namespace-qualified as `namespace/name`; when no namespace is given, the pod's own namespace (from its `ServiceAccount`) is used.
