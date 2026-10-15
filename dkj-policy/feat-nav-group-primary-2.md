## feat/nav-group-primary-2

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

### CREATE

- [x] `.bb-nav-group` colour from `--primary-3` to `--primary-2` (`src/showcase/showcase.css`)
- [x] `.bb-eyebrow` colour from `--primary-7` to `--primary-4`
- [x] House `.muted` and the table's `.dkj-muted` from `--primary-5` to `--primary-4`; a `<p>` stays `--primary-7`
- [x] House `.hero .value` in `--primary-7`
- [x] Figcaptions (the showcase demo label and the `Figure` caption) from `--primary-5` to `--primary-4`

### TEST

- [x] Lint gate green
- [ ] An owner has looked at the sidebar group labels in the showcase and the eyebrows and the muted text the hero values and the figcaptions, and approved them

### DEPLOY: feat/nav-group-primary-2

#### What does the change on this branch deploy to main?

##### Tier 0

The showcase sidebar's group labels now use `--primary-2` instead of `--primary-3`, and the eyebrows `--primary-4` instead of `--primary-7`. The house `.muted` class (and the table's `.dkj-muted`) is `--primary-4` instead of `--primary-5`; a paragraph keeps `--primary-7`. The hero figure (`.hero .value`) is set in `--primary-7`. Figcaptions (the showcase demo label and the `Figure` caption) are `--primary-4` instead of `--primary-5`.

**Score:** 1

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

Showcase styling only; nothing management or a commissioner would notice.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

The brand book's own showcase is not a subscribed service.

**Score:** N/A

#### Pull Request

Nav group labels in --primary-2, eyebrows and muted text in --primary-4, hero values in --primary-7, figcaptions in --primary-4

