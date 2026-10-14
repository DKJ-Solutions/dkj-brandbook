# The DKJ-Solutions house style

**Every DKJ-Solutions app looks like one family, and this folder is where that family is written down**
(Dave, issue [#2695](https://github.com/DKJ-Solutions/dkj-claude-plugins/issues/2695), October 1,
2026). The style was tuned by hand on the ETF dashboard in `dkj-etf-tracker`. Rebuilding it per repo
means re-tuning it per repo, and two hand-tuned copies drift. So the general half was lifted out once,
with **every value kept exactly as chosen** (spacing and font sizes have since moved to the Figma
library's scales, below), and the copy in this folder is the only one:
[`house-style.css`](house-style.css) and [`house-theme.js`](house-theme.js).

**It moved here from the `dkj-solutions` plugin on October 13, 2026.** The plugin's `house-style` skill
still loads in every DKJ-Solutions session, and it now points here instead of carrying a copy. **It
fetches a tagged release, never `main`** (owner's decision on
[#3](https://github.com/DKJ-Solutions/dkj-brandbook/issues/3), October 13, 2026): `house-theme.js` is
executable and runs with the origin of every page it is inlined into, and `main` is a moving ref that an
admin can push to past the review. A tag is a version somebody chose to release. Raw URLs for a session or
a build to fetch, with `<tag>` the `house-style-v<N>` release the skill is pinned to:

- `https://raw.githubusercontent.com/DKJ-Solutions/dkj-brandbook/<tag>/house-style/house-style.css`
- `https://raw.githubusercontent.com/DKJ-Solutions/dkj-brandbook/<tag>/house-style/house-theme.js`

Until the first tag is set and the skill is repointed to it, the skill still fetches `main`.

**It reaches DKJ-Solutions and nothing else.** BWJ-Development has its own styling.

## How to use it

1. **Copy `house-style.css` into the output, unchanged**, and `house-theme.js` with it where the app
   lets the user pick a theme (below). Where the output must make no external
   requests (a local report, an Artifact), inline it in a `<style>` block. Where the app has a build,
   vendor it as a file. Either way it is a copy of this file, never a retyped version.
2. **Add the repo's own layer after it, in a separate block or file.** Domain colours and components
   (one app's series mapping, one app's special panel) go there. They **use** house tokens and may add
   tokens of their own, under a name the house file does not define.
3. **Never redefine a house token or a house class in the repo layer.** A value that is wrong for every
   app is fixed here, through an issue on this repo, so that every app gets the fix. A value that is wrong
   for one app is a new domain token in that app, not an override. Same rule as the constitution:
   extend, never override. One narrow exception: a component subtree may re-declare a house colour token
   (`--primary`, `--on-primary`, `--surface`) so its contents follow a tint, as the info and accent dialogs do;
   the token is never changed for the page. Everything inside such a subtree inherits the re-declared value,
   so a tinted dialog nested inside an info dialog would tint from `--cat-1`; do not nest them.

## What it holds

**Tokens**, each in light and dark:

| Group | Tokens | Meaning |
|---|---|---|
| Surfaces and ink | `--page`, `--surface`, `--ink`, `--ink-2`, `--muted`, `--grid`, `--axis`, `--border` | background, cards, three levels of text, lines. `--page`, `--surface`, `--grid` and `--border` are derived: the neutral `--page-base`, `--surface-base`, `--grid-base` and `--border-base` with the theme's primary mixed in ([below](#how-far-a-theme-reaches)) |
| Categorical | `--cat-1`, `--cat-2`, `--cat-3` | one series each. Never two meanings for one slot in a view |
| Direction | `--negative-bad` (also the loss in charts; a gain uses `--cat-1`, so a direction chart and a series in `--cat-1` never share a view), `--positive-up`, `--negative-down` (numbers in text) | result and direction, never a category. `--positive-up`/`--negative-down` are the text versions of `--positive-good`/`--negative-bad`, a step more contrast so a number reads as text: darker on light, lighter on dark |
| Status | `--positive-good`, `--warning-bad`, `--negative-bad`, `--warning-down`, `--warning-bg`, `--negative-bg`, `--positive-bg`, `--status-mark` | badges, meters, notices. `--warning-bg`, `--negative-bg` and `--positive-bg` are the backgrounds of a warning, negative or positive message. `--status-mark` is the mark inside a status icon (check, cross, "!"): white on light, near-black on dark |
| Primary | `--primary`, `--on-primary`, `--primary-soft` | the theme's own colour, set per theme: the pressed `.seg` button, `.btn--primary`, `.badge--info`, `.meter--info`, links, and the `--accent` modifiers ([below](#how-far-a-theme-reaches)). `--on-primary` is text on it, `--primary-soft` a tint for a background, `--primary-ink` the primary as text (links, `h1`, `h2`). Never a status or a number |
| Elevation | `--shadow-pop` | tooltips |
| Spacing | `--spacing-0-5` … `--spacing-96` | the spacing scale, same in both modes: `--spacing-N` is N × 4px, a half step (`-0-5`, `-1-5`, …) adds 2px. Every gap, margin and padding uses one, and a repo layer spaces its own components from the same scale |
| Type | `--text-h0` … `--text-h6`, `--text-lg`, `--text-base`, `--text-sm`, `--text-xs` | the type scale, same in both modes: 48/40/32/24/22/18/16 for the headings, 18/14/12/11 for running text. `h1`–`h6` each take the token of their own level, body text is `--text-base` |
| App shell | `--control-h`, `--tap`, `--topbar-h`, `--column-narrow` | sizes for a mobile-first app, same in both modes: 38px for a value field and the button beside it, 44px as the smallest touch target, 56px for the top bar, 512px for the narrow app column |

`--gain` was removed (October 14, 2026): use `--cat-1`, the same colour. `--on-warn` was removed the same
day (owner's decision): text on a `--warn` fill uses `--ink`, which turns white on the dark themes.
`--good` and `--up` were renamed the same day (owner's decision): `--positive-good` and `--positive-up`. An app
that takes this update renames them in its own layer; the class modifiers (`.badge--good`, `.delta--up`) keep their names.
`--loss` and `--bad` were renamed the same day (owner's decision): `--negative-loss` and `--negative-bad`, with
`LegendItem color="negative-loss"` in the brand book's components; `.badge--bad` and `.meter--bad` keep their names.
`--down` was renamed the same day (owner's decision): `--negative-down`; `.delta--down` keeps its name.
`--negative-loss` was then removed (owner's decision): a loss in a chart takes `--negative-bad`, and so does
`LegendItem color="negative-bad"`.
`--warn-bg` was renamed the same day (owner's decision): `--warning-bg`. Two backgrounds were added beside it:
`--negative-bg` and `--positive-bg`.
`--warn` was renamed the same day (owner's decision): `--warning-bad`, and `--warning-down` was added beside it: a
warning in text, a step darker on light and lighter on dark, like `--negative-down`. `.badge--warn`, `.meter--warn` and
`.dkj-tag--warn` keep their names.

**The colour tokens grouped by what a theme switch changes** (the grouping the showcase's Tokens section
uses):

| A switch … | Tokens | Why |
|---|---|---|
| to any other theme changes them | `--border`, `--grid`, `--page`, `--primary`, `--primary-ink`, `--primary-soft`, `--surface` | each theme sets its own `--primary`, and the other six are mixed from it |
| changes them only between light and dark: black, white and grey | `--axis`, `--border-base`, `--grid-base`, `--ink`, `--ink-2`, `--on-primary`, `--page-base`, `--status-mark`, `--surface-base` | set once in the light block and once in the dark block, where they flip between dark and light neutrals |
| changes them only between light and dark: colours | `--cat-1`–`--cat-3`, `--negative-bad`, `--negative-bg`, `--negative-down`, `--positive-bg`, `--positive-good`, `--positive-up`, `--warning-bad`, `--warning-bg`, `--warning-down` | set once in the light block and once in the dark block, a shade apart. One exception: `--warning-bad` also moves in Roest and Geel ([below](#themes-the-user-picks-the-colour)) |
| never changes them | `--muted` | the same value in light and dark |

**The spacing and type scales have a source: the Figma library** *Shopify Theme - LIBRARY*, variable
collection "Collection", groups `spacing/` and `text/`. Their names and values are copied exactly, so a
design in Figma and a page built from this file share one set of numbers. A step added there is added
here, in a branch of its own. The spacing values happened to match the dashboard already. The type
scale did not, so taking it over changed sizes: body 15 → 14, `h2` 29 → 32, `h3` 18 → 24, the 13px
small text → 12, a mini-card value 20 → 18, the info button's mark 10 → 11 (Maikel, October 12, 2026).

## Themes: the user picks the colour

**Every DKJ-Solutions app has the same form, and a colour of its own that the user picks** (Maikel,
October 12, 2026). The house style carries twelve themes. Each one is a mode, light or dark, plus a
primary colour:

| Mode | Themes (`data-theme`), in hue order |
|---|---|
| Light | `magenta` Magenta `#c0258f`, `purple` Paars `#7a3fd6`, `blue` Blauw `#2563d0`, `teal` Petrol `#0f7c86`, `ochre` Oker `#7a6b00`, `rust` Roest `#ad5a0a` |
| Dark | `pink` Roze `#ff7ac8`, `lilac` Lila `#b69cff`, `sky` Hemelsblauw `#5cb3ff`, `cyan` Cyaan `#2fc8d8`, `yellow` Geel `#f2c230`, `orange` Oranje `#f5873a` |

- **No red and no green theme.** Those hues mean bad and good, and a primary colour beside a red "−1,1%"
  makes the number disappear. The status colours are the same in every theme.
- **Two themes move the warning.** In Roest the warning is a dark yellow (`#b88a00`), because the light
  themes' dark orange would sit on the primary. In Geel it is orange (`#f08a24`), because the dark themes'
  yellow would.
- **Every primary reaches 4.5:1** on its background, and so does the text on it.

**Which theme applies.** `house-theme.js`, beside the stylesheet, decides and sets
`<html data-theme="…">`:

1. the user's own choice, remembered per app on the device;
2. otherwise the app's own default for the OS mode, declared on the page:
   `<html data-theme-light="purple" data-theme-dark="cyan">`. Each app picks its own pair, so apps are
   told apart before anyone has chosen;
3. otherwise the house defaults, Blauw (light) and Cyaan (dark).

Load it in `<head>` so nothing flashes, and call `DKJTheme.picker(element)` where the setting goes: it
draws the twelve swatches in two rows, light and dark. `DKJTheme.set(id)`, `DKJTheme.reset()` and
`DKJTheme.current()` cover everything else. Copy it unchanged, like the stylesheet.

**Or give the app the settings button, and the setting is done** ([#70](https://github.com/DKJ-Solutions/dkj-brandbook/issues/70)).
`DKJTheme.settings(element)` draws a round toggle that opens a panel with the picker and a reset, and
returns the panel's slot (`.theme-settings__extra`), where the app puts settings of its own: the brand book
puts its width toggle there. The script owns the behaviour, so an app writes none of it: the toggle opens
and closes the panel, Escape closes it and puts focus back on the toggle, and a click outside it or focus
leaving it closes it. A click inside never does. The element is inline by default, for a place such as a
`.topbar`. Give it `theme-settings--floating` and it is fixed at the top right of the screen instead.
The panel lies over the page, so nothing moves when it opens. Every text is optional and Dutch by default:
`DKJTheme.settings(el, { label: 'Settings', title: 'Settings', theme: 'Theme', reset: 'Reset theme', light: 'Light', dark: 'Dark' })`.

**The theme names and the picker's row labels are Dutch on purpose**: DKJ-Solutions apps are
Dutch-language, and the names are the ones their users read. An app in another language passes its own
row labels, `DKJTheme.picker(el, { light: 'Light', dark: 'Dark' })`. A page that ships
`data-theme="light"` or `"dark"` keeps that mode under the script: the script picks that mode's default
instead of following the OS.

**Without the script the stylesheet still works.** No `data-theme` follows the OS with the house defaults,
and `data-theme="light"` / `"dark"` force a mode the way they always did. The dark block therefore appears
twice in the file, once under `prefers-color-scheme` and once for a forced dark theme. CSS cannot share
it, so **an edit to one dark block is made to both**.

**The source is the preview, mirrored in Figma.** The themes were chosen on a preview page and written
to the Figma library *DKJ-Solutions Theme's - LIBRARY*, group `colors/themes/`, one variable per theme
and role (`--oker-light-primary`, `--light-up`). A value changed there is changed here, in a branch of
its own.

**What this changed for an app that takes the update:** the pressed `.seg` button, `.badge--info` and
`.meter--info` take the primary instead of ink and `--cat-1`; the light warning is dark orange instead
of amber and the dark one a brighter yellow; `--negative-down` on light is a darker red (`#a32424`); on dark
`--positive-up`/`--negative-down` are a step lighter and `--negative-bad` is the dark red it never had; status icons take
`--status-mark`.

### How far a theme reaches

**A page built only from house classes shows the theme beyond its primary button**
([#72](https://github.com/DKJ-Solutions/dkj-brandbook/issues/72)). Until then a theme set one token,
and only the primary controls and the focus rings used it. Plain links kept the browser's blue in
every theme. Now:

- **By default**, with nothing for the app to do: every link takes the primary as text (`--primary-ink`), visited or not, with
  a thicker underline on hover and a primary focus ring. Native checkboxes, radios, sliders and
  progress bars take it through `accent-color`, the text caret through `caret-color`, and selected
  text gets a primary tint. The link rules sit in `:where()`, so they weigh nothing: any class on an
  `<a>` (a `.btn`, a `.menu-item`, an app's own) wins without an override. An `<a>` without an `href`
  is not a link and is left alone. `accent-color` and `caret-color` are set once on the root, so a
  subtree that sets its own `--primary` keeps the page's theme on its native controls, as it does for
  `--primary-soft`.
- **Opt-in**, one modifier on a house element: `.header--accent` puts a primary rule under the page
  header, `.card--accent` and `.tile--accent` a primary rule across the top, and `.table--accent` a
  `--primary-soft` table head. Text stays `--ink`. They are modifiers rather than defaults, so an app
  that takes the update keeps its layout until it adds one.

**What this changes for an app that takes the update:** its unstyled links, checkboxes, radios and
sliders turn the theme's colour. Links an app already styles through a class keep their look.

**The theme now colours the ground too** (owner's request: the themes were visible but did not stand
out). Three more things follow it by default, in light and in dark (and a measurement):

- **The page and the surfaces are tinted.** `--page` and `--surface` are no longer fixed greys: each is
  `color-mix(in srgb, var(--primary) N%, <base>)`, with the old grey kept as `--page-base` and
  `--surface-base`. Light mixes 6% into the page and 2% into the cards (the card stays lighter than
  the page); dark mixes 10% into the page and 14% into the cards (the card stays lighter there too).
  The percentages are the `--page-tint`, `--surface-tint`, `--grid-tint` and `--border-tint` tokens, set per mode.
- **Lines and borders are tinted.** `--grid` takes 8% (light) or 20% (dark) of the primary over
  `--grid-base`. `--border` takes `--border-tint` (6% light, 8% dark) over `--border-base`; because that
  base is translucent and the mix is premultiplied, the visible result is a line of about 15% opacity
  that leans to the primary, roughly as visible as the old neutral one. `--axis` stays neutral.
- **The theme picker previews it:** each swatch shows its own theme's page (the same 6% / 10% tint),
  with the primary as the dot.
- **`h1` and `h2` are the theme's colour**, as `--primary-ink`: the primary with 20% of `--ink` mixed in,
  so it darkens on light and lightens on dark. Links use it too. It exists because the tinted page is
  darker than the old one, and a bare Petrol or Oker link would drop to 4.0:1 on it.
- **Measured:** `--ink-2` stays at 6.2:1 or better on the tinted light page (worst: Magenta, Paars) and
  6.8:1 or better on the tinted dark surface (worst: Geel); `--primary-ink` reaches 5.4:1 or better on the
  light page (worst: Petrol, Roest, Oker, Magenta) and more on dark. Status, direction and categorical
  colours (`--positive-good`, `--negative-bad`, `--warning-bad`, `--cat-*`, `--positive-up`, `--negative-down`) are never tinted.

**What this changes for an app that takes the update:** every page turns a light shade of its theme, and
`h1`/`h2` take its colour (through `:where()`, so a heading inside a coloured container, or one the app colours itself, keeps that colour). An app that hard-codes a grey next to a house surface will show the seam, and
one that sets `--page` or `--surface` itself has to set `--page-base` and `--surface-base` instead.

## Components

**The complete list of reserved names**, so a repo layer knows what not to redefine:
the page header (`body > header`, `main > header`, with `.header--accent`) and its `.controls` row, `main`/`.container`,
`.hero`, `.tiles`/`.tile` (with `--accent`), `.card` (with `--accent`), `.grid-2`, `.table-wrap`/`.table` (with `--accent`, `.row-total`, and
sortable headers via `.sort`/`.arrow` on `aria-sort`), `.seg` (a segmented switch), `.legend`/`.legend__item` (with
`--line`), `.swatch`, `.badge` (with `--good`, `--warn`, `--bad`, `--info`, `--neutral`, `--sm`),
`.badge-row`, `.meter` (with `--good`, `--warn`, `--bad`, `--info`), `.mini-cards`/`.mini-card` (with
`--highlight`), `.item-grid`/`.item`, `.notice`, `.note`, `.meta`, `.muted`, `.sub`, `.num` (tabular
numerals), `.delta` (with `--up`/`--down`, aliased `.pos`/`.neg`), `.btn` (with `--primary`, and a `:disabled` state for both), `.info-button`, `.tooltip`
(with `--explain`, and `--open` for one anchored to a trigger), `.more` (a disclosure), `.moretoggle` (a full-width read-more button), `.chart` (the SVG chart scope),
`.theme-picker` (with `__row`, `__label`, `__swatches`), `.theme-swatch` (with `--light`, `--dark`) and
`.theme-settings` (with `--floating`, `__toggle`, `__open`, `__close`, `__panel`, `__title`, `__group`,
`__label`, `__picker`, `__foot`, `__extra`, `__reset`), which `house-theme.js` draws, and `.footer-note`. The app components
([below](#app-components-from-mesowise)) reserve these too: `.container--narrow`/`main.narrow`, `.field`
(with `__error`), `.btn--touch`, `.btn--block`, `.icon-btn` (with `--ghost`), `.action-row`, `.dialog`
(with `__body`, `__head` (with `--two`, `--back`), `__title`, `__sub`, `__close` (with `--save`,
`--cancel`, `--back`), and `--drawer`), `.topbar` (with `__inner`, `__brand`, `__name`), `.menu-list`,
`.menu-row` (with `__label`, `__value`), `.menu-item` (with `__icon`, `__label`, `__chevron`) and
`.sr-only`. Each is commented in the file.

**Focus and targets.** Every interactive house class shows a visible focus ring on keyboard focus (an SVG
`.chart .bar` shows a stroke instead), and its hit area is at least 44px (`--tap`) high where the mark is
smaller: the `.info-button`'s 16px mark, the `.table` header's `.sort` and the `.moretoggle`
([#19](https://github.com/DKJ-Solutions/dkj-brandbook/issues/19)). A tooltip opened from a trigger takes
`.tooltip--open`, which shows it and lets the pointer move onto its text; a chart tooltip that follows the
pointer is shown by its own script and stays click-through.

## App components (from MesoWise)

**The house style is extended with the MesoWise app** (Maikel, October 12, 2026; ported here on
October 13, 2026 by [#18](https://github.com/DKJ-Solutions/dkj-brandbook/issues/18), after the owner's
choice on [dkj-claude-plugins#2955](https://github.com/DKJ-Solutions/dkj-claude-plugins/issues/2955)):
the components that app had and the house style lacked were lifted into the same stylesheet. They are
the generic, mobile-first parts of an app shell: a narrow column, a form field, touch buttons, a dialog
and a side drawer, a top bar and a menu list. The group sits at the end of
[`house-style.css`](house-style.css), under "App components".

- **Sizes.** Touch targets are at least `--tap` (44px) high. The column is `--column-narrow` (512px), a
  phone and, on a computer, the same width.
- **Buttons.** `.btn--touch` and `.btn--block` are modifiers of `.btn`, so the `.btn:disabled` state
  covers them too, `.btn--touch.btn--primary` included.
- **Dialog.** A native `<dialog>` opened with `showModal`. Put `.dialog__title` on an `h3` or a `p`,
  not an `h2`: the house `h2` is serif and flex. The page stands still behind a modal
  (`html:has(dialog:modal)`), and `html:has(.topbar)` adds the scroll padding for the top bar.
  `.dialog--drawer` slides in from the side. A dialog on top of a dialog sets `--dialog-scale` (default
  0.95) smaller on itself: a hook the app sets, not a house token.
- **Contrast.** Field labels and the dialog subtitle use `--ink-2`, because `--muted` on `--surface` is
  about 3.5:1. `--muted` is for icons only, which need 3:1.
- **Input font.** The input's 16px is a literal, not a type step: iOS zooms in on focus below 16px.

**What this changes for an app that takes the update:** nothing that exists, only additions. But an app
that defines its own `.field`, `.dialog`, `.topbar`, `.menu-row`, `.icon-btn` or `.sr-only` now collides
with a house name, and renames its class or adopts the house one.

**What stayed in the app, because it is domain:** MesoWise's tinted "advised" and "profile" dialogs, the
level-up colours, the equipment lists, the stat lines, the chips and the download button.

## What was deliberately left out

The parts of the ETF dashboard that only make sense there stayed there: the hazard-striped advice zone
and its tokens, the market report's layout, the month-note button drawn on a chart bar, the
primary/secondary view switch, the mapping from ETF/share/cash to a colour, and the Dutch status class
names. The three
series colours survive as `--cat-1..3`, with the same values. A generic danger/alert component is **not**
in the house style yet. Adding one is a design decision for the owner, not something to back-fill from
the advice zone.

## Changing the house style

A change here reaches every DKJ-Solutions app the next time it takes a copy, so it is a **visible
result**: the branch stops for the owner's look instead of merging. Bring a consumer's improvement here
as an issue on this repo. Don't make a local edit and hope it travels.

**A merged change reaches nobody until it is released.** A release is a tag on `main`, named
`house-style-v<N>` with `N` counting up from 1 (`house-style-v1`, `house-style-v2`, ...), and it is set only
on the owner's explicit request, like any tag. The tag is never moved or reused: a fix is the next number.
Then the `house-style` skill in the `dkj-solutions` plugin
([DKJ-Solutions/dkj-claude-plugins](https://github.com/DKJ-Solutions/dkj-claude-plugins)) is repointed to
the new tag, through an inbound issue there, and the apps get it with that plugin release. So one house-style
change costs one tag here and one pointer update there, and that second step is the point: nothing reaches
the apps that has not been released.
