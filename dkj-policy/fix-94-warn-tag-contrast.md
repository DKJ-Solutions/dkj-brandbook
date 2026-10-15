## fix/94-warn-tag-contrast

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

#### The decision

Owner's decision on #94 (maikel-bwj, October 15, 2026): warning tags become `--warning-5` text on a
`--warning-1` background. Both tokens already reverse per mode and neither moves per theme, so no new
token and no per-mode switch.

### CREATE

- [x] `.dkj-tag--warn` in `src/components/surfaces.css`: `--primary-9` on `--warning-3` becomes
  `--warning-5` on `--warning-1`. Measured: 5.09:1 light (`#a84f00` on `#fff4e0`), 9.97:1 dark
  (`#ffd75e` on `#3a2a10`), the same in all twelve themes.
- [x] The TitleTag intro in the showcase (`Surfaces.tsx`) names the new pair instead of "the warning fill".

### TEST

- [ ] An owner has looked at the warn TitleTag ("Sell") in light and dark, across a few themes, and approved it.

### DEPLOY: fix/94-warn-tag-contrast

#### What does the change on this branch deploy to main?

##### Tier 0

The warning tag (`TitleTag tone="warn"`) is warning text on the warning background instead of dark text on the amber fill, so it reads at 5.1:1 in light mode and 10:1 in dark mode, where the old fill was under 2:1 (#94).

**Score:** 2

##### Tier 1

N/A: one component's colours in the brand book.

**Score:** N/A

##### Tier 2

N/A: the house style the apps take is untouched.

**Score:** N/A

#### Pull Request

Warning tags read in both modes: --warning-5 on --warning-1

