## feat/44-disclosure-summary

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

This branch is #44 and ships with `-Resolves 44`. `Disclosure` takes `summary: string`, so a release row of the dkj-claude-plugins release-notes page (accent bold version, optional chip, date, chevron) cannot be built from it, and `PluginsPreview` flattens it to "v2.1.0 · title · date". The change is a visible result (a component's look), so the PR waits for an owner's look; the checkout stays on this branch until one has looked.

#### Design (Gwen)

- **API: `summary` widens to `ReactNode`, plus two optional slots `meta` and `trailing` (also `ReactNode`).** `summary` stays the title, so every existing call (`summary="Help"`) renders byte-for-byte as before. Slots over a bare `ReactNode` summary because the component owns the layout (wrap, alignment, chevron position); with only a `ReactNode` each consumer would rebuild a flex row and drift. Slots over a `title` prop because renaming `summary` would break callers for no gain.
- **Markup:** with neither slot given, the output is unchanged (`<summary>{summary}</summary>`). With a slot, the summary holds `<span class="dkj-disclosure-title">`, then `<span class="dkj-disclosure-meta">` and `<span class="dkj-disclosure-trailing">` (each only when given). Brand-layer names only (`dkj-disclosure-*`); no house class or token is touched.
- **Accessibility:** the summary's accessible name is its text content in DOM order (title, meta, trailing), e.g. "v2.1.0 Title 13 Oct 2026 Latest", and the chevron stays empty-named through the existing `content: '...' / ''` rule. Slots are non-interactive content only: no button, link or input inside `<summary>` (state this in the doc comment; a `Chip` or `TitleTag` is a `span`, so they are fine). Keep DOM order equal to visual order so reading and tab order agree; the native disclosure semantics and keyboard behaviour stay.
- **Layout (structured summary only):** `summary` becomes a flex row, `flex-wrap: wrap`, `align-items: baseline`, `column-gap: var(--spacing-2)`, `row-gap: var(--spacing-0-5)`. Title: `flex: 1 1 12ch`, `min-width: 0`, `overflow-wrap: anywhere`, bold, `--ink` unless the caller styles it. Meta and trailing sit right (`margin-inline-start: auto` on the first right-hand item), meta in `--ink-2` at `--text-sm` with `font-variant-numeric: tabular-nums` and `white-space: nowrap`; trailing is `white-space: nowrap`. The chevron (the existing `::after`) becomes the last flex item, `flex: none`, so it stays on the right of the first line. At phone width the right-hand items drop under the title and left-align (wrapping, not truncating); the summary's min height stays at the 44px tap target (`min-height: var(--tap)`, `align-content: center`).
- **Meta colour is `--ink-2`, not `--muted`:** the house stylesheet reserves `--muted` for icons (3:1); text there needs the 4.5:1 pairings, and `--ink-2` on page/surface is one of them in every theme.
- **Accent-bold version:** a modifier on the title slot is not needed; the caller passes `<span className="dkj-disclosure-version">v2.1.0</span>`, a new brand-layer class: `color: var(--dkj-accent); font-weight: var(--dkj-fw-bold)`. `--dkj-accent` is `--primary`, and the accent-on-page/surface text pairing was measured at 4.5:1 or more in every theme in #43, so no new token and no new measurement. Focus ring unchanged (house `--dkj-focus-w`/`--dkj-accent`, drawn around the whole summary row).
- **Sticky open summary of the source: out.** It is a scroll behaviour of one page, not part of the row look, it needs `position: sticky` offsets that depend on the host's headers, and nothing in #44 asks for it. Not filed: no measured need.
- **Showcase (`Surfaces.tsx`, the Disclosure section):** keep the two plain demos, add a third "Structured summary" demo: version (accent bold), title, a `Chip` or `TitleTag` as trailing, date as meta; plus the same row narrowed (a ~320px wide wrapper) to show the wrap. Update the section intro to name `meta` and `trailing`; update `sources.ts` only if its mapping lists props (it lists source classes, so likely nothing).
- **Previews:** `PluginsPreview` release rows switch (version accent bold, title, date as meta, an optional `TitleTag`/`Chip` as trailing on the latest row, which makes the optional chip visible). `ThumbnailPreview` "Notes per round" switches too: round as title, date as meta, the verdict `Chip` (`yes`/`no`) as trailing; the NOTES data needs a placeholder date and verdict per round, matching the CANDIDATES wording ("Within the margin" / "Outside the margin"). `MesowisePreview` and `Overlays` keep the plain string.
- **Checks for CREATE/TEST:** `lint-web.ps1` stays green (every `var(--x)` defined); eyeball every theme light and dark, and a 320px viewport; keyboard: Tab to the summary, Enter/Space toggles, ring visible; no interactive element inside `<summary>`.

### CREATE

- [x] `Disclosure` (`src/components/Feedback.tsx`): `summary` widened to `ReactNode`, optional `meta` and `trailing` slots; a plain string renders as before.
- [x] Brand-layer CSS in `src/components/surfaces.css`: `dkj-disclosure-title`, `-meta`, `-trailing`, `-version`, the wrapping flex row with the chevron last.
- [x] Showcase (`Surfaces.tsx`): the third "Structured summary" demo plus a 320px wrapper (`.bb-narrow` in `showcase.css`), and the section intro.
- [x] Previews: `PluginsPreview` release rows and `ThumbnailPreview` "Notes per round" use the slots; `MesowisePreview` and `Overlays` stay on plain strings.
- [x] `npx eslint src` and `npx tsc -b` run clean.

### TEST

### DEPLOY: feat/44-disclosure-summary

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

Disclosure: allow a structured summary (title, meta, trailing)

