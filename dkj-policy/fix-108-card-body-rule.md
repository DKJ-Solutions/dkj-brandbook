## fix/108-card-body-rule

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

#108: `.dkj-card-body` always drew a `border-top`, meant to divide a head from the body, so a card with only a
body showed an empty line at its top (Recipes, Life hub).

### CREATE

- [x] `src/components/surfaces.css`: the rule moves to `:where(.dkj-card-head) ~ .dkj-card-body`; `:where()` keeps
  the data card's `border-top: 0` the stronger rule
- [x] `Card.tsx`: CardBody's doc line says the rule only follows a head

### TEST

- [x] Screenshot of the Recipes preview: the line inside each card's top edge is gone
- [x] An owner has looked at the cards in the previews and approved it

### DEPLOY: fix/108-card-body-rule

#### What does the change on this branch deploy to main?

##### Tier 0

A card body draws its dividing rule only when a card head sits above it (#108), so a card with only a body no
longer shows an empty line at its top.

**Score:** 2

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

N/A: a line inside the brand book's own component.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

N/A: the house style the apps take is untouched.

**Score:** N/A

#### Pull Request

A card body draws its rule only under a card head

