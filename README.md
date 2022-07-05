# SVG Triptych

View SVG source, SVG in-browser and SVG rendered to PDF, all together on one
page.

Live demo at: http://solidsnack.github.io/svg-triptych/

Only tested in Chrome. Please don't use in Safari -- at present, there is a bug that freezes the tab.

The PDF page size is set by the SVG width and height attributes, so be sure to
specify an appropriate `width`, `height` and `viewbox`.

## Example Documents

### 20cm Circle Centered on A4 Paper

```svg
<svg xmlns="http://www.w3.org/2000/svg" version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:svgjs="http://svgjs.dev/svgjs"
    width="210mm" height="297mm"
    viewBox="0 0 210 297"
    >
        <defs>
            <radialGradient id="fade-1-percent">
                <stop offset="99%" stop-color="white" />
                <stop offset="99%" stop-color="#A0A0A0" />
                <stop offset="100%" stop-color="black" />
            </radialGradient>
        </defs>
        <svg x="5" y="48.5"
             width="200" height="200"
             viewBox="-100 -100 200 200">
            <circle r="100" cx="0" cy="0"
                    fill="url(#fade-1-percent)"
                    stroke="none" />
        </svg>
</svg>
```

### 20cm Circle Centered on Letter Paper

```svg
<svg xmlns="http://www.w3.org/2000/svg" version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:svgjs="http://svgjs.dev/svgjs"
    width="215.9mm" height="279.4mm"
    viewBox="0 0 215.9 279.4"
    >
        <defs>
            <radialGradient id="fade-1-percent">
                <stop offset="99%" stop-color="white" />
                <stop offset="99%" stop-color="#A0A0A0" />
                <stop offset="100%" stop-color="black" />
            </radialGradient>
        </defs>
        <svg x="7.95" y="39.7"
             width="200" height="200"
             viewBox="-100 -100 200 200">
            <circle r="100" cx="0" cy="0"
                    fill="url(#fade-1-percent)"
                    stroke="none" />
        </svg>
</svg>
```

### 10cm Circle Centered on A5 Paper

```svg
<svg xmlns="http://www.w3.org/2000/svg" version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:svgjs="http://svgjs.dev/svgjs"
    width="148mm" height="210mm"
    viewBox="0 0 148 210"
    >
        <defs>
            <radialGradient id="fade-2-percent">
                <stop offset="98%" stop-color="white" />
                <stop offset="98%" stop-color="#A0A0A0" />
                <stop offset="100%" stop-color="black" />
            </radialGradient>
        </defs>
        <svg x="24" y="55"
             width="100" height="100"
             viewBox="-50 -50 100 100">
            <circle r="50" cx="0" cy="0"
                    fill="url(#fade-2-percent)"
                    stroke="none" />
        </svg>
</svg>
```
