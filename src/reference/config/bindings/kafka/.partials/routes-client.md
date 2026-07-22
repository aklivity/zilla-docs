### routes\*

> `array` of `object`

`kafka` specific routes.

#### routes[].guarded

> `object` as map of named `array` of `string`

List of roles required by each named guard to authorize this route.

```yaml
routes:
  - guarded:
      my_guard:
        - read:items
```

#### routes[].exit

> `string`

Next binding when following this route.

```yaml
exit: echo_server
```
