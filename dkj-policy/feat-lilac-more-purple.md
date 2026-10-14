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
chroma at hue 297-300. Approved on Lila, the owner asked for the same on the other five dark themes.

### CREATE

- [x] `house-style/house-style.css`: the six `lilac` primaries, old -> new (OKLCH L/C):
      -1 `#1e1b25` -> `#1f182e` (0.230, 0.020 -> 0.042), -2 `#302c39` -> `#322945` (0.303, 0.024 -> 0.052),
      -3 `#433c55` -> `#46356a` (0.374, 0.043 -> 0.090), -4 `#3d3b43` -> `#3e394a` (0.357, 0.014 -> 0.030),
      -5 `#f0eef6` -> `#f0ecfc` (0.950, 0.011 -> 0.022), -6 `#f9f8fa` -> `#f9f7fd` (0.980, 0.003 -> 0.008)

### TEST

- [x] Contrast (WCAG): `--neutral-3` on -1 9.54:1 (was 9.46), on -2 7.62:1 (was 7.59); -1 on -5 14.74:1
      (was 14.75); -6 on -1 16.08:1. Every documented worst case (6.8:1, 14.3:1) still holds and stays Geel.
- [x] An owner has looked at Lila in the showcase and approved it
- [x] The other five dark themes, same method: each step keeps its own OKLCH lightness and hue and takes
      Lila's chroma factor for that step (x2.18, 2.13, 2.08, 2.14, 2.00, 2.89), clipped to sRGB where it
      would leave the gamut (Cyaan and Geel's dark steps). Cyaan is also the house dark default, so both
      dark token blocks change with it.
      Roze `#2d1124 #461d37 #691d4e #4a3542 #fde9f3 #fff6f9`;
      Hemelsblauw `#091f2e #143046 #05416c #2f3e4b #e8f1fb #f6f9fc`;
      Cyaan `#002225 #00353a #004a50 #264244 #e6f2f4 #f4fafa`;
      Geel `#291e00 #3d3100 #574500 #463d25 #f5efe1 #fcf9f0`;
      Oranje `#2d1504 #452306 #612e00 #4a372a #fcece4 #fff7f4`
- [x] Contrast (WCAG) over all six dark themes: `--neutral-3` on -2 7.16:1 or better, -1 on -5 14.31:1 or
      better, worst Geel in both; the stylesheet's stated floors (6.8:1, 14.3:1, worst Geel) still hold.
- [ ] An owner has looked at the five other dark themes and approved them

### DEPLOY: feat/lilac-more-purple

#### What does the change on this branch deploy to main?

##### Tier 0

The six dark themes carry visibly more of their own colour: every `--primary-*` of Roze, Lila, Hemelsblauw,
Cyaan, Geel and Oranje keeps its lightness and hue and roughly doubles its chroma, so the page, the cards, the
lines and the near-white fills read as that colour rather than grey. Cyaan is also the house dark default,
so an app that sets no theme sees it too. Every contrast stays above the stated floors.

**Score:** 3

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

Every dark theme looks like its colour, as the light themes already did.

**Score:** 2

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

A user on a dark theme sees a more colourful page and nothing else changes.

**Score:** 2

#### Pull Request

The dark themes carry more of their own colour

