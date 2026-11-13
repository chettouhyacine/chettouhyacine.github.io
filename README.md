# Portfolio — chettouhyacine.github.io

Single page, no framework, no build step. Live at **https://chettouhyacine.github.io/**

## How to edit the text

Every word on the site comes from **`content.js`**. You never need to touch the HTML.

1. Open [content.js](https://github.com/chettouhyacine/chettouhyacine.github.io/edit/main/content.js)
   (or edit the local file and commit it).
2. Change the text between the quotes `'...'`.
   - `**double asterisks**` render as **bold**.
   - Keep the commas and brackets `{ }` `[ ]` exactly where they are.
   - Lines starting with `//` are comments and never appear on the page.
3. Commit. GitHub Pages republishes automatically in about a minute.

## Files

| File | What it is |
|---|---|
| `content.js` | **all the text** — headline, about, projects, contact, footer |
| `index.html` | page shell: `<head>`, header, footer, `#app` container |
| `script.js` | renders `content.js` into the page (don't edit normally) |
| `styles.css` | colours, spacing, layout |
| `assets/` | screenshots used by the project section |

## Preview locally

Any static server works, for example:

```bash
npx serve .
# or
python -m http.server 8000
```

## Changing the look

Colours live at the top of `styles.css`:

```css
--bg: #0f1113;      /* page background */
--surface: #161a1d; /* cards */
--accent: #45d9b8;  /* highlight colour */
```

Change `--accent` alone and the whole page follows.
