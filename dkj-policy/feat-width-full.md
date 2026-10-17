## feat/width-full

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

### CREATE

- [x] `full` joins the Width toggle (`theme.ts`, `Showcase.tsx`), and `App.tsx` gives the content `dkj-content--full`
- [x] `showcase.css`: under `full` the preview column and `.dkj-column` lose their maximum width
- [x] The dashboard pages get the Width toggle too, through one `DashboardMain` (`DashboardShell.tsx`): fluid keeps the house column, phone narrows it to 360px, full lifts its maximum and the breadcrumb trail follows
- [x] `full` is the default width until one is picked (`theme.ts`)

### TEST

- [x] Lint gate green (`scripts/lint/lint-web.ps1`)
- [ ] An owner has looked at the `full` width on the showcase, a repo preview and the Repo dashboard and approved it

### DEPLOY: feat/width-full

The preview settings get a third width, `full`, next to `fluid` and `phone`: the content takes 100% of the page
column, so a repo preview that keeps its own app column in `fluid` now stretches edge to edge. The Repo dashboard
and the dashboard previews carry the Width toggle as well, which they did not before: there `fluid` is the house
column, `phone` a 360px column and `full` the whole width. `full` is the default until a reader picks another width.

**Score:** 2

#### What makes this deploy extra special

A reader of the brand book can now judge a component or a recreated app at the full width of their screen.

**Score:** 2

#### Pull Request

A third preview width, full, that takes the whole page width

