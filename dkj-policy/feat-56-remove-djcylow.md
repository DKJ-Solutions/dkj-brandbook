## feat/56-remove-djcylow

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

Issue #56: DJ Cylow has its own brand and is not part of the DKJ brand (owner, October 13, 2026); its site repo has moved out of DKJ-Solutions to `DaveKJohn/djcylow-react`. The brand book drops its preview, its registry entry and its place in the repo list, and the repo's own rules record the exception so it is not added back. The house-style side is on the plugin tracker (DKJ-Solutions/dkj-claude-plugins#2973); #52 (AudioPlayer), which existed only for this preview, is closed as not planned.

### CREATE

- [x] `.claude/rules/this-repo.md` (Tessa): DJ Cylow is named under what the repo is for, as outside the brand book and the house style.
- [x] Dropped `djcylow-react` from the navigation list in `src/App.tsx`.
- [x] Removed the `DjCylowPreview` import and entry from `src/showcase/previews/RepoPreview.tsx` and deleted `src/showcase/previews/DjCylowPreview.tsx`.
- [x] Removed `DJCYLOW_VIEWS` and the `djcylow` entry from `src/apps/registry.ts`.
- [x] Searched `src/`, `README.md` and `dkj-policy/` for remaining mentions; only history in `CHANGELOG.md` remains.

### TEST

- [x] The diff read back: only the DJ Cylow entries left `registry.ts`, `App.tsx` and `RepoPreview.tsx`; no other reference remains in `src/` or `README.md`.
- [x] The gates (`open-pr -GatesOnly`) are green.
- [ ] An owner has looked at the showcase without DJ Cylow (`npm run dev`, the repo list in the navigation) and approved it.

### DEPLOY: feat/56-remove-djcylow

#### What does the change on this branch deploy to main?

##### Tier 0

DJ Cylow has its own brand and is not part of the DKJ brand, so the brand book no longer lists or previews `djcylow-react`, and the repo's rules say so. Its site repo now lives outside DKJ-Solutions.

**Score:** 2

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

Internal design reference; no change for management or a commissioner.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

No subscriber-facing change; the apps render as before.

**Score:** N/A

#### Pull Request

Remove djcylow-react from the brand book: DJ Cylow has its own brand

