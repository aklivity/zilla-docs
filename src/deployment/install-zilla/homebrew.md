---
shortTitle: Homebrew
---

# Install on MacOS via Homebrew

You can install Zilla using our [homebrew tap](https://github.com/aklivity/homebrew-tap), a Homebrew formulae that allows installation of zilla through the Homebrew package manager.

## Prerequisite

- [Homebrew](https://brew.sh/)

## Instructions

### Step 1: Adding Aklivity third-party repository to Homebrew

Add the Aklivity third-party repository (tap) to Homebrew. The tap allowing you to install packages maintained by Aklivity, including Zilla.

```bash
brew tap aklivity/tap
```

**Expected Output Example**

```bash
% brew tap aklivity/tap
...
==> Tapping aklivity/tap
Cloning into '/opt/homebrew/Library/Taps/aklivity/homebrew-tap'...
...
Tapped 1 formula (14 files, 28.4KB).
```

### Step 2: Installing Zilla using Homebrew

Install Zilla from the Aklivity tap using Homebrew’s package management system.

```bash
brew install zilla
```

**Expected Output Example**

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

### Step 3: Running a `zilla.yaml` config

Run a `zilla.yaml` config.

```bash
zilla start -ve -c ./zilla.yaml
```

### Additional Instructions

#### Listing all Zilla commands

```bash
zilla help
```

**Expected Output Example**

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

#### Upgrading Zilla

```bash
brew upgrade zilla
```

**Expected Output Example**

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

#### Uninstalling Zilla

```bash
brew uninstall zilla
```

**Expected Output Example**

```bash
%  brew uninstall zilla
Uninstalling /opt/homebrew/Cellar/zilla/0.9.79... (11,485 files, 250MB)
``` 