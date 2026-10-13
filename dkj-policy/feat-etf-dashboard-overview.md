## feat/etf-dashboard-overview

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

Mirror the ETF tracker dashboard (`DKJ-Solutions/dkj-etf-tracker`, `etf_tracker/dashboard.py`) into
the overview next to Mesowise, as one whole. Research (Rebecca) and a design memo (Gwen) decided which
version leads per overlap; the owner chose (October 13, 2026):

- **Overlaps: the brand book leads on mechanics** (44px target, focus ring, states); the dashboard's
  denser look becomes a variant: SegmentedChoice `layout="joined"`, RoundToggle `inline` (16px visual,
  44px hit area), Card `variant="data"` (20px padding, left serif title + subline), DefinitionList
  `tone`/info slot (ValueBox prop names), TitleTag `tone="warn"`, Disclosure with the ▾/▴ marker,
  Banner `tone="warn"` (= house `.notice`). A new DataTable (house `.table`, sortable header, ISIN
  sub-line) leads for data tables; ComparisonTable stays the comparison variant. The light/dark toggle
  is not mirrored: the house theme picker leads.
- **Headings:** serif in data views (Card `variant="data"`, PageHeader); sans stays for the
  phone-first app cards.
- **Danger zone:** a generic `Alert tone="danger"` without hazard stripes; the striped zone stays the
  ETF app's own layer.
- **Scope:** everything except the SVG charts, which get their own branch.
- New patterns: StatTile, HeroValue + Delta, Tooltip, Legend, MiniCard + Meter + Badge,
  ReadMoreToggle, PageHeader, FooterNote. Dashboard colours map to house tokens (`--cat-N` for series,
  `--warn` for the amber, `--status-mark` for badge text); none redefines a house token.

### CREATE

- [x] Overlap variants on the existing components (list above)
- [x] New components, styled on house classes/tokens plus `--dkj-*` where needed
- [x] `sources.ts`: ETF entries (file and css both `etf_tracker/dashboard.py`)
- [x] `registry.ts`: the ETF tracker app and its views (tooltip kind decided)
- [x] Showcase sections show every new component and variant

### TEST

- [x] `scripts/lint/lint-web.ps1` green
- [ ] Showcase checked at 360px and desktop, light and dark (the owner's look; reviewed by Victor, review fixes in)

### DEPLOY: feat/etf-dashboard-overview

#### What does the change on this branch deploy to main?

##### Tier 0

The overview now covers the ETF tracker dashboard next to Mesowise, as one set: where both apps had the
same component the brand-book version leads on mechanics (44px targets, focus ring, states) and the
dashboard's denser look became a variant (joined segmented choice, inline info toggle, data card,
toned definition list, warn tag and banner, disclosure marker). New: DataTable, Alert, StatTile,
HeroValue and Delta, Tooltip, Legend, MiniCard with Meter and Badge, ReadMoreToggle, PageHeader and
FooterNote, plus the ETF tracker app and its views in the apps register (with a new Tooltips view kind).
The SVG charts follow in #20; house-style gaps found on the way are #19 and #21.

**Score:** 3

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

No subscriber-facing service changes; the apps themselves render as before.

**Score:** N/A

#### Pull Request

Add the ETF tracker dashboard to the component overview

