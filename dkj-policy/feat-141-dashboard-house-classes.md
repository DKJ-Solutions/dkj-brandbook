## feat/141-dashboard-house-classes

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

#141: give the six brand-book-only parts of the Repo dashboard form a house class, so a repo without React can build the
approved form from `house-style.css` alone, and prove it with a stylesheet-only reference page (the optional item of #139).
A change to the stylesheet every app copies: a visible result, so the branch is parked for an owner's look, no PR.

### CREATE

- [x] `house-style.css`: `.eyebrow`, `.lead`, `.card__head` / `.card__title` / `.card__sub`, `.facts`, `.msg` / `.msg--warn`, `.page-column`, `.page-cta`, each with the values the approved dashboard renders (Gwen)
- [x] `house-style.css`: `.btn` draws no underline on an `<a>` (Gwen)
- [x] `house-style/patterns/repo-dashboard.html`: the stylesheet-only reference page (Gwen)
- [x] `house-style/README.md`: the dashboard table names a house class per block, the closing paragraph, the reserved names, the `.btn` underline note
- [x] Code review (Victor): one bug fixed (the facts list lost its gap under the card head: the head rule is now `.card > .card__head + *`); the settings button moved out of `<main>`; the mirrored brand-book values commented. The missing live region on the message is a component issue, filed as #144

### TEST

- [x] The gate (`open-pr -GatesOnly`) green
- [x] An owner has looked at http://localhost:5173/house-style/patterns/repo-dashboard.html next to http://localhost:5173/ and approved it

### DEPLOY: feat/141-dashboard-house-classes

#### What does the change on this branch deploy to main?

##### Tier 0

The house style has classes for every block of the Repo dashboard (`.eyebrow`, `.lead`, `.card__head`, `.card__title`,
`.card__sub`, `.facts`, `.msg`, `.page-column`, `.page-cta`), so a repo without React builds the approved form from
`house-style.css` alone, and `house-style/patterns/repo-dashboard.html` is the reference page that does it. A `.btn` on a
link no longer draws an underline.

**Score:** 3

##### Tier 1

A repo without a build, such as a generated page or a Worker, can now show the same Repo dashboard as the React repos.

**Score:** 2

##### Tier 2

An app that takes this release gets nine new house classes (renaming any of its own that share a name) and loses the
underline on its link buttons.

**Score:** 3

#### Pull Request

House style: house classes for the Repo dashboard's intro, data-card head, facts list, message and column

