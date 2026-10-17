## feat/breadcrumbs-every-page

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

Owner's request (October 17, 2026): breadcrumbs across every page the preview browser shows, in this repo and
in every repo that follows the house style.

### CREATE

- [x] `house-style.css`: the breadcrumbs as house classes (`.breadcrumbs`, `__sep`, `.breadcrumbs-bar`)
- [x] `house-style/README.md`: the rule "Every page: the breadcrumb bar", the reserved names, block 0 of the Repo dashboard
- [x] `patterns/repo-dashboard.html`: the bar as block 0
- [x] The Repo dashboard and the showcase (and its repo previews) render the bar; the sidebar's own back link is gone
- [x] Owner's follow-up: the bar sticks to the top and is always visible; one `--tap` high, one line; the settings button, the showcase sidebar and in-page anchors sit under it
- [x] Owner's follow-up: the showcase's contents (`.dkj-nav`) is a drawer, opened from a round menu button beside the settings button; a link closes it, and the page takes the full width
- [x] Owner's follow-up: in the showcase the breadcrumb trail and `.dkj-main` start on one line (same width, same side padding)

### TEST

- [x] `scripts/lint/lint-web.ps1` green
- [ ] An owner has looked at the bar on `/`, `/showcase`, `/showcase#preview/<repo>` and `/dashboards`, and the contents drawer, and approved it

### DEPLOY: feat/breadcrumbs-every-page

Every page of the dev server now opens with the same breadcrumb bar, stuck to the top so it is always visible: the Repo dashboard, the showcase and
its repo previews, next to the dashboard previews that already had one. The showcase's
contents moved from a fixed sidebar into a drawer, opened from a menu button beside the settings button, so
the showcase has the full width; its "Repo dashboard" link went, because the bar is now the way back.

**Score:** 3

#### What makes this deploy extra special

A house rule for every DKJ-Solutions app: each page a dev server serves opens with a breadcrumb bar starting
at **Repo dashboard** and stuck to the top of the screen. The house stylesheet carries it as `.breadcrumbs-bar` / `.breadcrumbs`, so an app
without React gets it too; the Repo dashboard pattern shows it as block 0. An app that takes the update adds
the bar to its pages and moves any sticky element of its own from `top: 0` to `top: var(--tap)`.

**Score:** 3

#### Pull Request

A breadcrumb bar on every page of the dev server, as a house rule

