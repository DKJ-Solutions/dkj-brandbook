## feat/54-date-row

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

This branch is #54 and ships with `-Resolves 54`: a list row for dated items (a fixed left column for a date, time range or distance, a title with a muted second line, an optional trailing label, and near/today/invalid states). It is a visible result, so the PR waits for an owner's look. The sources are life-hub's "Binnenkort" list and its agenda (app code only, read for structure).

#### Design (Gwen)

- **API: two components in a new `src/components/DateRow.tsx` + `daterow.css`, exported like the other rows.** `<DateList label?>` renders a semantic `ul` (`aria-label` from `label`, no bullets); `<DateRow>` renders its `li`.
  - `DateRow` props: `when` (the left-column text: "tomorrow", "in 6 days", "all day", "09:00-10:30", "3 km"), `date?` (ISO string; when given, `when` is wrapped in `<time dateTime={date}>`, otherwise a plain `span`), `title`, `sub?` (muted second line), `trailing?` (a label, e.g. a calendar name, right-aligned), `state?: 'default' | 'near' | 'today' | 'invalid'`, `reason?` (shown only for invalid), `href?`.
  - Names mirror StatRow (`dkj-row-name`/`dkj-row-sub`): classes `dkj-daterow`, `-when`, `-main`, `-title`, `-sub`, `-trailing`, `-reason`, modifiers `--near`, `--today`, `--invalid`. No house token or class is redefined.
- **Layout: CSS grid `grid-template-columns: 7.5ch-ish fixed | minmax(0,1fr) | auto`.** Use `--dkj-datecol: 9ch` as a new domain token in `daterow.css` (fits "in 6 days", "09:00-10:30" with tabular-nums), so titles align down the list. Row `min-height: var(--dkj-tap)`, rules between rows via `border-top: 1px solid var(--border)`, like `dkj-menu-row`.
  - Phone (container narrower than ~20rem, via `@media (max-width: 30em)`): the trailing label drops under the title, and the `when` column stays left and fixed, so alignment holds. Long titles wrap (`overflow-wrap: anywhere`, `min-width: 0`). The when column never wraps (`white-space: nowrap`).
- **Type:** `when` is `--text-sm`, semibold, `font-variant-numeric: tabular-nums`, colour `--ink-2`. The title is `--text-base`, `--ink`. `sub` is `--text-sm`, `--muted`... but `--muted` is tertiary, so check contrast first and use `--ink-2` as the fallback (as `dkj-row-sub` does). The trailing label is `--text-sm`, `--ink-2`.
- **near / today: never colour alone.** A 3px left accent bar (`box-shadow: inset 3px 0 0 var(--primary)`, so it takes the theme colour in every theme and dark mode, with no layout shift), plus a `--primary-soft` background, plus `when` in bold (`--dkj-fw-bold`) with `--ink`. The state also carries text: `today` prefixes a visually-present "Today" word when `when` does not already say it, `near` a "Soon" word, both as a small `badge` (house `.badge--info` class used as-is, not redefined) after the `when`. Rows keep `when` as the sole time text for screen readers (the badge text is real text, not a pseudo-element).
  - Highlighting is a state, not a computed one: the caller decides near/today (LifeHubPreview already has `near`); DateRow does no date maths.
- **invalid:** a `--bad` left bar and a small `--bad`-coloured warning icon (existing `Icon`) before the `when` text "Invalid" (the caller passes `when`; default "Invalid" if omitted). The `reason` renders as text under the title in `--bad`, role-neutral, and is linked via `aria-describedby` to the row. No `<time>` in this state. The bar, icon and text mean it never relies on red alone; red on a light surface is `--bad: #d03b3b`, and the dark theme swaps to its own `--bad`.
- **Interactive: non-interactive by default.** An optional `href` turns the title into a link (`<a>`, with a stretched `::after` for a full-row hit area, min height `--dkj-tap`, house focus ring `outline: 2px solid var(--primary)`). No row-level button and no hover fill on non-linked rows. The agenda can later add `href` without an API change.
- **Dark mode and themes:** only house tokens (`--primary`, `--primary-soft`, `--border`, `--ink`, `--ink-2`, `--muted`, `--bad`, `--text-*`, `--spacing-*`) plus the one domain token `--dkj-datecol`. Verify in at least one light and one dark theme, and in a theme whose `--primary` is light (yellow/pink), where the `--primary-soft` tint is checked against `--ink`.
- **Showcase:** a "DateRow" section in the components showcase with these demos: a plain list (date, time range, "all day", distance), a list with sub and trailing label, near and today rows, an invalid row with a reason, a linked row, and a narrow-width demo.
- **LifeHubPreview:** replace the Card-per-row "Coming up" block with a single `DateList` (keeping its invented content: `near` becomes `state="near"`, the unreadable item becomes `state="invalid"` with its reason). The agenda stays out of the preview for now.
- **Browsers:** grid, `color-mix` (already used by `--primary-soft`), `@media` width queries and inset `box-shadow` only; no `:has()` or container-query dependence, so Chrome, Firefox, Safari and Edge behave the same. A real cross-browser check is flagged as unverified until an owner looks.

### CREATE

- [x] Build `DateList` and `DateRow` in `src/components/DateRow.tsx` with `daterow.css`, and add the `--dkj-datecol` domain token to `src/brand-layer.css`.
- [x] Register `DateRow` as a brand-book original in `src/components/sources.ts` and add its nav entry in `src/App.tsx`.
- [x] Add the DateRow showcase section (plain, detail and trailing, near and today, invalid, linked, narrow) next to StatRow and FormulaRow.
- [x] Replace the "Coming up" cards in `LifeHubPreview` with one `DateList` and update the life-hub hub view components in `src/apps/registry.ts`.
- [x] Measure the contrast of the near/today text and of `--ink-2` on the `--primary-soft` tint in all twelve themes; `npx eslint src` and `npx tsc -b` run clean.

### TEST

### DEPLOY: feat/54-date-row

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

DateRow: a list row with a date column, muted detail and a near/today state

