## feat/86-button-family

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

Steps 1-3 of the Overlap merge plan (#86): SaveButton, DownloadButton and ResetButton fold into Button. The
stale Overlap findings of #85 are corrected on the same branch, since the section is rewritten here anyway.

- [x] Design and CSS (Gwen): primary loses its fixed full width, takes SaveButton's colourless disabled look;
      `.dkj-btn` works on `<a>`; accent outline; the download's hover/press moves to every default button
- [x] Code (Cody): Button gets `href`, `icon`, `tone="accent"`; the three components, their CSS and their
      register entries go; call sites, Overlap section and #85's stale points updated
- [x] Review (Victor): disabled links made inert, `tone` typed to the outline variant

### CREATE

- [x] Lint gate green (eslint, var() check, tsc -b, vite build)

### TEST

- [x] An owner has looked at the Actions section (primary widths and disabled, link and accent outline), the
      Stepper with its Reset, the download button in the drawer and TopBar, and the new hover/press on default
      buttons, and approved it

### DEPLOY: feat/86-button-family

#### What does the change on this branch deploy to main?

##### Tier 0

SaveButton, DownloadButton and ResetButton are gone; Button covers all three. Save is `Button variant="primary"`,
the offline download is `<Button href download icon="download" block>`, and the reset beside a Stepper is
`<Button variant="outline" tone="accent">`. A primary button is no longer always full width: `block` is now the
only width control, so a call site that relied on it adds `block`. A link button with `aria-disabled` is inert.
The Overlap section drops the three resolved findings and corrects the stale ones (#85).

**Score:** 4

##### Tier 1

A clean-up of the component set; management sees no change.

**Score:** N/A

##### Tier 2

Every default button now shows an accent border on hover and moves 1px down when pressed, as the download
button did. A disabled primary button looks like the old disabled Save button (colourless, not faded), and the
download button takes the default button's fill.

**Score:** 2

#### Pull Request

SaveButton, DownloadButton and ResetButton fold into Button

