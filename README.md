# @9elt/jsx

JSX without runtime in 50 LOC

```tsx
const div: HTMLDivElement = (
    <div>
        <p>Hello, World!</p>
    </div>
);

div.outerHTML; // "<div><p>Hello, World!</p></div>"
```
