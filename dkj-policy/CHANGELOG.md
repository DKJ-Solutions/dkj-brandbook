# Changelog

## [Unreleased]

**54 minor entries** <!-- pending-tally -->

### DEPLOY: feat/lilac-more-purple · 20261014-190840Z

#### What does the change on this branch deploy to main?

##### Tier 0

The primary scale grows from six steps to seven, with the theme's own colour in the middle: `--primary-4` is
the most saturated step and the anchor (buttons, switches, focus rings, links, `h1` and `h2`, the picker's dot).
`-1` and `-2` are the page and the card; `-3` the lines and the tinted surfaces; `-5` the text on a tinted
surface, as grey as `-3` on the far side of the colour; `-6` has no role yet; `-7` is the far end, an inverted
surface. `--primary-4` and `--primary-5` change meaning and `--primary-6` changes value, so a consuming repo
renames in the order the README's migration rows give (old `-4` -> `-3` first, old `-5` -> `-4`, old `-6` ->
`-4` last). On the dark themes the fills and links turn from near-white to the theme's colour itself, and all
six dark themes carry about twice the colour on their page, cards and lines. Petrol and Roest move a fraction
darker, Hemelsblauw to Blauw's hue.

The untinted neutral ramp is removed: all text is `--primary-5` (the same lightness as `--neutral-3`, now in the
theme's tint), grey lines are `--primary-3`, a chart's axis and zero line `--primary-5`, and the info dialog's
base `--primary-2`. A consuming repo replaces every `--neutral-*` after the primary renames, as the README's
migration rows give.

**Score:** 5

##### Tier 1

Every app looks like its theme's colour: on dark the buttons, links and headings now carry the colour itself instead of near-white.

**Score:** 2

##### Tier 2

A user sees buttons, links and headings in the theme's own colour, and a more colourful page on dark.

**Score:** 2

#### Pull Request

The primary scale has seven steps, with the theme's colour as --primary-4

[PR #96](https://github.com/DKJ-Solutions/dkj-brandbook/pull/96)

---

### DEPLOY: feat/remove-neutral-1-5 · 20261014-151108Z

#### What does the change on this branch deploy to main?

##### Tier 0

The neutral ramp drops its two ends. `--neutral-1` and `--neutral-5` are gone, and the old `--neutral-2`,
`-3` and `-4` are renumbered `--neutral-1`, `-2` and `-3`. The new `--neutral-1` is also a step darker
(`#ebebe8` light, `#262625` dark) so the surface plane reads apart from the page. What read the old
`--neutral-1` (the ground, text and icons on the primary, the status-icon mark, dialog backdrops) now reads
`--primary-1`; the theme swatches mix their tint over `white` or `black`, so each previews its own page in
either mode. What read the old
`--neutral-5` (primary text, focus outlines, the inverted button) now reads `--neutral-3`, so primary and
secondary text share one grey. `.dkj-msg--warn` reads `--warning-5`. A consuming repo renames in the order
the README's migration rows give.

**Score:** 5

##### Tier 1

Body text across every DKJ-Solutions app turns from near-black to the dark grey of secondary text; the brand
looks softer.

**Score:** 3

##### Tier 2

A user sees text a shade lighter (still at least 6.2:1) and nothing else changes.

**Score:** 2

#### Pull Request

The neutral ramp drops its two ends: --neutral-1 to --neutral-3 remain

[PR #95](https://github.com/DKJ-Solutions/dkj-brandbook/pull/95)

---

### DEPLOY: feat/77-heading-levels-match-size · 20261014-142909Z

#### What does the change on this branch deploy to main?

##### Tier 0

A component's heading element now takes the token of its own level. The card title is an `<h6>` (an `<h2>`
in a data card), the dialog title an `<h6>`, `<h3>` as a card heading or `<h5>` in a drawer, the alert and
QuestionBlock titles `<h5>` and the calculation question `<h6>`; the house `.dialog__title` goes on an `<h6>`
(`<h5>` in a drawer, now `--text-h5`). The house style gains `--font-serif`, the face of `h1` and `h2`, so a
title that moved off `<h2>` keeps it. Sizes, faces and colours are unchanged.

**Score:** 2

##### Tier 1

Markup and outline only; management sees no change.

**Score:** N/A

##### Tier 2

Nothing a user sees changes; a screen reader announces these titles at their new level.

**Score:** N/A

#### Pull Request

Component headings take the level whose token they are sized at

[PR #91](https://github.com/DKJ-Solutions/dkj-brandbook/pull/91)

---

### DEPLOY: feat/no-colour-literals · 20261014-140409Z

#### What does the change on this branch deploy to main?

##### Tier 0

No stylesheet types a colour where a house token already holds it. The navigation's text reads `--neutral-1`
and `--neutral-3` directly (`--bb-nav-ink` and `--bb-nav-ink-2` are gone), the theme swatches and the dialog backdrops read `--neutral-1`, and a new gate step
(`scripts/lint/check-colour-literals.mjs`) refuses a colour code outside a token declaration, or a repo token
that retypes a house value.

**Score:** 3

##### Tier 1

Internal consistency of the brand book; management sees no change.

**Score:** N/A

##### Tier 2

The navigation's secondary text is a touch lighter on a light theme and darker on a dark theme. The theme
swatches take the current page's ground, so on a dark page the light themes' swatches are dark too. The page
behind an open dialog fades towards white on a light theme instead of darkening.

**Score:** 2

#### Pull Request

Every colour is a token: no duplicated colour codes, and a gate that keeps it so

[PR #89](https://github.com/DKJ-Solutions/dkj-brandbook/pull/89)

---

### DEPLOY: feat/86-button-family · 20261014-134935Z

#### What does the change on this branch deploy to main?

##### Tier 0

SaveButton, DownloadButton and ResetButton are gone; Button covers all three. Save is `Button variant="primary"`,
the offline download is `<Button href download icon="download" block>`, and the reset beside a Stepper is
`<Button variant="outline" tone="accent">`. A primary button is no longer always full width: `block` is now the
only width control, so a call site that relied on it adds `block`. A link button with `aria-disabled` is inert.
The Overlap section drops the three resolved findings and corrects the stale ones (#85).

**Score:** 4

##### Tier 1

A clean-up of the component set; management sees no change.

**Score:** N/A

##### Tier 2

Every default button now shows an accent border on hover and moves 1px down when pressed, as the download
button did. A disabled primary button looks like the old disabled Save button (colourless, not faded), and the
download button takes the default button's fill.

**Score:** 2

#### Pull Request

SaveButton, DownloadButton and ResetButton fold into Button

[PR #88](https://github.com/DKJ-Solutions/dkj-brandbook/pull/88)

---

### DEPLOY: feat/dark-nav-contrast · 20261014-132326Z

#### What does the change on this branch deploy to main?

##### Tier 0

On the six dark themes the top of the theme scale now mirrors the bottom of the light themes: `--primary-6`
has the lightness of a light theme's `--primary-1` and `--primary-5` that of its `--primary-2`, each in the
dark theme's own hue. Both are near-white, so on dark the headings and links, primary buttons, pressed
switches, info badges and meters, focus rings and accent lines all turn near-white, with near-black text on a
fill. The brand book's navigation panel takes `--primary-6` with black text, the mirror image of the
near-black panel on the light themes. A repo that takes this house-style update changes nothing of its own;
its dark themes simply look this way.

**Score:** 4

##### Tier 1

Colour values in the house style; management sees no change.

**Score:** N/A

##### Tier 2

On a dark theme, every DKJ-Solutions app shows its headings, links, primary buttons and switches in a
near-white tint of the theme colour instead of the bright theme colour.

**Score:** 4

#### Pull Request

The dark themes' top of the scale mirrors the light themes' ground

[PR #87](https://github.com/DKJ-Solutions/dkj-brandbook/pull/87)

---

### DEPLOY: feat/colour-tokens-by-switch · 20261014-124156Z

#### What does the change on this branch deploy to main?

##### Tier 0

Every house colour token has a new name, on one scale: a number is a step from the ground (`-1`: light on the
light themes, dark on the dark ones) to the text. The black, white and grey tokens are now `--neutral-1` …
`--neutral-5`; the theme's own colours `--primary-1` … `--primary-6` (page, card, tinted background, line, the
colour, the colour as text), each a fixed value per theme instead of a mix; and the status colours
`--negative-1/3/5`, `--positive-1/3/5` and `--warning-1/3/5` (background, fill, text). `--on-warn`, `--loss`,
`--muted` and the grid line are gone, folded into their nearest neighbour, and there are new message backgrounds
and a warning text colour. A repo that takes this update renames every colour token it reads; the README has
the table from each old name to its new one. Class names such as `.badge--good` keep theirs.

**Score:** 4

##### Tier 1

A renaming of the house style's colour tokens; management sees no change.

**Score:** N/A

##### Tier 2

On the light themes the page is now the whitest layer with the cards a shade off it, lines carry more of the
theme's colour, a loss in a chart is a slightly darker red and `--positive-3` is a step lighter on dark. The
warning tag's text turns white on the dark themes.

**Score:** 2

#### Pull Request

Colour tokens on one ground-to-text scale

[PR #84](https://github.com/DKJ-Solutions/dkj-brandbook/pull/84)

---

### DEPLOY: feat/drop-gain-token · 20261014-113553Z

#### What does the change on this branch deploy to main?

##### Tier 0

The house token `--gain` is gone: it was always the same colour as `--cat-1`, which a gain in a chart now
uses. A repo that still reads `var(--gain)` gets no colour there until it replaces it with `var(--cat-1)`,
which looks exactly the same in every theme, light and dark. The legend's `color="gain"` is now
`color="cat-1"`.

**Score:** 4

##### Tier 1

A token rename inside the house style; management sees no change.

**Score:** N/A

##### Tier 2

The replacement colour is identical, so once a repo has swapped the name no user sees a difference.

**Score:** N/A

#### Pull Request

Drop --gain; --cat-1 is the same colour

[PR #83](https://github.com/DKJ-Solutions/dkj-brandbook/pull/83)

---

### DEPLOY: feat/drop-dkj-colour-tokens · 20261014-113419Z

#### What does the change on this branch deploy to main?

##### Tier 0

The brand book's own layer (`src/brand-layer.css`) no longer defines any colour: the 14 `--dkj-*`
colour tokens are gone and every component reads the house tokens directly. The info and accent dialogs
re-declare `--primary` / `--surface` inside their own subtree to tint their contents, which
house-style/README.md rule 3 now allows as its one narrow exception. Inside a tinted dialog, the info
rows and alerts now mix over the dialog's tinted surface rather than the page's.

**Score:** 2

##### Tier 1

Internal to the brand book's own component layer; management sees nothing change.

**Score:** N/A

##### Tier 2

The house stylesheet every app loads is unchanged, so no user of a DKJ-Solutions app sees a difference.

**Score:** N/A

#### Pull Request

Drop the --dkj-* colour tokens; components use house tokens directly

[PR #82](https://github.com/DKJ-Solutions/dkj-brandbook/pull/82)

---

### DEPLOY: docs/accent-alias-comment · 20261014-103112Z

#### What does the change on this branch deploy to main?

##### Tier 0

The comment above `--dkj-accent`, `--dkj-surface` and `--dkj-on-accent` now says why they exist when they equal the house tokens: a house token is never re-declared, so the alias is what `.dkj-dialog--info` re-declares to give everything inside it `--cat-1`. A reader who asked "isn't `--dkj-accent` just `--primary` twice?" finds the answer at the definition.

**Score:** 1

##### Tier 1

A code comment; management sees nothing of it.

**Score:** N/A

##### Tier 2

A code comment; no user of a DKJ-Solutions app sees anything change.

**Score:** N/A

#### Pull Request

The accent alias says which dialog it exists for

[PR #80](https://github.com/DKJ-Solutions/dkj-brandbook/pull/80)

---

### DEPLOY: fix/swatch-readability · 20261014-102705Z

#### What does the change on this branch deploy to main?

##### Tier 0

The colour swatches in the brand book's Tokens section read as a name over its value: the name is
semibold in ink, the value smaller and monospaced in ink-2. A mixed token shows the one colour it
resolves to, with its recipe in token names beneath it ("--surface + 7% --primary"), and an alias names
the token it stands for ("= --surface"), instead of a nested `color-mix()` of bare hexes.

**Score:** 2

##### Tier 1

Only the brand book's own showcase changes; no app or house token is touched.

**Score:** N/A

##### Tier 2

No subscriber-facing surface changes.

**Score:** N/A

#### Pull Request

Token swatches read as name over value, and a mixed token shows its colour and its recipe in token names

[PR #79](https://github.com/DKJ-Solutions/dkj-brandbook/pull/79)

---

### DEPLOY: feat/every-token-shown · 20261014-100914Z

#### What does the change on this branch deploy to main?

##### Tier 0

The brand book now opens with an intro: the page's one `<h1>` at `--text-h1` (the navigation now opens with its own `<h2>` "Contents" instead of repeating the name), a hero card at the house display size (h0) and a type specimen with every heading level and the running-text styles. Its Tokens section now draws every token the house style and the brand layer define: the whole spacing scale, the theme tint percentages, the app-shell and layout sizes, the dialog scale, type weights, line heights, tracking and the mono stack, the focus ring and shadow, and every motion duration, animated. Every heading in the brand book now takes its own level's token -- section titles are the full h2 size -- and the house style gives `h4`, `h5` and `h6` their `--text-h4`/`-h5`/`-h6` tokens (#76). The Apps overview and the Overlap review now come last, after the components. The brand layer drops `--dkj-text-display` and `--dkj-text-input`: the hero and step values are set at the house h0 and inputs at `--text-lg`. A blank swatch that named a non-existent `--dkj-on-warn` is gone; `--on-warn` shows under the house status colours.

**Score:** 2

##### Tier 1

The brand book's own showcase; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change until an app takes the house h4-h6 rule after a house-style release.

**Score:** N/A

#### Pull Request

The brand book shows every token

[PR #78](https://github.com/DKJ-Solutions/dkj-brandbook/pull/78)

---

### DEPLOY: feat/dark-nav-on-light · 20261014-091348Z

#### What does the change on this branch deploy to main?

##### Tier 0

On a light theme the brand book's sidebar is now a dark panel -- near-black with 18% of the theme's primary, white links, light grey group labels and the brand name in a light tint of the primary -- so it stands apart from the light main area. Dark themes keep the tinted sidebar they had. The colours are showcase-only `--bb-nav-*` variables picked per mode with `light-dark()`. The light themes' tint is also halved in the house style -- page 6% (was 12%), cards 2% (was 4%), lines 8% (was 12%) -- so a light page reads whiter; dark themes are unchanged. The views in the apps overview get their own tint, a step deeper than the page and the card around them, instead of the page colour.

**Score:** 2

##### Tier 1

The brand book's own chrome; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change until an app takes the softer tint after a house-style release.

**Score:** N/A

#### Pull Request

A dark brand book navigation and a softer tint on the light themes

[PR #75](https://github.com/DKJ-Solutions/dkj-brandbook/pull/75)

---

### DEPLOY: feat/theme-presence · 20261014-075843Z

#### What does the change on this branch deploy to main?

##### Tier 0

A house theme now colours the whole page instead of a few controls: the page, cards, dividers and borders take a light tint of the theme's primary, h1/h2 and links take `--primary-ink` (the primary pulled towards the ink, so body-size contrast stays above AA on the tinted page), and the brand book's sidebar is themed with a solid-primary active link. Each tint is one per-mode token, so the strength is tuned in one place.

**Score:** 4

##### Tier 1

Internal design system; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change until an app adopts it after a house-style release.

**Score:** N/A

#### Pull Request

A theme tints the page, the surfaces, the headings and the brand book's navigation

[PR #74](https://github.com/DKJ-Solutions/dkj-brandbook/pull/74)

---

### DEPLOY: feat/72-theme-reach · 20261014-071729Z

#### What does the change on this branch deploy to main?

##### Tier 0

A house theme now reaches beyond the primary button: links, checkboxes, radios, sliders, progress bars, the text caret and the selection take `--primary` by default, and `.header--accent`, `.card--accent`, `.tile--accent` and `.table--accent` carry it onto the page's surfaces where an app opts in. The link rules weigh nothing (`:where()`), so a class on an `<a>` keeps its own look. The Tokens section shows it all.

**Score:** 3

##### Tier 1

Internal design system; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change until an app adopts it after a house-style release.

**Score:** N/A

#### Pull Request

A theme reaches links, native controls and a small set of house accents

[PR #73](https://github.com/DKJ-Solutions/dkj-brandbook/pull/73)

---

### DEPLOY: feat/70-house-settings-button · 20261013-203427Z

#### What does the change on this branch deploy to main?

##### Tier 0

The house style has a settings button: `DKJTheme.settings(el)` draws a round toggle that opens a panel with the theme picker, a reset and a slot for the app's own settings, inline (e.g. in a `.topbar`) or floating top right with `.theme-settings--floating`. The script owns opening and closing. The brand book's preview settings now use it, and the TopBar section shows it inline.

**Score:** 3

##### Tier 1

Internal design system; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change until an app adopts it after a house-style release.

**Score:** N/A

#### Pull Request

A settings button in the house style: a round toggle with the theme picker in a panel

[PR #71](https://github.com/DKJ-Solutions/dkj-brandbook/pull/71)

---

### DEPLOY: fix/68-panel-inside-click · 20261013-195827Z

#### What does the change on this branch deploy to main?

##### Tier 0

The brand book's preview settings panel stays open on a click inside it; only a click outside it, Escape, the round button or tabbing out closes it.

**Score:** 2

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

The settings panel stays open on a click inside it

[PR #69](https://github.com/DKJ-Solutions/dkj-brandbook/pull/69)

---

### DEPLOY: feat/66-toolbar-toggle · 20261013-195046Z

#### What does the change on this branch deploy to main?

##### Tier 0

The brand book's preview settings (theme picker, reset, width) no longer take a full-width bar at the top of the page: a round sticky button at the top right opens them as a floating panel over the page, and Escape or a click outside closes it.

**Score:** 2

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

A round sticky button that collapses and expands the preview toolbar

[PR #67](https://github.com/DKJ-Solutions/dkj-brandbook/pull/67)

---

### DEPLOY: feat/64-overlap-section · 20261013-193652Z

#### What does the change on this branch deploy to main?

##### Tier 0

The brand book has an Overlap section under Apps: the review of which components duplicate or closely resemble each other (five strong candidates for a merge, five borderline pairs, four that only look alike), each with a proposal and links to the components, so a merge can be decided per pair.

**Score:** 2

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

An Overlap section: components that duplicate or closely resemble each other

[PR #65](https://github.com/DKJ-Solutions/dkj-brandbook/pull/65)

---

### DEPLOY: feat/54-date-row · 20261013-155115Z

#### What does the change on this branch deploy to main?

##### Tier 0

The brand book has `DateList` and `DateRow`: a list of dated items with a fixed date column so titles align, a muted second line, an optional trailing label, a highlighted near or today state (a tint, a bar and a tag, not colour alone) and an invalid state with its reason. The life hub preview's "Coming up" list uses it.

**Score:** 2

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

DateRow: a list row with a date column, muted detail and a near/today state

[PR #63](https://github.com/DKJ-Solutions/dkj-brandbook/pull/63)

---

### DEPLOY: feat/50-figure · 20261013-151441Z

#### What does the change on this branch deploy to main?

##### Tier 0

The brand book has a `Figure`: an image in a frame with a fixed aspect ratio, cover or contain, an optional caption, and a placeholder for when there is no image, it must not be shown, or it fails to load. The thumbnail preview's contact sheet shows its candidates with it.

**Score:** 2

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

Figure: an image frame with aspect ratio, caption and a placeholder state

[PR #62](https://github.com/DKJ-Solutions/dkj-brandbook/pull/62)

---

### DEPLOY: feat/48-group-heading-level · 20261013-145855Z

#### What does the change on this branch deploy to main?

##### Tier 0

`GroupHeading` takes an optional `level` (2 to 4, default 3) without changing its look, so a page can give its sections their place in the outline. The previews now run h1, h2, h3 in order, which a screen reader's heading list follows.

**Score:** 2

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

GroupHeading: an optional heading level

[PR #61](https://github.com/DKJ-Solutions/dkj-brandbook/pull/61)

---

### DEPLOY: feat/46-filter-chips · 20261013-145406Z

#### What does the change on this branch deploy to main?

##### Tier 0

The brand book has `FilterChips`: a wrapping row of toggle chips where several can be on at once, each optionally with a colour dot, a check mark on what is on, and a clear action. The music library preview filters colour, density and tempo with it, and the recipes preview its tags.

**Score:** 2

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

FilterChips: a multi-select filter group with optional colour dots

[PR #60](https://github.com/DKJ-Solutions/dkj-brandbook/pull/60)

---

### DEPLOY: feat/44-disclosure-summary · 20261013-144756Z

#### What does the change on this branch deploy to main?

##### Tier 0

A `Disclosure` summary can now carry structure: a title (with an accent-bold version where it fits), a muted meta such as a date, and a trailing chip or tag, wrapping under the title on a narrow width. A plain text summary renders as before. The release notes in the plugins preview and the notes per round in the thumbnail preview use it.

**Score:** 2

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

Disclosure: allow a structured summary (title, meta, trailing)

[PR #59](https://github.com/DKJ-Solutions/dkj-brandbook/pull/59)

---

### DEPLOY: feat/56-remove-djcylow · 20261013-143601Z

#### What does the change on this branch deploy to main?

##### Tier 0

DJ Cylow has its own brand and is not part of the DKJ brand, so the brand book no longer lists or previews `djcylow-react`, and the repo's rules say so. Its site repo now lives outside DKJ-Solutions.

**Score:** 2

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

Remove djcylow-react from the brand book: DJ Cylow has its own brand

[PR #58](https://github.com/DKJ-Solutions/dkj-brandbook/pull/58)

---

### DEPLOY: feat/43-prose · 20261013-143104Z

#### What does the change on this branch deploy to main?

##### Tier 0

The brand book has a `Prose` component for long-form text: headings, paragraphs, lists and task lists, code, a table, a blockquote and links, with one rhythm from the house tokens and a readable line length. The previews of the plugins, thumbnail generator, life hub and recipes apps now render their documents with it.

**Score:** 3

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

Prose: a component for a rendered markdown body

[PR #57](https://github.com/DKJ-Solutions/dkj-brandbook/pull/57)

---

### DEPLOY: feat/39-life-hub-preview · 20261013-140042Z

#### What does the change on this branch deploy to main?

##### Tier 0

The repo list in the showcase navigation now opens a recreated preview of `life-hub`: the hub with key figures, coming-up dates, app cards and dossier cards with progress, and a dossier page with its document and subfolders, built from brand-book components with invented content. With it every DKJ-Solutions repo in the list has a preview.

**Score:** 2

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

Recreated preview for life-hub

[PR #55](https://github.com/DKJ-Solutions/dkj-brandbook/pull/55)

---

### DEPLOY: feat/38-djcylow-preview · 20261013-135559Z

#### What does the change on this branch deploy to main?

##### Tier 0

The repo list in the showcase navigation now opens a recreated preview of `djcylow-react`: the listen page with mood, genre and power filters and load more, and a mix page with key facts and a tracklist, built from brand-book components with invented mixes. The overview's view lists no longer name the preview's own screen switcher as a component of the plugins and thumbnail-generator apps.

**Score:** 2

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

Recreated preview for djcylow-react

[PR #53](https://github.com/DKJ-Solutions/dkj-brandbook/pull/53)

---

### DEPLOY: feat/37-thumbnail-preview · 20261013-134845Z

#### What does the change on this branch deploy to main?

##### Tier 0

The repo list in the showcase navigation now opens a recreated preview of `dkj-thumbnail-generator`. That repo has no interface, so the preview shows its two outputs, a measurement report and a contact sheet of candidates, built from brand-book components with neutral invented content.

**Score:** 2

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

Recreated preview for dkj-thumbnail-generator

[PR #51](https://github.com/DKJ-Solutions/dkj-brandbook/pull/51)

---

### DEPLOY: feat/36-recipes-preview · 20261013-134122Z

#### What does the change on this branch deploy to main?

##### Tier 0

The repo list in the showcase navigation now opens a recreated preview of `dkj-recipes`: the recipe list with search and tag filters, and a recipe page with a portions stepper and ingredients to tick off, built from brand-book components with invented recipes.

**Score:** 2

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

Recreated preview for dkj-recipes

[PR #49](https://github.com/DKJ-Solutions/dkj-brandbook/pull/49)

---

### DEPLOY: feat/35-music-library-preview · 20261013-133414Z

#### What does the change on this branch deploy to main?

##### Tier 0

The repo list in the showcase navigation now opens a recreated preview of `dkj-music-library`: the playlist manager, the data dashboard and the track register, built from brand-book components with invented content. The app ids in the overview now all go without the `dkj-` prefix (`claude-plugins`, `music-library`).

**Score:** 2

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

Recreated preview for dkj-music-library

[PR #47](https://github.com/DKJ-Solutions/dkj-brandbook/pull/47)

---

### DEPLOY: feat/34-plugins-preview · 20261013-132527Z

#### What does the change on this branch deploy to main?

##### Tier 0

The repo list in the showcase navigation now opens a recreated preview of `dkj-claude-plugins` as well. That repo has no app, so the preview shows the two pages it generates, the issue dashboard and the release notes page, built from brand-book components with placeholder content.

**Score:** 2

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

Recreated preview for dkj-claude-plugins

[PR #45](https://github.com/DKJ-Solutions/dkj-brandbook/pull/45)

---

### DEPLOY: feat/20-line-chart · 20261013-131717Z

#### What does the change on this branch deploy to main?

##### Tier 0

The overview has its third and last chart from the ETF dashboard: `LineChart`, value, deposits as a step line and result at each month end, with a crosshair that marks every series and a legend of line items. Like `ColumnChart` and `BarChart` it stays legible at phone width, is reachable by keyboard and always offers the figures as a table. With it, #20 is done.

**Score:** 3

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

LineChart: the ETF dashboard's value-over-time chart

[PR #42](https://github.com/DKJ-Solutions/dkj-brandbook/pull/42)

---

### DEPLOY: feat/20-bar-chart · 20261013-130655Z

#### What does the change on this branch deploy to main?

##### Tier 0

The overview has its second chart: `BarChart`, the ETF dashboard's horizontal bar chart, for a value per holding coloured by type (with a share of the total) or a gain/loss per holding around a zero line. Like `ColumnChart` it stays legible at phone width (stacked rows below 480px), is reachable by keyboard and always offers the figures as a table. The line chart follows on #20.

**Score:** 3

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

BarChart: the ETF dashboard's horizontal bar chart

[PR #41](https://github.com/DKJ-Solutions/dkj-brandbook/pull/41)

---

### DEPLOY: feat/repo-previews · 20261013-124029Z

#### What does the change on this branch deploy to main?

##### Tier 0

The DKJ-Solutions repo list in the showcase navigation no longer links to GitHub: a click opens a recreated preview of
that app inside the brand book, built from the brand-book components, so it follows the theme and the width toggle.
Mesowise and the ETF tracker have one; the other repos show a "preview follows" card until theirs is recreated. The brand book itself is no longer in the list.

**Score:** 3

##### Tier 1

Internal to the brand book's maintainers; nothing changes for management or the commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing service is involved.

**Score:** N/A

#### Pull Request

Recreated app previews behind the DKJ-Solutions repo list

[PR #40](https://github.com/DKJ-Solutions/dkj-brandbook/pull/40)

---

### DEPLOY: feat/nav-repo-list · 20261013-120956Z

#### What does the change on this branch deploy to main?

##### Tier 0

The showcase's left navigation gets a DKJ-Solutions group listing every repo in the organisation, each linking to its GitHub page, so the repos the brand covers are one click away from the brand book.

**Score:** 2

##### Tier 1

N/A -- an internal navigation aid for the brand book's own readers.

**Score:** N/A

##### Tier 2

N/A -- no subscriber-facing service is involved.

**Score:** N/A

#### Pull Request

DKJ-Solutions repo list in the showcase navigation

[PR #32](https://github.com/DKJ-Solutions/dkj-brandbook/pull/32)

---

### DEPLOY: feat/dev-server-link · 20261013-113814Z

#### What does the change on this branch deploy to main?

##### Tier 0

Every session in this repo now starts with the showcase running and its `localhost` link printed, ready to ctrl+click in the VS Code terminal or open in Simple Browser. A server this checkout already runs is reused, so `/clear` or a second session never starts a second one.

**Score:** 3

##### Tier 1

Developer tooling only; nothing reaches management or the commissioner.

**Score:** N/A

##### Tier 2

No subscriber sees a session hook.

**Score:** N/A

#### Pull Request

SessionStart hook starts the showcase and prints its localhost link

[PR #31](https://github.com/DKJ-Solutions/dkj-brandbook/pull/31)

---

### DEPLOY: docs/28-one-owner-look · 20261013-112834Z

#### What does the change on this branch deploy to main?

##### Tier 0

A session now asks the one owner in the conversation to look at a visible result, and writes "An owner has looked" in the branch document, instead of asking for both owners.

**Score:** 1

##### Tier 1

Not relevant to management: how a session phrases a hand-over.

**Score:** N/A

##### Tier 2

Not relevant to a subscriber: nothing they see changes.

**Score:** N/A

#### Pull Request

Chris's lens: one owner's look approves a visible result, not both

[PR #30](https://github.com/DKJ-Solutions/dkj-brandbook/pull/30)

---

### DEPLOY: feat/20-column-chart · 20261013-112630Z

#### What does the change on this branch deploy to main?

##### Tier 0

The overview has its first chart: `ColumnChart`, the ETF dashboard's monthly result around a zero line, with quarter guides, a gain/loss legend and a tooltip. Unlike the source it stays legible at phone width, is reachable by keyboard and always offers the figures as a table. The bar and line charts follow on #20.

**Score:** 3

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

Overview: the ETF dashboard's column chart, with legend and tooltip

[PR #29](https://github.com/DKJ-Solutions/dkj-brandbook/pull/29)

---

### DEPLOY: feat/21-on-warn-token · 20261013-110037Z

#### What does the change on this branch deploy to main?

##### Tier 0

The house style has a `--on-warn` token for text and icons on a `--warn` fill, dark in every theme. An app that wrote its own dark literal on a warning fill can point at it instead; the brand book's warn tag already does, and renders as before.

**Score:** 2

##### Tier 1

Not relevant to management: one shared colour token.

**Score:** N/A

##### Tier 2

Not relevant to a subscriber: nothing they see changes.

**Score:** N/A

#### Pull Request

House style: an --on-warn token for content on a --warn fill

[PR #27](https://github.com/DKJ-Solutions/dkj-brandbook/pull/27)

---

### DEPLOY: fix/24-feature-label · 20261013-105734Z

#### What does the change on this branch deploy to main?

##### Tier 0

A `feat/` pull request and a feature issue are labelled `feature` instead of `enhancement`, as on the plugin source's tracker; the existing items moved with the renamed label.

**Score:** 1

##### Tier 1

Not relevant to management: a tracker label name.

**Score:** N/A

##### Tier 2

Not relevant to a subscriber: nothing they see changes.

**Score:** N/A

#### Pull Request

Label feat/ work 'feature' instead of 'enhancement'

[PR #26](https://github.com/DKJ-Solutions/dkj-brandbook/pull/26)

---

### DEPLOY: feat/19-house-focus-and-targets · 20261013-105512Z

#### What does the change on this branch deploy to main?

##### Tier 0

Keyboard focus is now visible on every interactive house class (`.seg`, `.info-button`, `.more`,
`.chart .bar`), the small house controls have a 44px hit area (`.info-button`, the `.table` header's
`.sort`, `.moretoggle`), and the house `.tooltip` has an open state, `.tooltip--open`, that a pointer can
move onto. An app that opens tooltips its own way can switch to the modifier and drop its rule.

**Score:** 3

##### Tier 1

Not relevant to management on its own: an accessibility fix in the shared style.

**Score:** N/A

##### Tier 2

No subscriber-facing change until an app takes the new copy.

**Score:** N/A

#### Pull Request

House style: visible focus rings and 44px targets on .seg, .info-button, .more, .chart .bar, .sort, .moretoggle; a tooltip open state

[PR #25](https://github.com/DKJ-Solutions/dkj-brandbook/pull/25)

---

### DEPLOY: feat/18-house-app-components · 20261013-104408Z

#### What does the change on this branch deploy to main?

##### Tier 0

The house style now carries the generic app shell that MesoWise built: four app-shell tokens
(`--control-h`, `--tap`, `--topbar-h`, `--column-narrow`), a narrow column, a form field with its error
line, touch and block buttons, icon buttons in an action row, a native dialog with close, save, cancel
and back, a side drawer, a sticky top bar, a menu list and `.sr-only`. Additions only, but an app that
defines its own `.field`, `.dialog`, `.topbar`, `.menu-row`, `.icon-btn` or `.sr-only` now collides
with a house name. It reaches the apps with the next `house-style-v<N>` tag.

**Score:** 3

##### Tier 1

Not relevant to management on its own: shared building blocks for DKJ-Solutions apps.

**Score:** N/A

##### Tier 2

No subscriber-facing change until an app takes the new copy and uses the classes.

**Score:** N/A

#### Pull Request

House style: port the MesoWise app components (field, dialog, drawer, top bar, menu)

[PR #23](https://github.com/DKJ-Solutions/dkj-brandbook/pull/23)

---

### DEPLOY: feat/etf-dashboard-overview · 20261013-101346Z

#### What does the change on this branch deploy to main?

##### Tier 0

The overview now covers the ETF tracker dashboard next to Mesowise, as one set: where both apps had the
same component the brand-book version leads on mechanics (44px targets, focus ring, states) and the
dashboard's denser look became a variant (joined segmented choice, inline info toggle, data card,
toned definition list, warn tag and banner, disclosure marker). New: DataTable, Alert, StatTile,
HeroValue and Delta, Tooltip, Legend, MiniCard with Meter and Badge, ReadMoreToggle, PageHeader and
FooterNote, plus the ETF tracker app and its views in the apps register (with a new Tooltips view kind).
The SVG charts follow in #20; house-style gaps found on the way are #19 and #21.

**Score:** 3

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

##### Tier 2

No subscriber-facing service changes; the apps themselves render as before.

**Score:** N/A

#### Pull Request

Add the ETF tracker dashboard to the component overview

[PR #22](https://github.com/DKJ-Solutions/dkj-brandbook/pull/22)

---

### DEPLOY: docs/btn-disabled-entry-ladder · 20261013-091636Z

#### What does the change on this branch deploy to main?

##### Tier 0

The changelog entry for the disabled `.btn` state now carries a tier 1 row, so the next release cut
can read its reach.

**Score:** 1

##### Tier 1

Not relevant to management: a correction to the changelog itself.

**Score:** N/A

##### Tier 2

Not relevant to a subscriber: nothing they see changes.

**Score:** N/A

#### Pull Request

Settle the tier ladder of the disabled-.btn changelog entry

[PR #17](https://github.com/DKJ-Solutions/dkj-brandbook/pull/17)

---

### DEPLOY: feat/12-btn-disabled · 20261013-091441Z

#### What does the change on this branch deploy to main?

##### Tier 0

The house style now has a disabled state for `.btn` and `.btn--primary`: half opacity and a
not-allowed cursor, the same as the brand book's own buttons and inputs. A disabled button no longer
looks clickable, and an app no longer needs its own rule on the reserved `.btn` class (MesoWise can
drop its `.btn:disabled` once it takes the new copy).

**Score:** 2

##### Tier 1

Every DKJ-Solutions app's disabled buttons now look the same from one shared rule, instead of each app
keeping a local one that drifts.

**Score:** 1

##### Tier 2

A disabled button in a DKJ-Solutions app now looks disabled once that app takes the new house style.

**Score:** 1

#### Pull Request

House style: a disabled .btn looks disabled

[PR #16](https://github.com/DKJ-Solutions/dkj-brandbook/pull/16)

---

### DEPLOY: feat/9-undefined-var-gate · 20261013-091122Z

#### What does the change on this branch deploy to main?

##### Tier 0

The lint gate now fails on a `var(--x)` that no loaded stylesheet defines. Such a reference is valid
CSS and silently resolves to nothing, so it passed eslint, the type-check and the build before; it is
how stale `tokens/` names survived the move to the house style until a review found them by hand.

**Score:** 2

##### Tier 1

Not relevant to management: an internal check on the brand book's own code.

**Score:** N/A

##### Tier 2

Not relevant to a subscriber: nothing they see changes.

**Score:** N/A

#### Pull Request

The gate catches a var(--x) nothing defines

[PR #15](https://github.com/DKJ-Solutions/dkj-brandbook/pull/15)

---

### DEPLOY: fix/8-inlinable-theme-script · 20261013-090722Z

#### What does the change on this branch deploy to main?

##### Tier 0

Any DKJ-Solutions app can now inline `house-style/house-theme.js` straight into a `<script>` element in
its `<head>`, as the house-style README allows. Its header comment no longer contains a closing script
tag, which used to end the inlined script early and leave the page without `window.DKJTheme`.

**Score:** 2

##### Tier 1

Not relevant to management: an internal fix to a shared file.

**Score:** N/A

##### Tier 2

Not relevant to a subscriber: nothing they see changes.

**Score:** N/A

#### Pull Request

house-theme.js can be inlined verbatim

[PR #14](https://github.com/DKJ-Solutions/dkj-brandbook/pull/14)

---

### DEPLOY: feat/7-house-style-source · 20261013-085942Z

#### What does the change on this branch deploy to main?

##### Tier 0

The brand book runs on the house style alone: `tokens/` is gone, the mirrored Mesowise components use
the house tokens plus a small `--dkj-*` layer, and the showcase's swatch picker reskins every component
in all twelve house themes with one click. A new Apps overview lists each DKJ-Solutions app with its
views and the components they are built from, starting with Mesowise, and every component shows where
it is used.

**Score:** 4

##### Tier 1

One overview of every app's components, all on one style, is what lets the owners check and change
the DKJ-Solutions look in one place.

**Score:** 3

##### Tier 2

Not relevant to a subscriber: no DKJ-Solutions app changes yet.

**Score:** N/A

#### Pull Request

Mesowise components on the house style, plus an apps overview

[PR #10](https://github.com/DKJ-Solutions/dkj-brandbook/pull/10)

---

### DEPLOY: feat/enable-dkj-solutions · 20261013-084922Z

#### What does the change on this branch deploy to main?

##### Tier 0

This repo enables the `dkj-solutions` extension. Every session here now reads the DKJ-Solutions house style rules: visual work starts from the stylesheet in [DKJ-Solutions/dkj-brandbook](https://github.com/DKJ-Solutions/dkj-brandbook), and a change to the house style itself is filed as an issue there instead of being made in this repo. Nothing renders differently yet.

**Score:** 2

##### Tier 1

This app now follows the same look as every other DKJ-Solutions app, and a styling fix to the shared house style lands once, in the brand book, instead of drifting into a local variant.

**Score:** 2

##### Tier 2

Not relevant to a user of the app: nothing they see changes.

**Score:** N/A

#### Pull Request

Enable dkj-solutions: the house style comes from dkj-brandbook

[PR #11](https://github.com/DKJ-Solutions/dkj-brandbook/pull/11)

---

### DEPLOY: docs/3-house-style-tags · 20261013-082429Z

#### What does the change on this branch deploy to main?

##### Tier 0

The house style is now released as a `house-style-v<N>` tag, and DKJ-Solutions apps are to fetch that
tag instead of `main` once the plugin's `house-style` skill is repointed, so a direct push to `main` no
longer reaches every app's next copy. The README and
Gwen's lens say how a house-style change gets released: a tag here on the owner's request, then the plugin
skill repointed to it.

**Score:** 3

##### Tier 1

Not relevant to management: a release step for one shared stylesheet.

**Score:** N/A

##### Tier 2

Not relevant to a subscriber.

**Score:** N/A

#### Pull Request

Pin the house style to a release tag

[PR #6](https://github.com/DKJ-Solutions/dkj-brandbook/pull/6)

---

### DEPLOY: feat/mesowise-components · 20261013-080032Z

#### What does the change on this branch deploy to main?

The brand book gets its first content. The design tokens are split into a shared base layer and a
colour-only `mesowise` theme, and both are usable from React and from a Claude Artifact. Around them
sit 35 presentational React components, mirrored from the Mesowise app's UI without its content, and
a showcase that shows every variant and state with a theme and mode switcher. Every component records
its source repo and its source component and CSS in `src/components/sources.ts`.

**Score:** 4

##### Tier 1

There is now one place where the owners can see the DKJ-Solutions look and check whether apps stay
consistent with it.

**Score:** 3

##### Tier 2

The brand book has no subscribers. The end users of the apps see nothing until an app adopts these
tokens.

**Score:** N/A

#### Pull Request

Mesowise components and tokens mirrored into the brand book

[PR #5](https://github.com/DKJ-Solutions/dkj-brandbook/pull/5)

---

### DEPLOY: docs/gwen-house-style-lens · 20261013-075456Z

#### What does the change on this branch deploy to main?

##### Tier 0

Gwen's lens here carries the house-style rules: the values are the owner's, a house-style change is a
visible result, the scales come from Figma, the README's tables move with the stylesheet, and a collected
component builds on the house tokens.

**Score:** 2

##### Tier 1

Not relevant to management: a working rule for one specialist.

**Score:** N/A

##### Tier 2

Not relevant to a subscriber.

**Score:** N/A

#### Pull Request

Gwen's lens: the house style rules

[PR #2](https://github.com/DKJ-Solutions/dkj-brandbook/pull/2)

---

### DEPLOY: feat/house-style · 20261013-075236Z

#### What does the change on this branch deploy to main?

##### Tier 0

The DKJ-Solutions house style now lives here: `house-style/house-style.css`, `house-style/house-theme.js`
and the rules in [`house-style/README.md`](../house-style/README.md), moved unchanged from the
`dkj-solutions` plugin in dkj-claude-plugins. This repo is now its single copy.

**Score:** 3

##### Tier 1

Every DKJ-Solutions app takes its look from one place that also holds the component overview.

**Score:** 3

##### Tier 2

Not relevant to a subscriber: no app's look changes.

**Score:** N/A

#### Pull Request

The house style moves here from dkj-claude-plugins

[PR #1](https://github.com/DKJ-Solutions/dkj-brandbook/pull/1)

---

