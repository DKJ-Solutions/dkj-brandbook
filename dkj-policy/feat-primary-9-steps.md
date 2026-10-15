## feat/primary-9-steps

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

Owner (Maikel, October 15, 2026): two new greys either side of the old -4. Old -4 -> -5, old -5/-6/-7 -> -7/-8/-9; new -4 darker and -6 lighter (on dark), computed in OKLCH from the old -4.

### CREATE

- [x] Renumber every `--primary-*` use outside the changelog and the README's migration history in one pass: 7 -> 9, 6 -> 8, 5 -> 7, 4 -> 5 (stylesheet, components, showcase, README, Gwen's lens)
- [x] Compute the two new greys per theme in OKLCH: the old -4's hue at half its chroma, lightness 0.08 either side (light -4 0.55, -6 0.39; dark -4 0.458, -6 0.618); write them into all twelve themes and both default dark blocks
- [x] Stylesheet header comment and README: nine steps, the new rows in both step tables, and a migration table for apps (old -> new, in apply order)
- [x] The showcase's token list shows `--primary-4` and `--primary-6`
- [x] Owner: "maak primary-5 ook een stuk grijzer" -- -5 takes 0.6 of its base chroma in every theme (hue and lightness kept), with the picker dots and the README theme table; -4 and -6 stay at 0.5, so -5 keeps a little more colour
- [~] Victor's review: dropped, the change is a mechanical single-pass rename (no role changes value) plus two new values with no role yet; the lint gate checks every `var()` resolves

### TEST

- [x] Lint gate green (eslint, every var() resolves, no colour literal, tsc + vite build)
- [ ] An owner has looked at the new greys in the showcase and approved them

### DEPLOY: feat/primary-9-steps

#### What does the change on this branch deploy to main?

##### Tier 0

The primary scale grows from seven to nine steps (owner's decision, October 15, 2026): two new greys, `--primary-4` and `--primary-6`, sit either side of the old `-4`, which becomes `--primary-5`, so the greys are a trio with `-5` in the middle. The colour and the text steps move up two: old `-5`, `-6`, `-7` are now `-7`, `-8`, `-9`. Every role keeps its colour; only its number changes. The new greys take the middle grey's hue at half its chroma, so they read greyer than it, at 0.08 OKLCH lightness either side (on dark `-4` darker and `-6` lighter, mirrored on light) and have no role yet. `--primary-5` itself turns greyer too: 0.6 of its former chroma in every theme, hue and lightness kept, so the fills, links, focus rings and the picker dots read calmer at the same contrast. The README carries the old-to-new mapping for an app that takes the update.

**Score:** 4

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

An app that takes this house style must rename its own uses of `--primary-4` … `--primary-7` (the README's table, in that order) before it looks the same again; nothing changes on screen once it has.

**Score:** 3

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

The brand book's own showcase is not a subscribed service.

**Score:** N/A

#### Pull Request

The primary scale grows to nine steps, with a grey trio at -4, -5 and -6

