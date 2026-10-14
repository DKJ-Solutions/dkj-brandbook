## feat/72-theme-reach

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

Decide how far a house theme reaches (#72): links and native controls take `--primary` by default, and a small set of opt-in `--accent` modifiers carry it onto headers, cards, tiles and tables, so apps stop inventing their own. It reaches the apps only after a `house-style-v<N>` release and the skill repoint, both on the owner's request.

### CREATE

- [x] `house-style/house-style.css`: links (`:where(a)`, visited, hover, focus ring) on `--primary` at zero specificity; `accent-color` and `caret-color` on `:root`; a primary-tinted `::selection`; opt-in `.header--accent`, `.card--accent`, `.tile--accent`, `.table--accent`
- [x] `house-style/README.md`: a "How far a theme reaches" section, the Primary row, and the new reserved names
- [x] Showcase: a "Theme reach" demo in the Tokens section (link, checkbox, radio, slider, progress, and each accent modifier)

### TEST

- [x] `scripts/lint/lint-web.ps1` green (eslint, var check, tsc, build)
- [ ] An owner has looked at the Theme reach demo across light and dark themes, and at the brand book's own links, and approved them

### DEPLOY: feat/72-theme-reach

#### What does the change on this branch deploy to main?

##### Tier 0

A house theme now reaches beyond the primary button: links, checkboxes, radios, sliders, progress bars, the text caret and the selection take `--primary` by default, and `.header--accent`, `.card--accent`, `.tile--accent` and `.table--accent` carry it onto the page's surfaces where an app opts in. The link rules weigh nothing (`:where()`), so a class on an `<a>` keeps its own look. The Tokens section shows it all.

**Score:** 3

##### Tier 1

Internal design system; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change until an app adopts it after a house-style release.

**Score:** N/A

#### Pull Request

A theme reaches links, native controls and a small set of house accents
