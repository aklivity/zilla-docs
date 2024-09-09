# Schema Docs Comparison

This project compares the JSON Schema from the Zilla to the [Reference](../src/reference) section of the docs.

## Update schema

In the repository root directory run:

```bash
docker run --rm -e ZILLA_INCUBATOR_ENABLED=true ghcr.io/aklivity/zilla:develop-SNAPSHOT start -v -Pzilla.engine.verbose.schema.plain > ./.check-schema/zilla-schema.json
docker run --rm -e ZILLA_INCUBATOR_ENABLED=true ghcr.io/aklivity/zilla:develop-SNAPSHOT start -v -Pzilla.engine.verbose.schema > ./src/.vuepress/public/assets/zilla-schema.json
```

Once the docker container has printed "started" it must be deleted for the command to complete.

Remove the none JSON lines from the beginning and end of each file.
