# Changelog

## [Unreleased]

**1 / 1 minor entry** <!-- pending-tally -->

### DEPLOY: feat/203-width-setting-in-house-theme · 20261018-121327Z

The brand book's showcase and Repo hub now use the shipped width setting instead of their own toggle; the stored
choice (`dkj-width`) carries over.

**Score:** 2

#### What makes this deploy extra special

Every app that draws `DKJTheme.settings(el)` now offers a page width in its settings panel -- fluid (the house
column), phone (360px) or full (the whole width) -- remembered per device and set as `<html data-width>` before
the page paints; `main`, `.container` and the breadcrumb bar's trail follow it. An app declares its own default
with `<html data-width-default="full">`, or leaves the group out with `widths: false`.

**Score:** 3

#### Pull Request

Page width setting (fluid, phone, full) in the house theme settings panel

[PR #204](https://github.com/DKJ-Solutions/dkj-brandbook/pull/204)

---

