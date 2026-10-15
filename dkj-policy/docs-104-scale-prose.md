## docs/104-scale-prose

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

#104: two passages describe the primary steps by an older numbering. Rewrite both against the current
nine-step scale, with the contrast figures measured again rather than renumbered.

### CREATE

- [x] `house-style/README.md`, **How the values were made**: the six-step recipe replaced by the current rule
  (one OKLCH lightness and chroma per step per mode, hue per theme) and a table of each step's lightness
- [x] `house-style/README.md`, **Measured**: every figure measured again on the current tokens (worst theme
  named), `--primary-7` described as the highlight
- [x] `house-style/house-style.css`, the role list: `-7` is the highlight (links, h1 and h2, the states, native
  controls), no longer "all text that is not a paragraph"; the measured line says the same

### TEST

- [x] Contrast recomputed from the hex values in `house-style.css` for all twelve themes; the stylesheet
  comment's existing figures matched and are unchanged

### DEPLOY: docs/104-scale-prose

#### What does the change on this branch deploy to main?

##### Tier 0

The house style's README and the token comment describe the nine-step scale as it is (#104): the recipe gives
each step's OKLCH lightness in light and dark, the contrast figures are measured again on the current tokens,
and `--primary-7` is described as the highlight rather than as all text.

**Score:** 1

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

N/A: documentation only.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

N/A: no value changes.

**Score:** N/A

#### Pull Request

The scale's prose describes the nine steps as they are

