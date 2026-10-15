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
- [x] House `.meta` from `--primary-5` to `--primary-6`; a `<p>` stays `--primary-7`
- [x] House `.hero .value` in `--primary-7`
- [x] Figcaptions (the showcase demo label and the `Figure` caption) from `--primary-5` to `--primary-6`
- [x] `.tile--accent` and `.card--accent` lose their `border-top`; house README and the showcase demo updated
- [x] Root `accent-color` (native checkboxes, radios, sliders, progress bars) from `--primary-4` to `--primary-5`; stylesheet comment and README updated
- [x] Light themes' `--primary-3` carries more colour: Petrol takes the owner's `#9adae2`, the other five are derived at its OKLCH lightness and relative chroma in their own hue (the default `:root` follows Blauw)
- [x] Light themes' `--primary-1` lighter and more coloured: Petrol takes the owner's `#faffff`, the other five take its OKLCH chroma at the highest lightness their hue allows
- [x] Light themes' `--primary-2` lighter: Petrol takes the owner's `#f2ffff`, the other five take its OKLCH chroma at the highest lightness their hue allows, never closer to `--primary-1` than Petrol's gap (which only Oker reaches)
- [x] Light themes' `--primary-4` softened: the owner's Petrol `#48878d` fell to 4.06:1, so each light theme takes its relative chroma at the lightness that holds 4.5:1 on -1 and -2 (Petrol `#437e84`), then greyer from the owner's Paars `#5d458b` and Magenta `#954c7a` and Blauw `#49498d`, which Oker and Roest follow; picker dots and the stylesheet's measured worst cases updated
- [x] Blauw's other steps moved to `#0000ff`'s HSL hue 240, each at its own saturation and luminance, so every contrast holds; then `-5`, `-6` and `-7` a good deal darker (`#0707bf`, `#181873`, `#00002b`)
- [x] Every light theme behaves the same, only the hue differs: one OKLCH lightness and one chroma per step (capped by relative chroma where a hue holds less), from the owner's examples; `-5` to `-7` at Blauw's darker level (owner's choice); picker dots, README table and the stylesheet's worst cases follow
- [x] Everything in `.bb-swatch-text` (name, value, recipe) from `--primary-5` to `--primary-7`

### TEST

- [x] Lint gate green
- [ ] An owner has looked at the showcase (nav group labels, eyebrows, muted and `.meta` text, hero values, figcaptions, swatch text, accent tile and card, native controls) and at all six light themes, and approved them

### DEPLOY: feat/nav-group-primary-2

#### What does the change on this branch deploy to main?

##### Tier 0

Every light theme now behaves the same and only its hue differs: each of the seven `--primary-*` steps has one OKLCH lightness and one chroma in all six, capped where a hue cannot hold it, taken from the owner's examples (Petrol for `-1` to `-3`, Paars, Magenta and Blauw for `-4`, Blauw for `-5` to `-7`). The page and card fills are lighter, lines and tinted surfaces carry more colour, the fills and links are a softer, greyer step of the colour, and text is darker; Blauw sits on the hue of `#0000ff` instead of leaning to cyan. The picker's light dots follow. Native checkboxes, radios, sliders and progress bars take `--primary-5` through `accent-color`. The house `.muted` class is `--primary-4` and `.meta` is `--primary-6` (a paragraph keeps `--primary-7`), the hero figure is `--primary-7`, and `.card--accent` and `.tile--accent` no longer draw a rule across their top. In the showcase the nav group labels are `--primary-2`, eyebrows `--primary-4`, figcaptions `--primary-6` and the swatch text `--primary-7`.

**Score:** 3

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

Every DKJ-Solutions app on a light theme looks different once it takes this house style: lighter fills, a greyer primary and darker text.

**Score:** 2

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

The brand book's own showcase is not a subscribed service.

**Score:** N/A

#### Pull Request

Light themes on one rule, and a colour pass on the house text and the showcase
