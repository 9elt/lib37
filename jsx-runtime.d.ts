export function jsx(key: string | Component, props: Object): Node;

export function jsxs(key: string | Component, props: Object): Node;

export function jsxDEV(key: string | Component, props: Object): Node;

export function Fragment(props: Object): DocumentFragment;

type Intrinsic<T> = Omit<T, "tagName">;

type Component = (props: any) => Element;

type AsyncComponent = (props: any) => Promise<Element>;

type AsyncLoading = {
    $loading?: Element;
};

type TagName = keyof Lib.Elements;

export declare namespace JSX {
    type IntrinsicElements = {
        [T in TagName]: Intrinsic<Lib.Elements[T]>;
    };

    type LibraryManagedAttributes<C, P> =
        C extends AsyncComponent ? P & AsyncLoading : P;

    type Element = any;

    type ElementType = TagName | Component | AsyncComponent;

    type ElementChildrenAttribute = {
        children: any;
    };
}

type LibNode =
    | Lib.Elements[TagName]
    | Node
    | string
    | number
    | false
    | null
    | undefined
    | LibNode[]
    | Promise<LibNode>;

declare namespace Lib {
    interface Elements {
        "a": HTMLAnchorElement | SVGAElement;
        "abbr": HTMLElement;
        "address": HTMLElement;
        "area": HTMLAreaElement;
        "article": HTMLElement;
        "aside": HTMLElement;
        "audio": HTMLAudioElement;
        "b": HTMLElement;
        "base": HTMLBaseElement;
        "bdi": HTMLElement;
        "bdo": HTMLElement;
        "blockquote": HTMLQuoteElement;
        "body": HTMLBodyElement;
        "br": HTMLBRElement;
        "button": HTMLButtonElement;
        "canvas": HTMLCanvasElement;
        "caption": HTMLTableCaptionElement;
        "cite": HTMLElement;
        "code": HTMLElement;
        "col": HTMLTableColElement;
        "colgroup": HTMLTableColElement;
        "data": HTMLDataElement;
        "datalist": HTMLDataListElement;
        "dd": HTMLElement;
        "del": HTMLModElement;
        "details": HTMLDetailsElement;
        "dfn": HTMLElement;
        "dialog": HTMLDialogElement;
        "div": HTMLDivElement;
        "dl": HTMLDListElement;
        "dt": HTMLElement;
        "em": HTMLElement;
        "embed": HTMLEmbedElement;
        "fieldset": HTMLFieldSetElement;
        "figcaption": HTMLElement;
        "figure": HTMLElement;
        "footer": HTMLElement;
        "form": HTMLFormElement;
        "h1": HTMLHeadingElement;
        "h2": HTMLHeadingElement;
        "h3": HTMLHeadingElement;
        "h4": HTMLHeadingElement;
        "h5": HTMLHeadingElement;
        "h6": HTMLHeadingElement;
        "head": HTMLHeadElement;
        "header": HTMLElement;
        "hgroup": HTMLElement;
        "hr": HTMLHRElement;
        "html": HTMLHtmlElement;
        "i": HTMLElement;
        "iframe": HTMLIFrameElement;
        "img": HTMLImageElement;
        "input": HTMLInputElement;
        "ins": HTMLModElement;
        "kbd": HTMLElement;
        "label": HTMLLabelElement;
        "legend": HTMLLegendElement;
        "li": HTMLLIElement;
        "link": HTMLLinkElement;
        "main": HTMLElement;
        "map": HTMLMapElement;
        "mark": HTMLElement;
        "menu": HTMLMenuElement;
        "meta": HTMLMetaElement;
        "meter": HTMLMeterElement;
        "nav": HTMLElement;
        "noscript": HTMLElement;
        "object": HTMLObjectElement;
        "ol": HTMLOListElement;
        "optgroup": HTMLOptGroupElement;
        "option": HTMLOptionElement;
        "output": HTMLOutputElement;
        "p": HTMLParagraphElement;
        "picture": HTMLPictureElement;
        "pre": HTMLPreElement;
        "progress": HTMLProgressElement;
        "q": HTMLQuoteElement;
        "rp": HTMLElement;
        "rt": HTMLElement;
        "ruby": HTMLElement;
        "s": HTMLElement;
        "samp": HTMLElement;
        "script": HTMLScriptElement | SVGScriptElement;
        "search": HTMLElement;
        "section": HTMLElement;
        "select": HTMLSelectElement;
        "slot": HTMLSlotElement;
        "small": HTMLElement;
        "source": HTMLSourceElement;
        "span": HTMLSpanElement;
        "strong": HTMLElement;
        "style": HTMLStyleElement | SVGStyleElement;
        "sub": HTMLElement;
        "summary": HTMLElement;
        "sup": HTMLElement;
        "table": HTMLTableElement;
        "tbody": HTMLTableSectionElement;
        "td": HTMLTableCellElement;
        "template": HTMLTemplateElement;
        "textarea": HTMLTextAreaElement;
        "tfoot": HTMLTableSectionElement;
        "th": HTMLTableCellElement;
        "thead": HTMLTableSectionElement;
        "time": HTMLTimeElement;
        "title": HTMLTitleElement | SVGTitleElement;
        "tr": HTMLTableRowElement;
        "track": HTMLTrackElement;
        "u": HTMLElement;
        "ul": HTMLUListElement;
        "var": HTMLElement;
        "video": HTMLVideoElement;
        "wbr": HTMLElement;
        "animate": SVGAnimateElement;
        "animateMotion": SVGAnimateMotionElement;
        "animateTransform": SVGAnimateTransformElement;
        "circle": SVGCircleElement;
        "clipPath": SVGClipPathElement;
        "defs": SVGDefsElement;
        "desc": SVGDescElement;
        "ellipse": SVGEllipseElement;
        "feBlend": SVGFEBlendElement;
        "feColorMatrix": SVGFEColorMatrixElement;
        "feComponentTransfer": SVGFEComponentTransferElement;
        "feComposite": SVGFECompositeElement;
        "feConvolveMatrix": SVGFEConvolveMatrixElement;
        "feDiffuseLighting": SVGFEDiffuseLightingElement;
        "feDisplacementMap": SVGFEDisplacementMapElement;
        "feDistantLight": SVGFEDistantLightElement;
        "feDropShadow": SVGFEDropShadowElement;
        "feFlood": SVGFEFloodElement;
        "feFuncA": SVGFEFuncAElement;
        "feFuncB": SVGFEFuncBElement;
        "feFuncG": SVGFEFuncGElement;
        "feFuncR": SVGFEFuncRElement;
        "feGaussianBlur": SVGFEGaussianBlurElement;
        "feImage": SVGFEImageElement;
        "feMerge": SVGFEMergeElement;
        "feMergeNode": SVGFEMergeNodeElement;
        "feMorphology": SVGFEMorphologyElement;
        "feOffset": SVGFEOffsetElement;
        "fePointLight": SVGFEPointLightElement;
        "feSpecularLighting": SVGFESpecularLightingElement;
        "feSpotLight": SVGFESpotLightElement;
        "feTile": SVGFETileElement;
        "feTurbulence": SVGFETurbulenceElement;
        "filter": SVGFilterElement;
        "foreignObject": SVGForeignObjectElement;
        "g": SVGGElement;
        "image": SVGImageElement;
        "line": SVGLineElement;
        "linearGradient": SVGLinearGradientElement;
        "marker": SVGMarkerElement;
        "mask": SVGMaskElement;
        "metadata": SVGMetadataElement;
        "mpath": SVGMPathElement;
        "path": SVGPathElement;
        "pattern": SVGPatternElement;
        "polygon": SVGPolygonElement;
        "polyline": SVGPolylineElement;
        "radialGradient": SVGRadialGradientElement;
        "rect": SVGRectElement;
        "set": SVGSetElement;
        "stop": SVGStopElement;
        "svg": SVGSVGElement;
        "switch": SVGSwitchElement;
        "symbol": SVGSymbolElement;
        "text": SVGTextElement;
        "textPath": SVGTextPathElement;
        "tspan": SVGTSpanElement;
        "use": SVGUseElement;
        "view": SVGViewElement;
        "annotation": MathMLElement;
        "annotation-xml": MathMLElement;
        "maction": MathMLElement;
        "math": MathMLElement;
        "merror": MathMLElement;
        "mfrac": MathMLElement;
        "mi": MathMLElement;
        "mmultiscripts": MathMLElement;
        "mn": MathMLElement;
        "mo": MathMLElement;
        "mover": MathMLElement;
        "mpadded": MathMLElement;
        "mphantom": MathMLElement;
        "mprescripts": MathMLElement;
        "mroot": MathMLElement;
        "mrow": MathMLElement;
        "ms": MathMLElement;
        "mspace": MathMLElement;
        "msqrt": MathMLElement;
        "mstyle": MathMLElement;
        "msub": MathMLElement;
        "msubsup": MathMLElement;
        "msup": MathMLElement;
        "mtable": MathMLElement;
        "mtd": MathMLElement;
        "mtext": MathMLElement;
        "mtr": MathMLElement;
        "munder": MathMLElement;
        "munderover": MathMLElement;
        "semantics": MathMLElement;
    }

