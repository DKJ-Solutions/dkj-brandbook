/**
 * The two pages of the dev server. The index is the Repo dashboard, and the product (the brand book showcase) has a
 * route of its own: the index of a repo's localhost never renders the product (DKJ-Solutions/dkj-claude-plugins#3064, #137).
 * Assumes an absolute base (vite.config.ts sets none, so it is "/").
 */
export const DASHBOARD_PATH = import.meta.env.BASE_URL
export const SHOWCASE_PATH = `${import.meta.env.BASE_URL}showcase`
/** The preview of other repos' Repo dashboards, to check that the dashboard shape fits what they will put in theirs. */
export const DASHBOARDS_PATH = `${import.meta.env.BASE_URL}dashboards`

/** A path without its trailing slash and index.html, so /x, /x/ and /x/index.html compare equal. */
const normalise = (path: string) => path.replace(/\/index\.html$/, '').replace(/\/$/, '')

export function isShowcasePath(pathname: string) {
  return normalise(pathname) === normalise(SHOWCASE_PATH)
}

export function isDashboardsPath(pathname: string) {
  return normalise(pathname) === normalise(DASHBOARDS_PATH)
}

export function isDashboardPath(pathname: string) {
  return normalise(pathname) === normalise(DASHBOARD_PATH)
}
