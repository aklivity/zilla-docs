const fs = require("fs");
const { marked } = require("marked");
const { $RefParser } = require("@apidevtools/json-schema-ref-parser");
const schema = require("./zilla-schema.json");

const main = async () => {
    await $RefParser.dereference(schema);
    // console.log("RefParser", JSON.stringify(schema, null, 4))
    var errors = [];

    function getPageProps(name, tokens) {
        var foundHeadings = [];
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
        Object.entries(obj).forEach(([k, i]) => {
            // console.log(k, JSON.stringify(i, null, 4));
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

    var sections = Object.entries({
        guards: schema.properties.guards.patternProperties[Object.keys(schema.properties.guards.patternProperties)[0]],
        vaults: schema.properties.vaults.patternProperties[Object.keys(schema.properties.vaults.patternProperties)[0]],
        catalogs: schema.properties.catalogs.patternProperties[Object.keys(schema.properties.catalogs.patternProperties)[0]],
    }).map(([section, props]) =>
        props?.allOf?.map(({ if: fi, then }) => ({
            folder: section,
            name: fi.properties.type.const || fi.properties.type.enum?.[0],
            properties: {
                ...(props?.properties || {}), 
                ...(then.properties || {}),
                required: [...(props?.required || []), ...(then.required || [])],
                oneOf: [...(props?.oneOf || []), ...(then.oneOf || [])],
            },
        }))
    ).flat(1);

    var bindings = schema.properties.bindings.patternProperties[Object.keys(schema.properties.bindings.patternProperties)[0]];
    bindings.allOf?.forEach(({ if: fi, then }) => {
        var folder = `bindings.${fi.properties.type.const}`;
        if (then.oneOf) {
            sections.push(...then.oneOf.map(({ properties, required, oneOf, anyOf }) => ({
                folder,
                name: properties.kind.const,
                properties: {
                    ...(then.properties || {}), 
                    ...(properties || {}),
                    required: [ ...(then.required || []), ...(required || []) ],
                    oneOf: [ ...(then.oneOf || []), ...(oneOf || []) ],
                    anyOf: [ ...(then.anyOf || []), ...(anyOf || []) ],
                },
            })));
        } else {
            sections.push({
                folder,
                name: then.properties.kind.enum[0],
                properties: {
                    ...(then || {}),
                }
            });
        }
    })

    var exporterProps = schema.properties.telemetry.properties.exporters.patternProperties[Object.keys(schema.properties.telemetry.properties.exporters.patternProperties)[0]]
    sections.push(
        ...exporterProps?.allOf?.map(({ if: fi, then }) => ({
            folder: "telemetry.exporters",
            name: fi.properties.type.const,
            properties: then,
        }))
    );
    // console.log("sections", sections);
    // sections.push(
    //     ...schema.$defs.converter.model?.allOf.map(({ if: fi, then }) => ({
    //         type: "model",
    //         folder: "models",
    //         name: fi.properties.model.const,
    //         properties:{ [fi.properties.model.const]: { 
    //             ...(schema.$defs.converter.model || {}), ...(then || {}) ,
    //         }},
    //     }))
    // );

    sections.forEach(({ folder, name, properties }) => {
        delete properties.type;
        delete properties.kind;
        var filename = `src/reference/config/${folder.replaceAll(".", "/")}/${name}.md`;
        console.log(filename, properties);
        var attrs = getObjProps(null, properties, []);
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
            console.log("findings", folder, name, sorted, headers);
            var addList = sorted.filter((x) =>
                !headers.includes(x)
            );
            var removeList = headers.filter((x) =>
                !sorted.includes(x) &&
                !["routes[].exit", "routes[].guarded"].includes(x)
            );
            if (addList.length) console.log(folder, name, "add", addList);
            if (removeList.length) console.log(folder, name, "remove", removeList);
        } else {
            errors.push(`missing ${name}`);
        }
    });

    //check metrics
    // {
    //     type: 'telemetry.metrics',
    //     name: 'grpc',
    //     properties: schema.$defs.telemetry.metrics.items.enum.filter((m) => m.startsWith('grpc')),
    // }

    // console.log(errors)

};
main();
