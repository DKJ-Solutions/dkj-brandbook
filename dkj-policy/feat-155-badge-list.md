## feat/155-badge-list

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

Issue #155: the connector preview renders its signals as one `BadgeRow` `<div>` per line, with no list
semantics. (The issue also names missing spacing; that part does not hold -- `.badge-row` already carries a
`--spacing-2` top margin.) A `BadgeList` renders a `<ul>` of `.badge-row` items, on a new house class.

### CREATE

- [x] House `.badge-list`: a bare `<ul>`; its `.badge-row` items align on the baseline, so a wrapped text keeps its badge on the first line.
- [x] `BadgeList` in `src/components/Metrics.tsx`, with a demo under the showcase's Badge section.
- [x] The connector preview's signals use it; its Gap note no longer lists this.
- [x] `house-style/README.md` names `.badge-list` in the class list.

### TEST

- [x] Gates (`open-pr -GatesOnly`) pass.
- [x] An owner has looked at the BadgeList demo on `/showcase#Badge` and the repo cards' checks on `/dashboards/dkj-claude-plugins`, and approved them.

### DEPLOY: feat/155-badge-list

#### What does the change on this branch deploy to main?

##### Tier 0

A `BadgeList` component and a house `.badge-list` class: several badged items as a real list (`<ul>`), with a
wrapped item keeping its badge on the first line. The dkj-claude-plugins connector preview lists its checks
with it.

**Score:** 2

##### Tier 1

N/A: a developer's page on localhost; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

An app that takes this release can mark up a list of status lines as `.badge-list`, and a screen reader then
announces it as a list; an app with its own class named `.badge-list` renames it.

**Score:** 1

#### Pull Request

BadgeList: a list of badged items

