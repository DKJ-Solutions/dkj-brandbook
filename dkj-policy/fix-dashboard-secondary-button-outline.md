## fix/dashboard-secondary-button-outline

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

- [x] Compare `.dkj-btn--default` and `.tile` and pick the fix: the secondary button takes the existing outline variant, no token or class added.

### CREATE

- [x] Give the "Preview other repo dashboards" button `variant="outline"` in `src/dashboard/RepoDashboard.tsx`.
- [x] Give the primary, outline and positive buttons a hover and press in `src/components/buttons.css`, following the default variant's pattern (existing `--primary-*` and `--positive-*` steps only).

### TEST

- [ ] An owner has looked at the Repo dashboard and approved it.

### DEPLOY: fix/dashboard-secondary-button-outline

The secondary action on the Repo dashboard ("Preview other repo dashboards") used the default button, which looked identical to the information tiles below it. It now uses the existing outline variant, so an action reads as an action and a tile as a tile.

The primary, outline and positive buttons also answer a hover and a press now, as the default button already did: primary and positive deepen their fill by one step, outline gets the tinted hover surface.

Only this repo's own pages change (the Repo dashboard and the showcase's buttons); no house token, class or house stylesheet is touched.

**Score:** 2

#### What makes this deploy extra special

No app that takes the brand book as its house style sees a difference: the change is one prop on one page and the hover states of the showcase's buttons, both in this repo, and the house stylesheet is unchanged.

**Score:** N/A

#### Pull Request

The dashboard's secondary button no longer looks like a tile

