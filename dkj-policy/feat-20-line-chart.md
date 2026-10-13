## feat/20-line-chart

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

Step 3 of #20, the last one, so this branch ships with `-Resolves 20`: `LineChart`, the brand-book mirror of the ETF dashboard's `lineChart` (total value, net deposits and result at each month end). It sits beside `ColumnChart` and `BarChart` in `src/components/Chart.tsx` and shares their `useChartFrame`, `ChartTip`, `ChartTable` and `ticks()`; its few styles go in `charts.css` under `dkj-chart-*` names, and the house `.chart`, `.tooltip`, `.more`, `.table` and `.legend` classes are not restyled. Gaps in the source that this closes: no keyboard access, one 960px image that scales its text down on a phone, no table, and a crosshair that marks only the value line.

#### Design (Gwen, by the dataviz skill)

- **Props.** `label`, `points: LinePoint[]` (`key`, `label`, `short`, optional `detail`, optional `guide` like `ColumnDatum`, and `values: Record<seriesKey, number>`), `series: LineSeries[]` (`key`, `label`, `slot: 1 | 2 | 3`, optional `step`, optional `signed`), `format`, plus the table texts (`tableLabel`, `periodHeading`). No nullable gaps: the source has none, and a missing month is the app's call to make. Points are evenly spaced, the same band layout as `ColumnChart` (a point in the middle of its band), so month ends read as months.
- **Colour.** Each series takes `--cat-<slot>` (the ETF app passes value 1, deposits 2, result 3), fixed per series and never `--gain`/`--loss`, so no slot has two meanings in one view. Identity is not colour alone: deposits is a step line (a different shape), and the Legend above carries the three `line` items. `signed` only makes the result's figure in the tooltip and table wear `delta--up`/`delta--down`, as the source does; the line stays its slot colour.
- **Y-scale.** `ticks(lo, hi, 4)` over the lowest and highest value of all series with 0 always included (the result can go negative, so the axis encloses it instead of the source's 3% stretch). The 0 gridline is `--axis`, the others `--grid`.
- **Lines.** 2px, round joins and caps. Draw order: step line, then result, then value on top (as the source). Deposits is a step: horizontal to the new point's x, then vertical (`H` then `V`), so money shows up at the month it arrived. The last point of each series gets a 4px-radius marker with a 2px `--surface` ring.
- **Width.** Drawn at the measured width (`ResizeObserver`), height 240, margins like `ColumnChart`. Below 560px the right margin is 8px and there are no end labels; from 560px it is 84px and each series gets a direct end label in text ink (12px `.val` for the value series), nudged apart by at least 14px as in the source. Axis labels thin to `LABEL_GAP`; quarter or year guides use the existing `guide` logic (`GUIDE_GAP`, a vertical `--grid` line before the point, `.axis-note` text), and the app decides where they go.
- **Crosshair.** The active point gets a vertical `--axis` line over the plot height plus a 4px marker with a 2px `--surface` ring on every series (the source marks only the value line). It appears on hover and on keyboard focus, and hides on leave, blur, Escape and scroll.
- **Pointer and keyboard.** Per-point full-band transparent `.bar` rects, as in the other charts (the house focus stroke; the pointer snaps to the nearest point by band). One tab stop (roving `focusIndex`); Left/Right move the crosshair point by point, Home/End jump to the ends, Escape hides. Each point's accessible name is `label: <series> <value>; ...`, naming every series' value with `format`.
- **Tooltip.** The house `.tooltip` in the portal via `ChartTip`, following the pointer and click-through (never `.tooltip--open`): the point's label bold, an optional `detail` line, then one row per series with a small swatch in its colour, the series label and the figure in `.num`.
- **Table.** `ChartTable` in a `.more` disclosure: one row per point, the period first and then one column per series, the `signed` column in `delta--up`/`delta--down`.
- **Stays in the app.** Dutch text (series names, the heading, the table words, the "Q2 2026" guide text), the euro and signed formatting, the month names, deriving the points from `DATA.timeline`, placing the guides, the card and the info button, and the Legend markup (house `Legend` with three `line` items).
- **Check.** The showcase gets a `LineChart` example with the ETF series (including a negative result month) and a narrow-width view; verified at 360px, with the tooltip and keyboard walk, in light and dark and across the browsers named in the repo's lens.

### CREATE

- [x] `src/components/Chart.tsx` (`LineChart`, `LinePoint`, `LineSeries`, on the shared `useChartFrame`, `ChartTip`, `ChartTable` and `ticks()`, plus `thinGuides` and `rovingKeys` extracted from the guide and key code that `ColumnChart` and `BarChart` also use) and `src/components/charts.css` (brand-layer names only).
- [x] Showcase: a `LineChart` section after `BarChart` (value, deposits as a step and a signed result going below zero, quarter guides, 360px demo) and its nav entry in `src/App.tsx`.
- [x] `src/showcase/previews/EtfPreview.tsx`: the Value over time card, on figures that match the summary (deposits € 12,500, result +€ 1,150).
- [x] `src/components/sources.ts` (`LineChart`) and `src/apps/registry.ts` (the `timeline` view lists `LineChart`; all three charts are mirrored).
- [x] `npx eslint src` and `npx tsc -b` are clean.

### TEST

- [x] Victor reviewed the diff: nothing blocking. Applied: end labels kept inside the plot, `thinGuides` and `rovingKeys` shared by all three charts, an empty `series` guarded in the tooltip anchor, end labels computed only when drawn.
- [x] The gates (`open-pr -GatesOnly`) are green.
- [x] An owner has looked at the LineChart section and the ETF preview (`npm run dev`) and approved it (October 13, 2026).

### DEPLOY: feat/20-line-chart

#### What does the change on this branch deploy to main?

##### Tier 0

The overview has its third and last chart from the ETF dashboard: `LineChart`, value, deposits as a step line and result at each month end, with a crosshair that marks every series and a legend of line items. Like `ColumnChart` and `BarChart` it stays legible at phone width, is reachable by keyboard and always offers the figures as a table. With it, #20 is done.

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

LineChart: the ETF dashboard's value-over-time chart

