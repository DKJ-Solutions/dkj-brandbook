## feat/48-group-heading-level

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

This branch is #48 and ships with -Resolves 48. `GroupHeading` always rendered an h3, which broke the
heading outline on pages where a PageHeader h1 is followed by top-level sections. It gets an optional
`level` prop (2, 3 or 4; default 3, so today's output is unchanged), and the previews use the right level.
Visible-result rule: the look must not change at any level, and the owner checks that.

### CREATE

- [x] Add `level?: 2 | 3 | 4` (default 3) to `GroupHeading` in `src/components/Content.tsx` and update its doc comment.
- [x] Neutralise the one house element rule that would change the look at h2 (the serif `font-family`) inside `.dkj-group-heading` in `src/components/surfaces.css`.
- [x] Set the right level in the previews: top-level sections `level={2}`, nested groups `level={3}` (inside a CardHead card, which is an h2, also 3).
- [x] Show the prop in the GroupHeading showcase section: a line in its intro and a level 2 / level 3 demo.
- [x] Run `npx eslint src` and `npx tsc -b`, both clean.

### TEST

- [x] Victor reviewed the diff: nothing blocking. The default renders the same `h3` as before; every house `h2` element rule is overridden by `.dkj-group-heading`, and `font-family: inherit` gives the body face an `h3` already had. The previews' outlines run in order with no skipped level (the thumbnail report sections moved to level 2, as siblings of the series summary).
- [x] The gates (`open-pr -GatesOnly`) are green.
- [ ] An owner has looked at the GroupHeading section (level 2 and 3 side by side) and the previews (`npm run dev`) and approved that nothing changed visually.

### DEPLOY: feat/48-group-heading-level

#### What does the change on this branch deploy to main?

##### Tier 0

`GroupHeading` takes an optional `level` (2 to 4, default 3) without changing its look, so a page can give its sections their place in the outline. The previews now run h1, h2, h3 in order, which a screen reader's heading list follows.

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

GroupHeading: an optional heading level