    interface HTMLAnchorElement extends HTMLElement, HTMLHyperlinkElementUtils {
        tagName: "a";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        charset?: string | undefined;
        coords?: string | undefined;
        download?: string | undefined;
        hreflang?: string | undefined;
        name?: string | undefined;
        ping?: string | undefined;
        referrerPolicy?: string | undefined;
        rel?: string | undefined;
        rev?: string | undefined;
        shape?: string | undefined;
        target?: string | undefined;
        text?: string | undefined;
        type?: string | undefined;
    }

    interface HTMLElement extends Element, ElementCSSInlineStyle, ElementContentEditable, GlobalEventHandlers, HTMLOrSVGElement {
        tagName: "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "meta" | "meter" | "nav" | "noscript" | "object" | "ol" | "optgroup" | "option" | "output" | "p" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "search" | "section" | "select" | "slot" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        accessKey?: string | undefined;
        autocapitalize?: string | undefined;
        dir?: string | undefined;
        draggable?: boolean | undefined;
        hidden?: boolean | undefined;
        inert?: boolean | undefined;
        innerText?: string | undefined;
        lang?: string | undefined;
        outerText?: string | undefined;
        popover?: string | null | undefined;
        spellcheck?: boolean | undefined;
        title?: string | undefined;
        translate?: boolean | undefined;
    }

    interface HTMLOrSVGElement {
        autofocus?: boolean | undefined;
        nonce?: string | undefined;
        tabIndex?: number | undefined;
    }

    interface HTMLAreaElement extends HTMLElement, HTMLHyperlinkElementUtils {
        tagName: "area";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        alt?: string | undefined;
        coords?: string | undefined;
        download?: string | undefined;
        noHref?: boolean | undefined;
        ping?: string | undefined;
        referrerPolicy?: string | undefined;
        rel?: string | undefined;
        shape?: string | undefined;
        target?: string | undefined;
    }

    interface HTMLAudioElement extends HTMLMediaElement {
        tagName: "audio";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface HTMLMediaElement extends HTMLElement {
        autoplay?: boolean | undefined;
        controls?: boolean | undefined;
        crossOrigin?: string | null | undefined;
        currentTime?: number | undefined;
        defaultMuted?: boolean | undefined;
        defaultPlaybackRate?: number | undefined;
        disableRemotePlayback?: boolean | undefined;
        loop?: boolean | undefined;
        muted?: boolean | undefined;
        onencrypted?: ((this: HTMLMediaElement, ev: MediaEncryptedEvent) => any) | null | undefined;
        onwaitingforkey?: ((this: HTMLMediaElement, ev: Event) => any) | null | undefined;
        playbackRate?: number | undefined;
        preload?: "none" | "metadata" | "auto" | "" | undefined;
        preservesPitch?: boolean | undefined;
        src?: string | undefined;
        srcObject?: MediaProvider | null | undefined;
        volume?: number | undefined;
    }

    interface HTMLBaseElement extends HTMLElement {
        tagName: "base";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        href?: string | undefined;
        target?: string | undefined;
    }

    interface HTMLQuoteElement extends HTMLElement {
        tagName: "blockquote" | "q";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        cite?: string | undefined;
    }

    interface HTMLBodyElement extends HTMLElement, WindowEventHandlers {
        tagName: "body";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        aLink?: string | undefined;
        background?: string | undefined;
        bgColor?: string | undefined;
        link?: string | undefined;
        text?: string | undefined;
        vLink?: string | undefined;
    }

    interface HTMLBRElement extends HTMLElement {
        tagName: "br";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        clear?: string | undefined;
    }

    interface HTMLButtonElement extends HTMLElement, PopoverInvokerElement {
        tagName: "button";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        disabled?: boolean | undefined;
        formAction?: string | undefined;
        formEnctype?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        name?: string | undefined;
        type?: "submit" | "reset" | "button" | undefined;
        value?: string | undefined;
    }

    interface HTMLCanvasElement extends HTMLElement {
        tagName: "canvas";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        height?: number | undefined;
        width?: number | undefined;
    }

    interface HTMLTableCaptionElement extends HTMLElement {
        tagName: "caption";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        align?: string | undefined;
    }

    interface HTMLTableColElement extends HTMLElement {
        tagName: "col" | "colgroup";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        align?: string | undefined;
        ch?: string | undefined;
        chOff?: string | undefined;
        span?: number | undefined;
        vAlign?: string | undefined;
        width?: string | undefined;
    }

    interface HTMLDataElement extends HTMLElement {
        tagName: "data";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        value?: string | undefined;
    }

    interface HTMLDataListElement extends HTMLElement {
        tagName: "datalist";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface HTMLModElement extends HTMLElement {
        tagName: "del" | "ins";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        cite?: string | undefined;
        dateTime?: string | undefined;
    }

    interface HTMLDetailsElement extends HTMLElement {
        tagName: "details";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        name?: string | undefined;
        open?: boolean | undefined;
    }

    interface HTMLDialogElement extends HTMLElement {
        tagName: "dialog";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        open?: boolean | undefined;
        returnValue?: string | undefined;
    }

    interface HTMLDivElement extends HTMLElement {
        tagName: "div";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        align?: string | undefined;
    }

    interface HTMLDListElement extends HTMLElement {
        tagName: "dl";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        compact?: boolean | undefined;
    }

    interface HTMLEmbedElement extends HTMLElement {
        tagName: "embed";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        align?: string | undefined;
        height?: string | undefined;
        name?: string | undefined;
        src?: string | undefined;
        type?: string | undefined;
        width?: string | undefined;
    }

    interface HTMLFieldSetElement extends HTMLElement {
        tagName: "fieldset";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        disabled?: boolean | undefined;
        name?: string | undefined;
    }

    interface HTMLFormElement extends HTMLElement {
        tagName: "form";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        acceptCharset?: string | undefined;
        action?: string | undefined;
        autocomplete?: AutoFillBase | undefined;
        encoding?: string | undefined;
        enctype?: string | undefined;
        method?: string | undefined;
        name?: string | undefined;
        noValidate?: boolean | undefined;
        rel?: string | undefined;
        target?: string | undefined;
    }

    interface HTMLHeadingElement extends HTMLElement {
        tagName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        align?: string | undefined;
    }

    interface HTMLHeadElement extends HTMLElement {
        tagName: "head";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface HTMLHRElement extends HTMLElement {
        tagName: "hr";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        align?: string | undefined;
        color?: string | undefined;
        noShade?: boolean | undefined;
        size?: string | undefined;
        width?: string | undefined;
    }

    interface HTMLHtmlElement extends HTMLElement {
        tagName: "html";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        version?: string | undefined;
    }

