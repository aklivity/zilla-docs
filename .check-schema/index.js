const fs = require("fs");
const { marked } = require("marked");
const schema = require("./zilla-schema.json");
var errors = [];

function getPageProps(tokens) {
    var foundHeadings = [];
    tokens
        .filter(({ depth }) => depth > 2)
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
    // console.log(attr, reqKeys)
    Object.keys(obj || {}).forEach((k) => {

        if (!!obj[k].deprecated) return

        //recurse
        if (obj[k].properties) {
            props.push(...getObjProps(k, obj[k].properties, obj[k].required));
        }
        if (obj[k].items && obj[k].items.properties) {
            props.push(
                ...getObjProps(`${k}[]`, obj[k].items.properties, obj[k].items.required)
            );
        }
        if (obj[k].items && obj[k].items.anyOf) {
            obj[k].items.anyOf
                .filter(({ properties }) => !!properties)
                .forEach(({ properties, required }) =>
                    props.push(...getObjProps(`${k}[]`, properties, required))
                );
        }
        if (obj[k].patternProperties) {
            var ppObj =
                obj[k].patternProperties[Object.keys(obj[k].patternProperties)[0]];
            if (ppObj.properties)
                props.push(...getObjProps(`${k}`, ppObj.properties, ppObj.properties));
        }        
        if (obj[k].additionalProperties && obj[k].additionalProperties.oneOf) {
            obj[k].additionalProperties.oneOf
                .filter(({ properties }) => !!properties)
                .forEach(({ properties, required }) =>
                    props.push(...getObjProps(`${k}`, properties, required))
                );
        }
        if (obj[k].anyOf) {
            obj[k].anyOf
                .filter(({ properties }) => !!properties)
                .forEach(({ properties, required }) =>
                    props.push(...getObjProps(`${k}`, properties, required))
                );
        }
        if (obj[k].oneOf) {
            obj[k].oneOf
                .filter(({ properties }) => !!properties)
                .forEach(({ properties, required }) =>
                    props.push(...getObjProps(`${k}`, properties, required))
                );
        }

        //base
        if (!!!obj[k]) return
        if (reqKeys && !reqKeys.include) {
            reqKeys = Object.keys(reqKeys);
        }
        var req = !!reqKeys?.includes(k);
        var path = [attr, k].filter((s) => !!s).join(".");
        if (obj[k].properties) {
            props.push([path, "object", req]);
        } else if (obj[k].additionalProperties) {
            if (obj[k].additionalProperties.oneOf) {
                props.push([
                    path,
                    obj[k].additionalProperties.oneOf.map(({ type }) => type).join(","),
                    req,
                ]);
            } else {
                props.push([path, obj[k].additionalProperties.type, req]);
            }
        } else if (obj[k].items) {
            props.push([path, "array", req]);
        } else if (obj[k].type) {
            if (obj[k].const) path = `${path} (${obj[k].const})`;
            props.push([path, obj[k].type, req]);
        } else if (obj[k].const) {
            props.push([`${path} (${obj[k].const})`, "string", req]);
        } else if (obj[k].enum) {
            props.push([path, obj[k].enum.join(","), req]);
        } else if (obj[k].const) {
            props.push([path, obj[k].const, req]);
        } else if (obj[k].oneOf) {
            props.push([
                path,
                obj[k].oneOf
                    .filter(({ type }) => !!type)
                    .map(({ type }) => type)
                    .join(","),
                req,
            ]);
        }
    });
    return props;
}

var sections = ["binding", "guard", "vault", "catalog"]
    .map((type) =>
        schema.$defs[type]?.allOf.map(({ if: fi, then }) => ({
            type,
            name: fi.properties.type.const,
            props: { ...(schema.$defs[type].properties || {}), ...then.properties },
        }))
    )
    .flat(1);

sections.push(
    ...schema.$defs.telemetry.exporter?.allOf.map(({ if: fi, then }) => ({
        type: "telemetry.exporter",
        name: fi.properties.type.const,
        props: then.properties,
    }))
);

sections.forEach(({ type, name, props }) => {
    delete props.type;
    var attrs = getObjProps(null, props, []);
    var filename = `src/reference/config/${type.replaceAll(".", "/")}s/${type
        .split(".")
        .findLast((n) => !!n)}-${name}.md`;
    console.log('parsing', filename)
    if (
        fs.existsSync(filename)
    ) {
        var headers = getPageProps(
            marked.lexer(
                fs
                    .readFileSync(
                        `src/reference/config/${type.replaceAll(
                            ".",
                            "/"
                        )}s/${type}-${name}.md`,
                        "utf8"
                    )
                    .toString()
            )
        ).sort();
        var sorted = attrs.map((a) => a[0]).sort();
        console.log(type, name, sorted, headers);
        console.log(
            type,
            name,
            "add",
            sorted.filter(
                (x) =>
                    !headers.includes(x) &&
                    !["telemetry", "telemetry.metrics", "type"].includes(x)
            ),
            "remove",
            headers.filter(
                (x) =>
                    !sorted.includes(x) &&
                    !["routes[].exit", "routes[].guarded"].includes(x)
            )
        );
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
