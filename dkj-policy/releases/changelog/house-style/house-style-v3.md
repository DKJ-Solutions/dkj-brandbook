# Changelog Releases

## Version house-style-v3 (Oct 15, 2026)

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

### DEPLOY: fix/109-primary-button-step · 20261015-120412Z

#### What does the change on this branch deploy to main?

##### Tier 0

The primary button is filled with the theme's colour (`--primary-7`) instead of a grey (`--primary-5`), so it matches the filled icon button and reads as the main action again (#109).

**Score:** 2

##### Tier 1

N/A: the look of one button in the brand book and the house style.

**Score:** N/A

##### Tier 2

The house stylesheet's `.btn--primary` (and `.btn--touch.btn--primary`) moves to `--primary-7` too, so an app's primary buttons take the theme's colour once it takes the next house-style release.

**Score:** 3

#### Pull Request

The primary button fill is --primary-7, like the filled IconButton

[PR #126](https://github.com/DKJ-Solutions/dkj-brandbook/pull/126)

---

### DEPLOY: feat/dark-themes-grey-anchor · 20261014-205224Z

#### What does the change on this branch deploy to main?

##### Tier 0

On the six dark themes `--primary-4` is a grey of the theme's colour and the colour itself moves to `--primary-5` and
`-6` (Geel: `-4` `#91804c`, `-5` `#ffce3f`, `-6` `#ffe4a3`). Text that carried the colour (links, card and dialog
titles, values, pressed toggles) reads `light-dark(var(--primary-4), var(--primary-5))`, so it keeps the colour on
dark and is unchanged on light; fills, borders and focus rings stay `-4`. The theme picker's dark dots show `-5`. Lila and Hemelsblauw take the chroma of Geel and Cyaan at a lower lightness, so
their `-5` is not paler than the others.
The dark cards (`--primary-2`) are a lot darker, a shade above the page. Light themes are unchanged. No token is added or renamed.

**Score:** 4

##### Tier 1

The dark themes change character: quieter buttons, with the colour in the text and headings.

**Score:** 3

##### Tier 2

On a dark theme a user sees greyer buttons and the theme's colour in links, headings and labels.

**Score:** 3

#### Pull Request

Dark themes: --primary-4 is the greyest step, --primary-5 and -6 carry the colour

[PR #100](https://github.com/DKJ-Solutions/dkj-brandbook/pull/100)

---

### DEPLOY: feat/dark-themes-deeper-ground · 20261014-203802Z

#### What does the change on this branch deploy to main?

##### Tier 0

The primary scale is retuned and the text roles move. On the six dark themes (and the OS-dark default) the page,
the cards and the lines (`--primary-1` to `-3`) are a shade darker and `--primary-5` is clearly lighter (9.5:1 on
the page, was 5.5:1). On the six light themes `--primary-7` is a lot darker (OKLCH lightness 0.18, was 0.26),
`--primary-2` carries a little more colour, and `--primary-5` is the theme's colour a step darker (Paars `#6421b9`),
still 4.5:1 or better on `--primary-3`.

The roles: `h1` and `h2` are `--primary-5` (`h1` was the theme's colour, `--primary-4`) and `h3`–`h6` are
`--primary-6`; on a `--primary-7` surface `h1`/`h2` take `--primary-3` and `h3`–`h6` `--primary-2`. Every
paragraph is `--primary-7`, a quiet house class such as `.sub` or `.muted` on a `<p>` included; the same class on
a span stays `--primary-5`. No token is added or renamed: a consuming repo takes the new copy, and one that
coloured its own headings or paragraphs keeps its own colour there.

The brand book's own sidebar reads the seven primaries directly, with no typed colour per light theme and no local
alias, and the colour lint refuses any colour code under `src/`, also as a custom property's value: only the house
style types a colour.

**Score:** 4

##### Tier 1

Every app's headings and paragraphs change colour and the dark themes read with more contrast; nothing to act on.

**Score:** 3

##### Tier 2

A user sees darker paragraph text and quieter headings on light, and a deeper background with brighter text on dark.

**Score:** 3

#### Pull Request

Theme scale retuned: deeper dark ground, coloured text, headings and paragraphs by step

[PR #99](https://github.com/DKJ-Solutions/dkj-brandbook/pull/99)

---

### DEPLOY: fix/92-light-cat1-contrast · 20261015-120300Z

#### What does the change on this branch deploy to main?

##### Tier 0

The light series blue `--cat-1` is a shade darker (`#2a78d6` -> `#2574d1`), so the text on the info tag reaches 4.5:1 on every light theme (#92).

**Score:** 2

##### Tier 1

The info tag, the series badge and meter, and chart series 1 and gains render in the darker blue on light; dark is unchanged.

**Score:** 2

##### Tier 2

Every app on the house style takes the new light `--cat-1` with its next copy of `house-style.css`; no token is added or renamed.

**Score:** 2

#### Pull Request

Light --cat-1 is dark enough for text on the info tag

[PR #124](https://github.com/DKJ-Solutions/dkj-brandbook/pull/124)

---

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

### DEPLOY: feat/primary-9-steps · 20261015-082601Z

#### What does the change on this branch deploy to main?

##### Tier 0

The primary scale grows from seven to nine steps (owner's decision, October 15, 2026): two new greys, `--primary-4` and `--primary-6`, sit either side of the old `-4`, which becomes `--primary-5`, so the greys are a trio with `-5` in the middle. The colour and the text steps move up two: old `-5`, `-6`, `-7` are now `-7`, `-8`, `-9`. Every role keeps its colour; only its number changes. The new greys take the middle grey's hue at half its chroma, so they read greyer than it, at 0.08 OKLCH lightness either side (on dark `-4` darker and `-6` lighter, mirrored on light) and have no role yet. `--primary-5` itself turns greyer too: 0.6 of its former chroma in every theme, hue and lightness kept, so the fills, focus rings and the picker dots read calmer at the same contrast. Links move to `--primary-7`, the colour, and sub lines, notes and `.muted` to `--primary-6`, the grey a step towards the far end, on a `<p>` too. The README carries the old-to-new mapping for an app that takes the update.

**Score:** 4

##### Tier 1

An app that takes this house style must rename its own uses of `--primary-4` … `--primary-7` (the README's table, in that order) before it looks the same again; nothing changes on screen once it has.

**Score:** 3

##### Tier 2

The brand book's own showcase is not a subscribed service.

**Score:** N/A

#### Pull Request

The primary scale grows to nine steps, with a grey trio at -4, -5 and -6

[PR #105](https://github.com/DKJ-Solutions/dkj-brandbook/pull/105)

---

### DEPLOY: fix/110-button-sentence-case · 20261015-120532Z

#### What does the change on this branch deploy to main?

##### Tier 0

Compact buttons are in sentence case like every other button, so two sizes on one screen no longer read as two styles (#110).

**Score:** 2

##### Tier 1

Back, Open recipe, Clear filters and the other compact buttons render in sentence case instead of tracked capitals.

**Score:** 2

##### Tier 2

N/A: the compact button lives in the brand book's own component layer; the house stylesheet the apps take is untouched.

**Score:** N/A

#### Pull Request

Buttons: every size is in sentence case

[PR #127](https://github.com/DKJ-Solutions/dkj-brandbook/pull/127)

---

### DEPLOY: feat/text-primary-6 · 20261015-080845Z

#### What does the change on this branch deploy to main?

##### Tier 0

All text that is not a paragraph -- labels, table heads, legends, field labels, row names, quiet icons, the text on a tinted surface, the showcase's scale rows -- is now `--primary-7`, the paragraph colour, so `--primary-5` is an accent again: it stays on `h1` and `h2`, every state (hover, focus, pressed, sorted, active, today), `strong`, list markers, the accent dialog's title and an InfoRows value, and on native controls through `accent-color`. Contrast rises in every theme (`--primary-7` reads 17.4:1 or better on the page).

**Score:** 3

##### Tier 1

Every DKJ-Solutions app that takes this house style shows calmer labels and keeps the theme's strong colour for what should stand out.

**Score:** 2

##### Tier 2

The brand book's own showcase is not a subscribed service.

**Score:** N/A

#### Pull Request

All text takes --primary-7; --primary-5 is for highlights only

[PR #103](https://github.com/DKJ-Solutions/dkj-brandbook/pull/103)

---

### DEPLOY: feat/nav-group-primary-2 · 20261015-075434Z

#### What does the change on this branch deploy to main?

##### Tier 0

Every light theme now behaves the same and only its hue differs: each of the seven `--primary-*` steps has one OKLCH lightness and one chroma in all six, capped where a hue cannot hold it, taken from the owner's examples (Petrol for `-1` to `-3`, Paars, Magenta and Blauw for `-4`, Blauw for `-5` to `-7`). The page and card fills are lighter, lines and tinted surfaces carry more colour, the fills and links are a softer, greyer step of the colour, and text is darker; Blauw sits on the hue of `#0000ff` instead of leaning to cyan. The six dark themes follow the same rule, mirrored: `-4` is the greyest step in the middle of the scale (from the owner's Hemelsblauw `#4c4c8d`, a little lighter), `-5` and `-6` carry the colour, and no role switches step between light and dark any more: links, titles, rings, lines and meters are `-4` and the text on a `-4` fill is `-1` in every theme (about 3.3:1 on dark, accepted); dark `-4` follows the owner's Oranje `#8f6249`, and the picker's dot is `-4` in every theme, and Hemelsblauw is truly blue. The picker's dots follow. Native checkboxes, radios, sliders and progress bars take `--primary-5` through `accent-color`. The house `.muted` class is `--primary-4` and `.meta` is `--primary-6` (a paragraph keeps `--primary-7`), the hero figure is `--primary-7`, and `.card--accent` and `.tile--accent` no longer draw a rule across their top. In the showcase the nav group labels are `--primary-2`, eyebrows `--primary-4`, figcaptions `--primary-6` and the swatch text `--primary-7`.

**Score:** 3

##### Tier 1

Every DKJ-Solutions app looks different, in every theme, once it takes this house style: lighter fills, a greyer primary and darker text.

**Score:** 2

##### Tier 2

The brand book's own showcase is not a subscribed service.

**Score:** N/A

#### Pull Request

Every theme on one rule, and a colour pass on the house text and the showcase

[PR #101](https://github.com/DKJ-Solutions/dkj-brandbook/pull/101)

---

### DEPLOY: fix/114-h6-titles-sans · 20261015-120622Z

#### What does the change on this branch deploy to main?

##### Tier 0

Card and dialog titles are set in the body sans in the heading colour (`--primary-8`), like every other h3-h6, instead of a small serif in a grey that read faint on dark (#114).

**Score:** 2

##### Tier 1

N/A: the look of two component titles in the brand book.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet's rules are untouched; only its role prose for `-5` drops "card and dialog titles".

**Score:** N/A

#### Pull Request

Card and dialog titles are sans in --primary-8, like every h6

[PR #128](https://github.com/DKJ-Solutions/dkj-brandbook/pull/128)

---

### DEPLOY: fix/94-warn-tag-contrast · 20261015-120153Z

#### What does the change on this branch deploy to main?

##### Tier 0

The warning tag (`TitleTag tone="warn"`) is warning text on the warning background instead of dark text on the amber fill, so it reads at 5.1:1 in light mode and 10:1 in dark mode, where the old fill was under 2:1 (#94).

**Score:** 2

##### Tier 1

N/A: one component's colours in the brand book.

**Score:** N/A

##### Tier 2

N/A: the house style the apps take is untouched.

**Score:** N/A

#### Pull Request

Warning tags read in both modes: --warning-5 on --warning-1

[PR #125](https://github.com/DKJ-Solutions/dkj-brandbook/pull/125)

---

### DEPLOY: fix/98-direct-token-reads · 20261015-115636Z

#### What does the change on this branch deploy to main?

##### Tier 0

The components read their `--primary` and `--cat-1` steps directly instead of through local aliases (`--box`, `--info-glyph`, and the component-side `--m` / `--b`); nothing renders differently (#98).

**Score:** 1

##### Tier 1

N/A: an internal refactor of the showcase components.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet and its `--m` / `--b` API are untouched.

**Score:** N/A

#### Pull Request

Components read --primary steps directly instead of local colour aliases

[PR #123](https://github.com/DKJ-Solutions/dkj-brandbook/pull/123)

---

### DEPLOY: fix/112-filter-group-labels · 20261015-115458Z

#### What does the change on this branch deploy to main?

##### Tier 0

A filter group inside a form is labelled like the fields beside it, in sentence case, instead of as an uppercase group label (Music library, Recipes; #112).

**Score:** 1

##### Tier 1

N/A: labels inside two previews.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet is untouched.

**Score:** N/A

#### Pull Request

Filter-group labels inside a form take the shape of the field labels

[PR #122](https://github.com/DKJ-Solutions/dkj-brandbook/pull/122)

---

### DEPLOY: docs/90-group-heading-exempt · 20261015-114435Z

#### What does the change on this branch deploy to main?

##### Tier 0

The house-style rules name section labels (`GroupHeading`) as the one exception to "a heading takes the token of its own level": they stay headings for the outline and render at `--text-base` at every level (#90).

**Score:** 1

##### Tier 1

N/A: a documentation rule, nothing renders differently.

**Score:** N/A

##### Tier 2

N/A: the stylesheet the apps take is untouched.

**Score:** N/A

#### Pull Request

GroupHeading: section labels are exempt from the heading-level rule

[PR #121](https://github.com/DKJ-Solutions/dkj-brandbook/pull/121)

---

### DEPLOY: fix/113-recipe-tag-gap · 20261015-103918Z

#### What does the change on this branch deploy to main?

##### Tier 0

The recipe tags in the Recipes preview sit in a row with an even gap instead of edge to edge (#113).

**Score:** 1

##### Tier 1

N/A: spacing inside one preview.

**Score:** N/A

##### Tier 2

N/A: the house style the apps take is untouched.

**Score:** N/A

#### Pull Request

Recipes: the recipe tags sit in a row with a gap

[PR #120](https://github.com/DKJ-Solutions/dkj-brandbook/pull/120)

---

### DEPLOY: fix/111-music-colour-labels · 20261015-103559Z

#### What does the change on this branch deploy to main?

##### Tier 0

The Music library preview's colour filter names the colour each dot shows, blue, orange and green (#111).

**Score:** 1

##### Tier 1

N/A: placeholder labels in one preview.

**Score:** N/A

##### Tier 2

N/A: the house style the apps take is untouched.

**Score:** N/A

#### Pull Request

Music library: the colour labels name the colour their dot shows

[PR #119](https://github.com/DKJ-Solutions/dkj-brandbook/pull/119)

---

### DEPLOY: fix/108-card-body-rule · 20261015-103033Z

#### What does the change on this branch deploy to main?

##### Tier 0

A card body draws its dividing rule only when a card head sits above it (#108), so a card with only a body no
longer shows an empty line at its top.

**Score:** 2

##### Tier 1

N/A: a line inside the brand book's own component.

**Score:** N/A

##### Tier 2

N/A: the house style the apps take is untouched.

**Score:** N/A

#### Pull Request

A card body draws its rule only under a card head

[PR #118](https://github.com/DKJ-Solutions/dkj-brandbook/pull/118)

---

### DEPLOY: docs/104-scale-prose · 20261015-090836Z

#### What does the change on this branch deploy to main?

##### Tier 0

The house style's README and the token comment describe the nine-step scale as it is (#104): the recipe gives
each step's OKLCH lightness in light and dark, the contrast figures are measured again on the current tokens,
and `--primary-7` is described as the highlight rather than as all text.

**Score:** 1

##### Tier 1

N/A: documentation only.

**Score:** N/A

##### Tier 2

N/A: no value changes.

**Score:** N/A

#### Pull Request

The scale's prose describes the nine steps as they are

[PR #117](https://github.com/DKJ-Solutions/dkj-brandbook/pull/117)

---

### DEPLOY: fix/102-gate-css-syntax · 20261015-090514Z

#### What does the change on this branch deploy to main?

##### Tier 0

The lint gate fails when a stylesheet does not parse. vite's build only warned on a CSS syntax error, so a
stray `}` shipped with the gate green (#102); a new step parses every tracked `.css` with esbuild and blocks on
any warning.

**Score:** 2

##### Tier 1

N/A: a check in this repo's own gate.

**Score:** N/A

##### Tier 2

N/A: nothing an app takes changes.

**Score:** N/A

#### Pull Request

The lint gate fails on a CSS syntax error

[PR #116](https://github.com/DKJ-Solutions/dkj-brandbook/pull/116)

---

### DEPLOY: feat/one-token-per-colour · 20261015-090133Z

#### What does the change on this branch deploy to main?

##### Tier 0

Every colour in the components and the showcase points at one house token instead of a `color-mix()` of two:
tinted surfaces are `--primary-3`, accent lines `--primary-4`, the alert `--negative-1`, the positive panel
`--positive-1`, and the info dialog and info rows a `--cat-1` border on the card. Only the theme picker's
swatches still mix, because each previews another theme.

**Score:** 3

##### Tier 1

N/A: tints inside the brand book's own components; management sees no difference.

**Score:** N/A

##### Tier 2

N/A: the apps see only the `::selection` change, when they take a new copy of the house style.

**Score:** N/A

#### Pull Request

Every colour points at one house token: no more color-mix() between two

[PR #115](https://github.com/DKJ-Solutions/dkj-brandbook/pull/115)

---

### DEPLOY: feat/one-class-prefix · 20261015-084822Z

#### What does the change on this branch deploy to main?

##### Tier 0

The showcase's own classes take the `dkj-` prefix the components already used, so every class the brand
book adds on top of the house style starts with `dkj-` instead of a mix of `bb-` and `dkj-`. The showcase's
row of demo items, which would have clashed with the component `.dkj-row`, is `.dkj-demo-row`. Nothing changes
on screen.

**Score:** 2

##### Tier 1

N/A: a rename inside the showcase; nobody outside the repo sees it.

**Score:** N/A

##### Tier 2

N/A: the house style the apps take is untouched.

**Score:** N/A

#### Pull Request

The showcase's classes take the dkj- prefix too, so every class in the brand book starts with dkj-

[PR #107](https://github.com/DKJ-Solutions/dkj-brandbook/pull/107)

---

### DEPLOY: feat/primary-4-further-from-5 · 20261015-083746Z

#### What does the change on this branch deploy to main?

##### Tier 0

`--primary-4` moves a big step towards the ground in every theme: OKLCH lightness 0.70 on light (was 0.55)
and 0.38 on dark (was 0.458), each theme keeping its hue and chroma. It has no role yet, so nothing in the
house style changes on screen beyond the swatch. On the dark themes `--primary-6` (sub lines, notes and
`.muted`) moves lighter too, to L 0.70 (was 0.618), so that text reads at 6.58:1 or better on a card
instead of 4.76:1.

**Score:** 3

##### Tier 1

N/A: a swatch and a lighter grey for secondary text on dark; management sees no difference.

**Score:** N/A

##### Tier 2

N/A: the brand book has no subscribers; the apps that take the house style pick this up when they take a new copy.

**Score:** N/A

#### Pull Request

--primary-4 moves a big step towards the ground, and the dark --primary-6 a big step lighter

[PR #106](https://github.com/DKJ-Solutions/dkj-brandbook/pull/106)

---

### DEPLOY: docs/gwen-no-new-tokens · 20261014-195123Z

#### What does the change on this branch deploy to main?

##### Tier 0

Gwen's lens states that a theme's colour is its seven `--primary-*` tokens and nothing else: she never adds a
colour token, not even an alias, without the owner's decision.

**Score:** 1

##### Tier 1

Internal working rule; nobody outside the repo notices it.

**Score:** N/A

##### Tier 2

Internal working rule; no user notices it.

**Score:** N/A

#### Pull Request

Gwen's lens: no colour token beyond the seven primaries

[PR #97](https://github.com/DKJ-Solutions/dkj-brandbook/pull/97)

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
