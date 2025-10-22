# HNG-fe — Profile Card

Simple static profile card demo with live time and avatar support.

## Features

- Responsive, accessible profile card (desktop & mobile)
- Live timestamp updated by the [`updateTime`](script.js) function
- Avatar image (default in `static/IMG_0303.jpeg`) with optional client-side upload
- Contact form with client-side validation handled by [`contact.js`](contact.js)
- Clean, modern styles in [styles.css](styles.css)

## Files

- [index.html](index.html) — main profile card page
- [about.html](about.html) — about / reflections page
- [contact.html](contact.html) — contact form page
- [styles.css](styles.css) — stylesheet
- [script.js](script.js) — small JS for the live time (function: [`updateTime`](script.js)) and avatar handling
- [contact.js](contact.js) — contact form validation and UX
- [static/IMG_0303.jpeg](static/IMG_0303.jpeg) — default avatar image
- [README.md](README.md) — this file

## Run locally

Option A — Open directly

- Open [index.html](index.html) in your browser.

Option B — Quick HTTP server (recommended)

- Python:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000/
```

- Node (live-server):

```sh
npx live-server .
```

Option C — VS Code Live Server

- Install "Live Server" extension and click "Go Live".

## Notes for developers

- Live timestamp: see [`updateTime`](script.js) which writes into the element with id `current-time` in [index.html](index.html).
- Avatar upload: `script.js` expects an input with id `avatar-input` (add to the DOM if you want upload UI).
- Contact form: validation rules and UX are implemented in [contact.js](contact.js). Error elements in [contact.html](contact.html) have matching IDs like `name-error`, `email-error`, etc.
- Styles: adjust breakpoints and sizes in [styles.css](styles.css).

## Contributing

- Open an issue or create a PR with improvements. Keep changes small and focused.
- Run a local server to test pages and scripts (see Run locally).

## License

- This demo is provided as-is. Add a license if you publish.