    interface HTMLIFrameElement extends HTMLElement {
        tagName: "iframe";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        align?: string | undefined;
        allow?: string | undefined;
        allowFullscreen?: boolean | undefined;
        frameBorder?: string | undefined;
        height?: string | undefined;
        loading?: string | undefined;
        longDesc?: string | undefined;
        marginHeight?: string | undefined;
        marginWidth?: string | undefined;
        name?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        scrolling?: string | undefined;
        src?: string | undefined;
        srcdoc?: string | undefined;
        width?: string | undefined;
    }

    interface HTMLImageElement extends HTMLElement {
        tagName: "img";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        align?: string | undefined;
        alt?: string | undefined;
        border?: string | undefined;
        crossOrigin?: string | null | undefined;
        decoding?: "async" | "sync" | "auto" | undefined;
        fetchPriority?: string | undefined;
        height?: number | undefined;
        hspace?: number | undefined;
        isMap?: boolean | undefined;
        loading?: "eager" | "lazy" | undefined;
        longDesc?: string | undefined;
        lowsrc?: string | undefined;
        name?: string | undefined;
        referrerPolicy?: string | undefined;
        sizes?: string | undefined;
        src?: string | undefined;
        srcset?: string | undefined;
        useMap?: string | undefined;
        vspace?: number | undefined;
        width?: number | undefined;
    }

    interface HTMLInputElement extends HTMLElement, PopoverInvokerElement {
        tagName: "input";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        accept?: string | undefined;
        align?: string | undefined;
        alt?: string | undefined;
        autocomplete?: AutoFill | undefined;
        capture?: string | undefined;
        checked?: boolean | undefined;
        defaultChecked?: boolean | undefined;
        defaultValue?: string | undefined;
        dirName?: string | undefined;
        disabled?: boolean | undefined;
        files?: FileList | null | undefined;
        formAction?: string | undefined;
        formEnctype?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        height?: number | undefined;
        indeterminate?: boolean | undefined;
        max?: string | undefined;
        maxLength?: number | undefined;
        min?: string | undefined;
        minLength?: number | undefined;
        multiple?: boolean | undefined;
        name?: string | undefined;
        pattern?: string | undefined;
        placeholder?: string | undefined;
        readOnly?: boolean | undefined;
        required?: boolean | undefined;
        selectionDirection?: "forward" | "backward" | "none" | null | undefined;
        selectionEnd?: number | null | undefined;
        selectionStart?: number | null | undefined;
        size?: number | undefined;
        src?: string | undefined;
        step?: string | undefined;
        type?: string | undefined;
        useMap?: string | undefined;
        value?: string | undefined;
        valueAsDate?: Date | null | undefined;
        valueAsNumber?: number | undefined;
        webkitdirectory?: boolean | undefined;
        width?: number | undefined;
    }

    interface HTMLLabelElement extends HTMLElement {
        tagName: "label";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        htmlFor?: string | undefined;
    }

    interface HTMLLegendElement extends HTMLElement {
        tagName: "legend";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        align?: string | undefined;
    }

    interface HTMLLIElement extends HTMLElement {
        tagName: "li";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        type?: string | undefined;
        value?: number | undefined;
    }

    interface HTMLLinkElement extends HTMLElement {
        tagName: "link";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        as?: string | undefined;
        charset?: string | undefined;
        crossOrigin?: string | null | undefined;
        disabled?: boolean | undefined;
        fetchPriority?: string | undefined;
        href?: string | undefined;
        hreflang?: string | undefined;
        imageSizes?: string | undefined;
        imageSrcset?: string | undefined;
        integrity?: string | undefined;
        media?: string | undefined;
        referrerPolicy?: string | undefined;
        rel?: string | undefined;
        rev?: string | undefined;
        target?: string | undefined;
        type?: string | undefined;
    }

    interface HTMLMapElement extends HTMLElement {
        tagName: "map";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        name?: string | undefined;
    }

    interface HTMLMenuElement extends HTMLElement {
        tagName: "menu";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        compact?: boolean | undefined;
    }

    interface HTMLMetaElement extends HTMLElement {
        tagName: "meta";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        content?: string | undefined;
        httpEquiv?: string | undefined;
        media?: string | undefined;
        name?: string | undefined;
        scheme?: string | undefined;
    }

    interface HTMLMeterElement extends HTMLElement {
        tagName: "meter";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        high?: number | undefined;
        low?: number | undefined;
        max?: number | undefined;
        min?: number | undefined;
        optimum?: number | undefined;
        value?: number | undefined;
    }

    interface HTMLObjectElement extends HTMLElement {
        tagName: "object";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        align?: string | undefined;
        archive?: string | undefined;
        border?: string | undefined;
        code?: string | undefined;
        codeBase?: string | undefined;
        codeType?: string | undefined;
        data?: string | undefined;
        declare?: boolean | undefined;
        height?: string | undefined;
        hspace?: number | undefined;
        name?: string | undefined;
        standby?: string | undefined;
        type?: string | undefined;
        useMap?: string | undefined;
        vspace?: number | undefined;
        width?: string | undefined;
    }

    interface HTMLOListElement extends HTMLElement {
        tagName: "ol";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        compact?: boolean | undefined;
        reversed?: boolean | undefined;
        start?: number | undefined;
        type?: string | undefined;
    }

    interface HTMLOptGroupElement extends HTMLElement {
        tagName: "optgroup";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        disabled?: boolean | undefined;
        label?: string | undefined;
    }

    interface HTMLOptionElement extends HTMLElement {
        tagName: "option";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        defaultSelected?: boolean | undefined;
        disabled?: boolean | undefined;
        label?: string | undefined;
        selected?: boolean | undefined;
        text?: string | undefined;
        value?: string | undefined;
    }

    interface HTMLOutputElement extends HTMLElement {
        tagName: "output";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        defaultValue?: string | undefined;
        name?: string | undefined;
        value?: string | undefined;
    }

    interface HTMLParagraphElement extends HTMLElement {
        tagName: "p";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        align?: string | undefined;
    }

    interface HTMLPictureElement extends HTMLElement {
        tagName: "picture";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface HTMLPreElement extends HTMLElement {
        tagName: "pre";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        width?: number | undefined;
    }

    interface HTMLProgressElement extends HTMLElement {
        tagName: "progress";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        max?: number | undefined;
        value?: number | undefined;
    }

    interface HTMLScriptElement extends HTMLElement {
        tagName: "script";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        async?: boolean | undefined;
        charset?: string | undefined;
        crossOrigin?: string | null | undefined;
        defer?: boolean | undefined;
        event?: string | undefined;
        fetchPriority?: string | undefined;
        htmlFor?: string | undefined;
        integrity?: string | undefined;
        noModule?: boolean | undefined;
        referrerPolicy?: string | undefined;
        src?: string | undefined;
        text?: string | undefined;
        type?: string | undefined;
    }

    interface HTMLSelectElement extends HTMLElement {
        tagName: "select";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        autocomplete?: AutoFill | undefined;
        disabled?: boolean | undefined;
        length?: number | undefined;
        multiple?: boolean | undefined;
        name?: string | undefined;
        required?: boolean | undefined;
        selectedIndex?: number | undefined;
        size?: number | undefined;
        value?: string | undefined;
    }

    interface HTMLSlotElement extends HTMLElement {
        tagName: "slot";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        name?: string | undefined;
    }

    interface HTMLSourceElement extends HTMLElement {
        tagName: "source";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        height?: number | undefined;
        media?: string | undefined;
        sizes?: string | undefined;
        src?: string | undefined;
        srcset?: string | undefined;
        type?: string | undefined;
        width?: number | undefined;
    }

    interface HTMLSpanElement extends HTMLElement {
        tagName: "span";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface HTMLStyleElement extends HTMLElement {
        tagName: "style";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        disabled?: boolean | undefined;
        media?: string | undefined;
        type?: string | undefined;
    }

