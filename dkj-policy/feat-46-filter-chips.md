## feat/46-filter-chips

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

This branch is #46 and ships with `-Resolves 46`. It adds `FilterChips`, a multi-select filter group (a row of toggle chips, several on at once, optional colour dot, a clear action), and switches the two previews that approximate one today. It is a visible result, so the PR waits for an owner's look.

#### Design (Gwen)

- **API, mirroring `SegmentedChoice`:** `FilterChips<T extends string>({ label, options, value, onChange, clearLabel? })`. `options: readonly { value: T; label: string; color?: string }[]`, `value: readonly T[]`, `onChange(next: T[])`, `label: string` (required, the group name). `clearLabel` defaults to `'Clear'`. Empty `value` means "no filter", so the "All" option disappears from the previews. It lives in `src/components/Button.tsx` beside `SegmentedChoice` (CSS in `buttons.css`), and is exported there.
- **Dot colour is a free CSS colour, not `SeriesColor`.** Only 3 series slots exist, and a mood or playlist colour is data of the user's content, not a chart series. The dot is set as `style={{ '--c': color }}` on the chip, so it takes `var(--cat-1)` as readily as `#c0392b`. The dot is `aria-hidden` and decorative: the label always carries the meaning, so `color` is optional and never the only differentiator. A dot gets a hairline ring in an existing border token so a pale or dark-theme colour does not vanish on the surface. No contrast promise is made for the dot (the label text keeps ordinary text contrast). The docs say: pass house tokens where the colour is brand, a literal where it is content.
- **Group semantics:** `role="group"` + `aria-label={label}`, one `<button type="button" aria-pressed>` per chip, as `SegmentedChoice` does. Plain Tab order, one stop per chip; no roving tabindex, because these are independent toggles and not a radio set. Space and Enter come free from `<button>`.
- **Clear action:** a text button at the end of the row, rendered only while `value.length > 0`. Its visible text is `clearLabel`; its accessible name is `${clearLabel} ${label}` via `aria-label` only when the visible text does not already contain it (so "Clear" becomes "Clear Colour"). It is a plain button with no `aria-pressed`. After activating it, focus moves to the first chip, because the clear button just unmounted. No live region: the filtered list's own count line (already in the previews) announces the result.
- **Look:** a pill (fully rounded), `min-height: var(--tap)` (44px), built from house tokens only: off = `--border` outline, `--ink-2` text, surface background; on = `--primary` fill with `--on-primary` text, the same on-state as `.seg`. The on state is not colour alone: an on chip also shows a leading check mark (inline SVG, `aria-hidden`) in the slot where the dot sits, or after the dot, so the on state survives greyscale and a dot colour close to the primary. Focus ring `2px solid var(--primary)` with `outline-offset: 2px` (not inset: a pill row does not clip). The dot sits on the primary fill with its ring so it stays visible. Hover is the border darkening, as on the other buttons.
- **Wrapping, not scrolling:** the row is `display: flex; flex-wrap: wrap; gap: var(--spacing-2)`. A horizontally scrolling row hides chips and their pressed state off-screen, and the 360px phone must show every filter. This replaces the recipe source's scroll on purpose; the Clear button wraps with the chips. No new tokens, no `.seg` or house class redefined; all new names are `dkj-filter-chips*`.
- **Showcase (Actions section, next to SegmentedChoice, list item added in `App.tsx`):** a Section "FilterChips" with demos for: text-only tag chips (multi-select, one preset on); colour-dot chips (Red, Green, Blue, with the dot colours as house tokens); a mixed set where only some options have a dot; and a long set that wraps at 360px. Each demo shows the Clear action appearing. Register it in `sources.ts` like the other components.
- **Previews switched in this branch:** `MusicLibraryPreview`, playlists card: the Colour checkboxes become a `FilterChips` with dots (the existing `colours` state and `toggleColour` collapse into `onChange`), and the Density and BPM tier `SegmentedChoice`s become multi-select `FilterChips`; their `ALL` entries, "Density: all" and "BPM: all" labels and the matching `=== ALL` filter branches change to "empty means all" (state becomes arrays). `ID filled`, Type and Genre stay as they are (single choice in the source), as does the tracks view's BPM SelectField. `RecipesPreview`: the Tags checkboxes become a `FilterChips` (AND semantics unchanged: `tags.every`), dropping `toggleTag`. Update the registry description and components list for both previews to name `FilterChips`.
- **Not in this branch:** a count badge on the chip, a "select all" action, and keyboard arrow navigation. Tests (Tycho) cover toggle, `aria-pressed`, the Clear visibility and its accessible name.

### CREATE

- [x] `FilterChips<T extends string>` in `src/components/Button.tsx` beside `SegmentedChoice`, with its `dkj-filter-chip*` CSS in `src/components/buttons.css`.
- [x] Registered in `src/components/sources.ts` (`FilterChips: []`), listed in `src/App.tsx` and demoed in the Actions section (text tags, colour dots, mixed, long wrapping set).
- [x] `MusicLibraryPreview` (Colour, Density, BPM tier) and `RecipesPreview` (Tags) switched to `FilterChips`; `src/apps/registry.ts` updated for playlist-manager and recipe-list.

### TEST

### DEPLOY: feat/46-filter-chips

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

FilterChips: a multi-select filter group with optional colour dots

