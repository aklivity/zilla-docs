# Incubator Features

> Progress on incubator features can be found on the [Zilla roadmap](https://github.com/orgs/aklivity/projects/4).

Zilla maintains functioning features that may have more work or design changes in a separate install directory called `incubator`. These are released with Zilla for the community to use and provide feedback or suggestions on how to improve the feature. The package name doesn't change meaning incubator features can be added to the Zilla runtime engine whenever they are ready or needed. Incubator features are loaded when the `zilla.incubator.enabled` java property is set to true.

The `ZILLA_INCUBATOR_ENABLED` environment variable will set the incubator java option when set to `true`. Add the environment variable wherever you are running zilla.

```text
ZILLA_INCUBATOR_ENABLED=true
```
