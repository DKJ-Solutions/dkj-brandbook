## feat/lilac-more-purple

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

The owner finds Lila, the dark counterpart of Paars, too dark and short of purple. Keep each step's
OKLCH lightness (so every contrast and the October 14 mirror decision hold) and roughly double its
chroma at hue 297-300.

### CREATE

- [x] `house-style/house-style.css`: the six `lilac` primaries, old -> new (OKLCH L/C):
      -1 `#1e1b25` -> `#1f182e` (0.230, 0.020 -> 0.042), -2 `#302c39` -> `#322945` (0.303, 0.024 -> 0.052),
      -3 `#433c55` -> `#46356a` (0.374, 0.043 -> 0.090), -4 `#3d3b43` -> `#3e394a` (0.357, 0.014 -> 0.030),
      -5 `#f0eef6` -> `#f0ecfc` (0.950, 0.011 -> 0.022), -6 `#f9f8fa` -> `#f9f7fd` (0.980, 0.003 -> 0.008)

### TEST

- [x] Contrast (WCAG): `--neutral-3` on -1 9.54:1 (was 9.46), on -2 7.62:1 (was 7.59); -1 on -5 14.74:1
      (was 14.75); -6 on -1 16.08:1. Every documented worst case (6.8:1, 14.3:1) still holds and stays Geel.
- [ ] An owner has looked at Lila in the showcase and approved it

### DEPLOY: feat/lilac-more-purple

#### What does the change on this branch deploy to main?

##### Tier 0

The dark purple theme, Lila, carries visibly more purple: its six `--primary-*` keep their lightness and
roughly double their chroma, so the page, the cards, the lines and the near-white fills read as purple
rather than grey. Every contrast stays where it was.

**Score:** 3

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

An app on Lila looks purple in the dark, as the light Paars does in the light.

**Score:** 2

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

A user who picked Lila sees a purpler page and nothing else changes.

**Score:** 2

#### Pull Request

Lila (dark purple) carries more purple

