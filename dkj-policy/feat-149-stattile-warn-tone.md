## feat/149-stattile-warn-tone

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

#### The approach

`StatTile` takes `tone="warn"`, coloured `--warning-5` (the text version `.msg--warn` already uses; no new token).
The house stylesheet has `.pos` / `.neg` but no warn text class, so the colour lives in the brand book's own
`metrics.css` as `.dkj-v--warn`, and `house-style.css` stays untouched.

### CREATE

- [x] `StatTile` (`src/components/Metrics.tsx`) takes `tone?: 'negative' | 'positive' | 'warn'`
- [x] `src/components/metrics.css`: `.tile .v.dkj-v--warn` in `--warning-5`
- [x] The showcase's StatTile grid shows a warn tile ("Warnings")
- [x] The connector dashboard preview's Notes tile takes `tone="warn"`, and its Gap note keeps only the tile grouping, filed as #158

### TEST

- [x] The lint gate (`open-pr -GatesOnly`)
- [x] An owner has looked at the warn tile on `/showcase#StatTile` and the Notes tile on `/dashboards/dkj-claude-plugins`, in a light and a dark theme, and approved it

### DEPLOY: feat/149-stattile-warn-tone

#### What does the change on this branch deploy to main?

##### Tier 0

`StatTile` takes `tone="warn"`, which colours its figure in the warning colour (`--warning-5`), for a count of notes
or warnings. The showcase shows one, and the connector dashboard preview's Notes tile uses it.

**Score:** 2

##### Tier 1

N/A: a component of the brand book's React layer; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet and theme script are untouched.

**Score:** N/A

#### Pull Request

StatTile takes a warn tone
