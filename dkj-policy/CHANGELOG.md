# Changelog

## [Unreleased]

**2 / 2 minor entries** <!-- pending-tally -->

### DEPLOY: feat/repo-default-themes · 20261017-212325Z

Every DKJ-Solutions repo has one default theme of its own, and all eight differ, so the apps are told apart
before anyone picks a theme. `house-theme.js` reads it from `<html data-theme-default="<id>">`, after the
user's own choice and before the light/dark pair, which keeps working for an app that has not moved yet; the
theme fixes the app's mode. `src/repos.ts` carries the eight (`DEFAULT_THEMES`, typed so a missing repo fails
`tsc`) and `house-style/README.md` lists them. The Repo dashboard shows each repo's default, and a repo's app
preview and dashboard preview open in it unless the viewer has picked a theme.

**Score:** 3

#### What makes this deploy extra special

Every DKJ-Solutions app gets a default theme of its own, and an app declares it with one attribute on its
`<html>`.

**Score:** 3

#### Pull Request

every DKJ-Solutions repo gets a default theme of its own

[PR #198](https://github.com/DKJ-Solutions/dkj-brandbook/pull/198)

---

### DEPLOY: feat/width-full · 20261017-210257Z

The preview settings get a third width, `full`, next to `fluid` and `phone`: the content takes 100% of the page
column, so a repo preview that keeps its own app column in `fluid` now stretches edge to edge. The Repo dashboard
and the dashboard previews carry the Width toggle as well, which they did not before: there `fluid` is the house
column, `phone` a 360px column and `full` the whole width. `full` is the default until a reader picks another width.

**Score:** 2

#### What makes this deploy extra special

A reader of the brand book can now judge a component or a recreated app at the full width of their screen.

**Score:** 2

#### Pull Request

A third preview width, full, that takes the whole page width

[PR #197](https://github.com/DKJ-Solutions/dkj-brandbook/pull/197)

---

