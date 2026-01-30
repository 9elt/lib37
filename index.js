export var create = (target, props) => typeof target === "function"
    ? (
        target = target(props),
        target instanceof Promise && (target.$loading = props.$loading),
        target
    )
    : node((
        props.tagName = target,
        delete props.$loading,
        props
    ));

export var node = (props) =>
    typeof props === "string" || typeof props === "number"
        ? window.document.createTextNode(props)
        : !props
            ? window.document.createTextNode("")
            : props instanceof window.Node
                ? props
                : props instanceof Promise
                    ? (
                        props.then((p) => props.replaceWith(node(p))),
                        props = node(props.$loading)
                    )
                    : assign(
                        props.tagName
                            ? window.document.createElementNS(
                                props.namespaceURI || "http://www.w3.org/1999/xhtml",
                                props.tagName
                            )
                            : window.document.createDocumentFragment(),
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
    : on.appendChild(node(children));
