## feat/18-house-app-components

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

Issue #18: port the generic MesoWise app components into `house-style/house-style.css`, from
`DKJ-Solutions/dkj-claude-plugins` commit `655cbfe2` (branch `feat/house-style-app-components`), whose
copy of the house style no longer exists there since the move to this repo.

#### Checked against what changed since that branch (Gwen)

- **`.btn:disabled` (#12).** `.btn--touch` and `.btn--block` are modifiers on `.btn` and set neither
  `opacity` nor `cursor`, so `.btn:disabled` (0,2,0) covers them, `.btn--touch.btn--primary` included.
  No change to the ported block was needed; the README says so.
- **Name collisions in this repo.** The showcase and the brand layer use only `dkj-`/`bb-` names and
  `--dkj-` tokens, so none of the new house classes or tokens collides here.
- The CSS is copied byte for byte from `655cbfe2` (the token block after the type scale, the
  "App components" group at the end), not retyped.

### CREATE

- [x] `house-style/house-style.css`: the four app-shell tokens and the "App components" group.
- [x] `house-style/README.md`: the App shell token row, the new reserved names, an "App components
      (from MesoWise)" section with the notes from the source branch's `SKILL.md`, the collision note
      and the `.btn:disabled` note.
- [x] The showcase gets demos of the house classes next to the brand-book versions
      (`src/showcase/sections/HouseApp.tsx`): Field, Button, Dialog (plain, cancel/save, drawer),
      TopBar and MenuRow sections.

### TEST

- [x] Eslint and `tsc -b` pass on the showcase; the full gate runs below.
- [x] The gates (`open-pr -GatesOnly`) are green.
- [x] The owners have looked at the Field, Button, Dialog, TopBar and MenuRow sections of the showcase
      (`npm run dev`) and approved them (October 13, 2026).

### DEPLOY: feat/18-house-app-components

#### What does the change on this branch deploy to main?

##### Tier 0

The house style now carries the generic app shell that MesoWise built: four app-shell tokens
(`--control-h`, `--tap`, `--topbar-h`, `--column-narrow`), a narrow column, a form field with its error
line, touch and block buttons, icon buttons in an action row, a native dialog with close, save, cancel
and back, a side drawer, a sticky top bar, a menu list and `.sr-only`. Additions only, but an app that
defines its own `.field`, `.dialog`, `.topbar`, `.menu-row`, `.icon-btn` or `.sr-only` now collides
with a house name. It reaches the apps with the next `house-style-v<N>` tag.

**Score:** 3

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

Not relevant to management on its own: shared building blocks for DKJ-Solutions apps.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

No subscriber-facing change until an app takes the new copy and uses the classes.

**Score:** N/A

#### Pull Request

House style: port the MesoWise app components (field, dialog, drawer, top bar, menu)

