## feat/153-card-heading-badge

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

Issue #153: the house has no pattern for a card heading led by a status badge, so the connector preview's repo
cards put the status in the sub line only. `CardHead` gets a `badge` slot before the title text, and the house
`.card__title > .badge` the same spacing, so both forms have the pattern. The badge stays decorative; the sub
line still says the status in words.

### CREATE

- [x] `CardHead`: a `badge` prop, rendered before the title; `.dkj-card-title > .badge` and the house `.card__title > .badge` take a `--spacing-2` right margin.
- [x] Showcase Card section: a data card with a badged title.
- [x] Connector preview: each repo card's title is led by its status badge; its Gap note no longer lists this.
- [x] `house-style/README.md`: the card head parts name the badge.

### TEST

- [x] Gates (`open-pr -GatesOnly`) pass.
- [x] An owner has looked at the badged data card on `/showcase#Card` and the repo cards on `/dashboards/dkj-claude-plugins`, and approved them.

### DEPLOY: feat/153-card-heading-badge

#### What does the change on this branch deploy to main?

##### Tier 0

A card heading can be led by a status badge: `CardHead badge` in React, a `.badge` before the text in a house
`.card__title`. The dkj-claude-plugins connector preview's repo cards use it.

**Score:** 2

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

N/A: a developer's page on localhost; nothing a commissioner sees changes.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

An app that takes this release can lead a `.card__title` with a `.badge`, spaced from the title text.

**Score:** 1

#### Pull Request

CardHead: a title led by a status badge

