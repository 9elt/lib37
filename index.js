export var jsx = (key, props) => typeof key === "function"
    ? (
        key = key(props),
        key instanceof Promise && (key.$loading = props.$loading),
        key
    )
    : createNode((
        props.tagName = key,
        delete props.$loading,
        props
    ));

export var Fragment = (props) => props.children;

var createNode = (props) =>
    typeof props === "string" || typeof props === "number"
        ? window.document.createTextNode(props)
        : !props
            ? window.document.createTextNode("")
            : props instanceof window.Node
                ? props
                : props instanceof Promise
                    ? (
                        props.then((p) => props.replaceWith(createNode(p))),
                        props = createNode(props.$loading)
                    )
                    : Array.isArray(props)
                        ? createNode({ tagName: "div", children: props })
                        : assign(
                            window.document.createElementNS(
                                props.namespaceURI || "http://www.w3.org/1999/xhtml",
                                props.tagName
                            ),
                            props
                        );

var assign = (on, from) => (
    Object.keys(from).forEach((prop) =>
        prop === "tagName" || prop === "namespaceURI"
            ? 0
            : prop === "children"
                ? append(on, from[prop])
                : typeof from[prop] === "object"
                    ? assign(on[prop], from[prop])
                    : (from[prop] || from[prop] === 0) && (
                        on.namespaceURI === "http://www.w3.org/2000/svg"
                            ? on.setAttribute(prop, from[prop])
                            : on[prop] = from[prop]
                    )
    ),
    on
);

var append = (on, children) => Array.isArray(children)
    ? children.forEach((child) => append(on, child))
    : on.appendChild(createNode(children));
