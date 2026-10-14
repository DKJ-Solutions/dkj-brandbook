## feat/dark-themes-grey-anchor

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

Owner's idea (October 14, 2026): `--primary-4` the greyest; example dark Geel `-4` `#91804c`, `-5` `#ffce3f`, `-6` `#ffe4a3`. Decided by menu: the six dark themes only, and text in the colour moves to `-5` on dark (`#91804c` reaches only 3.80:1 as a link on the card).

### CREATE

- [x] Dark Geel takes the owner's three values; Roze, Lila, Hemelsblauw, Cyaan and Oranje (and the OS-dark default) take the same OKLCH lightness, `-4`'s chroma, and `-5`/`-6` at full gamut chroma in their own hue
- [x] Every text use of `--primary-4` (25 rules, house and components) reads `light-dark(var(--primary-4), var(--primary-5))`; fills, borders and focus rings stay `-4`
- [x] The picker's dark dots and the README theme table show the new `-5`
- [x] Role descriptions and measured contrasts updated: `-1` on `-4` 4.61:1 or better on dark, `-5` on `-1`/`-2` 9.96:1, on status backgrounds 8.34:1
- [x] Lint gate green

### TEST

- [ ] An owner has looked at the six dark themes in the showcase and approved them

### DEPLOY: feat/dark-themes-grey-anchor

#### What does the change on this branch deploy to main?

##### Tier 0

On the six dark themes `--primary-4` is a grey of the theme's colour and the colour itself moves to `--primary-5` and
`-6` (Geel: `-4` `#91804c`, `-5` `#ffce3f`, `-6` `#ffe4a3`). Text that carried the colour (links, card and dialog
titles, values, pressed toggles) reads `light-dark(var(--primary-4), var(--primary-5))`, so it keeps the colour on
dark and is unchanged on light; fills, borders and focus rings stay `-4`. The theme picker's dark dots show `-5`.
Light themes are unchanged. No token is added or renamed.

**Score:** 4

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

The dark themes change character: quieter buttons, with the colour in the text and headings.

**Score:** 3

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

On a dark theme a user sees greyer buttons and the theme's colour in links, headings and labels.

**Score:** 3

#### Pull Request

Dark themes: --primary-4 is the greyest step, --primary-5 and -6 carry the colour

