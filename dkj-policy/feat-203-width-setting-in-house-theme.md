## feat/203-width-setting-in-house-theme

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
> For tier 2 audiences: the user who relies on what this repo ships, and decides whether to take the next version -- a subscriber of a service, or the user of a tool, its own maintainer included. That reader and nobody else -- what matters only
> inside this repo belongs under the first `**Score:**`. If the change reaches that reader
> not at all, N/A is a complete answer and the common one. **One hop and no further:** where that
> reader is itself a business, ITS own customers sit one hop past this repo and are never the reader
> here -- they take nothing this repo ships. Name the party that runs the upgrade, and score
> against them.
>
> The phase arc, the marks and the whole form: `DEVELOPMENT-portable.md`, which ships
> with this workflow.

### PLAN

Issue #203: the fluid/phone/full width choice existed only in the brand book's own showcase (a React toggle in the
settings panel's slot), so a consumer calling `DKJTheme.settings()` had no width choice and could not build one
without redefining house classes. Ship it in the house style, on by default in the panel, and let the showcase use it.

### CREATE

- [x] `house-theme.js`: a width group in the `settings()` panel (a `.seg`, on by default, `widths: false` leaves it
      out), remembered per app on the device as `dkj-width` (with the theme's `data-theme-key` suffix), resolved
      from the stored choice, then `<html data-width-default>`, then `fluid`, and set as `<html data-width>` before
      first paint; `DKJTheme.setWidth()`, `DKJTheme.width()` and `DKJTheme.widths`
- [x] `house-style.css`: `phone` (360px) and `full` (no maximum) on `main`, `.container`, `main.narrow` and
      `.container--narrow`, keyed off `data-width` inside `:where()`; `.theme-settings__width` at tap height
- [x] Showcase and Repo hub: the brand book's own `useWidth` and `Toggle` removed; `Toolbar` passes English labels to
      the house panel, `index.html` declares `data-width-default="full"` (the old default), the showcase's content
      rules and the dashboard's column key off `data-width` (the dashboard's own width classes are gone, the house
      rule sizes its `<main>` and breadcrumb `.container`)
- [x] `vite-env.d.ts` and `house-style/README.md` describe the new options and the width rules
- [x] Code review (Victor): no blocking findings; the long doc-comment line re-wrapped, and the README now says every plain `main`/`.container` follows the width and `.topbar__inner` deliberately does not

### TEST

- [x] `scripts/lint/lint-web.ps1` green (eslint, undefined-var check, `tsc -b`, vite build)
- [ ] An owner has looked at the settings panel's width group on the showcase and on the Repo hub, in all three
      widths, and approved it

### DEPLOY: feat/203-width-setting-in-house-theme

The brand book's showcase and Repo hub now use the shipped width setting instead of their own toggle; the stored
choice (`dkj-width`) carries over.

**Score:** 2

#### What makes this deploy extra special

Every app that draws `DKJTheme.settings(el)` now offers a page width in its settings panel -- fluid (the house
column), phone (360px) or full (the whole width) -- remembered per device and set as `<html data-width>` before
the page paints; `main`, `.container` and the breadcrumb bar's trail follow it. An app declares its own default
with `<html data-width-default="full">`, or leaves the group out with `widths: false`.

**Score:** 3

#### Pull Request

Page width setting (fluid, phone, full) in the house theme settings panel

