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

/** The twelve house theme ids (house-style/house-theme.js), by mode. */
export type LightThemeId = 'magenta' | 'purple' | 'blue' | 'teal' | 'ochre' | 'rust'
export type DarkThemeId = 'pink' | 'lilac' | 'sky' | 'cyan' | 'yellow' | 'orange'
export type ThemePair = { light: LightThemeId; dark: DarkThemeId }

/**
 * Each DKJ-Solutions repo's default theme pair, the single source in code (documented in house-style/README.md, "Which
 * theme applies"). The brand book's own pair is the house default. A missing repo fails tsc.
 */
export const DEFAULT_THEMES: Record<(typeof REPOS)[number] | 'dkj-brandbook', ThemePair> = {
  'dkj-brandbook': { light: 'blue', dark: 'cyan' },
  'dkj-etf-tracker': { light: 'blue', dark: 'sky' },
  'dkj-lifehub': { light: 'teal', dark: 'cyan' },
  'dkj-claude-plugins': { light: 'purple', dark: 'lilac' },
  'dkj-music-library': { light: 'magenta', dark: 'pink' },
  'dkj-recipes': { light: 'rust', dark: 'orange' },
  'dkj-maplestory-classic-mesowise': { light: 'ochre', dark: 'yellow' },
  'dkj-thumbnail-generator': { light: 'purple', dark: 'orange' },
}

/** A repo's default pair, or undefined for a name that is not a known repo. */
export const defaultThemeOf = (repo: string): ThemePair | undefined => (DEFAULT_THEMES as Record<string, ThemePair>)[repo]

/** A theme's Dutch display name from the house script ("Paars"), falling back to its id. */
export const themeName = (id: string) => window.DKJTheme.themes.find((t) => t.id === id)?.name ?? id

export const ORG = 'DKJ-Solutions'

/** A repo's recreated app preview in the showcase. */
export const appPreviewPath = (repo: string) => `${SHOWCASE_PATH}#preview/${repo}`
