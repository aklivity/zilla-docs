---
shortTitle: memory
category:
  - Store
tag:
  - memory
---

# memory Store

Defines an in-memory store.

The `memory` store holds data in local process memory. It does not persist across restarts and is not shared between Zilla instances. It is suitable for single-instance deployments or testing scenarios.

```yaml {2}
stores:
  my_memory_store:
    type: memory
```
