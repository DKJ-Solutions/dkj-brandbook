## fix/92-light-cat1-contrast

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

Resolves #92, on the owner's decision recorded there (maikel-bwj, October 15, 2026): darken the light value
of `--cat-1` just enough that `--primary-1` on it reaches 4.5:1 on every light theme. A value change only,
no new token; chart slot 1 on light moves with it.

### CREATE

- [x] Light `--cat-1` `#2a78d6` -> `#2574d1` in `house-style/house-style.css`: the same OKLCH hue and chroma,
  lightness 0.575 -> 0.562, the first step that clears 4.5:1. `--primary-1` on it, WCAG relative luminance:
  Magenta 4.51, Paars 4.53, Blauw 4.52, Petrol 4.55, Oker 4.51, Roest 4.51:1 (was 4.26-4.30:1). Dark is
  untouched.
- [x] The contrast note in `src/components/metrics.css` (the badge glyph) cites the new worst case.

### TEST

- [x] `open-pr -GatesOnly` passes.
- [x] An owner has looked at the info tag (Surfaces -> TitleTag), the series Badge and Meter, and the charts in
  `--cat-1` (Metrics) on a light theme in the showcase, and approved it.

### DEPLOY: fix/92-light-cat1-contrast

#### What does the change on this branch deploy to main?

##### Tier 0

The light series blue `--cat-1` is a shade darker (`#2a78d6` -> `#2574d1`), so the text on the info tag reaches 4.5:1 on every light theme (#92).

**Score:** 2

##### Tier 1

The info tag, the series badge and meter, and chart series 1 and gains render in the darker blue on light; dark is unchanged.

**Score:** 2

##### Tier 2

Every app on the house style takes the new light `--cat-1` with its next copy of `house-style.css`; no token is added or renamed.

**Score:** 2

#### Pull Request

Light --cat-1 is dark enough for text on the info tag

