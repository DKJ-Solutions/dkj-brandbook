## feat/151-datatable-warn-tone

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

A cell tone gains `warn` (`--warning-5`, the text version `.msg--warn` uses), and a `DataRow` takes a `tone` of its
own that tints the whole row with the status background: `--negative-1`, `--positive-1` or `--warning-1`, the step
the house `.notice` uses. Every token exists in the light and dark themes; `house-style.css` stays untouched. The
shared `Tone` type also reaches `DefinitionList`, which gains the warn value tone with it.

#### Collision

`feat/150-datatable-column-align` (parked for an owner's look) changes `Table.tsx` and the same Gap note in
`ConnectedReposPreview.tsx`; whichever ships second merges the trunk in and keeps both changes.

### CREATE

- [x] `src/components/Table.tsx`: `Tone` takes `'warn'`; `DataRow` takes `tone`, rendered as `.dkj-row-<tone>` on its `<tr>`
- [x] `src/components/tables.css`: `.dkj-tone-warn` and `.table .dkj-row-negative` / `-positive` / `-warn`
- [x] The showcase's DataTable section has a "Row and cell tones" demo
- [x] The connector dashboard preview's Overview tints a bad repo's row negative and a warn repo's row warn, and its Gap note drops the warn row

### TEST

- [x] The lint gate (`open-pr -GatesOnly`)
- [ ] An owner has looked at the "Row and cell tones" demo on `/showcase#DataTable` and the Overview table on `/dashboards/dkj-claude-plugins`, in a light and a dark theme, and approved it

### DEPLOY: feat/151-datatable-warn-tone

#### What does the change on this branch deploy to main?

##### Tier 0

A `DataTable` cell takes the tone `warn` (the warning colour), and a row takes a `tone` of its own (`negative`,
`positive` or `warn`) that tints the whole row with the matching status background. The showcase has a demo of both,
and the connector dashboard preview tints its failing and warning repos.

**Score:** 2

##### Tier 1

N/A: a component of the brand book's React layer; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet and theme script are untouched.

**Score:** N/A

#### Pull Request

DataTable takes a warn tone for a row or cell
