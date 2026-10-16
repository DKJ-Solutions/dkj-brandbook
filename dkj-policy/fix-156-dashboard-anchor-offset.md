## fix/156-dashboard-anchor-offset

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

Issue #156: on a dashboard page the settings button is sticky at the top right, so a card reached by an
in-page anchor scrolls flush to the top edge, under it; and a repo card on the connector preview has no way
back to the Overview table that links to it.

### CREATE

- [x] `src/dashboard/dashboard.css` and the house `.page-column`: every `[id]` in the column takes `scroll-margin-top: 5rem` (the showcase's offset).
- [x] Connector preview: the Overview card is `#overview`, and each repo card head carries a compact outline "Back to overview" button; its Gap note no longer lists this.
- [x] `house-style/README.md`: the anchor offset and the back button in the Repo dashboard section.

### TEST

- [x] Gates (`open-pr -GatesOnly`) pass.
- [x] An owner has looked at `/dashboards/dkj-claude-plugins` (a repo link in the Overview table, then "Back to overview") and approved it.

### DEPLOY: fix/156-dashboard-anchor-offset

#### What does the change on this branch deploy to main?

##### Tier 0

On a Repo dashboard, a card reached by an in-page link lands 5rem below the top, clear of the settings
button, in the React shell and in the stylesheet-only `.page-column` alike. On the dkj-claude-plugins
connector preview each repo card has a "Back to overview" button to the Overview table.

**Score:** 2

##### Tier 1

N/A: a developer's page on localhost; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

An app that takes this release and puts `.page-column` on its `<main>` gets `scroll-margin-top: 5rem` on
every element with an `id` in it, so an in-page link no longer lands under its settings button.

**Score:** 1

#### Pull Request

Dashboard: anchors land clear of the settings button, and a card links back to the overview

