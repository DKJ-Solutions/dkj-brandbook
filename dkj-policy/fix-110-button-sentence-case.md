## fix/110-button-sentence-case

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

Resolves #110, on the owner's decision recorded there (maikel-bwj, October 15, 2026): every button takes one
case, sentence case. The compact size drops `text-transform: uppercase` and the caps tracking.

### CREATE

- [x] `.dkj-btn--compact` (`src/components/buttons.css`) no longer sets `text-transform: uppercase` or
  `letter-spacing: var(--dkj-tracking-caps)`; it keeps its 36px height, small bold type and 44px tap area.
- [x] The comments that called compact buttons uppercase (`src/brand-layer.css`, `Button.tsx`) and the
  showcase demo label (`Compact (uppercase)` -> `Compact`) say so no longer. `--dkj-tracking-caps` stays: the
  panel label (`.dkj-panel-label`) still uses it.

### TEST

- [x] `open-pr -GatesOnly` passes.
- [ ] An owner has looked at Actions -> Button (the Compact demo) and the compact buttons in the app previews
  (Back, Open recipe, Open dossier, Clear filters, Shopping list) beside a default-size button, and approved it.

### DEPLOY: fix/110-button-sentence-case

#### What does the change on this branch deploy to main?

##### Tier 0

Compact buttons are in sentence case like every other button, so two sizes on one screen no longer read as two styles (#110).

**Score:** 2

##### Tier 1

Back, Open recipe, Clear filters and the other compact buttons render in sentence case instead of tracked capitals.

**Score:** 2

##### Tier 2

N/A: the compact button lives in the brand book's own component layer; the house stylesheet the apps take is untouched.

**Score:** N/A

#### Pull Request

Buttons: every size is in sentence case
