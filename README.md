# HNG-fe — Profile Card

Simple static profile card demo with live time and avatar support.

## Files

- [index.html](index.html) — main HTML file
- [styles.css](styles.css) — styles for the profile card
- [script.js](script.js) — small JS for the live time (function: [`updateTime`](script.js)) and avatar handling
- [static/IMG_0303.jpeg](static/IMG_0303.jpeg) — default avatar image

## Requirements

- A web browser (Chrome, Firefox, Safari, Edge)
- (Optional) Python 3 or Node.js for serving over HTTP

## Run locally

Option A — Open directly

- Open [index.html](index.html) in your browser (double-click or "Open File").

Option B — Python (recommended when using fetch/XHR or avoiding file:// issues)

- Run from project root:

```sh
python3 -m http.server 8000
```

- Open http://localhost:8000/ in your browser.

Option C — Node (live-server)

- If you have Node.js:

```sh
npx live-server .
```

or

```sh
npm install -g live-server
live-server
```

Option D — VS Code

- Install the "Live Server" extension and click "Go Live" with this workspace open.

## Notes for developers

- The live timestamp is updated by the [`updateTime`](script.js) function and written into the element with id `current-time` in [index.html](index.html).
- Avatar upload in [script.js](script.js) expects an input with id `avatar-input` to exist in the DOM to allow file uploads.
- Styles live in [styles.css](styles.css). Adjust breakpoints and sizes there.

## License

This is a small demo — include your preferred license if you publish
