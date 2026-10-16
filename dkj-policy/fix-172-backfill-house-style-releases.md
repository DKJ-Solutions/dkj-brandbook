## fix/172-backfill-house-style-releases

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

Resolves #172. Dave's decision there: from the next release on, every release goes through
`cut-release`, and the entries already shipped are backfilled into released sections that match the
existing tags. Maikel's follow-up there: no tag-name seam will come
(DKJ-Solutions/dkj-claude-plugins#3081), so later releases are `vX.Y.Z`. The `house-style-v1` to
`house-style-v4` tags stay as they are.

A cut writes its released section as a notes file under `releases/changelog/` plus a row in
`releases/history.md`, and leaves no released block in `CHANGELOG.md`. So the backfill follows that shape:

- Each entry goes to the first tag whose `CHANGELOG.md` holds it. The text is taken from `main`, so later
  corrections (#175) are kept.
- The notes are rendered with the plugin's own `Build-ReleaseNotes`, and the emptied changelog with
  `Convert-ChangelogForRelease` + `Set-ChangelogPendingSummary`. That makes each file what a cut would
  have written.
- In the history, the legacy table is headed `| Tag | Date | Title |` and sits under `### house-style`.
  Neither matches what `cut-release` parses as a recorded version or a major section. So the first
  `-Version 5.0.0` cut sees no baseline to disagree with, and opens its `### 5.x` section above it.

The cut itself and the `house-style` skill repoint are not part of this branch.

### CREATE

- [x] Split the 99 shipped entries into `releases/changelog/house-style/house-style-v1.md` .. `-v4.md`
  (4 / 35 / 37 / 23). `CHANGELOG.md` keeps the one pending entry (#175, merged after the v4 tag).
- [x] `dkj-policy/releases/history.md` lists the four tags.
- [x] `house-style/README.md`, `README.md` and Gwen's lens say a release is cut with `cut-release` as
  `vX.Y.Z` from now on, and that the four `house-style-v<N>` tags came before.

### TEST

- [x] Every entry on `main` is assigned exactly once (4 + 35 + 37 + 23 + 1 = 100), and every tag's
  entries are present on `main`.
- [x] The one relative link in the notes (`../../../../house-style/README.md`) resolves.

### DEPLOY: fix/172-backfill-house-style-releases

The changelog now shows what has been released. The 99 entries that shipped in `house-style-v1` to
`house-style-v4` move out of `[Unreleased]` into one release note per tag, and the new
[release history](releases/history.md) lists those four tags. The docs say a release is cut with
`cut-release` as `vX.Y.Z` from the next one on.

**Score:** 2

#### What makes this deploy extra special

N/A: the house stylesheet and theme script are untouched, so no app that takes a release notices this.

**Score:** N/A

#### Pull Request

Backfill house-style-v1..v4 as released sections

