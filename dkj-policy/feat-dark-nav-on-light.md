## feat/dark-nav-on-light

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

Owner's request (October 14, 2026): more contrast between `bb-nav` and `bb-main`. On a light theme the
main area keeps its light tint and the navigation gets a dark background.

### CREATE

- [x] `src/showcase/showcase.css`: the nav's colours as `--bb-nav-*` variables, chosen per mode with `light-dark()` -- dark panel on light themes, unchanged tint on dark themes
- [x] Brand name, group labels, links, hover, focus ring and the active-link focus ring read those variables
- [x] `.bb-view` on `--surface-base` instead of `--page`, so the views no longer share the main area's tint (owner's follow-up)

### TEST

- [x] `scripts/lint/lint-web.ps1` green (eslint, var check, tsc, build)
- [ ] An owner has looked at the navigation across the six light themes (and checked the dark ones are unchanged) and approved it

### DEPLOY: feat/dark-nav-on-light

#### What does the change on this branch deploy to main?

##### Tier 0

On a light theme the brand book's sidebar is now a dark panel -- near-black with 18% of the theme's primary, white links, light grey group labels and the brand name in a light tint of the primary -- so it stands apart from the light main area. Dark themes keep the tinted sidebar they had. The colours are showcase-only `--bb-nav-*` variables picked per mode with `light-dark()`; no house token changed. The views in the apps overview now sit on the untinted surface instead of the page colour, so they no longer read as holes in the card.

**Score:** 2

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

The brand book's own chrome; no change for management or a commissioner.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

The house style is untouched, so no app and no subscriber sees a change.

**Score:** N/A

#### Pull Request

A dark brand book navigation on the light themes

