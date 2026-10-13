## feat/38-djcylow-preview

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

This branch is #38: a recreated preview for `DKJ-Solutions/djcylow-react`, a Next.js static export on Netlify (live site `https://djcylow.com`). Its two screens are shown in the page header with a joined `SegmentedChoice`, the way `RecipesPreview` and `ThumbnailPreview` do. Only existing brand-book components are used; nothing lifted into the brand book, so `sources.ts` is untouched. Every mix, date and track is invented, and only the structure of the real screens is described.

#### What the preview shows

- **Listen (first screen):** a filter panel with a single-choice list of moods ("All", then eight invented colours each with mood words), and genre and power selects; then a grid of mix cards, each with a play control and progress meter, a title of colour, subgenre and volume, a muted date and an "Open mix" button. Ten are shown at a time with a "Load more" button; filters, load more and the empty line "No mixes found" work on 14 invented mixes.
- **Mix detail:** a back button, the title, a large player stand-in with a volume stepper, the date and a description, a four-item key-facts list (Colour, Shade, Subgenre, Tracks), a tracklist table (track, time; an empty-row state for a mix without one) and a rights notice. Opening a card goes to its detail.
- **Footer** says everything is invented and nothing plays.
- **Gaps (no component, rendered as closely as possible):** the audio player (a "Play" `Button` and a labelled `Meter` stand in; no seek, time or sound; the AudioPlayer issue, #52); the mix covers (left out; Figure: #50); the description text (a plain paragraph; Prose: #43); the mood pills with a colour dot (single-select, so `SegmentedChoice` in its list layout suffices except for the dot, which is left out, as the eight colours exceed the five series colours; FilterChips: #46); the page headings, which are h2 sections in the source (`GroupHeading`, always an h3; GroupHeading level: #48).

### CREATE

- [x] `src/showcase/previews/DjCylowPreview.tsx`: the Listen page (working filters, load more, empty state) and the mix detail, switched with a `SegmentedChoice` in the `PageHeader`, built from existing components only.
- [x] `src/showcase/previews/RepoPreview.tsx`: `djcylow-react` registered in `PREVIEWS`.
- [x] `src/apps/registry.ts`: the `djcylow` entry (live URL `https://djcylow.com`) and its two screen views (`DJCYLOW_VIEWS`).
- [x] `npx eslint src` and `npx tsc -b` are clean.

### TEST

### DEPLOY: feat/38-djcylow-preview

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

Recreated preview for djcylow-react

