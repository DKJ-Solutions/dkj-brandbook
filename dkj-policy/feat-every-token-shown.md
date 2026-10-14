## feat/every-token-shown

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

Owner's request (October 14, 2026): every token we have must actually be shown in the brand book.
An inventory against `house-style.css` and `src/brand-layer.css` found 43 house and 29 brand-layer
tokens the Tokens section never drew.

### CREATE

- [x] Tokens section: the whole spacing scale (40 steps), `--on-warn`, the four `--*-tint` values, the house app-shell sizes and `--shadow-pop`
- [x] Brand layer: `--dkj-text-display` and `--dkj-text-input` in the type scale; weights, line heights, tracking and mono; layout widths and dialog scale/step; focus ring; every duration and the easing, animated on hover
- [x] `src/showcase/sections/Intro.tsx`: the content opens with the page title (`<h1>`), a lead, a house `.card.hero` at the h0 display size and a type specimen with h2-h6, large, body, link, code, `.sub` and `.muted` (owner's follow-up); h4-h6 use showcase classes until #76
- [x] One `<h1>` per page, always at `--text-h1`: the intro's "DKJ Brand Book"; the nav no longer repeats the name: it opens with its own heading, an `<h2>` "Contents" at `--text-h2` that names the nav (`aria-labelledby`), over "Jump to a section or an app preview", and the specimen points at the title instead of carrying a second h1 (owner's follow-ups; an h1 in the nav at `--text-lg` broke the one-size rule, and a second "DKJ Brand Book" as a link read oddly)
- [x] Fixed: the brand-layer swatch `--dkj-on-warn` named a token that does not exist (always blank); `on-warn` is a house token and now sits under Status

### TEST

- [x] `scripts/lint/lint-web.ps1` green (eslint, var check, tsc, build)
- [ ] An owner has looked at the intro and the Tokens section and approved them

### DEPLOY: feat/every-token-shown

#### What does the change on this branch deploy to main?

##### Tier 0

The brand book now opens with an intro: the page's one `<h1>` at `--text-h1` (the navigation now opens with its own `<h2>` "Contents" instead of repeating the name), a hero card at the house display size (h0) and a type specimen with every heading level and the running-text styles. Its Tokens section now draws every token the house style and the brand layer define: the whole spacing scale, the theme tint percentages, the app-shell and layout sizes, the dialog scale, type weights, line heights, tracking and the mono stack, the focus ring and shadow, and every motion duration, animated. A blank swatch that named a non-existent `--dkj-on-warn` is gone; `--on-warn` shows under the house status colours.

**Score:** 2

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

The brand book's own showcase; no change for management or a commissioner.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

No token or house style changed, so no app and no subscriber sees a change.

**Score:** N/A

#### Pull Request

The brand book shows every token

