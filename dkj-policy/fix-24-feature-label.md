## fix/24-feature-label

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

Issue #24: `feat/` work was labelled `enhancement`, from the specialists-init scaffold's example (filed
upstream as DKJ-Solutions/dkj-claude-plugins#2961); the owner chose `feature`, the name upstream renamed to
in #2764.

### CREATE

- [x] On the tracker: `enhancement` renamed to `feature` (`gh label edit`), so #18, #20, #21 and the
      earlier PRs carry `feature` now, without a second label beside the old one.
- [x] `scripts/lib/branch-info.ps1`: `feat` maps to `feature`, with the reason beside the table.

### TEST

- [x] Nothing else in the repo names `enhancement`; `ship-pr` labels this repo's next `feat/` PR from the
      table, which the tracker's label now matches.

### DEPLOY: fix/24-feature-label

#### What does the change on this branch deploy to main?

##### Tier 0

A `feat/` pull request and a feature issue are labelled `feature` instead of `enhancement`, as on the plugin source's tracker; the existing items moved with the renamed label.

**Score:** 1

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

Not relevant to management: a tracker label name.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

Not relevant to a subscriber: nothing they see changes.

**Score:** N/A

#### Pull Request

Label feat/ work 'feature' instead of 'enhancement'