    interface HTMLTableElement extends HTMLElement {
        tagName: "table";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        align?: string | undefined;
        bgColor?: string | undefined;
        border?: string | undefined;
        caption?: HTMLTableCaptionElement | null | undefined;
        cellPadding?: string | undefined;
        cellSpacing?: string | undefined;
        frame?: string | undefined;
        rules?: string | undefined;
        summary?: string | undefined;
        tFoot?: HTMLTableSectionElement | null | undefined;
        tHead?: HTMLTableSectionElement | null | undefined;
        width?: string | undefined;
    }

    interface HTMLTableSectionElement extends HTMLElement {
        tagName: "tbody" | "tfoot" | "thead";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        align?: string | undefined;
        ch?: string | undefined;
        chOff?: string | undefined;
        vAlign?: string | undefined;
    }

    interface HTMLTableCellElement extends HTMLElement {
        tagName: "td" | "th";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        abbr?: string | undefined;
        align?: string | undefined;
        axis?: string | undefined;
        bgColor?: string | undefined;
        ch?: string | undefined;
        chOff?: string | undefined;
        colSpan?: number | undefined;
        headers?: string | undefined;
        height?: string | undefined;
        noWrap?: boolean | undefined;
        rowSpan?: number | undefined;
        scope?: string | undefined;
        vAlign?: string | undefined;
        width?: string | undefined;
    }

    interface HTMLTemplateElement extends HTMLElement {
        tagName: "template";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        shadowRootMode?: string | undefined;
    }

    interface HTMLTextAreaElement extends HTMLElement {
        tagName: "textarea";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        autocomplete?: AutoFill | undefined;
        cols?: number | undefined;
        defaultValue?: string | undefined;
        dirName?: string | undefined;
        disabled?: boolean | undefined;
        maxLength?: number | undefined;
        minLength?: number | undefined;
        name?: string | undefined;
        placeholder?: string | undefined;
        readOnly?: boolean | undefined;
        required?: boolean | undefined;
        rows?: number | undefined;
        selectionDirection?: "forward" | "backward" | "none" | undefined;
        selectionEnd?: number | undefined;
        selectionStart?: number | undefined;
        value?: string | undefined;
        wrap?: string | undefined;
    }

    interface HTMLTimeElement extends HTMLElement {
        tagName: "time";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        dateTime?: string | undefined;
    }

    interface HTMLTitleElement extends HTMLElement {
        tagName: "title";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        text?: string | undefined;
    }

    interface HTMLTableRowElement extends HTMLElement {
        tagName: "tr";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        align?: string | undefined;
        bgColor?: string | undefined;
        ch?: string | undefined;
        chOff?: string | undefined;
        vAlign?: string | undefined;
    }

    interface HTMLTrackElement extends HTMLElement {
        tagName: "track";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        default?: boolean | undefined;
        kind?: string | undefined;
        label?: string | undefined;
        src?: string | undefined;
        srclang?: string | undefined;
    }

    interface HTMLUListElement extends HTMLElement {
        tagName: "ul";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        compact?: boolean | undefined;
        type?: string | undefined;
    }

    interface HTMLVideoElement extends HTMLMediaElement {
        tagName: "video";
        namespaceURI?: "http://www.w3.org/1999/xhtml";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        disablePictureInPicture?: boolean | undefined;
        height?: number | undefined;
        onenterpictureinpicture?: ((this: HTMLVideoElement, ev: Event) => any) | null | undefined;
        onleavepictureinpicture?: ((this: HTMLVideoElement, ev: Event) => any) | null | undefined;
        playsInline?: boolean | undefined;
        poster?: string | undefined;
        width?: number | undefined;
    }

    interface SVGAElement extends SVGGraphicsElement {
        tagName: "a";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        rel?: string | undefined;
    }

    interface SVGGraphicsElement extends SVGElement { }

    interface SVGElement extends Element, ElementCSSInlineStyle, GlobalEventHandlers, HTMLOrSVGElement { }

    interface SVGAnimateElement extends SVGAnimationElement {
        tagName: "animate";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGAnimationElement extends SVGElement { }

