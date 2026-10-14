## feat/drop-gain-token

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

Owner's decision (Maikel, October 14, 2026): `--gain` and `--cat-1` are always the same colour, so one goes.
`--gain` is removed; a repo that meets it undefined replaces it 1:1 with `--cat-1`, the same value in light
and dark. A breaking change for consumers, accepted on that condition.

### CREATE

- [x] `--gain` removed from `house-style.css` (light and both dark blocks); `--loss`, `--up`, `--down` stay
- [x] Charts, the legend (`SeriesColor` loses `'gain'`), the ETF preview and the showcase texts use `--cat-1`
- [x] Foundations: the Direction swatch list no longer shows `gain`
- [x] house-style/README.md: the Direction row says a gain uses `--cat-1` and never shares a view with a
  series in `--cat-1`; migration note under the token table
- [x] Code review (Victor): the dynamically built `var(--gain)` in the legend, fixed
- [x] Lint gate green (`scripts/lint/lint-web.ps1`)

### TEST

- [ ] An owner has looked at the Metrics section (legend, ColumnChart, BarChart) and the Tokens swatches
  and approved it

### DEPLOY: feat/drop-gain-token

#### What does the change on this branch deploy to main?

##### Tier 0

The house token `--gain` is gone: it was always the same colour as `--cat-1`, which a gain in a chart now
uses. A repo that still reads `var(--gain)` gets no colour there until it replaces it with `var(--cat-1)`,
which looks exactly the same in every theme, light and dark. The legend's `color="gain"` is now
`color="cat-1"`.

**Score:** 4

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

A token rename inside the house style; management sees no change.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

The replacement colour is identical, so once a repo has swapped the name no user sees a difference.

**Score:** N/A

#### Pull Request

Drop --gain; --cat-1 is the same colour

