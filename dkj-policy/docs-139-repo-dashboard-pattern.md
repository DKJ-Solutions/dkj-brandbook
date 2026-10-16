## docs/139-repo-dashboard-pattern

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

Write the approved Repo dashboard (#137, merged in #140) down in `house-style/README.md` as the binding form, per #139.
A doc change: the stylesheet is untouched, so it ships on the gates. The optional standalone HTML reference page is left
out, because it would be a visible result and the README section is what #139 asks for.

Measured while writing: six parts of the form render brand-book classes `house-style.css` does not define, so a repo
without React cannot build it from the stylesheet alone yet. The section names that gap per block; lifting those classes
into the house style is a stylesheet change, filed as #141.

### CREATE

- [x] `house-style/README.md`: a "Page patterns" chapter with "The Repo dashboard": the eleven blocks in order, the React component and the house class per block, what is fixed and what is per repo, the in-flight lists, the `main > header` pitfall, and the gap to #141
- [x] Copy edit (Edith)

### TEST

- [x] Every block, class and behaviour the section names checked against `src/dashboard/RepoDashboard.tsx`, the components and `house-style.css` on `main`
- [x] The gate (`scripts/lint/lint-web.ps1`) runs in `ship-pr`

### DEPLOY: docs/139-repo-dashboard-pattern

#### What does the change on this branch deploy to main?

##### Tier 0

The house style now fixes the form of a Repo dashboard, the index of a repo's dev server: eleven blocks in a fixed order
(eyebrow, `h1` "Repo dashboard", lead, product button, stat tiles, one data card per in-flight list, "About this repo",
footer note), each named by its brand book component and its house class, and what each repo fills in itself. See
"Page patterns" in `house-style/README.md`.

**Score:** 3

##### Tier 1

N/A: a developer's page on localhost; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

An app that has or builds a Repo dashboard follows this form. The house stylesheet is untouched, so an app without
React cannot match the form fully from it yet: the section names which blocks still come from the brand book (#141).

**Score:** 3

#### Pull Request

House style: the Repo dashboard form as a binding pattern

