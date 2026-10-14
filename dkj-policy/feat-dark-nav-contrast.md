## feat/dark-nav-contrast

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

On the dark themes the brand book's navigation (`.bb-nav`) sat only a shade lighter than the page beside it
(`.bb-main`), so the two read as one plane. The light themes already set it apart with a near-black panel;
the dark themes get the mirror image: a panel light enough to carry black text (owner's correction: a mid grey
with white text was not light enough), tinted with the theme's `--primary-6` but lighter than
`--primary-6` itself, which read as too dark (owner's corrections). The owner's reference is the light
themes' `--primary-6` against `--primary-1`, which measures 6.4-7.5:1. `--primary-6` on a dark page already
measures 8.3-10.8:1, so the ratio alone does not explain "too dark"; the panel is set as light as the light
themes' page instead.

### CREATE

- [x] `src/showcase/showcase.css`: the dark half of `--bb-nav-bg` becomes 20% `--primary-6` over white, with
  black text (`#0b0b0b`) and dark grey labels (`#52514e`); the heading and focus ring take the theme colour
  darkened (30% over `#141413`), the current link fills with that darkened colour under white text, the hover
  adds 35% `--primary-6`, and the border line goes, as on light. The light themes are unchanged.
- [x] Contrast measured in all six dark themes: panel to page 14.9:1 or more, black text 17:1 or better,
  grey labels 6.8:1 or better, the "Contents" heading 8.2:1 or better, black on hover 13.9:1 or better,
  white on the current link 8.9:1 or better

### TEST

- [x] `scripts/lint/lint-web.ps1` green
- [ ] An owner has looked at the navigation in the dark themes and approved it

### DEPLOY: feat/dark-nav-contrast

#### What does the change on this branch deploy to main?

##### Tier 0

The brand book's navigation panel on the dark themes is now a light tint of the theme colour (20% `--primary-6`
over white) with black text, the mirror image of the near-black panel with white text on the light themes, so it stands clearly
apart from the page. Only the
brand book's own chrome changes; no house token or component does.

**Score:** 2

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

The brand book's own navigation only; management sees no change.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

The brand book's own chrome, which no app or subscriber renders.

**Score:** N/A

#### Pull Request

A light navigation panel with black text on the dark themes

