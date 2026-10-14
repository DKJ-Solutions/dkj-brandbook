## feat/drop-dkj-colour-tokens

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

Owner's request (Maikel, October 14, 2026): remove all DKJ colour tokens. Owner's choice of route:
inline on house tokens -- every use reads the house token directly, and the tinted dialogs re-declare the
house colour tokens in their own subtree instead of a `--dkj-*` alias.

### CREATE

- [x] The 14 `--dkj-*` colour tokens removed from `src/brand-layer.css`; the layer adds no colour
- [x] Every use reads the house token (`--primary`, `--surface`, `--on-primary`, `--good`, `--up`); the
  single-use tints are written inline, the backdrop is `rgb(0 0 0 / 0.45)` at `.dkj-dialog::backdrop`
- [x] Accent and info dialogs: the dialog's `--surface` and border mix the tint over the house surface
  recipe; `.dkj-dialog--info > *` re-declares `--primary: var(--cat-1)` and `--on-primary`
- [x] Showcase Foundations: the layer-colour swatch list removed
- [x] README.md and house-style/README.md rule 3: the layer adds no colour; a component subtree may
  re-declare a house colour token, and tinted dialogs are not nested (#81)
- [x] Code review (Victor): no dangling refs, `> *` reaches everything in the dialog; nested tinted
  dialog limit filed as #81
- [x] Lint gate green (`scripts/lint/lint-web.ps1`)

### TEST

- [x] An owner has looked at the showcase (buttons, forms, the accent and info dialogs, alerts) in a few
  themes, light and dark, and approved it (Maikel, October 14, 2026: "ziet er goed uit, ship beide")

### DEPLOY: feat/drop-dkj-colour-tokens

#### What does the change on this branch deploy to main?

##### Tier 0

The brand book's own layer (`src/brand-layer.css`) no longer defines any colour: the 14 `--dkj-*`
colour tokens are gone and every component reads the house tokens directly. The info and accent dialogs
re-declare `--primary` / `--surface` inside their own subtree to tint their contents, which
house-style/README.md rule 3 now allows as its one narrow exception. Inside a tinted dialog, the info
rows and alerts now mix over the dialog's tinted surface rather than the page's.

**Score:** 2

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

Internal to the brand book's own component layer; management sees nothing change.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

The house stylesheet every app loads is unchanged, so no user of a DKJ-Solutions app sees a difference.

**Score:** N/A

#### Pull Request

Drop the --dkj-* colour tokens; components use house tokens directly
