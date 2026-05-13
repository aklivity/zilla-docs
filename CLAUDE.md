# Zilla Docs — Claude Code Guide

This repository contains the VuePress 2.0 source for [docs.aklivity.io/zilla/](https://docs.aklivity.io/zilla/). Content lives under `src/`, config under `src/.vuepress/`.

## Setup

```bash
pnpm i
pnpm dev
```

## Linting & Validation

Run these before opening a PR:

```bash
# Markdown lint
pnpm lint

# Spelling / grammar / style (requires Vale installed)
vale src
vale --ignore-syntax src/.vuepress/sidebar/en.ts

# Link checking (requires Lychee installed)
lychee --exclude-mail src

# Schema validation — outputs a diff of what reference docs are missing or wrong
pnpm check-schema > schema-edits.txt
```

## Schema-Check Workflow

`.check-schema/zilla-schema.json` is the source of truth for all Zilla config properties. The check script parses reference docs and flags drift between the JSON schema and the docs.

**Update the schema from Docker** (needed when Zilla releases a new version):

```bash
CONTAINER_ID=$(docker run -d -e ZILLA_INCUBATOR_ENABLED=true ghcr.io/aklivity/zilla-plus:latest start -v -Pzilla.engine.verbose.schema.plain);
docker wait $CONTAINER_ID;
docker logs $CONTAINER_ID 2>&1 | sed -n '/^{/,$p' > ./.check-schema/zilla-schema.json;
docker rm $CONTAINER_ID;
```

After updating the schema, run `pnpm check-schema > schema-edits.txt` and work through the diff to update reference pages.

You can also generate the schema locally via:

```bash
zilla start -v -Pzilla.engine.verbose.schema.plain
```

## Content Organization (Diataxis)

| Section          | Purpose                                                 |
|------------------|---------------------------------------------------------|
| `src/tutorials/` | Learning-oriented, beginner achieves a concrete goal    |
| `src/how-tos/`   | Task-oriented, solves a specific problem                |
| `src/concepts/`  | Understanding-oriented, explains why something works    |
| `src/reference/` | Information-oriented, complete property/API description |
| `src/cookbooks/` | End-to-end practical examples                           |

Do not mix content types within a page. Reference pages are dry and product-led; concepts pages are discursive and user-led.

## Reading Reference Pages — The `@include` Pattern

Reference page source files use VuePress `@include` directives to pull in YAML examples and property tables from `.partials/` subdirectories. These directives resolve at build time, so the raw `.md` file contains a placeholder, not the actual content:

```markdown
```yaml
<!-- @include: ./.partials/proxy.yaml -->
```
```

**When reading a reference page, also read its `.partials/` directory.** For example, to understand the full `http-kafka proxy` configuration:

- `src/reference/config/bindings/http-kafka/proxy.md` — page structure and description
- `src/reference/config/bindings/http-kafka/.partials/proxy.yaml` — the full YAML example
- `src/reference/config/bindings/http-kafka/.partials/options.md` — the `options` property docs
- `src/reference/config/bindings/http-kafka/.partials/routes.md` — the `routes` property docs

Shared partials (used across multiple binding kinds) live one level up at `src/reference/config/bindings/.partials/`.

## Reference Page Structure

Every page in `src/reference/` follows this exact structure:

```markdown
# ComponentName Kind

Brief description.

\`\`\`yaml
# full minimal example
\`\`\`

## Section

### topLevelProp\*

> `type`

Description.

\`\`\`yaml
topLevelProp: value
\`\`\`

#### topLevelProp.child

> `type` | Default: `value`

Description.

### parentArray

> `array` of `object`

Description.

#### parentArray[].child\*

> `type`

Description.
```

### Property Naming Rules

- **Header depth matches path depth**: `h3` = top-level prop, `h4` = one level deep, `h5` = two levels deep, etc.
- **Child props reference the parent**: `#### parent.child`, never just `#### child`
- **Arrays use `[]` only when describing children**: `#### parentArray[].child`, but `### parentArray` (no brackets on the array itself)
- **Required props get `\*`**: `### requiredProp\*` and `#### parent.requiredChild\*`
- **Type annotation block**: always a blockquote immediately after the header — `` > `type` `` or `` > `type` | Default: `value` ``

### Frontmatter

Reference pages use this frontmatter pattern:

```yaml
---
shortTitle: <binding-name>
category:
  - Binding          # or Guard, Vault, Catalog, Store, Model, Telemetry
tag:
  - <binding-name>
  - proxy            # the binding kind: server | client | proxy | cache_client | etc.
---
```

## Links

- Use relative file paths: `[grpc-kafka](../path/to/bindings/grpc-kafka/README.md)`
- Append the component type after the link text: `[jwt](../guards/jwt/README.md) Guard`
- Reference-style links are for tables, lists, or dense paragraphs only — place the reference definition close to usage.

## Style Rules (from the Writing Guide)

- **No emojis** in docs content.
- **Title Case for headings**.
- **Oxford comma**: "a, b, and c".
- **No abbreviations** unless referencing an API symbol (e.g. `$attrs` is fine, `attr` for `attribute` is not).
- **No "easy", "just", "obviously"** — avoid language that invalidates struggle.
- **Callout blocks sparingly** — never two callouts adjacent to each other.
- Describe the **problem first**, then the solution. Headings should name the problem, not the solution.

## Sidebar

The sidebar is defined in `src/.vuepress/sidebar/en.ts`. The `/reference/` subtree uses VuePress `structure` mode (auto-generated from file system). When adding new reference pages, ensure the directory has a `README.md` with correct frontmatter — the sidebar picks it up automatically.
