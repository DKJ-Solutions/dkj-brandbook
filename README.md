# dkj-brandbook

The central brand book for every DKJ-Solutions repo: design principles, brand guidelines, design tokens
and themes, plus an overview of the components built across DKJ-Solutions repos.

**One brand, several themes.** The base (typography, spacing, radius, motion, component behaviour,
tone) is shared by every repo; the colour theme may differ per repo. Whether it is a React site or a
Claude Artifact, it follows the same rules.

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
| [`tokens/`](tokens/README.md) | The design tokens as CSS custom properties: `base.css` (shared) and `themes/<theme>.css` (colour only). This is the source for React code and Claude Artifacts alike. |
| `src/components/` | Presentational React components, styled only on the tokens. |
| [`src/components/sources.ts`](src/components/sources.ts) | Where each component comes from: the source repo, its components there, and the CSS it was lifted from. |
| `src/showcase/` | The overview app: every component with its variants and states, a theme and mode switcher, and a 360px phone width. |

**Mirroring components from another repo.** Only the UI/UX design is copied: structure, layout,
spacing, type, colour, radius, states, responsive behaviour and interaction. Content, data and logic
stay behind, and placeholder text takes their place. Every component gets an entry in `sources.ts`.
Colours that are specific to the source become tokens in its theme file. Base values that it shares
with the brand go into `tokens/base.css`.

## Working on it

Changes go via a `feat/`, `fix/` or `docs/` branch and a pull request. The gate
(`scripts/lint/lint-web.ps1`: eslint + type-check + build) runs locally before a PR and in CI as the
`ci` check. The workflow comes from the `dkj-policy` and `dkj-subagents-alpha` plugins of
[DKJ-Solutions/dkj-claude-plugins](https://github.com/DKJ-Solutions/dkj-claude-plugins).
