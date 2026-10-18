# Changelog

## [Unreleased]

**2 / 2 minor entries** <!-- pending-tally -->

### DEPLOY: fix/205-pattern-width-texts · 20261018-184757Z

The repo-dashboard pattern's settings panel now shows its width group in English.

**Score:** 1

#### What makes this deploy extra special

A repo that copies the repo-dashboard pattern's `DKJTheme.settings` call now gets an English width group
(Width: Fluid, Phone, Full) instead of the Dutch defaults, as the showcase shows it. A repo that already
copied the old call adds those four texts itself.

**Score:** 2

#### Pull Request

repo-dashboard pattern passes the width texts

[PR #209](https://github.com/DKJ-Solutions/dkj-brandbook/pull/209)

---

### DEPLOY: fix/207-grid-card-margin · 20261018-184655Z

The house stylesheet's `.grid-2` now zeroes the same top margins `.page-column` already did, and the README
says so next to it.

**Score:** 1

#### What makes this deploy extra special

A `.card`, `.tiles` or `.notice` directly inside a `.grid-2` no longer adds its own top margin to the grid's
gap: rows of cards sit one `--spacing-4` apart instead of two, and the first row starts at the grid's top. A
repo that zeroed it in its own page layer can drop that rule.

**Score:** 2

#### Pull Request

.card's margin-top doubles the gap inside .grid-2

[PR #208](https://github.com/DKJ-Solutions/dkj-brandbook/pull/208)

---

