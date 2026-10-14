## feat/77-heading-levels-match-size

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

Resolves #77. The owner's decision on the thread (October 14, 2026): move the level, so each component
heading becomes the h-level whose token matches its current size and the look stays the same.

### CREATE

- [x] House style: a `--font-serif` token (the `h1`/`h2` face, now read from it), the drawer's `.dialog__title` at `--text-h5` (18px, as `--text-lg` was), README guidance for the `.dialog__title` element
- [x] Card title `<h2>` → `<h6>` (`<h2>` stays in a data card, which is `--text-h2`); it sets the serif face and `--primary-6` itself, which the house `h2` rule used to give it
- [x] Dialog title `<h2>` → `<h6>` plain, `<h3>` as a card heading, `<h5>` in a drawer; serif and colour set on the class, the drawer at `--text-h5`
- [x] Alert title `<h3>` → `<h5>`; calculation question `<h4>` → `<h6>`; QuestionBlock title `<h3>` → `<h5>` (same mismatch, not in the issue's table)
- [x] House dialog demo, type specimen and QuestionBlock intro follow the new levels
- [x] GroupHeading (level by prop, always `--text-base`) is a different decision, filed as #90

### TEST

- [x] Lint gate green (`scripts/lint/lint-web.ps1`)
- [x] An owner has looked at the card, dialog (plain, card, drawer), alert, calculation and QuestionBlock titles and the house dialogs in the showcase and approved that they look as before

### DEPLOY: feat/77-heading-levels-match-size

#### What does the change on this branch deploy to main?

##### Tier 0

A component's heading element now takes the token of its own level. The card title is an `<h6>` (an `<h2>`
in a data card), the dialog title an `<h6>`, `<h3>` as a card heading or `<h5>` in a drawer, the alert and
QuestionBlock titles `<h5>` and the calculation question `<h6>`; the house `.dialog__title` goes on an `<h6>`
(`<h5>` in a drawer, now `--text-h5`). The house style gains `--font-serif`, the face of `h1` and `h2`, so a
title that moved off `<h2>` keeps it. Sizes, faces and colours are unchanged.

**Score:** 2

##### Tier 1

Markup and outline only; management sees no change.

**Score:** N/A

##### Tier 2

Nothing a user sees changes; a screen reader announces these titles at their new level.

**Score:** N/A

#### Pull Request

Component headings take the level whose token they are sized at

