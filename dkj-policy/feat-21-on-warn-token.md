## feat/21-on-warn-token

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

Issue #21: no house token for text on a `--warn` fill, so the brand layer carried a literal
`--dkj-on-warn: #0b0b0b` that would silently diverge if the house ink moved.

#### Design choice (Gwen)

One `--on-warn: #0b0b0b` in `:root`, not one per theme as the issue suggests: `--warn` is orange or yellow
in every mode and theme, so the value is the same everywhere, and a dark block that restated it would
only be a second copy to keep in step. The comment says a theme that ever moves `--warn` to a dark colour
redefines `--on-warn` beside it. Contrast re-measured on every fill: 6.4:1 light, 6.3:1 Roest, 12.5:1 dark,
7.8:1 Geel.

### CREATE

- [x] `house-style/house-style.css`: `--on-warn`, with the measurements.
- [x] `house-style/README.md`: `--on-warn` in the Status row.
- [x] Brand layer: `--dkj-on-warn` removed; `.dkj-tag--warn` uses `var(--on-warn)`.

### TEST

- [x] The gates (`open-pr -GatesOnly`) are green (the custom-property check proves no `var(--dkj-on-warn)` is left).
- [ ] The owners have looked at the warn TitleTag in the Surfaces section (`npm run dev`) in a light, a dark, the
      Roest and the Geel theme, where it should render exactly as before, and approved it.

### DEPLOY: feat/21-on-warn-token

#### What does the change on this branch deploy to main?

##### Tier 0

The house style has a `--on-warn` token for text and icons on a `--warn` fill, dark in every theme. An app that wrote its own dark literal on a warning fill can point at it instead; the brand book's warn tag already does, and renders as before.

**Score:** 2

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

Not relevant to management: one shared colour token.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

Not relevant to a subscriber: nothing they see changes.

**Score:** N/A

#### Pull Request

House style: an --on-warn token for content on a --warn fill

