## feat/repo-default-themes

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

- [x] Gwen: one default pair per repo, then (owner's correction: one theme, not two) one unique default theme per repo, documented in `house-style/README.md` ("Which theme applies")
- [x] Cody: `DEFAULT_THEMES` in `src/repos.ts`, a Default theme column in the Repo dashboard, and `useRepoDefaultTheme` so `#preview/<repo>` and `/dashboards/<repo>` open in that repo's default (a viewer's own pick still wins)
- [x] `house-theme.js`: `data-theme-default` (any of the twelve), resolved after the user's choice and before the light/dark pair; `index.html` declares `blue`
- [x] Victor and Edith reviewed; their points are applied

### TEST

- [x] Lint gate green (`scripts/lint/lint-web.ps1`)
- [x] An owner has looked at the Default theme column and a repo preview in its own default theme and approved it

### DEPLOY: feat/repo-default-themes

Every DKJ-Solutions repo has one default theme of its own, and all eight differ, so the apps are told apart
before anyone picks a theme. `house-theme.js` reads it from `<html data-theme-default="<id>">`, after the
user's own choice and before the light/dark pair, which keeps working for an app that has not moved yet; the
theme fixes the app's mode. `src/repos.ts` carries the eight (`DEFAULT_THEMES`, typed so a missing repo fails
`tsc`) and `house-style/README.md` lists them. The Repo dashboard shows each repo's default, and a repo's app
preview and dashboard preview open in it unless the viewer has picked a theme.

**Score:** 3

#### What makes this deploy extra special

Every DKJ-Solutions app gets a default theme of its own, and an app declares it with one attribute on its
`<html>`.

**Score:** 3

#### Pull Request

every DKJ-Solutions repo gets a default theme of its own

