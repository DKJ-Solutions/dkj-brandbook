## feat/colour-tokens-by-switch

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

The owner asked to group the colour tokens by what a theme switch does to them: the ones that change
with every theme, and the ones that change only between light and dark. Read off the token blocks in
`house-style/house-style.css`, a third group is left over (the same in every theme), and `--warn` sits in
the light/dark group with one exception (Roest and Geel move it). The house style's values do not change.

### CREATE

- [x] `src/showcase/sections/Foundations.tsx`: `HOUSE_COLORS` regrouped into three groups -- every
  theme, light and dark only, never
- [x] `house-style/README.md`: a second table under "What it holds" with the same three groups
- [x] The light/dark group split in two, in both places: black, white and grey, and colours (owner's follow-up)
- [x] `--on-warn` removed from the house style (owner's follow-up); its one user, `.dkj-tag--warn`, now takes
  `--ink`. Known effect: on the dark themes that is white text on the yellow warning fill
- [x] `--good` gets a dark value of its own, `#25b225` (halfway to `--up`), so it lightens on dark like `--up` and `--bad`; it moves to the light/dark colours group (owner's follow-up)
- [x] `--good` and `--up` renamed to `--positive-good` and `--positive-up` everywhere they are used as a token; class modifiers such as `.badge--good` and `.delta--up` keep their names (owner's follow-up)
- [x] `--loss` and `--bad` renamed to `--negative-loss` and `--negative-bad`, including the `LegendItem` colour `negative-loss`; `.badge--bad` and `.meter--bad` keep their names (owner's follow-up)
- [x] `--down` renamed to `--negative-down`; `.delta--down` keeps its name (owner's follow-up)
- [x] Lint gate green

### TEST

- [ ] An owner has looked at the Tokens section of the showcase and approved the grouping

### DEPLOY: feat/colour-tokens-by-switch

#### What does the change on this branch deploy to main?

##### Tier 0

**Score:**

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

**Score:**

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

**Score:**

#### Pull Request

Group the colour tokens by what a theme switch changes

