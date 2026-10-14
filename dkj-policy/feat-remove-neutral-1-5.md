## feat/remove-neutral-1-5

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

The owner asked to remove `--neutral-1` and `--neutral-5` and chose to renumber the ramp (old -2/-3/-4 become
-1/-2/-3). The ground and the text on the primary go to `--primary-1`, and text goes to the new `--neutral-3`.

### CREATE

- [x] Token blocks (light + both dark) carry three neutrals; every use remapped (Gwen)
- [x] README token tables, migration rows, comments and showcase text updated (Gwen)
- [x] `.dkj-msg--warn` moved to `--warning-5`, since the grey mix fell under 4.5:1
- [x] Warn tag contrast (worse on light after this branch) filed as #94

### TEST

- [x] Lint gate green (eslint, var() check, colour-literal check, tsc + vite build)
- [ ] Code review (Victor) and copy edit (Edith)
- [ ] An owner has looked at the showcase in light and dark themes and approved it

### DEPLOY: feat/remove-neutral-1-5

#### What does the change on this branch deploy to main?

##### Tier 0

The neutral ramp drops its two ends. `--neutral-1` and `--neutral-5` are gone, and the old `--neutral-2`,
`-3` and `-4` are renumbered `--neutral-1`, `-2` and `-3` with unchanged values. What read the old
`--neutral-1` (the ground, text and icons on the primary, the status-icon mark, dialog backdrops) now reads
`--primary-1`; the theme swatches take the new `--neutral-1` as their untinted base. What read the old
`--neutral-5` (primary text, focus outlines, the inverted button) now reads `--neutral-3`, so primary and
secondary text share one grey. `.dkj-msg--warn` reads `--warning-5`. A consuming repo renames in the order
the README's migration rows give.

**Score:** 5

##### Tier 1

Body text across every DKJ-Solutions app turns from near-black to the dark grey of secondary text; the brand
looks softer.

**Score:** 3

##### Tier 2

A user sees text a shade lighter (still at least 6.2:1) and nothing else changes.

**Score:** 2

#### Pull Request

The neutral ramp drops its two ends: --neutral-1 to --neutral-3 remain

