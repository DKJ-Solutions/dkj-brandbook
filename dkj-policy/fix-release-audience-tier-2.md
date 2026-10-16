## fix/release-audience-tier-2

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

`Get-ReleaseAudienceTier` was never answered here, so every branch document was scaffolded in the
older per-tier shape and the changelog tally dropped its fraction. An owner chose tier 2.

### CREATE

- [x] `scripts/repo-config.ps1`: `Get-ReleaseAudienceTier` returns 2

### TEST

- [x] This document's own DEPLOY section is in the tier-2 shape, and the lint gate passes

### DEPLOY: fix/release-audience-tier-2

The repo now states its release audience as tier 2, so `new-branch` scaffolds an entry with tier 0
under the DEPLOY heading and one `What makes this deploy extra special` section, and the changelog tally
counts how many pending entries reach that audience. Entries already in the changelog keep their shape.

**Score:** 2

#### What makes this deploy extra special

N/A: the house stylesheet and theme script are untouched; no app that takes a release notices this.

**Score:** N/A

#### Pull Request

Release audience tier stated as 2

