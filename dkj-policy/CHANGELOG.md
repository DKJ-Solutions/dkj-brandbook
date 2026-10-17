# Changelog

## [Unreleased]

**0 / 4 patch entries** <!-- pending-tally -->

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

