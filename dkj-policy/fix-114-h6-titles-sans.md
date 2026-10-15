## fix/114-h6-titles-sans

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

Owner's decision on #114 (maikel-bwj, October 15, 2026): an h6 is never serif. `.dkj-card-title` and
`.dkj-dialog-title` drop `--font-serif` and take the house heading colour `--primary-8`; the role prose of `-5`
("card and dialog titles") is updated to match.

#### Notes for the merge and the look

- The `-0.01em` tracking goes with the serif: the house sets it only because the serif's bold is heavier.
- The info dialog remapped `--primary-5` to `--cat-1`, so its title used to be in the info colour; at `-8` it
  is the ordinary heading colour. The accent dialog keeps its own `-7` title rule.
- `fix/109-primary-button-step` edits the same prose line in `house-style.css` (the `-7` role list);
  whichever merges second resolves one line by keeping both edits.

### CREATE

- [x] `.dkj-card-title` (`src/components/surfaces.css`) and `.dkj-dialog-title` (`src/components/dialog.css`):
  no `--font-serif`, no `-0.01em` tracking, `--primary-8` instead of `--primary-5`; the dialog comment says so.
- [x] The `-5` role prose in `house-style/house-style.css` and `house-style/README.md` no longer lists card and
  dialog titles.

### TEST

- [x] An owner has looked at the card titles (Surfaces showcase, Mesowise's cards) and the plain, accent and info
  dialogs (Overlays), in light and dark across a few themes, and approved it (maikel-bwj, October 15, 2026).

### DEPLOY: fix/114-h6-titles-sans

#### What does the change on this branch deploy to main?

##### Tier 0

Card and dialog titles are set in the body sans in the heading colour (`--primary-8`), like every other h3-h6, instead of a small serif in a grey that read faint on dark (#114).

**Score:** 2

##### Tier 1

N/A: the look of two component titles in the brand book.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet's rules are untouched; only its role prose for `-5` drops "card and dialog titles".

**Score:** N/A

#### Pull Request

Card and dialog titles are sans in --primary-8, like every h6

