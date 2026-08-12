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

## Adding artwork

The gallery's six tiles are designed placeholders. To drop in a real piece:

1. Copy the image into `assets/` (e.g. `assets/art-01.jpg`).
2. In `index.html`, replace the tile's classes with an `<img>`:

   ```html
   <figure class="art-tile reveal">
     <img src="assets/art-01.jpg" alt="Study in red" loading="lazy">
     <figcaption><span>01</span>Study in red</figcaption>
   </figure>
   ```

3. Remove the `tile-N` gradient class from the figure (the image fills the card).

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
