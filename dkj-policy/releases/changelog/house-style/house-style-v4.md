# Changelog Releases

## Version house-style-v4 (Oct 16, 2026)

### DEPLOY: feat/141-dashboard-house-classes · 20261016-123635Z

#### What does the change on this branch deploy to main?

##### Tier 0

The house style has classes for every block of the Repo dashboard (`.eyebrow`, `.lead`, `.card__head`, `.card__title`,
`.card__sub`, `.facts`, `.msg`, `.page-column`, `.page-cta`), so a repo without React builds the approved form from
`house-style.css` alone, and `house-style/patterns/repo-dashboard.html` is the reference page that does it. A `.btn` on a
link no longer draws an underline.

**Score:** 3

##### Tier 1

A repo without a build, such as a generated page or a Worker, can now show the same Repo dashboard as the React repos.

**Score:** 2

##### Tier 2

An app that takes this release gets nine new house classes (renaming any of its own that share a name) and loses the
underline on its link buttons.

**Score:** 3

#### Pull Request

House style: house classes for the Repo dashboard's intro, data-card head, facts list, message and column

[PR #145](https://github.com/DKJ-Solutions/dkj-brandbook/pull/145)

---

### DEPLOY: docs/139-repo-dashboard-pattern · 20261016-122405Z

#### What does the change on this branch deploy to main?

##### Tier 0

The house style now fixes the form of a Repo dashboard, the index of a repo's dev server: eleven parts in a fixed order
(the settings button, the intro with its eyebrow, `h1` "Repo dashboard", lead and product button, stat tiles, a loading
or warning line, one data card per in-flight list, "About this repo", footer note), each named by its brand book component and its house class, and what each repo fills in itself. See
"Page patterns" in `house-style/README.md`.

**Score:** 3

##### Tier 1

Every DKJ-Solutions repo's dev server opens on the same Repo dashboard, so what a repo is for and what is in flight read the same way in each of them.

**Score:** 2

##### Tier 2

An app that has or builds a Repo dashboard follows this form. The house stylesheet is untouched, so an app without
React cannot match the form fully from it yet: the section names which blocks still come from the brand book (#141).

**Score:** 3

#### Pull Request

House style: the Repo dashboard form as a binding pattern

[PR #142](https://github.com/DKJ-Solutions/dkj-brandbook/pull/142)

---

### DEPLOY: fix/131-gain-positive-3 · 20261015-162052Z

#### What does the change on this branch deploy to main?

##### Tier 0

A gain in a chart is now `--positive-3` instead of `--cat-1`, so `--cat-1` is only a series slot and a gain/loss chart can share a view with any series (#131).

**Score:** 3

##### Tier 1

Gains in every DKJ-Solutions dashboard turn from blue to green once an app takes the new house style, and a gain/loss chart no longer has to be kept apart from a three-series chart.

**Score:** 3

##### Tier 2

An app that draws gains takes `--positive-3` (the green of status) in its charts and legends; `--cat-1` keeps only its series meaning.

**Score:** 3

#### Pull Request

A gain uses --positive-3, so --cat-1 is only a series slot

[PR #134](https://github.com/DKJ-Solutions/dkj-brandbook/pull/134)

---

### DEPLOY: fix/156-dashboard-anchor-offset · 20261016-134049Z

#### What does the change on this branch deploy to main?

##### Tier 0

On a Repo dashboard, a card reached by an in-page link lands 5rem below the top, clear of the settings
button, in the React shell and in the stylesheet-only `.page-column` alike. On the dkj-claude-plugins
connector preview each repo card has a "Back to overview" button to the Overview table.

**Score:** 2

##### Tier 1

N/A: a developer's page on localhost; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

An app that takes this release and puts `.page-column` on its `<main>` gets `scroll-margin-top: 5rem` on
every element with an `id` in it, so an in-page link no longer lands under its settings button.

**Score:** 1

#### Pull Request

Dashboard: anchors land clear of the settings button, and a card links back to the overview

[PR #168](https://github.com/DKJ-Solutions/dkj-brandbook/pull/168)

---

### DEPLOY: feat/155-badge-list · 20261016-133650Z

#### What does the change on this branch deploy to main?

##### Tier 0

A `BadgeList` component and a house `.badge-list` class: several badged items as a real list (`<ul>`), with a
wrapped item keeping its badge on the first line. The dkj-claude-plugins connector preview lists its checks
with it.

**Score:** 2

##### Tier 1

N/A: a developer's page on localhost; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

An app that takes this release can mark up a list of status lines as `.badge-list`, and a screen reader then
announces it as a list; an app with its own class named `.badge-list` renames it.

**Score:** 1

#### Pull Request

BadgeList: a list of badged items

[PR #167](https://github.com/DKJ-Solutions/dkj-brandbook/pull/167)

---

### DEPLOY: feat/153-card-heading-badge · 20261016-133138Z

#### What does the change on this branch deploy to main?

##### Tier 0

A card heading can be led by a status badge: `CardHead badge` in React, a `.badge` before the text in a house
`.card__title`. The dkj-claude-plugins connector preview's repo cards use it.

**Score:** 2

##### Tier 1

N/A: a developer's page on localhost; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

An app that takes this release can lead a `.card__title` with a `.badge`, spaced from the title text.

**Score:** 1

#### Pull Request

CardHead: a title led by a status badge

[PR #165](https://github.com/DKJ-Solutions/dkj-brandbook/pull/165)

---

### DEPLOY: fix/release-audience-tier-2 · 20261016-144206Z

The repo now states its release audience as tier 2, so `new-branch` scaffolds an entry with tier 0
under the DEPLOY heading and one `What makes this deploy extra special` section, and the changelog tally
counts how many pending entries reach that audience. Entries already in the changelog keep their shape.

**Score:** 2

#### What makes this deploy extra special

N/A: the house stylesheet and theme script are untouched; no app that takes a release notices this.

**Score:** N/A

#### Pull Request

Release audience tier stated as 2

[PR #174](https://github.com/DKJ-Solutions/dkj-brandbook/pull/174)

---

### DEPLOY: fix/158-connected-repos-tile-group · 20261016-143600Z

#### What does the change on this branch deploy to main?

##### Tier 0

The Connected repos preview now groups the repo's own figures in a "Register" data card, its head the
group label, as decided on #158; the Repo dashboard shell is unchanged and the preview carries no "Gap:"
notes any more.

**Score:** 2

##### Tier 1

A preview inside the brand book; management sees no difference.

**Score:** N/A

##### Tier 2

No subscriber-facing service changes.

**Score:** N/A

#### Pull Request

Connected repos preview: the repo's own tiles grouped in a data card

[PR #171](https://github.com/DKJ-Solutions/dkj-brandbook/pull/171)

---

### DEPLOY: fix/148-connected-repos-card-title · 20261016-143259Z

#### What does the change on this branch deploy to main?

##### Tier 0

The Connected repos preview now shows a repo's own title and source commit as a data card's head
("Connected repos", with the source commit in its sub line), as decided on #148; the Repo dashboard
shell is unchanged and the preview's "Gap:" note for it is gone.

**Score:** 2

##### Tier 1

A preview inside the brand book; management sees no difference.

**Score:** N/A

##### Tier 2

No subscriber-facing service changes.

**Score:** N/A

#### Pull Request

Connected repos preview: title and source commit as a data card's head

[PR #170](https://github.com/DKJ-Solutions/dkj-brandbook/pull/170)

---

### DEPLOY: fix/163-table-tone-comment-newline · 20261016-142301Z

#### What does the change on this branch deploy to main?

##### Tier 0

The JSDoc on `DataRow.tone` in `Table.tsx` is now a real two-line comment, so hover docs no longer show a literal `\n   *`. Comment only, no runtime change.

**Score:** 1

##### Tier 1

A source comment; management sees no difference.

**Score:** N/A

##### Tier 2

Nothing a user of the brand book can see changes.

**Score:** N/A

#### Pull Request

Split the DataRow.tone doc comment into two real lines

[PR #169](https://github.com/DKJ-Solutions/dkj-brandbook/pull/169)

---

### DEPLOY: feat/154-definitionlist-node-values · 20261016-133424Z

#### What does the change on this branch deploy to main?

##### Tier 0

A `DefinitionList` value can be a link (any React node), shown in the showcase's Facts demo and on the dkj-claude-plugins
connector preview's register-file rows.

**Score:** 2

##### Tier 1

N/A: a developer's page on localhost; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet and theme script are untouched.

**Score:** N/A

#### Pull Request

DefinitionList: a value can be a link

[PR #166](https://github.com/DKJ-Solutions/dkj-brandbook/pull/166)

---

### DEPLOY: feat/152-datatable-column-priority · 20261016-132939Z

#### What does the change on this branch deploy to main?

##### Tier 0

A `DataTable` column takes `priority: 'low'`, and such a column drops out while the table is narrower than 760px, so a
wide table fits a phone without scrolling sideways. The showcase's Quantity column and four of the connector
dashboard preview's eight Overview columns use it.

**Score:** 2

##### Tier 1

N/A: a component of the brand book's React layer; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet and theme script are untouched.

**Score:** N/A

#### Pull Request

DataTable takes a column priority for a narrow screen

[PR #164](https://github.com/DKJ-Solutions/dkj-brandbook/pull/164)

---

### DEPLOY: feat/151-datatable-warn-tone · 20261016-132625Z

#### What does the change on this branch deploy to main?

##### Tier 0

A `DataTable` cell takes the tone `warn` (the warning colour), and a row takes a `tone` of its own (`negative`,
`positive` or `warn`) that tints the whole row with the matching status background. A DefinitionList value takes warn too. The showcase has a demo of each,
and the connector dashboard preview tints its failing and warning repos.

**Score:** 2

##### Tier 1

N/A: a component of the brand book's React layer; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet and theme script are untouched.

**Score:** N/A

#### Pull Request

DataTable takes a warn tone for a row or cell

[PR #162](https://github.com/DKJ-Solutions/dkj-brandbook/pull/162)

---

### DEPLOY: feat/150-datatable-column-align · 20261016-132322Z

#### What does the change on this branch deploy to main?

##### Tier 0

A `DataTable` column takes `align: 'start'` (text on the left) or `align: 'end'` (right-aligned); left out, the first
column stays left and the rest right. The showcase's Type column and the connector dashboard preview's text columns
(Status, Visibility, Installed, Checkout) now read from the left.

**Score:** 2

##### Tier 1

N/A: a component of the brand book's React layer; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet and theme script are untouched.

**Score:** N/A

#### Pull Request

DataTable takes a per-column alignment

[PR #161](https://github.com/DKJ-Solutions/dkj-brandbook/pull/161)

---

### DEPLOY: feat/149-stattile-warn-tone · 20261016-132120Z

#### What does the change on this branch deploy to main?

##### Tier 0

`StatTile` takes `tone="warn"`, which colours its figure in the warning colour (`--warning-5`), for a count of notes
or warnings. The showcase shows one, and the connector dashboard preview's Notes tile uses it.

**Score:** 2

##### Tier 1

N/A: a component of the brand book's React layer; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet and theme script are untouched.

**Score:** N/A

#### Pull Request

StatTile takes a warn tone

[PR #160](https://github.com/DKJ-Solutions/dkj-brandbook/pull/160)

---

### DEPLOY: fix/146-joined-choice-only-child · 20261016-131807Z

#### What does the change on this branch deploy to main?

##### Tier 0

A joined `SegmentedChoice` with a single option now has rounded corners on every side of its filled button,
instead of square left corners inside the rounded capsule. The showcase shows that case.

**Score:** 1

##### Tier 1

N/A: a component's corner radius; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet and theme script are untouched.

**Score:** N/A

#### Pull Request

SegmentedChoice joined: round all corners of a lone option

[PR #159](https://github.com/DKJ-Solutions/dkj-brandbook/pull/159)

---

### DEPLOY: fix/144-message-live-region · 20261016-130041Z

#### What does the change on this branch deploy to main?

##### Tier 0

`Message` takes a `live` prop (`"status"` or `"alert"`) that gives it a live-region role, and the Repo dashboard
uses it, so a screen reader announces the loading line and the "could not be read" warning when they appear. The
reference page `house-style/patterns/repo-dashboard.html` and row 8 of the Repo dashboard table in
`house-style/README.md` name the same roles for the stylesheet-only form.

**Score:** 2

##### Tier 1

N/A: an accessibility attribute on a developer's page; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet and theme script are untouched.

**Score:** N/A

#### Pull Request

Message has no live-region role

[PR #157](https://github.com/DKJ-Solutions/dkj-brandbook/pull/157)

---

### DEPLOY: feat/repo-dashboard-previews · 20261016-125542Z

#### What does the change on this branch deploy to main?

##### Tier 0

The Repo dashboard has a button to `/dashboards`, a menu of previews of other repos' Repo dashboards in this repo's dashboard
shape, each on `/dashboards/<repo>`, starting with dkj-claude-plugins' connector dashboard. A new `Breadcrumbs` component links the pages, and a "DKJ-Solutions repos" card on the Repo dashboard lists every repo that follows the brand book with links to its previews. The data is placeholder data, and every place where the content does
not fit the shape is marked on the page as a gap.

**Score:** 3

##### Tier 1

N/A: a developer's page on localhost; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet and theme script are untouched.

**Score:** N/A

#### Pull Request

Preview other repos' Repo dashboards in the brand book's dashboard shape

[PR #147](https://github.com/DKJ-Solutions/dkj-brandbook/pull/147)

---

### DEPLOY: fix/142-tier1-score · 20261016-122601Z

#### What does the change on this branch deploy to main?

##### Tier 0

The `docs/139-repo-dashboard-pattern` changelog entry now scores tier 1, so the ladder is cumulative again and the release cut accepts it.

**Score:** 1

##### Tier 1

N/A: a correction to the changelog's own bookkeeping.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet and theme script are untouched.

**Score:** N/A

#### Pull Request

Score tier 1 of the docs/139 changelog entry

[PR #143](https://github.com/DKJ-Solutions/dkj-brandbook/pull/143)

---

### DEPLOY: feat/137-repo-dashboard-index · 20261016-120043Z

#### What does the change on this branch deploy to main?

##### Tier 0

The dev server's index is now the Repo dashboard: what this repo is for, the open pull requests, issues and branches, and a
button to the brand book, which moved to `/showcase` (#137). Old `/#section` links still land on their section.

**Score:** 3

##### Tier 1

N/A: a developer's page on localhost; nothing a commissioner sees changes.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet and theme script are untouched.

**Score:** N/A

#### Pull Request

Repo dashboard on the index, showcase on its own route

[PR #140](https://github.com/DKJ-Solutions/dkj-brandbook/pull/140)

---

### DEPLOY: fix/135-tier1-score · 20261015-162316Z

#### What does the change on this branch deploy to main?

##### Tier 0

The `fix/131-gain-positive-3` changelog entry now scores tier 1, so the ladder is cumulative again and the release cut accepts it (#135).

**Score:** 1

##### Tier 1

N/A: a correction to the changelog's own bookkeeping.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet and theme script are untouched.

**Score:** N/A

#### Pull Request

Score tier 1 of the fix/131 changelog entry

[PR #136](https://github.com/DKJ-Solutions/dkj-brandbook/pull/136)

---

### DEPLOY: feat/130-dev-preview-seam · 20261015-155633Z

#### What does the change on this branch deploy to main?

##### Tier 0

The showcase is started at session start by the `dkj-solutions` plugin's dev-preview hook instead of this repo's own copy of it, and its link opens in VS Code's Simple Browser (#130).

**Score:** 2

##### Tier 1

N/A: how the brand book's own showcase is started on a developer's machine.

**Score:** N/A

##### Tier 2

N/A: nothing an app that takes the house style receives.

**Score:** N/A

#### Pull Request

Replace the own dev-server hook with the plugin's dev-preview seam

[PR #133](https://github.com/DKJ-Solutions/dkj-brandbook/pull/133)

---

### DEPLOY: docs/129-readme-tag-pin · 20261015-155337Z

#### What does the change on this branch deploy to main?

##### Tier 0

The house-style README no longer claims the skill still fetches `main`; the skill has been pinned to a tagged release since the first tag (#129).

**Score:** 1

##### Tier 1

N/A: a stale sentence in the brand book's own documentation.

**Score:** N/A

##### Tier 2

N/A: the house stylesheet and theme script are untouched.

**Score:** N/A

#### Pull Request

house-style/README.md says the skill still fetches main, but it is pinned to a tag

[PR #132](https://github.com/DKJ-Solutions/dkj-brandbook/pull/132)
