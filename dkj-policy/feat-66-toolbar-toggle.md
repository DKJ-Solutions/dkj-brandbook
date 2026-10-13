## feat/66-toolbar-toggle

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

Let the preview settings bar be hidden: a round sticky button opens and closes it, and the choice is remembered on this device (#66).

### CREATE

- [x] `src/showcase/theme.ts`: `useToolbarOpen`, open by default, stored as `bb-toolbar` in localStorage
- [x] `src/showcase/Showcase.tsx`: a sticky `.bb-settings` wrapper with a round toggle (gear when closed, close icon when open, `aria-expanded`); the bar is hidden rather than unmounted, because the house script draws the theme picker into it once
- [x] `src/showcase/showcase.css`: the wrapper takes over the sticky bleed; the 44px round toggle on house tokens (surface, border, pill radius, `--shadow-pop`)

### TEST

- [x] `scripts/lint/lint-web.ps1` green (eslint, var check, tsc, build)
- [ ] An owner has looked at the toggle in the showcase (open, closed, scrolled, phone width) and approved it

### DEPLOY: feat/66-toolbar-toggle

#### What does the change on this branch deploy to main?

##### Tier 0

The brand book's preview settings bar can be hidden: a round sticky button at the top right opens and closes it, and the choice is remembered on this device. It is open by default, so a first visit looks as before.

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

A round sticky button that collapses and expands the preview toolbar

