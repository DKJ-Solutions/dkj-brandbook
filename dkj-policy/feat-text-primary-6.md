## feat/text-primary-6

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

- [x] Owner's request (October 15, 2026): `--primary-5` as all text was no longer an accent (`.bb-scale` as the example); use `--primary-6` for text, then `--primary-7` on the owner's second look, and keep `-5` for highlights, across the whole house style.

### CREATE

- [x] Gwen: every non-paragraph text `color` (and the chart's SVG text `fill`) in `house-style.css`, `src/components/*.css` and `showcase.css` moves to `--primary-7` (first `-6`, then `-7` on the owner's word); states (hover, focus, `aria-pressed`, `aria-sort`, `aria-expanded`, `is-active`, today), `h1`/`h2`, `strong`, list markers, the accent dialog's title and `.dkj-inforow-value` stay `--primary-5`
- [x] Showcase inline colours and the comments that name the text step follow
- [x] `house-style/README.md` and the `house-style.css` header state the new rule and the new contrast measurement
- [x] Contrast measured in all twelve themes: `--primary-7` 17.4:1 or better on the page and 11.9:1 or better on `--primary-3`; the dark warn tag stays under 4.5:1 either way, added to #94

### TEST

- [x] `scripts/lint/lint-web.ps1` green
- [x] An owner has looked at the showcase in light and dark and approved it

### DEPLOY: feat/text-primary-6

#### What does the change on this branch deploy to main?

##### Tier 0

All text that is not a paragraph -- labels, table heads, legends, field labels, row names, quiet icons, the text on a tinted surface, the showcase's scale rows -- is now `--primary-7`, the paragraph colour, so `--primary-5` is an accent again: it stays on `h1` and `h2`, every state (hover, focus, pressed, sorted, active, today), `strong`, list markers, the accent dialog's title and an InfoRows value, and on native controls through `accent-color`. Contrast rises in every theme (`--primary-7` reads 17.4:1 or better on the page).

**Score:** 3

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

Every DKJ-Solutions app that takes this house style shows calmer labels and keeps the theme's strong colour for what should stand out.

**Score:** 2

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

The brand book's own showcase is not a subscribed service.

**Score:** N/A

#### Pull Request

Text that is not a paragraph takes --primary-6; --primary-5 is for highlights only

