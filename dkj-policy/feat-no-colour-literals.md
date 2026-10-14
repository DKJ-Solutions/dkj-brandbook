## feat/no-colour-literals

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

Every hard-coded colour that an existing house token can carry reads that token; no new tokens are added
(owner's instruction). Where no token holds the exact code, the owner chose an existing token even though
it follows the mode.

### CREATE

- [x] Navigation: the text reads `--neutral-1` and `--neutral-3` directly in both modes, so `--bb-nav-ink` and `--bb-nav-ink-2` are gone; the current item's ink reads `--neutral-1` (light) / `--neutral-5` (dark)
- [x] Theme swatches and both dialog backdrops read `--neutral-1` (the backdrop at 45% opacity)
- [x] `scripts/lint/check-colour-literals.mjs`, step 3 of `lint-web.ps1`: a colour code outside a token declaration, or a repo token that retypes a house value, blocks

### TEST

- [x] Gate green (`lint-web.ps1`); the new check reports all 13 old codes on `main`'s files and none on this branch
- [ ] An owner has looked at the navigation, the theme picker and an open dialog in light and dark and approved them

### DEPLOY: feat/no-colour-literals

#### What does the change on this branch deploy to main?

##### Tier 0

No stylesheet types a colour where a house token already holds it. The navigation's text reads `--neutral-1`
and `--neutral-3` directly (`--bb-nav-ink` and `--bb-nav-ink-2` are gone), the theme swatches and the dialog backdrops read `--neutral-1`, and a new gate step
(`scripts/lint/check-colour-literals.mjs`) refuses a colour code outside a token declaration, or a repo token
that retypes a house value.

**Score:** 3

##### Tier 1

Internal consistency of the brand book; management sees no change.

**Score:** N/A

##### Tier 2

The navigation's secondary text is a touch lighter on a light theme and darker on a dark theme. The theme
swatches take the current page's ground, so on a dark page the light themes' swatches are dark too. The page
behind an open dialog fades towards white on a light theme instead of darkening.

**Score:** 2

#### Pull Request

Every colour is a token: no duplicated colour codes, and a gate that keeps it so
