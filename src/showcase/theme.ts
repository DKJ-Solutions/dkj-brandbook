import { useEffect, useState } from 'react'
import { DEFAULT_THEMES, defaultThemeOf } from '../repos'

type Width = 'fluid' | 'phone' | 'full'

/** Preview width, remembered on this device; full until one is picked. The colour theme itself is owned by the house script (window.DKJTheme). */
export function useWidth() {
  const [width, setWidth] = useState<Width>(() => {
    try {
      return (localStorage.getItem('dkj-width') as Width | null) ?? 'full'
    } catch {
      return 'full'
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem('dkj-width', width)
    } catch {
      /* storage unavailable: the choice simply is not remembered */
    }
  }, [width])
  return { width, setWidth }
}

/** The active house theme id (e.g. "blue"), kept in sync with data-theme so token readouts can re-read on a change. */
export function useThemeId() {
  const [id, setId] = useState(() => document.documentElement.dataset.theme ?? '')
  useEffect(() => {
    const obs = new MutationObserver(() => setId(document.documentElement.dataset.theme ?? ''))
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => obs.disconnect()
  }, [])
  return id
}

type Pair = { light: string | null; dark: string | null }

/** Sets (or, for null, removes) the page's default theme attributes; a viewer's own stored pick always wins. */
function applyDefaultPair(pair: Pair) {
  const root = document.documentElement
  for (const mode of ['light', 'dark'] as const) {
    const id = pair[mode]
    if (id) root.setAttribute(`data-theme-${mode}`, id)
    else root.removeAttribute(`data-theme-${mode}`)
  }
  // The storage key as house-theme.js derives it; a stored value counts as a pick only if it is a known theme.
  let picked = false
  try {
    const stored = localStorage.getItem('dkj-theme' + (root.dataset.themeKey ? ':' + root.dataset.themeKey : ''))
    picked = window.DKJTheme.themes.some((t) => t.id === stored)
  } catch {
    // storage unavailable: nothing is stored, so the default applies
  }
  // With no pick, reset only makes the house script resolve the theme again from the attributes.
  if (!picked) window.DKJTheme.reset()
}

/**
 * While the calling page is open, the repo's default theme pair is the page default (an unknown repo gets the brand
 * book's own pair); leaving restores what <html> declared before (index.html). A viewer's own pick is never overridden.
 */
export function useRepoDefaultTheme(repo: string) {
  const pair = defaultThemeOf(repo) ?? DEFAULT_THEMES['dkj-brandbook']
  useEffect(() => {
    const root = document.documentElement
    const before = { light: root.getAttribute('data-theme-light'), dark: root.getAttribute('data-theme-dark') }
    applyDefaultPair(pair)
    return () => applyDefaultPair(before)
  }, [pair])
}
