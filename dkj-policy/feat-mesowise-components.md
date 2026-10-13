## feat/mesowise-components

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

Mirror the UI/UX design of the first DKJ-Solutions app (dkj-maplestory-classic-mesowise) into the brand
book. Only the design, never the content. The inventory was approved on October 13, 2026 (36 patterns
grouped from the ~76 components in its `src/app.tsx` and `src/style.css`).

### CREATE

- [x] Tokens: `tokens/base.css` (shared) and `tokens/themes/mesowise.css` (colour, light + dark, `data-theme` / `data-mode`)
- [x] Components in `src/components/`, presentational and styled only on tokens
- [x] Source register `src/components/sources.ts` (repo, source components, source CSS per component)
- [x] Showcase: every component with its variants and states, theme/mode switcher, 360px phone width
- [x] README and `tokens/README.md` (how React and Artifacts consume the tokens)

### TEST

- [x] Lint gate green (`scripts/lint/lint-web.ps1`: eslint + tsc + vite build)
- [x] Whole showcase server-rendered without a runtime error (36 sections)
- [~] Automated component tests -- dropped: purely presentational CSS components whose correctness is visual; the owner's look in the browser is the check, and the repo has no test runner yet
- [x] Code review by Victor

### DEPLOY: feat/mesowise-components

#### What does the change on this branch deploy to main?

The brand book gets its first content. The design tokens are split into a shared base layer and a
colour-only `mesowise` theme, and both are usable from React and from a Claude Artifact. Around them
sit 35 presentational React components, mirrored from the Mesowise app's UI without its content, and
a showcase that shows every variant and state with a theme and mode switcher. Every component records
its source repo and its source component and CSS in `src/components/sources.ts`.

**Score:** 4

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

There is now one place where the owners can see the DKJ-Solutions look and check whether apps stay
consistent with it.

**Score:** 3

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

The brand book has no subscribers. The end users of the apps see nothing until an app adopts these
tokens.

**Score:** N/A

#### Pull Request

Mesowise components and tokens mirrored into the brand book
