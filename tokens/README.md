# Design tokens

The tokens are CSS custom properties, and these files are their single source. React code and Claude
Artifacts both read the same files.

| File | Layer | Holds |
| --- | --- | --- |
| [`base.css`](base.css) | base | typography, spacing, radius, borders, control sizes, layout, focus, motion. Identical for every DKJ-Solutions repo. |
| [`themes/mesowise.css`](themes/mesowise.css) | theme | colours only, light and dark |

**One brand, several themes.** A theme sets only `--color-*` tokens. A new theme is a new file under
`themes/` that defines the same `--color-*` names under `[data-theme='<name>']`. It never redefines a
base token.

## Selecting a theme and a mode

```html
<html data-theme="mesowise">                  <!-- mode follows the OS -->
<html data-theme="mesowise" data-mode="dark"> <!-- pinned to dark -->
```

A page without `data-theme` gets `mesowise`, the default theme.

## In React (this repo or another)

```ts
import '../tokens/base.css'
import '../tokens/themes/mesowise.css'
```

## In a Claude Artifact

An artifact may load stylesheets only from Google Fonts, so paste the contents of `base.css` and the
theme file into one inline `<style>` block at the top of the page, then style with `var(--…)`. The
tokens need no build step.

## Using them

- Colours are always `var(--color-…)`. Tints are mixed from them, e.g.
  `color-mix(in srgb, var(--color-accent) 10%, var(--color-surface))`, so they follow the theme and the
  mode on their own.
- A tinted area re-declares `--color-surface` (and, for the info tint, `--color-accent`) locally. Every
  component inside it then picks up the tint.
- Every interactive element gets a tap area of at least `var(--tap)`, and its focus ring is
  `var(--focus-w) solid var(--color-accent)` at `var(--focus-offset)`.
