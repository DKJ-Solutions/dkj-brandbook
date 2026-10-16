## fix/144-message-live-region

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

#### The approach

Live-region semantics on `Message` are opt-in through a `live` prop (`'status' | 'alert'`) rather than a default
per tone: most `Message`s are static text present at load, and a `role="alert"` on a static warning would be
announced on every page load. Only a line that appears or changes after load takes the prop.

### CREATE

- [x] `Message` (`src/components/Feedback.tsx`) takes `live?: 'status' | 'alert'`, rendered as the `role` of its `<p>`
- [x] The Repo dashboard's loading line takes `live="status"`, its warning `live="alert"`
- [x] The reference page `house-style/patterns/repo-dashboard.html` gives its `.msg--warn` line `role="alert"` and says which role the loading line takes
- [x] Row 8 of the Repo dashboard table in `house-style/README.md` names the roles

### TEST

- [x] The lint gate (`scripts/lint/lint-web.ps1`), run by `ship-pr` before the push
- [~] No owner's look: the change adds ARIA roles only and nothing on screen changes

### DEPLOY: fix/144-message-live-region

#### What does the change on this branch deploy to main?

##### Tier 0

`Message` takes a `live` prop (`"status"` or `"alert"`) that gives it a live-region role, and the Repo dashboard
uses it, so a screen reader announces the loading line and the "could not be read" warning when they appear. The
reference page `house-style/patterns/repo-dashboard.html` and row 8 of the Repo dashboard table in
`house-style/README.md` name the same roles for the stylesheet-only form.

**Score:** 2

##### Tier 1

N/A: an accessibility attribute on a developer's page; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet and theme script are untouched.

**Score:** N/A

#### Pull Request

Message has no live-region role
