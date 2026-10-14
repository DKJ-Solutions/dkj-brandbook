## feat/theme-presence

> **How this file is read.** A step is `- [ ]` until it is resolved -- `- [x]` done, or
> `- [~]` dropped with the reason, which exists so nobody ticks a box for work they did not do.
> open-pr and ship-pr both refuse while one is still open, and there is no `-Force`.
>
> **FOUR `###` HEADINGS, AND NEVER A FIFTH** -- PLAN, CREATE, TEST, DEPLOY are the whole top
> level. A section needing its own heading goes in as a `####` UNDER whichever of the four owns
> it. No gate in YOUR repo reads a heading, so this half is on you -- only the repo that authors
> this workflow refuses a fifth (Dave, August 26, 2026).
>
> **AND NOTHING BRANCH-SPECIFIC ABOVE THE FIRST OF THOSE FOUR HEADINGS** -- everything between the
> title and it is this guidance, which is identical in every branch document. A status line, a note about
> THIS branch or an instruction to a session belongs under one of the four, normally as a `####`
> in PLAN. THIS half open-pr refuses, in every repo, before the push -- it reads the shape, so a
> guidance block in your own language passes and your own paragraph here does not (Dave,
> August 26, 2026; refused since #1650).
>
> **DEPLOY takes no steps of its own, and it is WRITTEN LAST** -- it is what the branch DID, once
> TEST says so. Written while steps above it are still open it states an INTENTION, and no gate
> holds it against what landed: the step gate splits this file at that heading and counts only
> above it. The PR title is the one exception -- new-branch -Title writes it at creation, because
> open-pr composes the PR title from it. It is the one part of this file that travels verbatim
> into `CHANGELOG.md` at the merge. In each tier, write the reason
> ABOVE the Score line -- anything below it is discarded.
>
> Relative links in that text resolve FROM THIS DIRECTORY -- `CHANGELOG.md` sits here too, so
> write each path exactly as it reads in this file.
>
> The phase arc, the marks and the whole form: `DEVELOPMENT-portable.md`, which ships
> with this workflow.

### PLAN

Make a chosen house theme stand out across the whole page, not only on the primary controls (owner's request, October 14, 2026). The owner picked all three levers: a tinted page and surfaces (house-wide), themed headings and borders (house-wide), and a themed sidebar in the brand book itself. It reaches the apps only after a `house-style-v<N>` release and the skill repoint, both on the owner's request.

### CREATE

- [x] `house-style/house-style.css`: neutral `--page-base`, `--surface-base`, `--grid-base`, `--border-base` plus per-mode `--page-tint`, `--surface-tint`, `--grid-tint`, `--border-tint`; `--page`, `--surface`, `--grid`, `--border` mix the primary into the base; a new `--primary-ink` (primary mixed with ink) for `:where(h1, h2)` and default links, so contrast holds on the tinted page; theme swatches preview their own tinted page
- [x] `house-style/README.md`: how far a theme reaches, the tint tokens and percentages, and what changes for an adopting app
- [x] `src/showcase/showcase.css`: the sidebar takes a theme tint, the brand name `--primary-ink`, the active link solid primary
- [x] `src/showcase/sections/Foundations.tsx`: the token readouts list the base tokens and `--primary-ink`
- [x] Code review (Victor): border strength, heading specificity, swatches and doc consistency fixed

### TEST

- [x] `scripts/lint/lint-web.ps1` green (eslint, var check, tsc, build)
- [x] An owner has looked at the page across the twelve themes (light and dark) and approved the tint strength (finer tuning may follow later)

### DEPLOY: feat/theme-presence

#### What does the change on this branch deploy to main?

##### Tier 0

A house theme now colours the whole page instead of a few controls: the page, cards, dividers and borders take a light tint of the theme's primary, h1/h2 and links take `--primary-ink` (the primary pulled towards the ink, so body-size contrast stays above AA on the tinted page), and the brand book's sidebar is themed with a solid-primary active link. Each tint is one per-mode token, so the strength is tuned in one place.

**Score:** 4

##### Tier 1

Internal design system; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change until an app adopts it after a house-style release.

**Score:** N/A

#### Pull Request

A theme tints the page, the surfaces, the headings and the brand book's navigation

