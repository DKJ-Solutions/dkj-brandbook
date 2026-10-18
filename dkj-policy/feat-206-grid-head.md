## feat/206-grid-head

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

#206 was parked on DKJ-Solutions/dkj-claude-plugins#3121, which merged on October 18, 2026: the owner approved
a Repo hub where a block's h2 stands above its card(s) in a `.grid-2` > `.grid__head`, with the Pages block split
into This repo and General. The house adopts that form, so the consumer can drop its local page-layer rules.

### CREATE

- [x] `house-style.css`: house `.grid__head` and `.grid__full` (span every column), the head's h2 without margin, and `.card__head > h3` without margin for a card titled one level below a grid heading (Gwen)
- [x] `house-style/README.md`: blocks 7 and 11 in the new form -- two groups under a Pages heading with h3 card titles, one group alone the single card; About this repo's h2 above its card, its sub line the repo's own; reserved names and the "What is fixed" paragraph (Gwen)
- [x] `patterns/repo-dashboard.html`: the stylesheet-only reference in the two-group form and the new block 11 (Gwen)
- [x] React: `CardHead level={3}`, a `CardGroup` (`.grid-2` > `.grid__head`), `PageLinks generalPages`, block 11 as a `CardGroup` in the three hubs, a two-group demo in the showcase (Cody)
- [x] Review findings applied: Victor's (block 11 sub line claimed a commit the facts do not show; a lone group renders the single card) and Edith's (README passages that still described one card only, re-wraps, reserved names)

### TEST

- [x] `scripts/lint/lint-web.ps1` green (eslint, var check, tsc, vite build)
- [~] Automated component tests -- dropped: this repo has no component test suite, and the change is a layout the gates cannot judge
- [x] An owner has looked at `/`, `/showcase#PageLinks` and `house-style/patterns/repo-dashboard.html` and approved it

### DEPLOY: feat/206-grid-head

The house stylesheet, the README and the pattern page carry the Repo hub's "heading above the cards" form, and
the brand book's own hubs and showcase render it.

**Score:** 2

#### What makes this deploy extra special

A Repo hub can split its Pages block into **This repo** and **General** (the pages every DKJ-Solutions repo
serves): one **Pages** heading above two cards, each titled one level lower. **About this repo** takes the same
shape, its heading above its card. The house now defines `.grid__head` and `.grid__full`, so a repo that defined
them in its own page layer (dkj-claude-plugins) can drop those rules once it takes this version.

**Score:** 3

#### Pull Request

A house grid heading: a block's h2 stands above its card(s)

