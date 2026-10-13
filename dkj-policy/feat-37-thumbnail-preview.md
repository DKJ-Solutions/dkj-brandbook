## feat/37-thumbnail-preview

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

This branch is #37: a recreated preview for `DKJ-Solutions/dkj-thumbnail-generator`, a set of local Node scripts with no interface and no deployment. Its two generated outputs are shown as two screens, switched in the page header with a joined `SegmentedChoice`, the way `RecipesPreview` and `MusicLibraryPreview` do. Only existing brand-book components are used; nothing lifted into the brand book, so `sources.ts` is untouched. Every round, value and image is invented, and only the structure of the real outputs is described.

#### What the preview shows

- **Yardstick report (first screen):** a muted "Generated on" line and a "generated, do not edit" note, a short introduction, "Where the series stands" as `StatTile`s, then five numbered sections (placement, candidates, cutout, guideline, cost), each a `DataTable` with one row per invented round (Round A to D). Verdicts are text with a tone ("yes", "no", "outside the margin", "no verdict" with a reason); a dash means not measured. A "Disclosure per round" block ends the report, one `Disclosure` per round.
- **Contact sheet:** three candidate tiles side by side in a `TintedPanel`, each a `MiniCard` with an "Image placeholder" value and a `Chip` verdict, then "Discard" and "Retain" rows as a `DefinitionList`.
- **Footer** says everything is invented and the real repo has no interface.
- **Gaps (no component, rendered as closely as possible):** the long report text (a plain paragraph; Prose: #43); the per-round summary with a date and a verdict (a `Disclosure` with only the round name as summary; structured Disclosure summary: #44); the section headings, which are h2 in the report (`GroupHeading`, always an h3; GroupHeading level: #48); an image or figure placeholder (a `MiniCard` with text instead of an image); the dark panel of the contact sheet (a neutral `TintedPanel`, no dark surface component); inline code in the report (left out).

### CREATE

- [x] `src/showcase/previews/ThumbnailPreview.tsx`: the report and the contact sheet, switched with a `SegmentedChoice` in the `PageHeader`, built from existing components only.
- [x] `src/showcase/previews/RepoPreview.tsx`: `dkj-thumbnail-generator` registered in `PREVIEWS`.
- [x] `src/apps/registry.ts`: the `thumbnail-generator` entry (no live URL) and its two screen views (`THUMBNAIL_VIEWS`).
- [x] `npx eslint src` and `npx tsc -b` are clean.

### TEST

### DEPLOY: feat/37-thumbnail-preview

#### What does the change on this branch deploy to main?

##### Tier 0

**Score:**

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

**Score:**

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

**Score:**

#### Pull Request

Recreated preview for dkj-thumbnail-generator

