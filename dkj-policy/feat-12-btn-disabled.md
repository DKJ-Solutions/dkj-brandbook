## feat/12-btn-disabled

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

Issue #12: `house-style.css` defines `.btn` and `.btn--primary` but no `:disabled` rule, so a disabled
button looks enabled and every app adds its own rule on a reserved class.

#### Design choice (Gwen)

The issue proposes reduced opacity and a default cursor. This branch uses `opacity: 0.5;
cursor: not-allowed`, the same pair the brand book's own `.dkj-btn`, `.dkj-iconbtn` and `.dkj-input`
already use for `:disabled`, so the house reads as one system. Swapping to `cursor: default` is a
one-word change if the owners prefer the issue's version.

### CREATE

- [x] `house-style/house-style.css`: `.btn:disabled { opacity: 0.5; cursor: not-allowed; }`, which
      covers `.btn--primary` too (higher specificity than the variant's own rule).
- [x] `house-style/README.md` names the state in its class list.
- [x] The showcase's Button section gets a demo of house `.btn` and `.btn--primary`, rest and
      disabled, so the state can be judged by eye.

### TEST

- [x] The gates (`open-pr -GatesOnly`) are green.
- [ ] The owners have looked at the Button section of the showcase (`npm run dev`) in a light and a
      dark theme.

### DEPLOY: feat/12-btn-disabled

#### What does the change on this branch deploy to main?

##### Tier 0

The house style now has a disabled state for `.btn` and `.btn--primary`: half opacity and a
not-allowed cursor, the same as the brand book's own buttons and inputs. A disabled button no longer
looks clickable, and an app no longer needs its own rule on the reserved `.btn` class (MesoWise can
drop its `.btn:disabled` once it takes the new copy).

**Score:** 2

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

Not relevant to management on its own: a consistency fix in the shared button style.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

A disabled button in a DKJ-Solutions app now looks disabled once that app takes the new house style.

**Score:** 1

#### Pull Request

House style: a disabled .btn looks disabled

