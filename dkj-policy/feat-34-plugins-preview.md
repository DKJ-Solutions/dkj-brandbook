## feat/34-plugins-preview

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

This branch is #34: a recreated preview for `DKJ-Solutions/dkj-claude-plugins`, which is a plugin repo and has no app. Its only screens are two generated pages, each served by a Cloudflare Worker, so the preview recreates those two with placeholder content and switches between them in the page header, the way `EtfPreview` switches its views. Only existing brand-book components are used; nothing lifted into the brand book, so `sources.ts` is untouched.

#### What the preview shows

- **Issue dashboard (first screen):** a muted generated-at and count line, count rows (`BadgeRow`) "Sweepable n" and "Skip n", a "Read with care" warning banner with a bullet list, then a table of open issues: number and title, the labels as text, and the muted detail line (assigned, blocked by, unblocks, PR) under the title. Skipped rows carry the reason in that detail line and a negative tone on the issue cell. The repo is in the page title, as in the worker's heading. The empty state "No open issues" is the table's `empty` row.
- **Release notes:** an eyebrow tag with the product name, the heading, a muted subtitle, a card with one closed disclosure per release (version · title · date) whose body has group headings, lists and code, and a snapshot note.
- **Footer note** says the real product of the repo is a plugin (policy, skills, scripts), not an app.
- **Gaps (no component, rendered as closely as possible):** the whole-row red tint of a skipped issue (only the issue text goes red); the `#number` as its own left column (it is bold text in the first cell); the repo name above each issue title; a disclosure summary with an accent-coloured version, a chip and a date (the summary is plain text, so it reads "v2.1.0 · title · date"; structured summary: #44); rendered markdown prose (headings, lists and code are plain elements and `GroupHeading`, with no prose component; Prose: #43); the page masthead eyebrow, which is a `TitleTag`.

### CREATE

- [x] `src/showcase/previews/PluginsPreview.tsx`: the issue dashboard and the release notes page, switched with a `SegmentedChoice` in the `PageHeader`, built from existing components only.
- [x] `src/showcase/previews/RepoPreview.tsx`: `dkj-claude-plugins` registered in `PREVIEWS`.
- [x] `src/apps/registry.ts`: the `dkj-claude-plugins` entry with its two screen views (`PLUGINS_VIEWS`).
- [x] `npx eslint src` and `npx tsc -b` are clean.

### TEST

- [x] Rebecca researched the two screens read-only in `dkj-claude-plugins`; Victor reviewed the diff: nothing blocking. Applied: no badge-only cells (badges are `aria-hidden`), so the skip reason is text in the detail line and the counts are `BadgeRow`s; no invented status column; the repo in the page title; release rows as version · title · date, with no invented table. Filed the two component gaps as #43 and #44.
- [x] The gates (`open-pr -GatesOnly`) are green.
- [x] An owner has looked at the dkj-claude-plugins preview (`npm run dev`, the repo list in the navigation) and approved it (October 13, 2026).

### DEPLOY: feat/34-plugins-preview

#### What does the change on this branch deploy to main?

##### Tier 0

The repo list in the showcase navigation now opens a recreated preview of `dkj-claude-plugins` as well. That repo has no app, so the preview shows the two pages it generates, the issue dashboard and the release notes page, built from brand-book components with placeholder content.

**Score:** 2

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

Recreated preview for dkj-claude-plugins

