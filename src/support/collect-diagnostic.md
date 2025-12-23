# Collect Diagnostic

Collect the following diagnostic information after reproducing the issue you are observing, and collect the artefacts once the behavior occurs so that runtime data is still available.

## Capture the Engine Runtime Directory

Zilla stores engine runtime state under the engine directory. By default: `/var/run/zilla`

:::info
However, this location may be different if the `zilla.engine.directory` parameter is set in `zilla.properties`. Please verify the correct directory before proceeding.
:::

Create a tar archive of the engine directory shortly after reproducing the issue:

```bash
tar cvf /tmp/zilla-archive.tar /var/run/zilla
```

If your engine directory is different, replace `/var/run/zilla` with the configured path.

## Confirm Zilla Version

Capture the exact Zilla version you are running:

```bash
zilla version -v
```

## Share with Support

Send the following items to `support@aklivity.io`

* `zilla-archive.tar`
* Output of `zilla version -v`
* Zilla configuration file `zilla.yaml`
* A brief description of the issue and how to reproduce it.

These artifacts provide the most relevant diagnostic information for stream-level and engine-level analysis and allow support to investigate efficiently.
