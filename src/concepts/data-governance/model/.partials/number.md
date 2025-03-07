@tab format

### format

> `enum` [ `binary`, `text` ] | Default: `text`

The format for the number.

@tab multiple

### multiple

> `number`

Restrict the number to a multiple of a given number.

**Example:**

If the `multiple` is set to 1.5, then only integers with a multiple of 1.5 are allowed, such as -3, -1.5, 0, 1.5, 3, etc.

@tab range

### range

> `string` | Pattern: `((?:\(|\[))(-?\d+(?:\.\d+)?)?,(-?\d+(?:\.\d+)?)?((?:\)|\]))`

An allowed range of values for the number.

**Example:**

- `(-4.5,4.5)` For value between -4.5 and 4.5 (exclusive).
- `[-4.5,]` For value between -4.5 to FLOAT32_MAX or FLOAT64_MAX (inclusive).
