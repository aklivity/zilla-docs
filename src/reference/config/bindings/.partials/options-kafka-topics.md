#### topics[].name\*

> `string`

Topic name.

#### topics[].key

> `object`

Enforce validation for key

#### key.model

> `model` [ [`avro`](../../models/avro.md), [`json`](../../models/avro.md), [`protobuf`](../../models/protobuf.md), [`string`](../../models/string.md), [`double`](../../models/double.md), [`float`](../../models/float.md), [`int32`](../../models/int32.md), [`int64`](../../models/int64.md) ]

A schema or type to validate the topic's key.

#### topics[].value

> `object`

Enforce validation for value

#### value.model

> `model` [ [`avro`](../../models/avro.md), [`json`](../../models/avro.md), [`protobuf`](../../models/protobuf.md), [`string`](../../models/string.md), [`double`](../../models/double.md), [`float`](../../models/float.md), [`int32`](../../models/int32.md), [`int64`](../../models/int64.md) ]

A schema or type to validate the topic's value.
