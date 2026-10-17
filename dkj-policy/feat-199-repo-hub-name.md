## feat/199-repo-hub-name

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

#199: the index page of a repo's dev server is renamed from Repo dashboard to Repo hub, everywhere the
house style fixes the name. Name only: file names (`patterns/repo-dashboard.html`, `RepoDashboard.tsx`),
identifiers, CSS classes and URL paths keep theirs, and historical changelog and release files are not
rewritten. The issue leaves the file names to the owner; keeping them is the default here, because consumers
link `patterns/repo-dashboard.html` by path.

### CREATE

- [x] `house-style/README.md`: the section "The Repo hub" (block 0 crumb, block 4 `h1`), the breadcrumb trail, the reason (Gwen)
- [x] `house-style/patterns/repo-dashboard.html` and the comments in `house-style.css` (Gwen)
- [x] `src/` (the index, the crumbs, the previews page and the preview titles), root `README.md`, `scripts/repo-config.ps1` (Cody)
- [x] `.claude/rules/this-repo.md` (Tessa)

### TEST

- [ ] An owner has looked at the Repo hub (`/`), the hub previews (`/dashboards`) and the showcase crumb, and approved them

### DEPLOY: feat/199-repo-hub-name

The index of a repo's dev server is now called the Repo hub instead of the Repo dashboard (#199): the index
gets you to the page you want, and the pages below it can be dashboards. The house style fixes the new name
word for word as the `h1`, the one crumb on the index and the first crumb on every other page;
`house-style/README.md`, `patterns/repo-dashboard.html`, this repo's own index, its previews page ("Repo hub
previews") and the previews follow. File names, components, classes and URL paths are unchanged.

**Score:** 3

#### What makes this deploy extra special

The index page of a DKJ-Solutions dev server is now called **Repo hub**. An app that takes this house-style
version changes its index `h1`, its `<title>` and the first crumb of its breadcrumb bar from "Repo dashboard"
to "Repo hub"; nothing else changes.

**Score:** 3

#### Pull Request

Repo hub: rename the index page

