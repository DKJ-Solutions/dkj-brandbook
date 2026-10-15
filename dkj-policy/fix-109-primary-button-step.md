## fix/109-primary-button-step

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

#### The decision

Owner's decision on #109 (maikel-bwj, October 15, 2026): a filled main action takes `--primary-7`, with
`--primary-1` text, matching the filled IconButton; the scale prose moves "primary buttons" from `-5` to `-7`.

#### Scope beyond the issue's wording

The decision names `.dkj-btn--primary` and the scale prose. The house stylesheet's own `.btn--primary` and
`.btn--touch.btn--primary` were `--primary-5` too, and the prose describes them, so they move with it:
moving the prose alone would leave the comment and the rule under it disagreeing. The focus ring stays
`--primary-5`, the step every focus ring takes.

### CREATE

- [x] `.dkj-btn--primary` (`src/components/buttons.css`): `--primary-5` fill and border become `--primary-7`.
- [x] `.btn--primary` and `.btn--touch.btn--primary` (`house-style/house-style.css`): the same.
- [x] The scale prose in `house-style.css` (both comment blocks) and the Primary row of `house-style/README.md`
  move the primary button from `-5` to `-7`.

### TEST

- [ ] An owner has looked at a primary button (e.g. "Sync playlists" in the Music library preview) beside a filled
  IconButton (Mesowise), in light and dark across a few themes, and approved it.

### DEPLOY: fix/109-primary-button-step

#### What does the change on this branch deploy to main?

##### Tier 0

The primary button is filled with the theme's colour (`--primary-7`) instead of a grey (`--primary-5`), so it matches the filled icon button and reads as the main action again (#109).

**Score:** 2

##### Tier 1

N/A: the look of one button in the brand book and the house style.

**Score:** N/A

##### Tier 2

The house stylesheet's `.btn--primary` (and `.btn--touch.btn--primary`) moves to `--primary-7` too, so an app's primary buttons take the theme's colour once it takes the next house-style release.

**Score:** 3

#### Pull Request

The primary button fill is --primary-7, like the filled IconButton

