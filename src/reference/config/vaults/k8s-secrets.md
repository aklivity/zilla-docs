---
shortTitle: k8s-secrets
category:
  - Vault
---

# k8s-secrets Vault

A Zilla runtime k8s-secrets vault that resolves private keys from Kubernetes `Secret` resources and trusted certificate authorities from either a `ConfigMap` or a `Secret`, using the pod's own `ServiceAccount` to authenticate to the Kubernetes API server.

This is typically combined with a [tls](../bindings/tls/README.md) binding `vault` property, referencing `kubernetes.io/tls` Secrets by name for keys, and a [trust-manager](https://cert-manager.io/docs/trust/trust-manager/) `Bundle`-managed `ConfigMap` by name for trust.

[Available in <ZillaPlus/>](https://www.aklivity.io/products/zilla-plus)
{.zilla-plus-badge .hint-container .info}

The `ServiceAccount` running Zilla must be granted `get` access to the referenced Secrets and ConfigMaps via a Kubernetes `Role`/`RoleBinding`. Once resolved, keys and trust are refreshed automatically on an interval, so a `Secret` or `ConfigMap` updated in place — for example by [cert-manager](https://cert-manager.io/) or [trust-manager](https://cert-manager.io/docs/trust/trust-manager/) — is picked up without restarting Zilla; when a resolved key `Secret` carries the `cert-manager.io/certificate-name` annotation, the vault also reads the owning `Certificate`'s `status.renewalTime` to pace that refresh around the actual rotation, falling back to the fixed interval when the annotation, `Certificate`, or `renewalTime` are absent.

```yaml {2}
server:
  type: k8s-secrets
  options:
    keys:
      server: my-tls-secret
    trust:
      client-ca: trust-bundle:ca-bundle.pem
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

Map of alias name to a locator for a certificate authority, trusted for mutual TLS. By default, a locator resolves against a `ConfigMap` — matching how [trust-manager](https://cert-manager.io/docs/trust/trust-manager/)'s `Bundle` CRD publishes trust bundles — and requires a trailing `:key` naming the `ConfigMap` data entry to read. Prefixing the locator with `secret:` instead resolves it against a `Secret`, matching `options.keys`: a `Secret` carrying a `ca.crt` data entry, or a `kubernetes.io/tls` Secret's `tls.crt` entry, with no `:key` suffix.

```yaml
options:
  trust:
    client-ca: trust-bundle:ca-bundle.pem
```

An explicit `configmap:` prefix is also accepted and behaves identically to no prefix:

```yaml
options:
  trust:
    client-ca: configmap:trust-bundle:ca-bundle.pem
```

To resolve trust from a `Secret` instead — for example when the same `Secret` cert-manager writes for `options.keys` also carries the issuing CA's `ca.crt` — prefix the locator with `secret:`:

```yaml
options:
  trust:
    client-ca: secret:my-ca-secret
```

A locator's resource name may be namespace-qualified as `namespace/name`; when no namespace is given, the pod's own namespace (from its `ServiceAccount`) is used. The full grammar is `[secret:|configmap:][namespace/]name[:key]`, with the trailing `:key` required for the `ConfigMap` form and disallowed for the `secret:` form.
