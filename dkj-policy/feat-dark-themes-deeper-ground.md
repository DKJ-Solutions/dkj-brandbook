## feat/dark-themes-deeper-ground

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

Owner's request (October 14, 2026): on the dark themes `--primary-1` to `-3` a little darker, `--primary-5` a lot lighter.

### CREATE

- [x] Six dark themes plus the OS-dark default: `-1`, `-2`, `-3` 0.04 OKLCH lightness darker, `-5` 0.12 lighter, hue and chroma kept
- [x] Stated contrasts in the stylesheet comment and the README remeasured; the derivation names the shift
- [x] Lint gate green

### TEST

- [ ] An owner has looked at the six dark themes in the showcase and approved them

### DEPLOY: feat/dark-themes-deeper-ground

#### What does the change on this branch deploy to main?

##### Tier 0

On the six dark themes (and the OS-dark default) the page, the cards and the lines (`--primary-1` to `-3`) are a
shade darker and all text (`--primary-5`) is clearly lighter, each in its own hue and chroma. Text on the page now
reaches 9.5:1 or better on dark, up from 5.5:1. No token is added or renamed; a consuming repo only takes the new copy.

**Score:** 2

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

The dark themes read with more contrast; nothing to act on.

**Score:** 2

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

On a dark theme a user sees a deeper background and brighter, easier-to-read text.

**Score:** 2

#### Pull Request

Dark themes: deeper ground (-1 to -3), lighter text (-5)

