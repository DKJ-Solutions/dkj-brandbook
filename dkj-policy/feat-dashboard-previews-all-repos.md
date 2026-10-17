## feat/dashboard-previews-all-repos

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

Every other DKJ-Solutions repo gets a dashboard preview on /dashboards/<repo>, like dkj-claude-plugins has. None of
them has a Repo dashboard of its own yet, so each preview proposes one in the fixed form (house-style README, "The Repo
dashboard"): the shared shell, the repo's own cards, "About this repo" and the footer note, with invented data only.

### CREATE

- [x] `src/dashboard/PlaceholderDashboard.tsx`: the fixed form with placeholder data, shared by the new previews
- [x] `src/dashboard/RepoPreviews.tsx`: six previews (etf-tracker, mesowise, music-library, recipes, thumbnail-generator, lifehub), each with its own cards
- [x] `src/dashboard/previews.ts`: the six registered, so the Repo dashboard's repo list links every one

### TEST

- [x] `scripts/lint/lint-web.ps1` green (eslint, var check, tsc, build)
- [ ] An owner has looked at /dashboards and the six new previews and approved them

### DEPLOY: feat/dashboard-previews-all-repos

Every DKJ-Solutions repo now has a dashboard preview on `/dashboards/<repo>`, not only dkj-claude-plugins. The six new
ones (etf-tracker, mesowise, music-library, recipes, thumbnail-generator, lifehub) each propose what that repo's own
Repo dashboard would show, in the one fixed form: the in-flight tiles and cards, one or two cards of the repo's own
(a last run, game data, syncs, the recipe collection, rounds, content checks), "About this repo" and a footer note
naming the data source. The data is invented placeholder data; three of the repos are private. The form with placeholder
data is one component, `PlaceholderDashboard`, so a further preview is one entry.

**Score:** 3

#### What makes this deploy extra special

N/A: the previews live on this repo's own dev server and change nothing a repo that takes the house style receives.

**Score:** N/A

#### Pull Request

Dashboard previews for every DKJ-Solutions repo

