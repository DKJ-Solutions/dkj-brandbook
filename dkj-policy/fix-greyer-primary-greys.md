## fix/greyer-primary-greys

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
> For tier 2 audiences: the user who relies on what this repo ships, and decides whether to take the next version -- a subscriber of a service, or the user of a tool, its own maintainer included. That reader and nobody else -- what matters only
> inside this repo belongs under the first `**Score:**`. If the change reaches that reader
> not at all, N/A is a complete answer and the common one. **One hop and no further:** where that
> reader is itself a business, ITS own customers sit one hop past this repo and are never the reader
> here -- they take nothing this repo ships. Name the party that runs the upgrade, and score
> against them.
>
> The phase arc, the marks and the whole form: `DEVELOPMENT-portable.md`, which ships
> with this workflow.

### PLAN

The owner finds the grey steps `--primary-4`, `-5` and `-6` not grey enough. Each value keeps its OKLCH lightness
and hue and loses half its chroma, in all twelve themes, so contrast is unchanged and only the tint drops.

### CREATE

- [x] `house-style.css`: the 36 values (12 themes x 3 steps, plus the `:root` defaults) at half their chroma
- [x] `house-theme.js` and the README's picker table: the picker dots follow the new `-5`
- [x] README: the chroma rule rows read 0.3 (was 0.6) for `-5` and a quarter (was half) for `-4` and `-6`
- [x] The theme picker's dot is `--primary-7`, not `--swatch` (owner's request, the same turn): each theme block also
  matches `.theme-swatch[data-id]`, so a swatch carries its own theme's tokens; it shows its `-1` as the page and
  its `-7` as the dot. `house-theme.js` no longer sets `--swatch`; `DKJTheme.themes[].hex` stays, now the `-7` value

### TEST

- [x] `scripts/lint/lint-web.ps1` green
- [x] An owner has looked at the greys in light and dark themes and approved it
- [x] An owner has looked at the theme picker's dots and approved them

### DEPLOY: fix/greyer-primary-greys

In every theme the grey steps `--primary-4`, `-5` and `-6` carry half the colour they had, at the same lightness and
hue: sub lines, notes, the pressed segment, the info badge and meter and the picker's dots read as grey with a
hint of the theme instead of a muted colour. Contrast is unchanged. The theme picker's dots show each theme's
colour itself (`--primary-7`) on that theme's own page colour (`--primary-1`), read from the theme blocks instead of
a `--swatch` value the script set.

**Score:** 3

#### What makes this deploy extra special

Every DKJ-Solutions app that takes the next house-style copy shows greyer sub lines, notes and info accents; no
token is renamed, so nothing has to be migrated.

**Score:** 2

#### Pull Request

the grey steps --primary-4, -5 and -6 are greyer in every theme

