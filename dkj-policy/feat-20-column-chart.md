## feat/20-column-chart

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

Issue #20 asks to mirror the ETF dashboard's three SVG charts, starting with one done properly: the column
chart with its legend and tooltip. This branch is that first step. The horizontal bar chart and the line
chart stay on #20, so this branch ships with `-NoResolves` and a comment on the issue.

#### Design (Gwen, by the dataviz skill)

- **Form and colour.** A result per month is polarity around zero: `--gain` up, `--loss` down, so direction
  reads from position as well as colour. The pair passes the dataviz validator in light (surface
  `#fcfcfb`: CVD ΔE 21.6, normal 32.3, both ≥ 3:1) and dark (`#1a1a19`: 19.2, 29.0). Text stays in text
  tokens; the tooltip's figure uses the house `.delta--up`/`--down` text colours.
- **Marks.** Columns ≤ 24px with at least a 2px gap, 4px rounded at the data end and square on the zero
  line; zero line `--axis`, ticks `--grid`, quarter guides `--grid` with a muted label.
- **The three gaps the issue measured in the source:**
  - *Phone width.* The source scales one 960px image, so its 12px labels render at ~4px at 360px. Here
    the SVG is drawn at the width it is given (a ResizeObserver), so labels stay 12px; axis labels thin
    to every Nth that fits (44px each), guide labels to one per 64px.
  - *Keyboard.* The columns are one tab stop; arrow keys, Home and End move through them, each with an
    accessible name ("May 2025: +€180"), and focus shows the tooltip and the house `.chart .bar`
    focus stroke from #19.
  - *Table alternative.* A house `.more` disclosure under every chart holds the same figures as a house
    `.table`.
- **Tooltip.** The house `.tooltip`, following the pointer, so it stays click-through (shown inline, not
  `.tooltip--open`, as #19 set out). Escape and a scroll hide it.
- **Left in the app:** the month-note "?" floating over a column (ETF-only content), and the Dutch "t/m"
  partial-month text, which becomes the generic `detail` line.

### CREATE

- [x] `src/components/Chart.tsx` (`ColumnChart`) and `src/components/charts.css` (brand-layer names only).
- [x] The showcase: a ColumnChart section in Metrics, wide and at 360px, and the nav entry.
- [x] `sources.ts` names the source; the ETF "Monthly result" view lists `ColumnChart`.

### TEST

- [x] Eslint and `tsc -b` pass; the full gate runs below.
- [ ] The gates (`open-pr -GatesOnly`) are green.
- [ ] The owners have looked at the ColumnChart section (`npm run dev`), wide and at 360px, in a light and
      a dark theme: hover, tab plus arrow keys, and the table, and approved it.

### DEPLOY: feat/20-column-chart

#### What does the change on this branch deploy to main?

##### Tier 0

The overview has its first chart: `ColumnChart`, the ETF dashboard's monthly result around a zero line, with quarter guides, a gain/loss legend and a tooltip. Unlike the source it stays legible at phone width, is reachable by keyboard and always offers the figures as a table. The bar and line charts follow on #20.

**Score:** 3

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

Overview: the ETF dashboard's column chart, with legend and tooltip

