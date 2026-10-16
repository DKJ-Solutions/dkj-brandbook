## feat/repo-dashboard-previews

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

Owner's choice A: start with dkj-claude-plugins only (its connector dashboard); placeholder data, a button from the Repo dashboard.

### CREATE

- [x] Extract the shared dashboard shell (intro, in-flight tiles and cards) from `RepoDashboard.tsx` into `DashboardShell.tsx`
- [x] New route `/dashboards` (`DashboardPreviews.tsx`) with a repo selector, and a button to it on the Repo dashboard
- [x] `ConnectedReposPreview.tsx`: dkj-claude-plugins' connector dashboard recreated in the shell with placeholder data, each misfit marked "Gap: ..."
- [x] Code review (Victor): no bugs; four cleanups applied
- [x] Owner's look, round 1: the one-option selector is gone (its corner bug filed as #146), the preview is framed apart from the page
- [x] Owner's look, round 2: `/dashboards` is a menu of every preview, each on `/dashboards/<repo>`
- [x] Owner's look, round 3: a new `Breadcrumbs` component (brand-book original, in the showcase under Overlays & navigation) on both pages
- [x] Owner's look, round 4: the breadcrumbs as a full-width `--primary-2` bar (`Breadcrumbs bar`) above the page, no shadow
- [x] Owner's look, round 5: a "DKJ-Solutions repos" card on the Repo dashboard, every repo with its GitHub, app preview and dashboard preview links (the repo list moved to `src/repos.ts`, the preview registry to `src/dashboard/previews.ts`)

### TEST

- [x] `scripts/lint/lint-web.ps1` green
- [ ] An owner has looked at `/dashboards` and approved it

### DEPLOY: feat/repo-dashboard-previews

#### What does the change on this branch deploy to main?

##### Tier 0

The Repo dashboard has a button to `/dashboards`, a menu of previews of other repos' Repo dashboards in this repo's dashboard
shape, each on `/dashboards/<repo>`, starting with dkj-claude-plugins' connector dashboard. A new `Breadcrumbs` component links the pages, and a "DKJ-Solutions repos" card on the Repo dashboard lists every repo that follows the brand book with links to its previews. The data is placeholder data, and every place where the content does
not fit the shape is marked on the page as a gap.

**Score:** 3

##### Tier 1

N/A: a developer's page on localhost; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet and theme script are untouched.

**Score:** N/A

#### Pull Request

Preview other repos' Repo dashboards in the brand book's dashboard shape

