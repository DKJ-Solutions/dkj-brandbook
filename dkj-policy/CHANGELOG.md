# Changelog

## [Unreleased]

**2 minor entries** <!-- pending-tally -->

### DEPLOY: feat/mesowise-components · 20261013-080032Z

#### What does the change on this branch deploy to main?

The brand book gets its first content. The design tokens are split into a shared base layer and a
colour-only `mesowise` theme, and both are usable from React and from a Claude Artifact. Around them
sit 35 presentational React components, mirrored from the Mesowise app's UI without its content, and
a showcase that shows every variant and state with a theme and mode switcher. Every component records
its source repo and its source component and CSS in `src/components/sources.ts`.

**Score:** 4

##### Tier 1

There is now one place where the owners can see the DKJ-Solutions look and check whether apps stay
consistent with it.

**Score:** 3

##### Tier 2

The brand book has no subscribers. The end users of the apps see nothing until an app adopts these
tokens.

**Score:** N/A

#### Pull Request

Mesowise components and tokens mirrored into the brand book

[PR #5](https://github.com/DKJ-Solutions/dkj-brandbook/pull/5)

---

### DEPLOY: feat/house-style · 20261013-075236Z

#### What does the change on this branch deploy to main?

##### Tier 0

The DKJ-Solutions house style now lives here: `house-style/house-style.css`, `house-style/house-theme.js`
and the rules in [`house-style/README.md`](../house-style/README.md), moved unchanged from the
`dkj-solutions` plugin in dkj-claude-plugins. This repo is now its single copy.

**Score:** 3

##### Tier 1

Every DKJ-Solutions app takes its look from one place that also holds the component overview.

**Score:** 3

##### Tier 2

Not relevant to a subscriber: no app's look changes.

**Score:** N/A

#### Pull Request

The house style moves here from dkj-claude-plugins

[PR #1](https://github.com/DKJ-Solutions/dkj-brandbook/pull/1)

---

