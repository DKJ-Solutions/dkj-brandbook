# Changelog

## [Unreleased]

**5 minor entries** <!-- pending-tally -->

### DEPLOY: feat/enable-dkj-solutions · 20261013-084922Z

#### What does the change on this branch deploy to main?

##### Tier 0

This repo enables the `dkj-solutions` extension. Every session here now reads the DKJ-Solutions house style rules: visual work starts from the stylesheet in [DKJ-Solutions/dkj-brandbook](https://github.com/DKJ-Solutions/dkj-brandbook), and a change to the house style itself is filed as an issue there instead of being made in this repo. Nothing renders differently yet.

**Score:** 2

##### Tier 1

This app now follows the same look as every other DKJ-Solutions app, and a styling fix to the shared house style lands once, in the brand book, instead of drifting into a local variant.

**Score:** 2

##### Tier 2

Not relevant to a user of the app: nothing they see changes.

**Score:** N/A

#### Pull Request

Enable dkj-solutions: the house style comes from dkj-brandbook

[PR #11](https://github.com/DKJ-Solutions/dkj-brandbook/pull/11)

---

### DEPLOY: docs/3-house-style-tags · 20261013-082429Z

#### What does the change on this branch deploy to main?

##### Tier 0

The house style is now released as a `house-style-v<N>` tag, and DKJ-Solutions apps are to fetch that
tag instead of `main` once the plugin's `house-style` skill is repointed, so a direct push to `main` no
longer reaches every app's next copy. The README and
Gwen's lens say how a house-style change gets released: a tag here on the owner's request, then the plugin
skill repointed to it.

**Score:** 3

##### Tier 1

Not relevant to management: a release step for one shared stylesheet.

**Score:** N/A

##### Tier 2

Not relevant to a subscriber.

**Score:** N/A

#### Pull Request

Pin the house style to a release tag

[PR #6](https://github.com/DKJ-Solutions/dkj-brandbook/pull/6)

---

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

### DEPLOY: docs/gwen-house-style-lens · 20261013-075456Z

#### What does the change on this branch deploy to main?

##### Tier 0

Gwen's lens here carries the house-style rules: the values are the owner's, a house-style change is a
visible result, the scales come from Figma, the README's tables move with the stylesheet, and a collected
component builds on the house tokens.

**Score:** 2

##### Tier 1

Not relevant to management: a working rule for one specialist.

**Score:** N/A

##### Tier 2

Not relevant to a subscriber.

**Score:** N/A

#### Pull Request

Gwen's lens: the house style rules

[PR #2](https://github.com/DKJ-Solutions/dkj-brandbook/pull/2)

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

