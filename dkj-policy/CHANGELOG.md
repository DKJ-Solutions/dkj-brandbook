# Changelog

## [Unreleased]

**1 / 6 minor entries** <!-- pending-tally -->

### DEPLOY: feat/dashboard-previews-all-repos · 20261017-124127Z

Every DKJ-Solutions repo now has a dashboard preview on `/dashboards/<repo>`, not only dkj-claude-plugins. The six new
ones (etf-tracker, mesowise, music-library, recipes, thumbnail-generator, lifehub) each propose what that repo's own
Repo dashboard would show, in the one fixed form: the in-flight tiles and cards, one or two cards of the repo's own
(a last run, game data, syncs, the recipe collection, rounds, content checks), "About this repo" and a footer note
naming the data source. The data is invented placeholder data; three of the repos are private. The form with placeholder
data is one component, `PlaceholderDashboard`, so a further preview is one entry.

**Score:** 3

#### What makes this deploy extra special

N/A: the previews live on this repo's own dev server and change nothing a repo that takes the house style receives.

**Score:** N/A

#### Pull Request

Dashboard previews for every DKJ-Solutions repo

[PR #188](https://github.com/DKJ-Solutions/dkj-brandbook/pull/188)

---

### DEPLOY: fix/184-release-consumer-bumps · 20261017-115949Z

Every minor and major release now gets a hand-written audience note under
`dkj-policy/releases/audience/<X>.x/`, next to the changelog record and the GitHub body. Until now
`Get-ReleaseConsumerBumps` was not defined, so `cut-release` fell back to writing no audience note for
any bump. A patch is still announced by the generated GitHub body alone.

**Score:** 2

#### What makes this deploy extra special

From the next minor release on, the repos that take a house-style release get a note written for them
instead of only the per-PR record.

**Score:** 3

#### Pull Request

Write the audience release note for minor and major releases

[PR #185](https://github.com/DKJ-Solutions/dkj-brandbook/pull/185)

---

### DEPLOY: docs/fold-house-style-notes-into-v0-1-0 · 20261017-115112Z

The `house-style-v1` to `house-style-v4` release notes are no longer four separate files: they are
sections of the [`0.1.0`](releases/changelog/0.x/0.1.0.md) notes, newest first, below that release's own
section. The release history still lists the four tags and points to the `0.1.0` notes.

**Score:** 1

#### What makes this deploy extra special

N/A -- no released file changes.

**Score:** N/A

#### Pull Request

Fold the four house-style release notes into the v0.1.0 notes

[PR #183](https://github.com/DKJ-Solutions/dkj-brandbook/pull/183)

---

### DEPLOY: docs/177-retire-house-style-v1-v3-tags · 20261017-103519Z

The tags `house-style-v1` to `house-style-v3` are deleted. Their release notes stay in the tree and
`history.md` still lists them. The docs now name `house-style-v4` as the tag the `house-style` skill
pins until it repins to `v0.1.0`; that tag is deleted once that happens (#177).

**Score:** 1

#### What makes this deploy extra special

N/A -- no release the plugin pins today goes away.

**Score:** N/A

#### Pull Request

Say that house-style-v1 to v3 are deleted and v4 follows

[PR #182](https://github.com/DKJ-Solutions/dkj-brandbook/pull/182)

---

### DEPLOY: fix/138-drop-dev-preview-name · 20261017-091905Z

`Get-DevPreview` no longer states a `Name`: since dkj-claude-plugins v5.22.0 the dev-preview hook labels
every repo's page `Repo dashboard` itself and ignores the field. The session-start line reads the same as
before.

**Score:** 1

#### What makes this deploy extra special

N/A -- nothing a user of the brand book sees changes.

**Score:** N/A

#### Pull Request

Drop the Name the dev-preview hook no longer reads

[PR #180](https://github.com/DKJ-Solutions/dkj-brandbook/pull/180)

---

### DEPLOY: fix/178-readme-first-release-v0-1-0 · 20261017-091602Z

The house-style README now says the first `vX.Y.Z` release is `v0.1.0`, which brings together
`house-style-v1` to `house-style-v4`, instead of promising a first release of at least `5.0.0` (#178).

**Score:** 1

#### What makes this deploy extra special

N/A

**Score:** N/A

#### Pull Request

house-style/README.md: the first vX.Y.Z release is v0.1.0

[PR #179](https://github.com/DKJ-Solutions/dkj-brandbook/pull/179)

---

