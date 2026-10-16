# Changelog

## [Unreleased]

**0 / 2 patch entries** <!-- pending-tally -->

### DEPLOY: fix/172-backfill-house-style-releases · 20261016-152106Z

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

[PR #176](https://github.com/DKJ-Solutions/dkj-brandbook/pull/176)

---

### DEPLOY: fix/173-changelog-tier0-heading · 20261016-144714Z

The `feat/mesowise-components` changelog entry gets the `##### Tier 0` heading every other entry of its shape carries, so its tier-0 text and score are read as tier 0.

**Score:** 1

#### What makes this deploy extra special

Not relevant to a subscriber: only the changelog's internal structure changes.

**Score:** N/A

#### Pull Request

Add the missing Tier 0 heading to the feat/mesowise-components changelog entry

[PR #175](https://github.com/DKJ-Solutions/dkj-brandbook/pull/175)

---

