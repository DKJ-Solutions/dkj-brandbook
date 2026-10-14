## fix/swatch-readability

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

The token swatches in the `bb-demo-stage--surface` stages were hard to read: name and value had the same
size and colour, and a `color-mix(...)` value broke mid-word ("color-" / "mix").

### CREATE

- [x] Swatch: name semibold in `--ink`, value mono `--text-xs` in `--ink-2`, chip aligned with the name
- [x] Grid column 11rem -> 13rem
- [x] A `color-mix()` token shows the colour it resolves to (one hex, read off a 1px canvas), with its
  recipe beneath in token names read from the declaration as written -- "--surface + 7% --primary" --
  because the computed value has every var() filled in and nests into unreadable hexes; an alias reads
  "= --surface"; the declaration itself stays on hover
- [x] Lint gate green (`scripts/lint/lint-web.ps1`)

### TEST

- [ ] An owner has looked at the Tokens section and approved it

### DEPLOY: fix/swatch-readability

#### What does the change on this branch deploy to main?

##### Tier 0

The colour swatches in the brand book's Tokens section read as a name over its value: the name is
semibold in ink, the value smaller and monospaced in ink-2. A mixed token shows the one colour it
resolves to, with its recipe in token names beneath it ("--surface + 7% --primary"), and an alias names
the token it stands for ("= --surface"), instead of a nested `color-mix()` of bare hexes.

**Score:** 2

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

Only the brand book's own showcase changes; no app or house token is touched.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

No subscriber-facing surface changes.

**Score:** N/A

#### Pull Request

Token swatches read as name over value, and a colour-mix value breaks only after a comma

