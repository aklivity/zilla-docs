const fs = require("fs");
const { marked } = require("marked");
const { $RefParser } = require("@apidevtools/json-schema-ref-parser");
const schema = require("./zilla-schema.json");

const main = async () => {
    await $RefParser.dereference(schema);
    // console.log("RefParser", JSON.stringify(schema, null, 4))
    var errors = [];

    function getPageProps(name, tokens) {
        var foundHeadings = [name];
        tokens
            .filter(({ depth, type }) => type == "heading" && depth == 3)
            .forEach((t) => {
                if (t.text && t.type && t.type === "heading") {
                    t.tokens
                        .filter(({ type }) => type === "text")
                        .forEach(({ text }) => foundHeadings.push(`${name}.${text}`));
                }
            });
        tokens
            .filter(({ depth, type }) => type == "heading" && depth > 3)
            .forEach((t) => {
                if (t.text && t.type && t.type === "heading") {
                    t.tokens
                        .filter(({ type }) => type === "text")
                        .forEach(({ text }) => foundHeadings.push(text));
                }
            });
        return foundHeadings;
    }

    function getObjProps(attr, obj, reqKeys) {
        var props = [];
        // console.log(attr, Object.keys(obj || {}));
        Object.keys(obj || {}).forEach((k) => {
            var i = obj[k];
            if (!!i.deprecated) return

            //recurse
            if (i.properties) {
                props.push(...getObjProps(k, i.properties, i.required));
            }
            if (i.items?.properties) {
                props.push(
                    ...getObjProps(`${k}[]`, i.items.properties, i.items.required)
                );
            }
            if (i.patternProperties) {
                var ppObj =
                    i.patternProperties[Object.keys(i.patternProperties)[0]];
                if (ppObj.properties)
                    props.push(...getObjProps(k, ppObj.properties, ppObj.properties));
            }

            i.anyOf?.filter(({ properties }) => !!properties)
                .forEach(({ properties, required }) =>
                    props.push(...getObjProps(k, properties, required))
                );
            i.items?.anyOf?.filter(({ properties }) => !!properties)
                .forEach(({ properties, required }) =>
                    props.push(...getObjProps(`${k}[]`, properties, required))
                );

            i.oneOf?.filter(({ properties }) => !!properties)
                .forEach(({ properties, required }) =>
                    props.push(...getObjProps(k, properties, [...(i.required || []), ...(required || [])]))
                );
            i.additionalProperties?.oneOf?.filter(({ properties }) => !!properties)
                .forEach(({ properties, required }) =>
                    props.push(...getObjProps(k, properties, required))
                );

            //collect
            if (!!!i) return
            if (reqKeys && !reqKeys.include) {
                reqKeys = Object.keys(reqKeys);
            }
            var req = !!reqKeys?.includes(k);
            var path = [attr, k].filter((s) => !!s).join(".");
            // console.log(`${path}: ${i.const}`)
            if (i.properties) {
                props.push([path, "object", req, i.const]);
            } else if (i.additionalProperties) {
                if (i.additionalProperties.oneOf) {
                    props.push([
                        path,
                        i.additionalProperties.oneOf.map(({ type }) => type).join(","),
                        req,
                        i.const,
                    ]);
                } else {
                    props.push([path, i.additionalProperties.type, req, i.const]);
                }
            } else if (i.items) {
                props.push([path, "array", req, i.const]);
            } else if (i.type) {
                if (i.const) path = `${path}: ${i.const}`;
                props.push([path, i.type, req, i.const]);
            } else if (i.const) {
                props.push([`${path}: ${i.const}`, "string", req, i.const]);
            } else if (i.enum?.length) {
                i.enum.forEach((e) => props.push([`${path}: ${e}`, e, req, i.const]));
            } else if (i.const) {
                props.push([path, i.const, req, i.const]);
            } else if (i.oneOf) {
                props.push([
                    path,
                    i.oneOf
                        .filter(({ type }) => !!type)
                        .map(({ type }) => type)
                        .join(","),
                    req,
                    i.const,
                ]);
            }
        });
        return props;
    }

    var sections = ["binding", "guard", "vault", "catalog"]
        .map((type) =>
            schema.$defs[type]?.allOf.map(({ if: fi, then }) => ({
                type,
                folder: `${type}s`,
                name: fi.properties.type.const,
                props: {
                    [fi.properties.type.const]: {
                        ...(then || {}),
                        required:  [...(schema.$defs[type].required || []), ...(then.required || [])],
                        oneOf:  [...(schema.$defs[type].oneOf || []), ...(then.oneOf || [])],
                        properties: {...(schema.$defs[type].properties || {}), ...(then.properties || {})},
                    }
                },
            }))
        )
        .flat(1);

    sections.push(
        ...schema.$defs.telemetry.exporter?.allOf.map(({ if: fi, then }) => ({
            type: "exporter",
            folder: "telemetry.exporters",
            name: fi.properties.type.const,
            props: {
                [fi.properties.type.const]: {
                    ...(schema.$defs.telemetry.exporter || {}), ...(then || {}),
                }
            },
        }))
    );
    // sections.push(
    //     ...schema.$defs.converter.model?.allOf.map(({ if: fi, then }) => ({
    //         type: "model",
    //         folder: "models",
    //         name: fi.properties.model.const,
    //         props:{ [fi.properties.model.const]: { 
    //             ...(schema.$defs.converter.model || {}), ...(then || {}) ,
    //         }},
    //     }))
    // );

    sections.forEach(({ type, folder, name, props }) => {
        delete props.type;
        var attrs = getObjProps(null, props, []);
        var filename = `src/reference/config/${folder.replaceAll(".", "/")}/${type
            .split(".")
            .findLast((n) => !!n)}-${name}.md`;
        // console.log(filename, JSON.stringify(props, null, 4))
        if (
            fs.existsSync(filename)
        ) {
            var headers = getPageProps(name,
                marked.lexer(
                    fs.readFileSync(filename, "utf8")
                        .toString()
                )
            ).sort();
            var sorted = attrs.map((a) => a[0]).sort();
            // console.log("findings", type, name, sorted, headers);
            var addList = sorted.filter((x) =>
                !headers.includes(x)
            );
            var removeList = headers.filter((x) =>
                !sorted.includes(x) &&
                !["routes[].exit", "routes[].guarded"].includes(x)
            );
            if (addList.length) console.log(type, name, "add", addList);
            if (removeList.length) console.log(type, name, "remove", removeList);
        } else {
            errors.push(`missing ${name}`);
        }
    });

    //check metrics
    // {
    //     type: 'telemetry.metrics',
    //     name: 'grpc',
    //     props: schema.$defs.telemetry.metrics.items.enum.filter((m) => m.startsWith('grpc')),
    // }

    // console.log(errors)

};
main();
