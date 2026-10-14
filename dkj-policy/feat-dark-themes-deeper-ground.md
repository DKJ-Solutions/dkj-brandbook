## feat/dark-themes-deeper-ground

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

Owner's request (October 14, 2026): on the dark themes `--primary-1` to `-3` a little darker, `--primary-5` a lot lighter.

### CREATE

- [x] Six dark themes plus the OS-dark default: `-1`, `-2`, `-3` 0.04 OKLCH lightness darker, `-5` 0.12 lighter, hue and chroma kept
- [x] Stated contrasts in the stylesheet comment and the README remeasured; the derivation names the shift
- [x] Showcase nav reads the scale in every theme (`-7` panel, `-3` brand, `-6` hover on light, `-4` on dark); the fifteen per-theme colour codes are gone (owner's correction, while looking at this branch)
- [x] `check-colour-literals.mjs` refuses any colour code under `src/`, a custom-property declaration included; proven against the old nav (18 reported)
- [x] Six light themes plus the `:root` default: `--primary-7` from OKLCH lightness 0.26 to 0.18, hue kept, chroma clipped to sRGB (owner's request); README derivation updated
- [x] Showcase nav: the six `--bb-nav-*` aliases removed; every rule reads its `--primary-N` directly, dark overrides on the rules themselves (owner's correction)
- [x] Headings by surface (owner's request, revised once): on the page `h2` is `--primary-5` (was `-4`) and `h3`–`h6` `--primary-6`; on `--primary-7` (the showcase nav) `h2` is `-3` and `h3`–`h6` `-2`; `h1` stays `-4`; role descriptions in the stylesheet and README updated
- [x] Light themes: `--primary-2` at 1.6 times its OKLCH chroma, lightness and hue kept; `-4` on the card still 4.52:1 or better (owner's request)
- [x] Light themes: `--primary-5` at twice its OKLCH chroma, lightness and hue kept; `-5` on `-3` 4.53:1 or better, on status backgrounds 6.9:1 or better (owner's request)
- [x] `h1` follows `h2`: `--primary-5` on the page, `-3` on `--primary-7` (was `-4`); `-4` role lists, the README and the component title comments updated; the "same low chroma" statement for `-3`/`-5` corrected after `-5`'s chroma change (owner's request)
- [x] Lint gate green

### TEST

- [ ] An owner has looked at the six dark themes, the light themes' `--primary-7`, the `h2` colours, the light cards and the sidebar in the showcase and approved them

### DEPLOY: feat/dark-themes-deeper-ground

#### What does the change on this branch deploy to main?

##### Tier 0

On the six dark themes (and the OS-dark default) the page, the cards and the lines (`--primary-1` to `-3`) are a
shade darker and all text (`--primary-5`) is clearly lighter, each in its own hue and chroma. Text on the page now
reaches 9.5:1 or better on dark, up from 5.5:1. No token is added or renamed; a consuming repo only takes the new copy.

On the six light themes `--primary-7`, the far end and the inverted surface, is a lot darker (OKLCH lightness 0.18,
was 0.26).

`h2` is now `--primary-5` (it was `--primary-4`, like `h1`) and `h3`–`h6` are `--primary-6`; on a `--primary-7`
surface `h2` is `--primary-3` and `h3`–`h6` are `--primary-2`. `h1` follows `h2` (it was the theme's colour, `--primary-4`). On the light themes the cards (`--primary-2`) carry a little more colour, and all text (`--primary-5`) twice
its colour.

The brand book's own sidebar now reads the seven primaries directly in every theme, with no typed colour per light
theme and no local alias,
and the colour lint refuses any colour code under `src/`, also as a custom property's value: only the house style
types a colour.

**Score:** 2

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

The dark themes read with more contrast; nothing to act on.

**Score:** 2

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

On a dark theme a user sees a deeper background and brighter, easier-to-read text.

**Score:** 2

#### Pull Request

Dark themes: deeper ground (-1 to -3), lighter text (-5)

