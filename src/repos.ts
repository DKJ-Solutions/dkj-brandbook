import { SHOWCASE_PATH } from './routes'

/**
 * The DKJ-Solutions repos that follow the brand book: the repos in the DKJ-Solutions GitHub organisation as of
 * October 13, 2026, except this brand book itself. Each has a recreated app preview in the showcase (#preview/<repo>).
 */
export const REPOS = [
  'dkj-claude-plugins',
  'dkj-etf-tracker',
  'dkj-maplestory-classic-mesowise',
  'dkj-music-library',
  'dkj-recipes',
  'dkj-thumbnail-generator',
  'dkj-lifehub',
] as const

export const ORG = 'DKJ-Solutions'

/** A repo's recreated app preview in the showcase. */
export const appPreviewPath = (repo: string) => `${SHOWCASE_PATH}#preview/${repo}`
