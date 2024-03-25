# Kafka Consumer Groups

## gRPC

With one gRPC service definition and one binding what consumer groups are created by a single zilla instance?

What happens if that single zilla instance can scale to be 10 instances with the same config?

If 1k clients connect to a Zilla gRPC service and execute a method how will the "returned" messages affect consumer groups?

What consumer groups are used if one Zilla instance is configured to watch 1 topic and publish to 1k gRPC clients?

What if it is 1k topics publishing to 1 gRPC client?

## MQTT

What actions by an MQTT client will create a consumer group on each of the required topics, sessions, messages, retained?

What consumer groups are created for pub/sub on additional topics supported by Zilla routes?

How many consumer groups will be created by a single MQTT client pub/sub across multiple MQTT topics, and how does routing to different Kafka topics affect that?

## general

Does Zilla dynamically create new consumer groups?

What is the maximum number consumer groups Zilla will create per topic/partition?

Are consumer groups reused in different bindings in the same Zilla namespace?

How does one Zilla behave with other consumers on the same topic?

Does Zilla act as a group coordinator or only a member of a group?

If Zilla is kicked out of a group for any reason will it recover?

