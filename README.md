# Portfolio · eshika.dev

Personal portfolio for **Eshika Singha** — full-stack engineer at 24/7 Software.

🌐 **Live:** https://eshikasingha.netlify.app

## What's inside

A single-page React + Vite site with:

- Animated hero with live IST clock, rising-text intro, and a mouse-following gradient blob
- Bento-grid About section
- Selected work — bespoke CSS previews of each real project (SketchMind, Election Assistant India)
- Categorized skill chips: Languages · Frontend · Backend · Integrations & Analytics · AI & Cloud · Data & Infra
- Experience timeline at 24/7 Software
- Big-type contact section with email, GitHub, and LinkedIn links
- Custom favicon (lime tile, bold "e"), Open Graph + Twitter card metadata, theme color

## Tech

- **React 19** + **Vite 8**
- **Bricolage Grotesque** + **Inter** + **JetBrains Mono** (Google Fonts)
- All styling in plain CSS — no UI library, no Tailwind
- Hot-reload dev server via Vite

## Run locally

Requires **Node 20.19+** or **22.12+** (Vite 8).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # preview the production build
npm run lint     # ESLint
```

## Project structure

```
src/
  App.jsx       # all sections + components
  App.css       # all component styles
  index.css     # design tokens, font imports, resets
  main.jsx      # entry
public/
  favicon.svg   # lime "e" tile
index.html      # title, meta tags, OG/Twitter cards
```

The whole site is one component file by design — easy to scan, easy to tweak.

## Deploy

Hosted on **Netlify** at [eshikasingha.netlify.app](https://eshikasingha.netlify.app).

Update with either:

```bash
npm run build
# then drag dist/ onto the Deploys tab on Netlify
```

…or connect Netlify to this repo for auto-deploy on `git push` (build command: `npm run build`, publish directory: `dist`).

## Contact

- **Email:** singhaeshika4@gmail.com
- **LinkedIn:** [eshikasingha](https://www.linkedin.com/in/eshikasingha/)
- **GitHub:** [eshi02](https://github.com/eshi02)
