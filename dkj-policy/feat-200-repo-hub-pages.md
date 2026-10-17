## feat/200-repo-hub-pages

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

#200: the Repo hub form gets a block for links to the repo's own pages, so a repo with several pages and no
product has a house-sanctioned way to list them. Designed by Gwen (position, look, fixed or optional, relation
to block 6, all reasoned in `house-style/README.md`), built by Cody.

### CREATE

- [x] `house-style/README.md`: block 7 "Pages" in the Repo hub form, the blocks after it renumbered (Gwen)
- [x] `house-style/house-style.css`: `.menu-item__sub` and the hover of a link `.menu-item`, existing tokens only (Gwen)
- [x] `house-style/patterns/repo-dashboard.html`: the block with example pages (Gwen)
- [x] `PageLinks` in `src/components/Navigation.tsx`, its source entry and showcase demo; this repo's hub and the dkj-claude-plugins preview use it (Cody)

### TEST

- [ ] An owner has looked at the Pages block on the Repo hub (`/`), on the dkj-claude-plugins hub preview and in the showcase, and approved it

### DEPLOY: feat/200-repo-hub-pages

The Repo hub form has a new, optional block 7, **Pages** (#200): a data card titled "Pages", right under the
intro, with one link row per page of the repo's own (a label, an optional one-line description, a chevron).
It is built from the house `.menu-item` row, which gains `.menu-item__sub` and a hover on a link row, so a page
link never looks like a stat tile. The product button stays the intro's one button; the brand book's own
"Preview other repo hubs" moved from the intro into the block. React gets `PageLinks`; without React the
pattern page carries the markup. The blocks after it are renumbered 8 to 12.

**Score:** 3

#### What makes this deploy extra special

A repo's hub can now list the repo's own pages in the house form, with a `PageLinks` component (React) or the
`.menu-item` markup (without React); a repo with no page besides `/` and its product leaves the block out.

**Score:** 3

#### Pull Request

Repo hub: a block linking to the repo's own pages