    interface SVGAnimateMotionElement extends SVGAnimationElement {
        tagName: "animateMotion";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGAnimateTransformElement extends SVGAnimationElement {
        tagName: "animateTransform";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGCircleElement extends SVGGeometryElement {
        tagName: "circle";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGGeometryElement extends SVGGraphicsElement { }

    interface SVGClipPathElement extends SVGElement {
        tagName: "clipPath";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGDefsElement extends SVGGraphicsElement {
        tagName: "defs";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGDescElement extends SVGElement {
        tagName: "desc";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGEllipseElement extends SVGGeometryElement {
        tagName: "ellipse";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFEBlendElement extends SVGElement {
        tagName: "feBlend";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFEColorMatrixElement extends SVGElement {
        tagName: "feColorMatrix";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFEComponentTransferElement extends SVGElement {
        tagName: "feComponentTransfer";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFECompositeElement extends SVGElement {
        tagName: "feComposite";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFEConvolveMatrixElement extends SVGElement {
        tagName: "feConvolveMatrix";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFEDiffuseLightingElement extends SVGElement {
        tagName: "feDiffuseLighting";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFEDisplacementMapElement extends SVGElement {
        tagName: "feDisplacementMap";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFEDistantLightElement extends SVGElement {
        tagName: "feDistantLight";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFEDropShadowElement extends SVGElement {
        tagName: "feDropShadow";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFEFloodElement extends SVGElement {
        tagName: "feFlood";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFEFuncAElement extends SVGComponentTransferFunctionElement {
        tagName: "feFuncA";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGComponentTransferFunctionElement extends SVGElement { }

    interface SVGFEFuncBElement extends SVGComponentTransferFunctionElement {
        tagName: "feFuncB";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFEFuncGElement extends SVGComponentTransferFunctionElement {
        tagName: "feFuncG";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFEFuncRElement extends SVGComponentTransferFunctionElement {
        tagName: "feFuncR";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFEGaussianBlurElement extends SVGElement {
        tagName: "feGaussianBlur";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFEImageElement extends SVGElement {
        tagName: "feImage";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFEMergeElement extends SVGElement {
        tagName: "feMerge";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFEMergeNodeElement extends SVGElement {
        tagName: "feMergeNode";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFEMorphologyElement extends SVGElement {
        tagName: "feMorphology";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFEOffsetElement extends SVGElement {
        tagName: "feOffset";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFEPointLightElement extends SVGElement {
        tagName: "fePointLight";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFESpecularLightingElement extends SVGElement {
        tagName: "feSpecularLighting";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFESpotLightElement extends SVGElement {
        tagName: "feSpotLight";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFETileElement extends SVGElement {
        tagName: "feTile";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFETurbulenceElement extends SVGElement {
        tagName: "feTurbulence";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGFilterElement extends SVGElement {
        tagName: "filter";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGForeignObjectElement extends SVGGraphicsElement {
        tagName: "foreignObject";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGGElement extends SVGGraphicsElement {
        tagName: "g";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGImageElement extends SVGGraphicsElement {
        tagName: "image";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        crossOrigin?: string | null | undefined;
    }

    interface SVGLineElement extends SVGGeometryElement {
        tagName: "line";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGLinearGradientElement extends SVGGradientElement {
        tagName: "linearGradient";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGGradientElement extends SVGElement { }

    interface SVGMarkerElement extends SVGElement {
        tagName: "marker";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGMaskElement extends SVGElement {
        tagName: "mask";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGMetadataElement extends SVGElement {
        tagName: "metadata";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGMPathElement extends SVGElement {
        tagName: "mpath";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGPathElement extends SVGGeometryElement {
        tagName: "path";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGPatternElement extends SVGElement {
        tagName: "pattern";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGPolygonElement extends SVGGeometryElement {
        tagName: "polygon";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGPolylineElement extends SVGGeometryElement {
        tagName: "polyline";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGRadialGradientElement extends SVGGradientElement {
        tagName: "radialGradient";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGRectElement extends SVGGeometryElement {
        tagName: "rect";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGScriptElement extends SVGElement {
        tagName: "script";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        type?: string | undefined;
    }

    interface SVGSetElement extends SVGAnimationElement {
        tagName: "set";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGStopElement extends SVGElement {
        tagName: "stop";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGStyleElement extends SVGElement {
        tagName: "style";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        disabled?: boolean | undefined;
        media?: string | undefined;
        title?: string | undefined;
        type?: string | undefined;
    }

    interface SVGSVGElement extends SVGGraphicsElement, WindowEventHandlers {
        tagName: "svg";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        currentScale?: number | undefined;
    }

    interface SVGSwitchElement extends SVGGraphicsElement {
        tagName: "switch";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGSymbolElement extends SVGElement {
        tagName: "symbol";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGTextElement extends SVGTextPositioningElement {
        tagName: "text";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGTextPositioningElement extends SVGTextContentElement { }

    interface SVGTextContentElement extends SVGGraphicsElement { }

    interface SVGTextPathElement extends SVGTextContentElement {
        tagName: "textPath";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGTitleElement extends SVGElement {
        tagName: "title";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGTSpanElement extends SVGTextPositioningElement {
        tagName: "tspan";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGUseElement extends SVGGraphicsElement {
        tagName: "use";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface SVGViewElement extends SVGElement {
        tagName: "view";
        namespaceURI: "http://www.w3.org/2000/svg";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface MathMLElement extends Element, ElementCSSInlineStyle, GlobalEventHandlers, HTMLOrSVGElement {
        tagName: "annotation" | "annotation-xml" | "maction" | "math" | "merror" | "mfrac" | "mi" | "mmultiscripts" | "mn" | "mo" | "mover" | "mpadded" | "mphantom" | "mprescripts" | "mroot" | "mrow" | "ms" | "mspace" | "msqrt" | "mstyle" | "msub" | "msubsup" | "msup" | "mtable" | "mtd" | "mtext" | "mtr" | "munder" | "munderover" | "semantics";
        namespaceURI: "http://www.w3.org/1998/Math/MathML";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
    }

    interface Element extends Node, ARIAMixin, Animatable, ChildNode, InnerHTML, NonDocumentTypeChildNode, ParentNode, Slottable {
        tagName: "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "meta" | "meter" | "nav" | "noscript" | "object" | "ol" | "optgroup" | "option" | "output" | "p" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "search" | "section" | "select" | "slot" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "animate" | "animateMotion" | "animateTransform" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "set" | "stop" | "svg" | "switch" | "symbol" | "text" | "textPath" | "tspan" | "use" | "view" | "annotation" | "annotation-xml" | "maction" | "math" | "merror" | "mfrac" | "mi" | "mmultiscripts" | "mn" | "mo" | "mover" | "mpadded" | "mphantom" | "mprescripts" | "mroot" | "mrow" | "ms" | "mspace" | "msqrt" | "mstyle" | "msub" | "msubsup" | "msup" | "mtable" | "mtd" | "mtext" | "mtr" | "munder" | "munderover" | "semantics";
        namespaceURI?: "http://www.w3.org/1999/xhtml" | "http://www.w3.org/2000/svg" | "http://www.w3.org/1998/Math/MathML";
        children?: LibNode;
        dataset?: Record<string, string | number | undefined>;
        className?: string | undefined;
        id?: string | undefined;
        onfullscreenchange?: ((this: Element, ev: Event) => any) | null | undefined;
        onfullscreenerror?: ((this: Element, ev: Event) => any) | null | undefined;
        outerHTML?: string | undefined;
        scrollLeft?: number | undefined;
        scrollTop?: number | undefined;
        slot?: string | undefined;
    }

    interface Node extends EventTarget {
        nodeValue?: string | null | undefined;
        textContent?: string | null | undefined;
    }

    interface EventTarget { }

    interface ARIAMixin {
        ariaAtomic?: string | null | undefined;
        ariaAutoComplete?: string | null | undefined;
        ariaBusy?: string | null | undefined;
        ariaChecked?: string | null | undefined;
        ariaColCount?: string | null | undefined;
        ariaColIndex?: string | null | undefined;
        ariaColSpan?: string | null | undefined;
        ariaCurrent?: string | null | undefined;
        ariaDescription?: string | null | undefined;
        ariaDisabled?: string | null | undefined;
        ariaExpanded?: string | null | undefined;
        ariaHasPopup?: string | null | undefined;
        ariaHidden?: string | null | undefined;
        ariaInvalid?: string | null | undefined;
        ariaKeyShortcuts?: string | null | undefined;
        ariaLabel?: string | null | undefined;
        ariaLevel?: string | null | undefined;
        ariaLive?: string | null | undefined;
        ariaModal?: string | null | undefined;
        ariaMultiLine?: string | null | undefined;
        ariaMultiSelectable?: string | null | undefined;
        ariaOrientation?: string | null | undefined;
        ariaPlaceholder?: string | null | undefined;
        ariaPosInSet?: string | null | undefined;
        ariaPressed?: string | null | undefined;
        ariaReadOnly?: string | null | undefined;
        ariaRequired?: string | null | undefined;
        ariaRoleDescription?: string | null | undefined;
        ariaRowCount?: string | null | undefined;
        ariaRowIndex?: string | null | undefined;
        ariaRowSpan?: string | null | undefined;
        ariaSelected?: string | null | undefined;
        ariaSetSize?: string | null | undefined;
        ariaSort?: string | null | undefined;
        ariaValueMax?: string | null | undefined;
        ariaValueMin?: string | null | undefined;
        ariaValueNow?: string | null | undefined;
        ariaValueText?: string | null | undefined;
        role?: string | null | undefined;
    }

    interface Animatable { }

    interface ChildNode extends Node { }

    interface InnerHTML {
        innerHTML?: string | undefined;
    }

    interface NonDocumentTypeChildNode { }

    interface ParentNode extends Node { }

    interface Slottable { }

    interface ElementCSSInlineStyle {
        style?: CSSStyleDeclaration | undefined;
    }

    interface CSSStyleDeclaration {
        accentColor?: string | undefined;
        alignContent?: string | undefined;
        alignItems?: string | undefined;
        alignSelf?: string | undefined;
        alignmentBaseline?: string | undefined;
        all?: string | undefined;
        animation?: string | undefined;
        animationComposition?: string | undefined;
        animationDelay?: string | undefined;
        animationDirection?: string | undefined;
        animationDuration?: string | undefined;
        animationFillMode?: string | undefined;
        animationIterationCount?: string | undefined;
        animationName?: string | undefined;
        animationPlayState?: string | undefined;
        animationTimingFunction?: string | undefined;
        appearance?: string | undefined;
        aspectRatio?: string | undefined;
        backdropFilter?: string | undefined;
        backfaceVisibility?: string | undefined;
        background?: string | undefined;
        backgroundAttachment?: string | undefined;
        backgroundBlendMode?: string | undefined;
        backgroundClip?: string | undefined;
        backgroundColor?: string | undefined;
        backgroundImage?: string | undefined;
        backgroundOrigin?: string | undefined;
        backgroundPosition?: string | undefined;
        backgroundPositionX?: string | undefined;
        backgroundPositionY?: string | undefined;
        backgroundRepeat?: string | undefined;
        backgroundSize?: string | undefined;
        baselineShift?: string | undefined;
        baselineSource?: string | undefined;
        blockSize?: string | undefined;
        border?: string | undefined;
        borderBlock?: string | undefined;
        borderBlockColor?: string | undefined;
        borderBlockEnd?: string | undefined;
        borderBlockEndColor?: string | undefined;
        borderBlockEndStyle?: string | undefined;
        borderBlockEndWidth?: string | undefined;
        borderBlockStart?: string | undefined;
        borderBlockStartColor?: string | undefined;
        borderBlockStartStyle?: string | undefined;
        borderBlockStartWidth?: string | undefined;
        borderBlockStyle?: string | undefined;
        borderBlockWidth?: string | undefined;
        borderBottom?: string | undefined;
        borderBottomColor?: string | undefined;
        borderBottomLeftRadius?: string | undefined;
        borderBottomRightRadius?: string | undefined;
        borderBottomStyle?: string | undefined;
        borderBottomWidth?: string | undefined;
        borderCollapse?: string | undefined;
        borderColor?: string | undefined;
        borderEndEndRadius?: string | undefined;
        borderEndStartRadius?: string | undefined;
        borderImage?: string | undefined;
        borderImageOutset?: string | undefined;
        borderImageRepeat?: string | undefined;
        borderImageSlice?: string | undefined;
        borderImageSource?: string | undefined;
        borderImageWidth?: string | undefined;
        borderInline?: string | undefined;
        borderInlineColor?: string | undefined;
        borderInlineEnd?: string | undefined;
        borderInlineEndColor?: string | undefined;
        borderInlineEndStyle?: string | undefined;
        borderInlineEndWidth?: string | undefined;
        borderInlineStart?: string | undefined;
        borderInlineStartColor?: string | undefined;
        borderInlineStartStyle?: string | undefined;
        borderInlineStartWidth?: string | undefined;
        borderInlineStyle?: string | undefined;
        borderInlineWidth?: string | undefined;
        borderLeft?: string | undefined;
        borderLeftColor?: string | undefined;
        borderLeftStyle?: string | undefined;
        borderLeftWidth?: string | undefined;
        borderRadius?: string | undefined;
        borderRight?: string | undefined;
        borderRightColor?: string | undefined;
        borderRightStyle?: string | undefined;
        borderRightWidth?: string | undefined;
        borderSpacing?: string | undefined;
        borderStartEndRadius?: string | undefined;
        borderStartStartRadius?: string | undefined;
        borderStyle?: string | undefined;
        borderTop?: string | undefined;
        borderTopColor?: string | undefined;
        borderTopLeftRadius?: string | undefined;
        borderTopRightRadius?: string | undefined;
        borderTopStyle?: string | undefined;
        borderTopWidth?: string | undefined;
        borderWidth?: string | undefined;
        bottom?: string | undefined;
        boxShadow?: string | undefined;
        boxSizing?: string | undefined;
        breakAfter?: string | undefined;
        breakBefore?: string | undefined;
        breakInside?: string | undefined;
        captionSide?: string | undefined;
        caretColor?: string | undefined;
        clear?: string | undefined;
        clip?: string | undefined;
        clipPath?: string | undefined;
        clipRule?: string | undefined;
        color?: string | undefined;
        colorInterpolation?: string | undefined;
        colorInterpolationFilters?: string | undefined;
        colorScheme?: string | undefined;
        columnCount?: string | undefined;
        columnFill?: string | undefined;
        columnGap?: string | undefined;
        columnRule?: string | undefined;
        columnRuleColor?: string | undefined;
        columnRuleStyle?: string | undefined;
        columnRuleWidth?: string | undefined;
        columnSpan?: string | undefined;
        columnWidth?: string | undefined;
        columns?: string | undefined;
        contain?: string | undefined;
        containIntrinsicBlockSize?: string | undefined;
        containIntrinsicHeight?: string | undefined;
        containIntrinsicInlineSize?: string | undefined;
        containIntrinsicSize?: string | undefined;
        containIntrinsicWidth?: string | undefined;
        container?: string | undefined;
        containerName?: string | undefined;
        containerType?: string | undefined;
        content?: string | undefined;
        counterIncrement?: string | undefined;
        counterReset?: string | undefined;
        counterSet?: string | undefined;
        cssFloat?: string | undefined;
        cssText?: string | undefined;
        cursor?: string | undefined;
        cx?: string | undefined;
        cy?: string | undefined;
        d?: string | undefined;
        direction?: string | undefined;
        display?: string | undefined;
        dominantBaseline?: string | undefined;
        emptyCells?: string | undefined;
        fill?: string | undefined;
        fillOpacity?: string | undefined;
        fillRule?: string | undefined;
        filter?: string | undefined;
        flex?: string | undefined;
        flexBasis?: string | undefined;
        flexDirection?: string | undefined;
        flexFlow?: string | undefined;
        flexGrow?: string | undefined;
        flexShrink?: string | undefined;
        flexWrap?: string | undefined;
        float?: string | undefined;
        floodColor?: string | undefined;
        floodOpacity?: string | undefined;
        font?: string | undefined;
        fontFamily?: string | undefined;
        fontFeatureSettings?: string | undefined;
        fontKerning?: string | undefined;
        fontOpticalSizing?: string | undefined;
        fontPalette?: string | undefined;
        fontSize?: string | undefined;
        fontSizeAdjust?: string | undefined;
        fontStretch?: string | undefined;
        fontStyle?: string | undefined;
        fontSynthesis?: string | undefined;
        fontSynthesisSmallCaps?: string | undefined;
        fontSynthesisStyle?: string | undefined;
        fontSynthesisWeight?: string | undefined;
        fontVariant?: string | undefined;
        fontVariantAlternates?: string | undefined;
        fontVariantCaps?: string | undefined;
        fontVariantEastAsian?: string | undefined;
        fontVariantLigatures?: string | undefined;
        fontVariantNumeric?: string | undefined;
        fontVariantPosition?: string | undefined;
        fontVariationSettings?: string | undefined;
        fontWeight?: string | undefined;
        forcedColorAdjust?: string | undefined;
        gap?: string | undefined;
        grid?: string | undefined;
        gridArea?: string | undefined;
        gridAutoColumns?: string | undefined;
        gridAutoFlow?: string | undefined;
        gridAutoRows?: string | undefined;
        gridColumn?: string | undefined;
        gridColumnEnd?: string | undefined;
        gridColumnGap?: string | undefined;
        gridColumnStart?: string | undefined;
        gridGap?: string | undefined;
        gridRow?: string | undefined;
        gridRowEnd?: string | undefined;
        gridRowGap?: string | undefined;
        gridRowStart?: string | undefined;
        gridTemplate?: string | undefined;
        gridTemplateAreas?: string | undefined;
        gridTemplateColumns?: string | undefined;
        gridTemplateRows?: string | undefined;
        height?: string | undefined;
        hyphenateCharacter?: string | undefined;
        hyphens?: string | undefined;
        imageOrientation?: string | undefined;
        imageRendering?: string | undefined;
        inlineSize?: string | undefined;
        inset?: string | undefined;
        insetBlock?: string | undefined;
        insetBlockEnd?: string | undefined;
        insetBlockStart?: string | undefined;
        insetInline?: string | undefined;
        insetInlineEnd?: string | undefined;
        insetInlineStart?: string | undefined;
        isolation?: string | undefined;
        justifyContent?: string | undefined;
        justifyItems?: string | undefined;
        justifySelf?: string | undefined;
        left?: string | undefined;
        letterSpacing?: string | undefined;
        lightingColor?: string | undefined;
        lineBreak?: string | undefined;
        lineHeight?: string | undefined;
        listStyle?: string | undefined;
        listStyleImage?: string | undefined;
        listStylePosition?: string | undefined;
        listStyleType?: string | undefined;
        margin?: string | undefined;
        marginBlock?: string | undefined;
        marginBlockEnd?: string | undefined;
        marginBlockStart?: string | undefined;
        marginBottom?: string | undefined;
        marginInline?: string | undefined;
        marginInlineEnd?: string | undefined;
        marginInlineStart?: string | undefined;
        marginLeft?: string | undefined;
        marginRight?: string | undefined;
        marginTop?: string | undefined;
        marker?: string | undefined;
        markerEnd?: string | undefined;
        markerMid?: string | undefined;
        markerStart?: string | undefined;
        mask?: string | undefined;
        maskClip?: string | undefined;
        maskComposite?: string | undefined;
        maskImage?: string | undefined;
        maskMode?: string | undefined;
        maskOrigin?: string | undefined;
        maskPosition?: string | undefined;
        maskRepeat?: string | undefined;
        maskSize?: string | undefined;
        maskType?: string | undefined;
        mathDepth?: string | undefined;
        mathStyle?: string | undefined;
        maxBlockSize?: string | undefined;
        maxHeight?: string | undefined;
        maxInlineSize?: string | undefined;
        maxWidth?: string | undefined;
        minBlockSize?: string | undefined;
        minHeight?: string | undefined;
        minInlineSize?: string | undefined;
        minWidth?: string | undefined;
        mixBlendMode?: string | undefined;
        objectFit?: string | undefined;
        objectPosition?: string | undefined;
        offset?: string | undefined;
        offsetAnchor?: string | undefined;
        offsetDistance?: string | undefined;
        offsetPath?: string | undefined;
        offsetPosition?: string | undefined;
        offsetRotate?: string | undefined;
        opacity?: string | undefined;
        order?: string | undefined;
        orphans?: string | undefined;
        outline?: string | undefined;
        outlineColor?: string | undefined;
        outlineOffset?: string | undefined;
        outlineStyle?: string | undefined;
        outlineWidth?: string | undefined;
        overflow?: string | undefined;
        overflowAnchor?: string | undefined;
        overflowClipMargin?: string | undefined;
        overflowWrap?: string | undefined;
        overflowX?: string | undefined;
        overflowY?: string | undefined;
        overscrollBehavior?: string | undefined;
        overscrollBehaviorBlock?: string | undefined;
        overscrollBehaviorInline?: string | undefined;
        overscrollBehaviorX?: string | undefined;
        overscrollBehaviorY?: string | undefined;
        padding?: string | undefined;
        paddingBlock?: string | undefined;
        paddingBlockEnd?: string | undefined;
        paddingBlockStart?: string | undefined;
        paddingBottom?: string | undefined;
        paddingInline?: string | undefined;
        paddingInlineEnd?: string | undefined;
        paddingInlineStart?: string | undefined;
        paddingLeft?: string | undefined;
        paddingRight?: string | undefined;
        paddingTop?: string | undefined;
        page?: string | undefined;
        pageBreakAfter?: string | undefined;
        pageBreakBefore?: string | undefined;
        pageBreakInside?: string | undefined;
        paintOrder?: string | undefined;
        perspective?: string | undefined;
        perspectiveOrigin?: string | undefined;
        placeContent?: string | undefined;
        placeItems?: string | undefined;
        placeSelf?: string | undefined;
        pointerEvents?: string | undefined;
        position?: string | undefined;
        printColorAdjust?: string | undefined;
        quotes?: string | undefined;
        r?: string | undefined;
        resize?: string | undefined;
        right?: string | undefined;
        rotate?: string | undefined;
        rowGap?: string | undefined;
        rubyPosition?: string | undefined;
        rx?: string | undefined;
        ry?: string | undefined;
        scale?: string | undefined;
        scrollBehavior?: string | undefined;
        scrollMargin?: string | undefined;
        scrollMarginBlock?: string | undefined;
        scrollMarginBlockEnd?: string | undefined;
        scrollMarginBlockStart?: string | undefined;
        scrollMarginBottom?: string | undefined;
        scrollMarginInline?: string | undefined;
        scrollMarginInlineEnd?: string | undefined;
        scrollMarginInlineStart?: string | undefined;
        scrollMarginLeft?: string | undefined;
        scrollMarginRight?: string | undefined;
        scrollMarginTop?: string | undefined;
        scrollPadding?: string | undefined;
        scrollPaddingBlock?: string | undefined;
        scrollPaddingBlockEnd?: string | undefined;
        scrollPaddingBlockStart?: string | undefined;
        scrollPaddingBottom?: string | undefined;
        scrollPaddingInline?: string | undefined;
        scrollPaddingInlineEnd?: string | undefined;
        scrollPaddingInlineStart?: string | undefined;
        scrollPaddingLeft?: string | undefined;
        scrollPaddingRight?: string | undefined;
        scrollPaddingTop?: string | undefined;
        scrollSnapAlign?: string | undefined;
        scrollSnapStop?: string | undefined;
        scrollSnapType?: string | undefined;
        scrollbarColor?: string | undefined;
        scrollbarGutter?: string | undefined;
        scrollbarWidth?: string | undefined;
        shapeImageThreshold?: string | undefined;
        shapeMargin?: string | undefined;
        shapeOutside?: string | undefined;
        shapeRendering?: string | undefined;
        stopColor?: string | undefined;
        stopOpacity?: string | undefined;
        stroke?: string | undefined;
        strokeDasharray?: string | undefined;
        strokeDashoffset?: string | undefined;
        strokeLinecap?: string | undefined;
        strokeLinejoin?: string | undefined;
        strokeMiterlimit?: string | undefined;
        strokeOpacity?: string | undefined;
        strokeWidth?: string | undefined;
        tabSize?: string | undefined;
        tableLayout?: string | undefined;
        textAlign?: string | undefined;
        textAlignLast?: string | undefined;
        textAnchor?: string | undefined;
        textCombineUpright?: string | undefined;
        textDecoration?: string | undefined;
        textDecorationColor?: string | undefined;
        textDecorationLine?: string | undefined;
        textDecorationSkipInk?: string | undefined;
        textDecorationStyle?: string | undefined;
        textDecorationThickness?: string | undefined;
        textEmphasis?: string | undefined;
        textEmphasisColor?: string | undefined;
        textEmphasisPosition?: string | undefined;
        textEmphasisStyle?: string | undefined;
        textIndent?: string | undefined;
        textOrientation?: string | undefined;
        textOverflow?: string | undefined;
        textRendering?: string | undefined;
        textShadow?: string | undefined;
        textTransform?: string | undefined;
        textUnderlineOffset?: string | undefined;
        textUnderlinePosition?: string | undefined;
        textWrap?: string | undefined;
        top?: string | undefined;
        touchAction?: string | undefined;
        transform?: string | undefined;
        transformBox?: string | undefined;
        transformOrigin?: string | undefined;
        transformStyle?: string | undefined;
        transition?: string | undefined;
        transitionDelay?: string | undefined;
        transitionDuration?: string | undefined;
        transitionProperty?: string | undefined;
        transitionTimingFunction?: string | undefined;
        translate?: string | undefined;
        unicodeBidi?: string | undefined;
        userSelect?: string | undefined;
        vectorEffect?: string | undefined;
        verticalAlign?: string | undefined;
        visibility?: string | undefined;
        webkitAlignContent?: string | undefined;
        webkitAlignItems?: string | undefined;
        webkitAlignSelf?: string | undefined;
        webkitAnimation?: string | undefined;
        webkitAnimationDelay?: string | undefined;
        webkitAnimationDirection?: string | undefined;
        webkitAnimationDuration?: string | undefined;
        webkitAnimationFillMode?: string | undefined;
        webkitAnimationIterationCount?: string | undefined;
        webkitAnimationName?: string | undefined;
        webkitAnimationPlayState?: string | undefined;
        webkitAnimationTimingFunction?: string | undefined;
        webkitAppearance?: string | undefined;
        webkitBackfaceVisibility?: string | undefined;
        webkitBackgroundClip?: string | undefined;
        webkitBackgroundOrigin?: string | undefined;
        webkitBackgroundSize?: string | undefined;
        webkitBorderBottomLeftRadius?: string | undefined;
        webkitBorderBottomRightRadius?: string | undefined;
        webkitBorderRadius?: string | undefined;
        webkitBorderTopLeftRadius?: string | undefined;
        webkitBorderTopRightRadius?: string | undefined;
        webkitBoxAlign?: string | undefined;
        webkitBoxFlex?: string | undefined;
        webkitBoxOrdinalGroup?: string | undefined;
        webkitBoxOrient?: string | undefined;
        webkitBoxPack?: string | undefined;
        webkitBoxShadow?: string | undefined;
        webkitBoxSizing?: string | undefined;
        webkitFilter?: string | undefined;
        webkitFlex?: string | undefined;
        webkitFlexBasis?: string | undefined;
        webkitFlexDirection?: string | undefined;
        webkitFlexFlow?: string | undefined;
        webkitFlexGrow?: string | undefined;
        webkitFlexShrink?: string | undefined;
        webkitFlexWrap?: string | undefined;
        webkitJustifyContent?: string | undefined;
        webkitLineClamp?: string | undefined;
        webkitMask?: string | undefined;
        webkitMaskBoxImage?: string | undefined;
        webkitMaskBoxImageOutset?: string | undefined;
        webkitMaskBoxImageRepeat?: string | undefined;
        webkitMaskBoxImageSlice?: string | undefined;
        webkitMaskBoxImageSource?: string | undefined;
        webkitMaskBoxImageWidth?: string | undefined;
        webkitMaskClip?: string | undefined;
        webkitMaskComposite?: string | undefined;
        webkitMaskImage?: string | undefined;
        webkitMaskOrigin?: string | undefined;
        webkitMaskPosition?: string | undefined;
        webkitMaskRepeat?: string | undefined;
        webkitMaskSize?: string | undefined;
        webkitOrder?: string | undefined;
        webkitPerspective?: string | undefined;
        webkitPerspectiveOrigin?: string | undefined;
        webkitTextFillColor?: string | undefined;
        webkitTextSizeAdjust?: string | undefined;
        webkitTextStroke?: string | undefined;
        webkitTextStrokeColor?: string | undefined;
        webkitTextStrokeWidth?: string | undefined;
        webkitTransform?: string | undefined;
        webkitTransformOrigin?: string | undefined;
        webkitTransformStyle?: string | undefined;
        webkitTransition?: string | undefined;
        webkitTransitionDelay?: string | undefined;
        webkitTransitionDuration?: string | undefined;
        webkitTransitionProperty?: string | undefined;
        webkitTransitionTimingFunction?: string | undefined;
        webkitUserSelect?: string | undefined;
        whiteSpace?: string | undefined;
        widows?: string | undefined;
        width?: string | undefined;
        willChange?: string | undefined;
        wordBreak?: string | undefined;
        wordSpacing?: string | undefined;
        wordWrap?: string | undefined;
        writingMode?: string | undefined;
        x?: string | undefined;
        y?: string | undefined;
        zIndex?: string | undefined;
    }

    interface ElementContentEditable {
        contentEditable?: string | undefined;
        enterKeyHint?: string | undefined;
        inputMode?: string | undefined;
    }

    interface GlobalEventHandlers {
        onabort?: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null | undefined;
        onanimationcancel?: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null | undefined;
        onanimationend?: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null | undefined;
        onanimationiteration?: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null | undefined;
        onanimationstart?: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null | undefined;
        onauxclick?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null | undefined;
        onbeforeinput?: ((this: GlobalEventHandlers, ev: InputEvent) => any) | null | undefined;
        onbeforetoggle?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onblur?: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null | undefined;
        oncancel?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        oncanplay?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        oncanplaythrough?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onchange?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onclick?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null | undefined;
        onclose?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        oncontextmenu?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null | undefined;
        oncopy?: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null | undefined;
        oncuechange?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        oncut?: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null | undefined;
        ondblclick?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null | undefined;
        ondrag?: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null | undefined;
        ondragend?: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null | undefined;
        ondragenter?: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null | undefined;
        ondragleave?: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null | undefined;
        ondragover?: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null | undefined;
        ondragstart?: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null | undefined;
        ondrop?: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null | undefined;
        ondurationchange?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onemptied?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onended?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onerror?: OnErrorEventHandler | undefined;
        onfocus?: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null | undefined;
        onformdata?: ((this: GlobalEventHandlers, ev: FormDataEvent) => any) | null | undefined;
        ongotpointercapture?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null | undefined;
        oninput?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        oninvalid?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onkeydown?: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null | undefined;
        onkeypress?: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null | undefined;
        onkeyup?: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null | undefined;
        onload?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onloadeddata?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onloadedmetadata?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onloadstart?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onlostpointercapture?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null | undefined;
        onmousedown?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null | undefined;
        onmouseenter?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null | undefined;
        onmouseleave?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null | undefined;
        onmousemove?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null | undefined;
        onmouseout?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null | undefined;
        onmouseover?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null | undefined;
        onmouseup?: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null | undefined;
        onpaste?: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null | undefined;
        onpause?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onplay?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onplaying?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onpointercancel?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null | undefined;
        onpointerdown?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null | undefined;
        onpointerenter?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null | undefined;
        onpointerleave?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null | undefined;
        onpointermove?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null | undefined;
        onpointerout?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null | undefined;
        onpointerover?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null | undefined;
        onpointerup?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null | undefined;
        onprogress?: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null | undefined;
        onratechange?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onreset?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onresize?: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null | undefined;
        onscroll?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onscrollend?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onsecuritypolicyviolation?: ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null | undefined;
        onseeked?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onseeking?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onselect?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onselectionchange?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onselectstart?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onslotchange?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onstalled?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onsubmit?: ((this: GlobalEventHandlers, ev: SubmitEvent) => any) | null | undefined;
        onsuspend?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        ontimeupdate?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        ontoggle?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        ontouchcancel?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
        ontouchend?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
        ontouchmove?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
        ontouchstart?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
        ontransitioncancel?: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null | undefined;
        ontransitionend?: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null | undefined;
        ontransitionrun?: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null | undefined;
        ontransitionstart?: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null | undefined;
        onvolumechange?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onwaiting?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onwebkitanimationend?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onwebkitanimationiteration?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onwebkitanimationstart?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onwebkittransitionend?: ((this: GlobalEventHandlers, ev: Event) => any) | null | undefined;
        onwheel?: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null | undefined;
    }

    interface HTMLHyperlinkElementUtils {
        hash?: string | undefined;
        host?: string | undefined;
        hostname?: string | undefined;
        href?: string | undefined;
        password?: string | undefined;
        pathname?: string | undefined;
        port?: string | undefined;
        protocol?: string | undefined;
        search?: string | undefined;
        username?: string | undefined;
    }

    interface WindowEventHandlers {
        onafterprint?: ((this: WindowEventHandlers, ev: Event) => any) | null | undefined;
        onbeforeprint?: ((this: WindowEventHandlers, ev: Event) => any) | null | undefined;
        onbeforeunload?: ((this: WindowEventHandlers, ev: BeforeUnloadEvent) => any) | null | undefined;
        ongamepadconnected?: ((this: WindowEventHandlers, ev: GamepadEvent) => any) | null | undefined;
        ongamepaddisconnected?: ((this: WindowEventHandlers, ev: GamepadEvent) => any) | null | undefined;
        onhashchange?: ((this: WindowEventHandlers, ev: HashChangeEvent) => any) | null | undefined;
        onlanguagechange?: ((this: WindowEventHandlers, ev: Event) => any) | null | undefined;
        onmessage?: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null | undefined;
        onmessageerror?: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null | undefined;
        onoffline?: ((this: WindowEventHandlers, ev: Event) => any) | null | undefined;
        ononline?: ((this: WindowEventHandlers, ev: Event) => any) | null | undefined;
        onpagehide?: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null | undefined;
        onpageshow?: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null | undefined;
        onpopstate?: ((this: WindowEventHandlers, ev: PopStateEvent) => any) | null | undefined;
        onrejectionhandled?: ((this: WindowEventHandlers, ev: PromiseRejectionEvent) => any) | null | undefined;
        onstorage?: ((this: WindowEventHandlers, ev: StorageEvent) => any) | null | undefined;
        onunhandledrejection?: ((this: WindowEventHandlers, ev: PromiseRejectionEvent) => any) | null | undefined;
        onunload?: ((this: WindowEventHandlers, ev: Event) => any) | null | undefined;
    }

    interface PopoverInvokerElement {
        popoverTargetAction?: string | undefined;
        popoverTargetElement?: Element | null | undefined;
    }
}
