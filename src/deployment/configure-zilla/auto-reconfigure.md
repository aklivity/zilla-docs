# Auto Reconfigure

Zilla loads the configuration from the `zilla.yaml` file on startup and logs the configured settings. Restarting Zilla or its container may not be an option, so Zilla creates a file watcher to detect changes to the file and reloads the config if a change is detected.

Errors and misconfigured parts of the `zilla.yaml` file are detected by Zilla and reported via stdout. The original config remains in place and can only be replaced by a valid config.

This feature is demonstrated in the above Helm install command. Running a `helm update ...` with changes to the `zilla.yaml`, k8s will update the config map, which writes the new content into the running pods. Zilla will detect those file changes and load the new config.

Zilla can load the `zilla.yaml` config from a remote source using the `-c` or `--config` [CLI flag](/reference/config/zilla-cli.md#c-config). The auto reconfigure feature will still work when pulling the config remotely.
