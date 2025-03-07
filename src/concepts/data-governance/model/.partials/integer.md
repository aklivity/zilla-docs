@tab format

### format

> `enum` [ `binary`, `text` ] | Default: `text`

The format for the integer.

@tab multiple

### multiple

> `integer`

Restrict the integer to a multiple of a given integer.

**Example:**

If the `multiple` is set to 3, then only integers with a multiple of 3 are allowed, such as -3, 0, 3, 6, etc.

@tab range

### range

> `string` | Pattern: `((?:\(|\[))(-?\d+)?,(-?\d+)?((?:\)|\]))`

An allowed range of values for the number.

**Example:**

- `(-10,10)` For value between -10 and 10 (exclusive).
- `[-10,]` For value between -10 to INT32_MAX or INT64_MAX (inclusive).
