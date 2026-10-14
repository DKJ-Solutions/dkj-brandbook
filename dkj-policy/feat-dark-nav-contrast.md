## feat/dark-nav-contrast

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

On the dark themes the brand book's navigation (`.bb-nav`) sat only a shade lighter than the page beside it
(`.bb-main`), so the two read as one plane. The light themes already set it apart with a near-black panel
with white text; the dark themes get the mirror image, a light panel with black text, and that panel is the
theme's own `--primary-6`. Along the way the owner set the model straight: on dark the top of the scale
mirrors the bottom of light, `--primary-6` mirroring `--primary-1` and `--primary-5` mirroring `--primary-2`.

### CREATE

- [x] `house-style/house-style.css`: on the six dark themes (and the default dark blocks) `--primary-6` takes
  the OKLCH lightness and chroma of the paired light theme's `--primary-1`, and `--primary-5` those of its
  `--primary-2`, each in the dark theme's own hue (Roze/Magenta, Lila/Paars, Hemelsblauw/Blauw, Cyaan/Petrol,
  Geel/Oker, Oranje/Roest); the token comment says so
- [x] `house-style/README.md`: the mirror rule, and that the theme table's hex is now the theme's identity
  colour (the picker's dot) rather than a dark token value; `house-theme.js` keeps its identity colours
- [x] `src/showcase/showcase.css`: the dark half of `--bb-nav-bg` is `--primary-6`, with black text
  (`#0b0b0b`) and grey labels (`#52514e`); the heading, focus ring and current-link fill take `--primary-3`
  (the current link with white text), the hover darkens the panel by 10%, and the border line goes, as on
  light. The light themes are unchanged.
- [x] Contrast measured in all six dark themes: near-black on `--primary-5` 16.8:1 or better, `--primary-5`
  against the page 14.3:1 or better; on the panel black text 18.6:1 or better, grey labels 7.5:1 or better,
  the heading 8.9:1 or better, black on hover 15.1:1 or better, white on the current link 9.3:1 or better

### TEST

- [x] `scripts/lint/lint-web.ps1` green
- [ ] An owner has looked at the navigation and the components in the dark themes and approved it

### DEPLOY: feat/dark-nav-contrast

#### What does the change on this branch deploy to main?

##### Tier 0

On the six dark themes the top of the theme scale now mirrors the bottom of the light themes: `--primary-6`
has the lightness of a light theme's `--primary-1` and `--primary-5` that of its `--primary-2`, each in the
dark theme's own hue. Both are near-white, so on dark the headings and links, primary buttons, pressed
switches, info badges and meters, focus rings and accent lines all turn near-white, with near-black text on a
fill. The brand book's navigation panel takes `--primary-6` with black text, the mirror image of the
near-black panel on the light themes. A repo that takes this house-style update changes nothing of its own;
its dark themes simply look this way.

**Score:** 4

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

Colour values in the house style; management sees no change.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

On a dark theme, every DKJ-Solutions app shows its headings, links, primary buttons and switches in a
near-white tint of the theme colour instead of the bright theme colour.

**Score:** 4

#### Pull Request

The dark themes' top of the scale mirrors the light themes' ground

