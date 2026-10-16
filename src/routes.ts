/**
 * The two pages of the dev server. The index is the Repo dashboard, and the product (the brand book showcase) has a
 * route of its own: the index of a repo's localhost never renders the product (DKJ-Solutions/dkj-claude-plugins#3064, #137).
 */
export const DASHBOARD_PATH = import.meta.env.BASE_URL
export const SHOWCASE_PATH = `${import.meta.env.BASE_URL}showcase`

/** Whether the current URL is the showcase route, with or without a trailing slash. */
export function isShowcasePath(pathname: string) {
  return pathname.replace(/\/$/, '') === SHOWCASE_PATH
}
