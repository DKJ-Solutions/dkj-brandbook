## fix/207-grid-card-margin

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
> For tier 2 audiences: the user who relies on what this repo ships, and decides whether to take the next version -- a subscriber of a service, or the user of a tool, its own maintainer included. That reader and nobody else -- what matters only
> inside this repo belongs under the first `**Score:**`. If the change reaches that reader
> not at all, N/A is a complete answer and the common one. **One hop and no further:** where that
> reader is itself a business, ITS own customers sit one hop past this repo and are never the reader
> here -- they take nothing this repo ships. Name the party that runs the upgrade, and score
> against them.
>
> The phase arc, the marks and the whole form: `DEVELOPMENT-portable.md`, which ships
> with this workflow.

### PLAN

`.card` carries `margin-top: var(--spacing-4)`, and inside a `.grid-2` that comes on top of the grid's own
`gap`, so rows sit 32px apart and the first row 16px below the grid's top (#207). `.page-column` already
zeroes the same margins for its direct children; `.grid-2` gets the same rule.

### CREATE

- [x] `house-style.css`: `.grid-2 > .card, .grid-2 > .tiles, .grid-2 > .notice { margin-top: 0; }`
- [x] `house-style/README.md`: the page-column paragraph names `.grid-2` too

### TEST

- [x] Gates green (`open-pr -GatesOnly`)
- [x] An owner has looked at a `.grid-2` of cards (the showcase's house-app section) and approved it

### DEPLOY: fix/207-grid-card-margin

Inside the brand book itself nothing a reader relies on changes beyond the house stylesheet.

**Score:** N/A

#### What makes this deploy extra special

A `.card`, `.tiles` or `.notice` directly inside a `.grid-2` no longer adds its own top margin to the grid's
gap: rows of cards sit one `--spacing-4` apart instead of two, and the first row starts at the grid's top. A
repo that zeroed it in its own page layer can drop that rule.

**Score:** 2

#### Pull Request

.card's margin-top doubles the gap inside .grid-2

