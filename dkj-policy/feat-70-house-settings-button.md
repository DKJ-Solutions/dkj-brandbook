## feat/70-house-settings-button

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

Lift the showcase's round settings button (#66, #68) into the house style, so every DKJ-Solutions app adopts it in one call (#70). It reaches the apps only after a `house-style-v<N>` release and the skill repoint, both on the owner's request.

### CREATE

- [x] `house-style/house-theme.js`: `DKJTheme.settings(el, options)` draws a round toggle and a panel with the picker and a reset, returns the `.theme-settings__extra` slot, and owns open/close (toggle, Escape with focus back, click outside, focus leaving; never a click inside). Idempotent per element; texts Dutch by default
- [x] `house-style/house-style.css`: `.theme-settings` (inline) and `--floating` (fixed top right), with `__toggle`, `__open`/`__close` icons, `__panel`, `__title`, `__group`, `__label`, `__foot`, `__extra`, `__reset`, on house tokens only
- [x] `house-style/README.md`: how to use it, and the new reserved names
- [x] Showcase: the preview settings use the house component, the width toggle portaled into its slot; the brand book's own toggle and panel styles are gone. `src/vite-env.d.ts` types `settings()`
- [x] Showcase TopBar section: a demo of the house `.topbar` with the settings button inline, with the Dutch defaults

### TEST

- [x] `scripts/lint/lint-web.ps1` green (eslint, var check, tsc, build)
- [ ] An owner has looked at the preview settings (unchanged look and behaviour) and the inline demo in the TopBar section, and approved them

### DEPLOY: feat/70-house-settings-button

#### What does the change on this branch deploy to main?

##### Tier 0

The house style has a settings button: `DKJTheme.settings(el)` draws a round toggle that opens a panel with the theme picker, a reset and a slot for the app's own settings, inline (e.g. in a `.topbar`) or floating top right with `.theme-settings--floating`. The script owns opening and closing. The brand book's preview settings now use it, and the TopBar section shows it inline.

**Score:** 3

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

Internal design system; no change for management or a commissioner.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

No subscriber-facing change until an app adopts it after a house-style release.

**Score:** N/A

#### Pull Request

A settings button in the house style: a round toggle with the theme picker in a panel

