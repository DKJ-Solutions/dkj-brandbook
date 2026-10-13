## feat/7-house-style-source

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

Owner's choice on #7 (Maikel, October 13, 2026): the house style becomes the brand book's one token
source, and the brand book gains an overview of apps, their views and the components each uses,
starting with Mesowise.

### CREATE

- [x] Gwen: map tokens/ onto house tokens, add the --dkj-* layer (src/brand-layer.css), rewrite the component CSS
- [x] Rebecca: inventory Mesowise's views and the components each uses
- [x] Cody: load house-style.css + inline house-theme.js, swatch picker in the toolbar, live Foundations, Apps section and "Used in"
- [x] Remove tokens/

### TEST

- [x] Gate green (lint-web.ps1)
- [x] Victor's review handled (old token names in demo tsx, Icon fallback, redundant listener, heading levels); a gate check for undefined CSS vars filed as #9

### DEPLOY: feat/7-house-style-source

#### What does the change on this branch deploy to main?

##### Tier 0

The brand book runs on the house style alone: `tokens/` is gone, the mirrored Mesowise components use
the house tokens plus a small `--dkj-*` layer, and the showcase's swatch picker reskins every component
in all twelve house themes with one click. A new Apps overview lists each DKJ-Solutions app with its
views and the components they are built from, starting with Mesowise, and every component shows where
it is used.

**Score:** 4

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

One overview of every app's components, all on one style, is what lets the owners check and change
the DKJ-Solutions look in one place.

**Score:** 3

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

Not relevant to a subscriber: no DKJ-Solutions app changes yet.

**Score:** N/A

#### Pull Request

Mesowise components on the house style, plus an apps overview

