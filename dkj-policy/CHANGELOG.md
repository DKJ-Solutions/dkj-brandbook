# Changelog

## [Unreleased]

**1 / 1 minor entry** <!-- pending-tally -->

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

