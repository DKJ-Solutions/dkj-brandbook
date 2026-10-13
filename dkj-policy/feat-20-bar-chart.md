## feat/20-bar-chart

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

This branch is step 2 of #20: `BarChart`, the brand-book mirror of the ETF dashboard's horizontal bar chart `hbar`, which the dashboard uses twice ("Allocation" and "Unrealised result"). Step 1 shipped `ColumnChart` (`Chart.tsx`, `charts.css`); `BarChart` follows its principles and sits beside it. The line chart stays on #20, so this branch ships with `-NoResolves` and a comment on the issue saying what landed and what is left.

#### Design (Gwen, by the dataviz skill)

- **Props: one datum, two colourings, never both in one view.** `BarDatum = { key, label, short?, value, detail?, series? }`; `label` is the full name (tooltip, table, accessible name), `short` is what the row shows (defaults to `label`). The chart takes `colorBy: 'series' | 'direction'`, as a discriminated union so TypeScript refuses a mix. `'series'`: each bar is the house `--cat-N` of its `series` (1 to 3), which is Allocation, where the colour means the holding type and the legend (house `Legend`, three items) is the key. `'direction'`: positive in `--gain`, negative in `--loss`, no legend needed because the side of the zero line says the same; that is the Unrealised result. A slot never means a type in one chart and a sign in the same view. Other props as in `ColumnChart`: `label`, `format`, `tableLabel`, `itemHeading`, `valueHeading`, plus optional `share?: (fraction: number) => string`. The order of `data` is kept, so the app sorts.
- **Marks.** Bar thickness 18px (at most 20), 4px rounded at the data end and square at the baseline, a negative bar mirrored to the left of the zero line, a 1px bar for a zero value so it never vanishes. The pairing claims are not new: `--gain`/`--loss` keep the numbers measured in step 1, and `--cat-1..3` are the house series colours, so no new validation. Direction is never colour alone (side of the axis carries it too).
- **Zero axis.** A 1px `--axis` line at 0, full row-block height. With only positive values (Allocation) it is the left edge of the plot and the bars are square there. With mixed values it sits inside the plot, with a symmetric `ticks()` scale. No gridlines or tick labels: the value sits at the end of each row.
- **Drawn at its real width** (ResizeObserver, `width > 0` guard, as in step 1), so 12px labels stay 12px at 360px; no scaled viewBox. This replaces the source's fixed 170px label and 84px value on a 480px viewBox scaled as an image, which shrank text to about 9px on a phone.
- **Label and value columns, two layouts by width.** At 480px and up: a row is 30px, the label column is 30% of the width clamped to 96-168px, the value column is the measured width of the widest formatted value (about 7px per character plus 8px) and sits at the right edge, the bars take the rest. Below 480px: each row is stacked at 48px, label left and value right on one 16px line, with the full-width bar under it, so nothing is squeezed and the row is still above the 44px touch target. Either way an over-long label is cut with an ellipsis at what fits, on a character estimate, and the full name is in the tooltip, the table and the accessible name. The app shortens names in `short` (as the source's `short()` does); the component only guarantees nothing overflows.
- **Interaction.** Same as `ColumnChart`: hit area is the full row, one tab stop (roving `tabIndex`), Up/Down, Home/End move, Escape hides the tooltip, and each row has an accessible name `label (detail): value`. Pointer or focus shows the house `.tooltip` in a portal, following the pointer and click-through (never `.tooltip--open`), kept inside the viewport and hidden on scroll. The hover look is `.dkj-chart-bar--active` (opacity 0.8, like the house `.bar:hover`); the house `.chart` classes are used, never restyled.
- **Tooltip and table.** Tooltip: bold `label`, muted `detail` lines (`.dkj-chart-detail`, which the app fills with e.g. type and quantity, or cost and value), then the value with `delta--up`/`delta--down` for `'direction'` and plain `num` for `'series'`, then, when `share` is given, the share of the sum of all bars ("12% of total"; only meaningful for Allocation, so the app opts in). Table in a house `.more` disclosure with a `.table`: Item (label and detail), Value, and a Share column when `share` is on; same figures as the chart, always reachable.
- **Brand layer only.** `dkj-chart-*` class names, additions to `charts.css`, `Chart.tsx` extended by sharing `cx`, the tooltip placement and the table. Extract the pieces shared with `ColumnChart` only where they are identical, without changing its behaviour.
- **Stays in the app.** All Dutch text (chart and table labels, "van totaal", "stuks", "Kostprijs"), the type-to-series mapping (which holding type is `--cat-1`, `-2`, `-3`, and Cash), the `short()` names, the sorting, the currency and sign formatting. The showcase gets an Allocation example (three series, a Cash row) and a gain/loss example in English.

### CREATE

- [ ] TODO: the first step of this branch

### TEST

### DEPLOY: feat/20-bar-chart

#### What does the change on this branch deploy to main?

##### Tier 0

**Score:**

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

**Score:**

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

**Score:**

#### Pull Request

BarChart: the ETF dashboard's horizontal bar chart

