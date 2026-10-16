## feat/152-datatable-column-priority

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

`DataColumn` takes `priority?: 'low'`; a low column's `<th>` and `<td>`s carry `.dkj-col-low`, which a container
query on `.dkj-table-wrap` hides while the table is narrower than 760px, the house breakpoint `.grid-2` uses. The
wrapper is the container, so a table in a narrow card drops the column too, not only on a phone. `house-style.css`
stays untouched.

#### Collision

`feat/150-datatable-column-align` and `feat/151-datatable-warn-tone` (both parked for an owner's look) change the same
lines of `Table.tsx`, `tables.css` and the same Gap note; whichever ships later merges the trunk in and keeps every change.

### CREATE

- [x] `src/components/Table.tsx`: `DataColumn` takes `priority`, rendered as `.dkj-col-low` on the column's cells
- [x] `src/components/tables.css`: `.dkj-table-wrap` is an inline-size container; `.dkj-col-low` drops out below 760px
- [x] Review: the first column ignores priority, so the row labels always stay
- [x] The showcase's sortable demo gives Quantity `priority: 'low'`, and the section intro says so
- [x] The connector dashboard preview's Overview drops Visibility, Plugins, Installed and Checkout on a narrow screen, and its Gap note drops the column priority

### TEST

- [x] The lint gate (`open-pr -GatesOnly`)
- [x] An owner has looked at `/showcase#DataTable` and the Overview table on `/dashboards/dkj-claude-plugins` on a phone-width window, and approved it

### DEPLOY: feat/152-datatable-column-priority

#### What does the change on this branch deploy to main?

##### Tier 0

A `DataTable` column takes `priority: 'low'`, and such a column drops out while the table is narrower than 760px, so a
wide table fits a phone without scrolling sideways. The showcase's Quantity column and four of the connector
dashboard preview's eight Overview columns use it.

**Score:** 2

##### Tier 1

N/A: a component of the brand book's React layer; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet and theme script are untouched.

**Score:** N/A

#### Pull Request

DataTable takes a column priority for a narrow screen
