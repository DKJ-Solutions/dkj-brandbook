## feat/primary-4-further-from-5

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

The owner asked for `--primary-4` to move a big step towards the ground: much darker on the dark themes,
much lighter on the light themes. Each theme's `-4` keeps its OKLCH hue and chroma; only its lightness moves.

### CREATE

- [x] `house-style.css`: `--primary-4` at L 0.70 on light (was 0.55) and L 0.38 on dark (was 0.458), in all
  twelve themes and both defaults; the token comment says so
- [x] Lint gate green (`scripts/lint/lint-web.ps1`)

### TEST

- [ ] An owner has looked at `--primary-4` in the showcase, on light and dark themes, and approved it

### DEPLOY: feat/primary-4-further-from-5

#### What does the change on this branch deploy to main?

##### Tier 0

`--primary-4` moves a big step towards the ground in every theme: OKLCH lightness 0.70 on light (was 0.55)
and 0.38 on dark (was 0.458), each theme keeping its hue and chroma. It has no role yet, so nothing in the
house style changes on screen beyond the swatch.

**Score:** 2

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

N/A: a token with no role yet; management sees no difference.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

N/A: no subscriber-facing surface uses `--primary-4`.

**Score:** N/A

#### Pull Request

--primary-4 moves a big step towards the ground: lighter on light, darker on dark

