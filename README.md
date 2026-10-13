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

## Working on it

Changes go via a `feat/`, `fix/` or `docs/` branch and a pull request. The gate
(`scripts/lint/lint-web.ps1`: eslint + type-check + build) runs locally before a PR and in CI as the
`ci` check. The workflow comes from the `dkj-policy` and `dkj-subagents-alpha` plugins of
[DKJ-Solutions/dkj-claude-plugins](https://github.com/DKJ-Solutions/dkj-claude-plugins).
