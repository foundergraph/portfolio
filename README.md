# Wil'le — Portfolio

A personal portfolio site: a single-page, static site in the spirit of Apple's
minimalism — whitespace, large type, and quiet motion. Served via GitHub Pages.

## Stack

Plain HTML + CSS + JS. No build step, no framework, no CDN dependencies beyond
Google Fonts (Inter, as a cross-platform fallback to the system `-apple-system`
stack).

## Project links

- **Bento** — planning agent → https://github.com/foundergraph/planner
- **Hunt** — job-search kanban → https://github.com/foundergraph/jobhunt
- **Molly** — meeting scheduler → repo URL pending

## Adding content later

- **Images / art / screenshots:** drop files into `assets/` and reference them
  from `index.html` (`<img src="assets/...">`). The folder is already tracked.

## Editing content

All copy (bio, project blurbs, contact links) lives directly in `index.html`.
Colors, spacing, and type are tokens at the top of `css/styles.css`.

## Running locally

```sh
cd portfolio
python -m http.server 8000
# open http://localhost:8000
```

## Deploying

Push to `main` of the `foundergraph/portfolio` repo — GitHub Pages serves from
the repo root at `https://foundergraph.github.io/portfolio`.
