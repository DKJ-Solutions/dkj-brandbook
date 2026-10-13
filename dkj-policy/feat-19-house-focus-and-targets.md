## feat/19-house-focus-and-targets

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

Issue #19 and its two comments: house controls without a visible focus ring, hit areas below 44px, and a
`.tooltip` with no open state that a pointer cannot move onto.

#### Design choices (Gwen)

- **Rings.** `--primary`, 2px, offset 2px, as on `.btn--primary` and the app components, except the
  `.seg` button: inset (`.seg` clips its overflow) and in `--ink`, because a primary ring would vanish on
  the pressed (primary) button. An SVG `.chart .bar` takes a 2px `--ink` stroke, since outlines on SVG
  shapes are not reliable across browsers.
- **Targets.** `.info-button` hit area 32px to 44px (`inset: -14px`), the `.sort` hit area a 44px-high
  band around its label, `.moretoggle` `min-height: var(--tap)`. The `.seg` keeps its 30px height in the
  `.controls` row: the issue does not ask for it, and changing it reshapes every header row.
- **Tooltip.** A house `.tooltip--open` (a BEM modifier, like the rest of the file) shows it and sets
  `pointer-events: auto`. The base `.tooltip` stays click-through, because a chart tooltip that follows
  the pointer would otherwise sit under it and flicker.

#### The brand layer follows (Cody)

`Tooltip` uses `.tooltip--open` and drops `.tooltip.dkj-tooltip--open`, closes after 150ms instead of at
once so the pointer can cross onto the text, does not close on a press inside the text, and stops a click
in the portal from reaching the anchor. `ReadMoreToggle` drops `.dkj-readmore`, which the house now covers.

### CREATE

- [x] `house-style/house-style.css`: the rings, the hit areas and `.tooltip--open`.
- [x] `house-style/README.md`: `--open` in the reserved list, a "Focus and targets" paragraph.
- [x] `src/components/Feedback.tsx`, `src/components/surfaces.css`: the brand layer on the new house rules.
- [x] Showcase: a demo of the house `.seg`, `.info-button`, `.more`, `.sort`, `.chart .bar` and
      `.moretoggle` in the Button section, to tab through.

### TEST

- [x] Eslint and `tsc -b` pass; the full gate runs below.
- [ ] The gates (`open-pr -GatesOnly`) are green.
- [ ] The owners have tabbed through the new demo in the Button section and hovered a Tooltip onto its
      text (`npm run dev`), in a light and a dark theme, and approved it.

### DEPLOY: feat/19-house-focus-and-targets

#### What does the change on this branch deploy to main?

##### Tier 0

Keyboard focus is now visible on every interactive house class (`.seg`, `.info-button`, `.more`,
`.chart .bar`), the small house controls have a 44px hit area (`.info-button`, the `.table` header's
`.sort`, `.moretoggle`), and the house `.tooltip` has an open state, `.tooltip--open`, that a pointer can
move onto. An app that opens tooltips its own way can switch to the modifier and drop its rule.

**Score:** 3

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

Not relevant to management on its own: an accessibility fix in the shared style.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

No subscriber-facing change until an app takes the new copy.

**Score:** N/A

#### Pull Request

House style: visible focus rings and 44px targets on .seg, .info-button, .more, .chart .bar, .sort, .moretoggle; a tooltip open state

