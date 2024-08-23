#### topics[].name\*

> `string`

Topic name.

#### topics[].key

> `object`

Enforce validation for key

#### key.model

> `model` [ [`avro`](../../models/model-avro.md), [`json`](../../models/model-avro.md), [`protobuf`](../../models/model-protobuf.md), [`string`](../../models/model-string.md), [`integer`](../../models/model-integer.md) ]

A schema or type to validate the topic's key.

#### topics[].value

> `object`

Enforce validation for value

#### value.model

> `model` [ [`avro`](../../models/model-avro.md), [`json`](../../models/model-avro.md), [`protobuf`](../../models/model-protobuf.md), [`string`](../../models/model-string.md), [`integer`](../../models/model-integer.md) ]

A schema or type to validate the topic's value.
