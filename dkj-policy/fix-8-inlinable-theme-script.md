## fix/8-inlinable-theme-script

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

Issue #8: the header comment of `house-style/house-theme.js` carried a literal closing script tag, so
inlining the file verbatim in a `<script>` element ended the script early. Reword that comment.

### CREATE

- [x] Reword the usage line in the header comment of `house-style/house-theme.js`, so the file contains
      no `</script` at all. The escape in `vite.config.ts` stays as a second line of defence.

### TEST

- [x] `grep -c "</script" house-style/house-theme.js` reads 0.
- [x] The lint gate runs inside `ship-pr`.

### DEPLOY: fix/8-inlinable-theme-script

#### What does the change on this branch deploy to main?

##### Tier 0

Any DKJ-Solutions app can now inline `house-style/house-theme.js` straight into a `<script>` element in
its `<head>`, as the house-style README allows. Its header comment no longer contains a closing script
tag, which used to end the inlined script early and leave the page without `window.DKJTheme`.

**Score:** 2

##### Tier 1

Not relevant to management: an internal fix to a shared file.

**Score:** N/A

##### Tier 2

Not relevant to a subscriber: nothing they see changes.

**Score:** N/A

#### Pull Request

house-theme.js can be inlined verbatim
