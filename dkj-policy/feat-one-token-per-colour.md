## feat/one-token-per-colour

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

The owner wants every colour to point at one token, not a `color-mix()` of two. No new house token: each mix
takes the existing step it came closest to.

### CREATE

- [x] Tinted surfaces (a little `-5`/`-7` through the card) take `--primary-3`; accent lines (`-5` through `-3`)
  take `--primary-4`; the 2px table rules (`-7` half through `-3`) take `--primary-5`; the outline button's
  text takes `--primary-7`; `::selection` takes `--primary-3`
- [x] The alert takes `--negative-1`; the positive panel `--positive-1` with a `--positive-3` border; the info
  dialog and info rows keep the card (`--primary-2`) with a `--cat-1` border
- [x] TintedPanel's local `--part` is gone: each tone names its border and background token directly
- [x] Comments that described a mix say which token it is now
- [~] The theme picker's swatches keep their mix: each previews ANOTHER theme's page, whose tokens the current
  theme does not carry, so there is no token to point at
- [x] Lint gate green (`scripts/lint/lint-web.ps1`)

### TEST

- [x] An owner has looked at the showcase, on light and dark themes, and approved it

### DEPLOY: feat/one-token-per-colour

#### What does the change on this branch deploy to main?

##### Tier 0

Every colour in the components and the showcase points at one house token instead of a `color-mix()` of two:
tinted surfaces are `--primary-3`, accent lines `--primary-4`, the alert `--negative-1`, the positive panel
`--positive-1`, and the info dialog and info rows a `--cat-1` border on the card. Only the theme picker's
swatches still mix, because each previews another theme.

**Score:** 3

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

N/A: tints inside the brand book's own components; management sees no difference.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

N/A: the apps see only the `::selection` change, when they take a new copy of the house style.

**Score:** N/A

#### Pull Request

Every colour points at one house token: no more color-mix() between two

