## feat/137-repo-dashboard-index

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

Issue #137: the index of the dev server is the Repo dashboard (DKJ-Solutions/dkj-claude-plugins#3064), and the showcase
moves to `/showcase`. Routing by path in `src/main.tsx`, no router dependency; in-flight data is read live from the public
GitHub API.

### CREATE

- [x] `src/routes.ts`: the two paths; `src/main.tsx` renders the dashboard on `/` and the showcase on `/showcase`, and sends an old `/#section` link on to `/showcase#section`
- [x] `src/dashboard/RepoDashboard.tsx` + `dashboard.css`: summary, a button to the showcase, counts and tables of open PRs, open issues (by priority) and branches off `main`, built from the house components
- [x] The showcase nav links back to the Repo dashboard; `Toolbar` works without the width controls
- [x] `Get-DevPreview` label is `Repo dashboard`; README and `.claude/rules/this-repo.md` name both routes
- [~] A `ProductPath`-style field: dropped here, because #3064 is not released yet; tracked in #138

### TEST

- [x] Lint gate green (`scripts/lint/lint-web.ps1`)
- [x] The dev server serves `/`, `/showcase` and `/showcase/`; the GitHub API answers with CORS open
- [x] An owner has looked at the Repo dashboard and the moved showcase and approved it

### DEPLOY: feat/137-repo-dashboard-index

#### What does the change on this branch deploy to main?

##### Tier 0

The dev server's index is now the Repo dashboard: what this repo is for, the open pull requests, issues and branches, and a
button to the brand book, which moved to `/showcase` (#137). Old `/#section` links still land on their section.

**Score:** 3

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

N/A: a developer's page on localhost; nothing a commissioner sees changes.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

N/A: the house stylesheet and theme script are untouched.

**Score:** N/A

#### Pull Request

Repo dashboard on the index, showcase on its own route

