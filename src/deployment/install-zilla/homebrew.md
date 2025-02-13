---
shortTitle: Homebrew
---

# Install on MacOS via Homebrew

You can install Zilla using our [homebrew tap](https://github.com/aklivity/homebrew-tap), a Homebrew formulae that allows installation of zilla through the Homebrew package manager.

## Instructions

Below are some instructions with output examples.

### Adding Aklivity third-party repository to Homebrew

```bash
brew tap aklivity/tap
```

**Expected Output**

```bash
% brew tap aklivity/tap
...
==> Tapping aklivity/tap
Cloning into '/opt/homebrew/Library/Taps/aklivity/homebrew-tap'...
...
Tapped 1 formula (14 files, 28.4KB).
```

### Installing Zilla using Homebrew

```bash
brew install zilla
```

**Expected Output**

```bash
% brew install zilla
==> Fetching dependencies for aklivity/tap/zilla: openjdk
...
==> Fetching aklivity/tap/zilla
...
==> Installing aklivity/tap/zilla
==> wget https://maven.packages.aklivity.io/io/aklivity/zilla/manager/0.9.78/manager-0.9.78.jar
==> java -jar manager-0.9.78.jar wrap
==> ./zpmw install --debug
🍺  /opt/homebrew/Cellar/zilla/0.9.78: 11,485 files, 250MB, built in 5 minutes 25 seconds
==> Running `brew cleanup zilla`...
```

### Listing all Zilla commands

```bash
zilla help
```

**Expected Output**

```bash
% zilla help
usage: zilla <command> [ <args> ]

Commands are:
    help      Display help information
    metrics   Show engine metrics
    start     Start engine
    stop      Stop engine

See 'zilla help <command>' for more information on a specific command.
```

### Upgrading Zilla

```bash
brew upgrade zilla
```

**Expected Output**

```bash
% brew upgrade zilla
==> Upgrading 1 outdated package:
aklivity/tap/zilla 0.9.78 -> 0.9.79
==> Fetching aklivity/tap/zilla
...
==> Upgrading aklivity/tap/zilla
  0.9.78 -> 0.9.79
==> wget https://maven.packages.aklivity.io/io/aklivity/zilla/manager/0.9.79/manager-0.9.79.jar
==> java -jar manager-0.9.79.jar wrap
==> ./zpmw install --debug
🍺  /opt/homebrew/Cellar/zilla/0.9.79: 11,485 files, 250MB, built in 5 minutes 1 second
==> Running `brew cleanup zilla`...
```

### Uninstalling Zilla

```bash
brew uninstall zilla
```

**Expected Output**

```bash
%  brew uninstall zilla
Uninstalling /opt/homebrew/Cellar/zilla/0.9.79... (11,485 files, 250MB)
``` 

### Running a `zilla.yaml` config

```bash
zilla start -ve -c ./zilla.yaml
```