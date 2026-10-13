# This repo -- dkj-brandbook

**The owners are Dave (DaveKJohn) and Maikel (maikel-bwj), with the same approval rights; wherever the
constitution or a lens says "the owner", either of them can give that word here.**

- **What it is for:** the single source of the DKJ-Solutions brand -- design principles, brand
  guidelines, design tokens and themes that every DKJ-Solutions repo follows, whether it is a React site
  or a Claude Artifact. It also collects the components built across DKJ-Solutions repos into one
  overview, so consistency can be checked in one place. One brand, several themes: the shared base
  (typography, spacing, radius, motion, component behaviour, tone) is fixed; colours may differ per theme.
- **Stack:** React 19 + TypeScript + Vite. `npm run dev` runs the showcase; `npm run build` builds it.
  Node version is pinned in `.nvmrc`.
- **The trunk is `main`.** All changes go via a `feat/`, `fix/` or `docs/` branch and a PR
  (`scripts/lib/branch-info.ps1`). The gate is `scripts/lint/lint-web.ps1` (eslint + `tsc -b` + vite build),
  run locally by `open-pr` and in CI as the `ci` check.
- **This repo is `public`.** Nothing confidential goes in it: no personal information, credentials,
  secrets or client data.
- **Repo content is English**; the session-reply language follows the user.
