# dkj-brandbook

The central brand book for every DKJ-Solutions repo: design principles, brand guidelines, design tokens
and themes, plus an overview of the components built across DKJ-Solutions repos.

**One brand, several themes.** The base (typography, spacing, radius, motion, component behaviour,
tone) is shared by every repo; the colour theme may differ per repo. Whether it is a React site or a
Claude Artifact, it follows the same rules.

## The house style

[`house-style/`](house-style/README.md) holds the stylesheet, the twelve themes and the theme script
every DKJ-Solutions app renders with, and the rules for using them. It is the single copy; the
`house-style` skill in the `dkj-solutions` plugin points here, at a tagged `house-style-v<N>` release.

## Run it

```bash
npm ci
npm run dev       # the showcase, at http://localhost:5173
npm run build     # tsc -b && vite build
npm run lint
```

Node version: see `.nvmrc`.

## What is where

| Path | Holds |
| --- | --- |
| [`house-style/`](house-style/README.md) | The one token source: colours, spacing, type scale and the twelve themes, as CSS custom properties. React code and Claude Artifacts alike read it. |
| [`src/brand-layer.css`](src/brand-layer.css) | The brand book's own layer on top of the house style: radius, weights, control sizes, focus ring, motion, layout, and a few colours built from house tokens. Every name starts with `--dkj-`. |
| `src/components/` | Presentational React components, styled only on house-style tokens and `src/brand-layer.css`. |
| [`src/components/sources.ts`](src/components/sources.ts) | Where each component comes from: the source repo, its components there, and the CSS it was lifted from. |
| `src/showcase/` | The overview app: every component with its variants and states, a theme and mode switcher, and a 360px phone width. |

**Mirroring components from another repo.** Only the UI/UX design is copied: structure, layout,
spacing, type, colour, radius, states, responsive behaviour and interaction. Content, data and logic
stay behind, and placeholder text takes their place. Every component gets an entry in `sources.ts`.
Components are styled on the house-style tokens, plus `src/brand-layer.css` for what the house style
does not define. A colour specific to the source becomes a `--dkj-*` token in the layer, built from house
tokens so it follows every theme; a house token or class is never redefined there (extend, never override).

## Working on it

Changes go via a `feat/`, `fix/` or `docs/` branch and a pull request. The gate
(`scripts/lint/lint-web.ps1`: eslint + type-check + build) runs locally before a PR and in CI as the
`ci` check. The workflow comes from the `dkj-policy` and `dkj-subagents-alpha` plugins of
[DKJ-Solutions/dkj-claude-plugins](https://github.com/DKJ-Solutions/dkj-claude-plugins).
