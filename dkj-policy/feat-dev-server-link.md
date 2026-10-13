## feat/dev-server-link

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

### CREATE

- [x] `.claude/hooks/dev-server-link.ps1`: reuse a showcase this checkout already runs on 5173-5180 (the listening process's command line runs Vite from this checkout's `node_modules`), else start `npm run dev` hidden on the first free port, and return the link as hook JSON
- [x] `.claude/settings.json`: register it as a `SessionStart` hook (30 s timeout)

### TEST

- [x] Reuse path: with the showcase already on 5173 the hook answers `already running: http://localhost:5173/` in ~1.7 s
- [x] Start path: on a spare port range the hook starts the server, waits until it listens (~3.4 s), and a second run reuses it instead of starting another
- [x] Foreign checkout: run with another project dir, the same server is not taken as ours
- [x] Code review (Victor) and security review (Sebastian); applied: ownership by process command line instead of the page title (other worktrees, spoofing), and no HTTP probes, so the 30 s hook timeout cannot be exceeded by hung ports

### DEPLOY: feat/dev-server-link

#### What does the change on this branch deploy to main?

##### Tier 0

Every session in this repo now starts with the showcase running and its `localhost` link printed, ready to ctrl+click in the VS Code terminal or open in Simple Browser. A server this checkout already runs is reused, so `/clear` or a second session never starts a second one.

**Score:** 3

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

Developer tooling only; nothing reaches management or the commissioner.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

No subscriber sees a session hook.

**Score:** N/A

#### Pull Request

SessionStart hook starts the showcase and prints its localhost link

