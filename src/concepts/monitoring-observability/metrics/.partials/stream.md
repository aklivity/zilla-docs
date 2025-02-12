### metrics

> `string[]`

The list of metric names available to record and export.

| Property | Type | Description |
| -- | -- | -- |
| stream.active.received |  `gauge` |  The number of currently active received streams. | 
| stream.active.sent |  `gauge` |  The number of currently active sent streams. | 
| stream.opens.received |  `counter` |  The number of opened received streams. | 
| stream.opens.sent |  `counter` |  The number of opened sent streams. | 
| stream.data.received |  `counter` |  The count of `bytes` of data on received streams. | 
| stream.data.sent |  `counter` |  The count of `bytes` of data on sent streams. | 
| stream.errors.received |  `counter` |  The number of errors on received streams. | 
| stream.errors.sent |  `counter` |  The number of errors on sent streams. | 
| stream.closes.received |  `counter` |  The number of closed received streams. | 
| stream.closes.sent |  `counter` |  The number of closed sent streams. | 
