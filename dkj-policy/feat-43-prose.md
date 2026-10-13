## feat/43-prose

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

This branch is #43 and ships with `-Resolves 43`. It adds `Prose`, the component for a rendered long-form body (markdown output: headings, paragraphs, lists with task-list checkboxes, a small table, inline and block code, a blockquote, links, a rule), and switches the five previews that faked one onto it. It is a visible result, so the PR waits for an owner's look.

#### Design (Gwen)

- **Where it lives: the brand layer, not `house-style.css`.** The house file today styles only `h1`-`h3` as elements: no `p`, list, `code`, `blockquote` or link defaults exist there, and its reserved-class list is app-shell parts. Prose is a new component with ~15 element rules and two tokens the house file lacks (a monospace stack, a reading line-height), so it goes in `src/components/Prose.tsx` + `prose.css` as `.dkj-prose`, beside `tables.css` and `surfaces.css`, and registers in `sources.ts`. Consumers copy `house-style.css` verbatim into Artifacts; an Artifact that renders markdown is not a case any app has raised, and putting a large block in the file every app inlines costs all of them. If one does need it, that is an issue for moving the block down into the house file, with this component as the reference. New tokens, prefixed `--dkj-`, go in `src/brand-layer.css`: `--dkj-font-mono` (`ui-monospace, "Cascadia Code", "SF Mono", Menlo, Consolas, monospace`) and `--dkj-lh-prose` (1.55; the house body is 1.45, long text wants more). No house token or class is redefined.
- **API.** `<Prose size="base|sm" measure="text|none">{children}</Prose>`, a `div.dkj-prose` that styles plain descendant elements, so the children are ordinary JSX (`<h2>`, `<p>`, `<ul>`, ...) or the output of a markdown renderer; no class is required on any child. `size` defaults to `base` (`--text-base`); `sm` (`--text-sm`) is for a body inside a card or tile. `measure` defaults to `text` (`max-width: 70ch`, left-aligned in its container); `none` fills the container (a wide table, a narrow column). No markdown parser is added: the previews write JSX, parsing is the consuming app's job. Extra `className` is merged via `cx`.
- **Vertical rhythm.** One rule does it: `.dkj-prose > * + * { margin-top: var(--spacing-3) }` (so no margin on the first or last child, and the component adds none outside itself). Heading overrides: `> * + h1, > * + h2` get `--spacing-6`, `> * + h3, > * + h4` get `--spacing-5`; the element right after a heading gets `--spacing-2`. The house heading margins and the house `h2 { display: flex }` are neutralised inside the scope (`margin: 0; display: block`), which is a scoped element reset, not a redefinition of a house class.
- **Headings.** Markdown headings sit inside a page that already has its own h1, so they map one step down the house scale: h1 `--text-h3` (24), h2 `--text-h5` (18), h3 `--text-h6` (16), h4 `--text-base` (14, `--ink-2`), all weight 600. h1 and h2 keep the house serif stack (they inherit it; a markdown title should look like a house heading), h3 and h4 stay in the body sans, as the house does for h3. Size drops with `size="sm"` by one step each (h1 `--text-h5`, h2 `--text-h6`, h3 `--text-base`, h4 `--text-sm`). Heading level is the author's: Prose does not renumber, so the semantic outline stays the app's responsibility.
- **Text and lists.** Paragraphs: `--ink`, `--dkj-lh-prose`, `overflow-wrap: break-word` so a long URL cannot widen the page. `ul`/`ol`: `padding-left: var(--spacing-6)`, items separated by `--spacing-1`, markers in `--ink-2` (`::marker`), nested lists `margin-top: var(--spacing-1)`. **Task list** (a `li` whose first child is `input[type="checkbox"]`, matched with `li:has(> input[type="checkbox"])`): no marker, no indent, `display: flex; gap: var(--spacing-2)`, the box 1rem with `accent-color: var(--dkj-accent)`, nudged `0.3em` down so it centres on the first text line (an em offset, not the `lh` unit, which older Safari lacks). The boxes are the native read-only kind (`disabled`); done is carried by the checked box itself, not by strike-through or colour, and the item text stays `--ink`. Without `:has()` (old browsers) a task item degrades to a bulleted item with a checkbox, still readable.
- **Code.** Inline `code`: `--dkj-font-mono` at `0.9em`, background `color-mix(in srgb, var(--ink) 7%, var(--surface))`, `--dkj-radius-xs`, `padding: 0.1em 0.35em`, no border. `pre`: same mono, `--text-sm`, the same tinted background plus `1px solid var(--border)`, `--dkj-radius-md`, `padding: var(--spacing-3) var(--spacing-4)`, `overflow-x: auto`, `white-space: pre` (never wraps), `tab-size: 2`; a `pre code` resets the inline background and padding. A scrolling `pre` must be keyboard-reachable, so the showcase and the previews put `tabindex="0"` on it and the `:focus-visible` ring uses the shared focus tokens (`--dkj-focus-w`, `--dkj-focus-offset`, `--dkj-accent`). The tint is a mix of `--ink` into `--surface`, so it follows all twelve themes and both modes with no new colour.
- **Table.** The house `.table` is built for figures (right-aligned, `nowrap`, first column 180px minimum) and a markdown table is text, so it is not reused verbatim and no class is required. `.dkj-prose table` takes the same visual language by descendant selector: `--text-sm`, `th` in `--ink-2` weight 600, `border-bottom: 1px solid var(--grid)`, cell padding `--spacing-2 --spacing-2-5`, left-aligned and wrapping, `font-variant-numeric: tabular-nums`; an `align`/`style="text-align"` from the renderer wins, so a number column right-aligns where the author says so. `display: block; max-width: 100%; overflow-x: auto` lets a wide table scroll inside the measure instead of breaking the layout, with the same `tabindex="0"` + focus-ring rule as `pre`. Zebra and hover are left out (the house table has none).
- **Blockquote, links, rule, images.** Blockquote: `margin-inline: 0`, `border-left: 3px solid var(--axis)`, `padding-left: var(--spacing-4)`, `--ink-2`, not italic; paragraphs inside follow the normal rhythm. Links: `--dkj-accent` (the theme primary), always underlined (`text-underline-offset: 0.2em`, thickness 1px, 2px on hover) so colour is never the only cue, `:focus-visible` the shared 2px ring; no visited colour; inline links are exempt from the 44px target rule (WCAG 2.5.8 inline exception), and the house rule that a standalone control gets one stays with `.btn`. The primary-on-page contrast is measured in TEST across all twelve themes, not assumed; any theme under 4.5:1 is reported rather than patched here. `hr`: `border: 0; border-top: 1px solid var(--grid)`, `margin-block: var(--spacing-6)` (replaces the rhythm margin on both sides). `strong` 600 `--ink`, `em` italic. Images: only `max-width: 100%; height: auto; border-radius: var(--dkj-radius-sm)`; captions, framing and sizing are the Figure component (#50), which Prose does not pre-empt.
- **Accessibility and dark mode.** Everything is a token pair that already holds 4.5:1 (`--ink` and `--ink-2` on `--page` or `--surface`, `--dkj-accent` on both for links); nothing is a literal colour, so there is no dark-mode block in `prose.css`. Semantics are the author's plain HTML (real headings, lists, `th` with scope, `blockquote`), which is why the component is a styling wrapper and not a renderer. `prefers-reduced-motion` needs nothing: Prose has no transitions or animation. The new `var(--x)` names are defined in `brand-layer.css`, which the repo's lint check (every `var(--x)` is defined) covers.
- **Showcase.** A new section `Prose` in the Content group (`src/App.tsx` nav list and the matching section file): (1) the full sample at `base`, every element once (h1-h4, two paragraphs with a link, bold and inline code, an unordered and an ordered list with a nested level, a task list with done and open items, a three-column table with one right-aligned number column, a `pre` block that overflows to show the scroll and focus ring, a blockquote, an `hr`, a closing paragraph); (2) the same sample at `size="sm"` inside a `.card`, to show the card use; (3) a `measure="none"` row with a wide table. The theme picker already switches all twelve themes, so light and dark are checked by switching, not by extra panels. The `sources.ts` entry names the five previews as the origin.
- **Previews that switch in this branch (all five, stand-ins removed):** `PluginsPreview` (release-note bodies: the hand-rolled `ul` with `code` items becomes `Prose size="sm"`), `ThumbnailPreview` (report intro and notes), `LifeHubPreview` (dossier document, including its task items: the disabled `Checkbox` rows become native read-only task-list items inside Prose), `RecipesPreview` (the method: the `ol`, keeping the numbered steps and the source line outside Prose), `DjCylowPreview` (mix description). Each keeps its own data and layout; only the body markup moves into `<Prose>`. A preview that cannot be expressed in Prose without a new element rule reports it back rather than adding a one-off class.
- **Out of scope here:** a markdown parser or renderer, syntax highlighting, the Figure/caption component (#50), footnotes, definition lists (`DefinitionList` exists), print styles, and any edit to `house-style/`.

### CREATE

- [ ] TODO: the first step of this branch

### TEST

### DEPLOY: feat/43-prose

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

Prose: a component for a rendered markdown body

