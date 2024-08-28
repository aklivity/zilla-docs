const fs = require("fs");
const path = require("path");
const { marked } = require("marked");
const { $RefParser } = require("@apidevtools/json-schema-ref-parser");
const schema = require("./zilla-schema.json");

const main = async () => {
    await $RefParser.dereference(schema);
    // console.log("RefParser", JSON.stringify(schema))
    var errors = [];

    function getPageProps(tokens) {
        var foundHeadings = [];
        tokens
            .filter(({ depth, type }) => type == "heading" && depth == 3)
            .forEach(({ type, text }) => {
                if (text && type === "heading") {
                    // console.log("heading", t);
                    foundHeadings.push(text)
                }
            });
        tokens
            .filter(({ depth, type }) => type == "heading" && depth > 3)
            .forEach(({ type, text }) => {
                if (text && type === "heading") {
                    // console.log("heading", t);
                    foundHeadings.push(text)
                }
            });
        return foundHeadings;
    }

    function getObjProps(attr, obj, reqKeys) {
        var props = [];
        // console.log(attr, Object.keys(obj || {}));
        Object.entries(obj).forEach(([k, i]) => {
            // console.log(k, JSON.stringify(i));
            if (!i || !!i.deprecated) return

            //recurse
            if (i.patternProperties) {
                i = i.patternProperties[Object.keys(i.patternProperties)[0]];
            }
            if (i.properties && Object.keys(i.properties).length) {
                props.push(...getObjProps(k, i.properties, i.required));
            }
            if (i.items?.properties && Object.keys(i.items?.properties).length) {
                props.push(
                    ...getObjProps(`${k}[]`, i.items.properties, i.items.required)
                );
            }

            i.anyOf?.filter(({ properties }) => !!properties)
                .forEach(({ properties, required }) =>
                    props.push(...getObjProps(k, properties, required))
                );
            i.items?.anyOf?.filter(({ properties }) => !!properties)
                .forEach(({ properties, required }) =>
                    props.push(...getObjProps(`${k}[]`, properties, required))
                );
            i.items?.oneOf?.filter(({ properties }) => !!properties)
                .forEach(({ properties, required }) =>
                    props.push(...getObjProps(`${k}`, properties, required))
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
            var req = !!reqKeys?.includes(k);
            var path = [attr, k].filter((s) => !!s).join(".");
            if (i.properties && Object.keys(i.properties).length) {
                props.push([path, "object", req, i.default || i.const]);
            } else if (i.additionalProperties) {
                if (i.additionalProperties.oneOf) {
                    props.push([
                        path,
                        i.additionalProperties.oneOf.map(({ type }) => type).join(","),
                        req,
                        i.const,
                    ]);
                } else {
                    props.push([path, i.additionalProperties.type, req, i.default || i.const]);
                }
            } else if (i.items) {
                props.push([path, "array", req, i.default || i.const]);
            } else if (i.type) {
                if (i.const) path = `${path}: ${i.const}`;
                props.push([path, i.type, req, i.default || i.const]);
            } else if (i.const) {
                props.push([`${path}: ${i.const}`, "string", req, i.default || i.const]);
            } else if (i.enum?.length) {
                i.enum.forEach((e) => props.push([`${path}: ${e}`, e, req, i.default || i.const]));
            } else if (i.const) {
                props.push([path, i.const, req, i.default || i.const]);
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
            // console.log('props', JSON.stringify(props));
        });
        return props;
    }

    var sections = [];
    var sections = Object.entries({
        guard: schema.properties.guards.patternProperties[Object.keys(schema.properties.guards.patternProperties)[0]],
        vault: schema.properties.vaults.patternProperties[Object.keys(schema.properties.vaults.patternProperties)[0]],
        catalog: schema.properties.catalogs.patternProperties[Object.keys(schema.properties.catalogs.patternProperties)[0]],
    }).map(([section, props]) =>
        props?.allOf?.map(({ if: fi, then }) => ({
            folder: `${section}s`,
            name: fi.properties.type.const || fi.properties.type.enum?.[0],
            props: {
                ...(props?.properties || {}),
                ...(then.properties || {}),
                options: (then.properties?.options != false ? {
                    properties: {
                        ...(props?.properties?.options?.properties || {}),
                        ...(then.properties?.options?.properties || {}),
                    }
                } : {}),
                required: [...(props?.required || []), ...(then.required || [])],
                anyOf: [...(then.anyOf || [])],
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
                props: {
                    ...bindings.properties,
                    ...(then.properties || {}),
                    ...(properties || {}),
                    options: (then.properties?.options != false ? {
                        properties: {
                            ...(then.properties?.options?.properties || {}),
                            ...(properties?.options?.properties || {}),
                        }
                    } : {}),
                    routes: (then.properties?.routes != false ? {
                        items: {
                            properties: {
                                ...(bindings.properties?.routes?.items?.properties || {}),
                                ...(then.properties?.routes?.items?.properties || {}),
                                ...(properties?.routes?.items?.properties || {}),
                            }
                        }
                    } : {}),
                    required: [...(then.required || []), ...(required || [])],
                    oneOf,
                    anyOf: [...(then.anyOf || []), ...(anyOf || [])],
                },
            })));
        } else {
            sections.push({
                folder,
                name: then.properties.kind.enum[0],
                props: {
                    ...bindings.properties,
                    ...(then.properties || {}),
                    routes: (then.properties?.routes != false ? {
                        items: {
                            properties: {
                                ...(bindings.properties?.routes?.items?.properties || {}),
                                ...(then.properties?.routes?.items?.properties || {}),
                            }
                        }
                    } : {}),
                    required: [...(then.required || [])],
                }
            });
        }
    })


    var exporterProps = schema.properties.telemetry.properties.exporters.patternProperties[Object.keys(schema.properties.telemetry.properties.exporters.patternProperties)[0]]
    sections.push(
        ...exporterProps?.allOf?.map(({ if: fi, then }) => ({
            folder: "telemetry.exporters",
            name: fi.properties.type.const,
            props: {
                ...(exporterProps?.properties || {}),
                ...(then.properties || {}),
                required: [...(exporterProps?.required || []), ...(then.required || [])],
                anyOf: [...(then.anyOf || [])],
            }
        }))
    );
    sections.push(
        ...schema.$defs.converter.model?.allOf.map(({ if: fi, then }) => ({
            folder: "models",
            name: fi.properties.model.const,
            props: {
                ...(then.properties || {}),
                required: (then.required || []),
                anyOf: (then.anyOf || []),
            }
        }))
    );

    // console.log("sections", JSON.stringify(sections));
    sections.forEach(({ folder, name, props }) => {
        delete props.type;
        delete props.kind;
        var foldername = `src/reference/config/${folder.replaceAll(".", "/")}`;
        var filename = `${name}.md`;
        var filePath = `${foldername}/${filename}`;
        // console.log(filePath, props);
        var schemaAttrs = getObjProps(null, props, []);
        if (fs.existsSync(filePath)) {

            var fullMdContent = fs.readFileSync(filePath, "utf8")
                .toString();
            fullMdContent = fullMdContent.replace(/<!--\s@include:\s(.+\.md)\s-->/g, (_, p1) =>
                (fs.readFileSync(path.resolve(foldername, p1), "utf8").toString())
            );
            var mdAttrs = getPageProps(marked.lexer(fullMdContent));

            // console.log('mdAttrs', mdAttrs)
            // console.log('schemaAttrs', schemaAttrs)

            // get page headers and schema props
            var pageHeaders = mdAttrs.filter((value, index, array) =>
                array.indexOf(value) === index
            );
            var schemaProps = schemaAttrs.map((a) => (`${a[0]}${a[2]==true?'\\*':''}`)).filter((value, index, array) =>
                array.indexOf(value) === index
            );

            // print diff check
            var addDiff = schemaProps.filter((x) =>
                !pageHeaders.includes(x)
            )
            var removeDiff = pageHeaders.filter((x) =>
                !schemaProps.includes(x)
            )
            if (addDiff.length + removeDiff.length) {
                process.exitCode = 1;
                console.log(folder, name, "add", addDiff, "remove", removeDiff);
                // console.log("findings", folder, name, schemaProps, pageHeaders);
            }
        } else {
            errors.push(`missing ${name}`);
            process.exitCode = 1;
        }
    });

    if (errors.length) console.log("errors", errors)

};
main();
