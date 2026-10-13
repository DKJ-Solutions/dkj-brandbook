## feat/39-life-hub-preview

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

This branch is #39: a recreated preview for `DKJ-Solutions/life-hub`, a private, local Next.js app (no deploy, so no live URL). Its two screens are shown in the page header with a joined `SegmentedChoice`, the way `DjCylowPreview` and `RecipesPreview` do. Only existing brand-book components are used; nothing lifted into the brand book, so `sources.ts` is untouched. The repo is private and holds personal information, so only the app code was read; every dossier, category, app, date and document here is invented and generic, and only the structure of the real screens is described.

#### What the preview shows

- **Hub (first screen):** three key-figure tiles (apps, dossiers, open actions); "Coming up", dated rows with a distance label ("Tomorrow", "In 6 days"), a title and a muted date, the near row highlighted, and one invalid row with its reason; "Available apps", a grid of link cards (title, tag, description, "Open <path>"); "My dossiers" with a lede, then a "Category" heading with a count per group, each a grid of dossier cards (subpath, title, phase as text, a muted "Status: date", a summary and an "N open of M" progress bar); a footer note. Opening a card goes to its detail.
- **Dossier detail:** a back button naming the parent (or the hub), a "Dossier · slug" label, a two-option toggle that appears only for a dossier with a second document, a "Save as PDF" button, the document (intro, two sections, a list of disabled checkboxes) and, for a dossier with children, a "Subfolders" grid reusing the same cards. Open and back work, including into and out of a subfolder.
- **Footer** says everything is invented and the real app runs locally.
- **Gaps (no component, rendered as closely as possible):** the rendered document (plain paragraphs and `GroupHeading` sections in a `Card`; Prose: #43); the document's h2 sections (`GroupHeading` is always an h3; GroupHeading level: #48); the dated "coming up" row, with a left date and distance column, a title with a muted line and an optional label, has no component and no issue yet (rendered as a `Card` per row with a `TitleTag` or muted distance, a bold title and a muted date; Chris files it).

### CREATE

- [x] `src/showcase/previews/LifeHubPreview.tsx`: the hub (key figures, coming up, apps, dossiers by category) and the dossier detail (back, optional toggle, Save as PDF, document, subfolders), switched with a `SegmentedChoice` in the `PageHeader`, built from existing components only and with invented content.
- [x] `src/showcase/previews/RepoPreview.tsx`: `life-hub` registered in `PREVIEWS`.
- [x] `src/apps/registry.ts`: the `life-hub` entry (no `url`, a local app) and its two screen views (`LIFE_HUB_VIEWS`), listing the source app's components and not the preview's own screen switcher.
- [x] `npx eslint src` and `npx tsc -b` are clean.

### TEST

- [x] Rebecca researched the app code read-only in `life-hub` (a private repo; its personal data was not opened); Victor reviewed the diff against that code for confidentiality: nothing real or personal copied. Applied: the phase as a `BadgeRow` with a glyph and its word as text (a word inside a `Badge` overflowed the disc), a "Progress:" label on the meter, the registry lists completed. Filed the dated-row gap as #54.
- [x] The gates (`open-pr -GatesOnly`) are green.
- [x] An owner approved merging this preview without looking first, as a one-off exception for the next two previews (#38 and #39), on October 13, 2026.

### DEPLOY: feat/39-life-hub-preview

#### What does the change on this branch deploy to main?

##### Tier 0

The repo list in the showcase navigation now opens a recreated preview of `life-hub`: the hub with key figures, coming-up dates, app cards and dossier cards with progress, and a dossier page with its document and subfolders, built from brand-book components with invented content. With it every DKJ-Solutions repo in the list has a preview.

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

Recreated preview for life-hub

